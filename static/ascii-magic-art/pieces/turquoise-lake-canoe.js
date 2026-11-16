/* turquoise-lake-canoe: a red canoe gliding across an aqua lake ringed by ten jagged peaks and pines, morning, hand-built.
 * Gruvbox recolour: the scene is painted entirely in the gruvbox dark palette
 * (bg #1d2021, fg #ebdbb2, red #cc241d, yellow #fabd2f, blues #076678/#458588/
 * #83a598, aquas #689d6a/#427b58, greys #a89984/#7c6f64) to match the site.
 * Painted once: the sky, the wall of jagged grey peaks with snow in their gullies, the scree slopes,
 * the dark pine shores and the aqua lake mirroring the peaks. Each frame paddles the canoe
 * across with its ripples, drifts morning mist over the water and flies birds. */
import { fbm, noise2, clamp, lerp } from "../lib/kit.js";
import { W, H, Canvas, hex, mix, birds, mist, pine, across, balance, fitPalette, paletteMeta, encoder, DOTS } from "../lib/scene.js";

const SKY = 1, PEAK = 2, SHORE = 3, LAKE = 4;
const WL = 72;

const base = new Canvas();
base.sky([[0, "#076678"], [0.7, "#458588"], [1, "#83a598"]], SKY, 0, 40);
// the wall of peaks: jagged, steep, grey with snow in the gullies, lit from the left
for (let x = 0; x < W; x++) {
  // ten peaks of different heights and widths, not a regular saw
  const peaks = [[8, 30], [26, 20], [46, 28], [66, 16], [88, 24], [106, 12], [126, 22], [146, 18], [166, 26], [186, 20]];
  let top = 64;
  for (const [px, ph] of peaks) top = Math.min(top, ph + Math.abs(x - px) * (1.3 + (px % 3) * 0.25));
  top += fbm(x / 4, 2, 3, 4) * 5;
  for (let y = Math.floor(top); y < 64; y++) {
    const gully = Math.sin(x * 0.6 + y * 0.3 + noise2(x / 4, y / 6, 3) * 3) > 0.75, d = (y - top) / 46;
    base.put(x, y, gully && d < 0.6 ? hex("#fbf1c7") : mix(hex("#a89984"), hex("#7c6f64"), clamp(d * 0.8 + (Math.sin(x * 0.35) > 0 ? 0.15 : 0))), PEAK);
  }
}
// scree fans and the pine shore
for (let x = 0; x < W; x++) for (let y = 56; y < WL; y++) if (base.maskAt(x, y) === PEAK || y > 62) base.put(x, y, mix(hex("#a89984"), hex("#7c6f64"), (y - 56) / 16), SHORE);
for (let i = 0; i < 40; i++) { const x = (i * 23) % W + (i % 3), h = 10 + (i % 5) * 3; pine(base, x, WL, h, i % 2 ? "#34544a" : "#427b58", SHORE); }
// the lake: vivid turquoise, the peaks mirrored, deeper colour toward us
const snap = new Canvas().copy(base);
base.rect(0, WL, W, H, (x, y) => mix(mix(snap.get(x, 2 * WL - y - 1), hex("#689d6a"), 0.55), hex("#427b58"), clamp((y - WL) / 40)), LAKE);

balance(base, 0.5);
const PAL = fitPalette(base, { n: 50, extras: ["#cc241d", "#fbf1c7", "#1d2021", "#ebdbb2", "#fabd2f"] });

export const meta = {
  slug: "turquoise-lake-canoe",
  name: "Turquoise Lake Canoe",
  category: "landscapes",
  note: "A red canoe glides across an aqua lake ringed by jagged peaks and dark pines, morning mist lifting off the water around it, painted in the gruvbox dark palette.",
  tags: ["moraine-lake", "canada", "rockies", "lake", "canoe", "mountains", "gruvbox", "halftone"],
  cols: W, rows: H, fps: 15, cell: "square", look: "dots", dots: DOTS,
  palette: paletteMeta(PAL),
};

export default function create() {
  const f = new Canvas(), enc = encoder(PAL);
  return (t) => {
    f.copy(base);
    mist(f, t, { y0: WL - 4, y1: WL + 14, c: "#ebdbb2", a: 0.45, speed: 0.05, scale: 24, cut: 0.48 });
    // the canoe: long red hull, two paddlers, paddles dipping alternately, a V of ripples
    const x = across(t, 4, 0.2), y = 94, st = Math.sin(t * 2.2);
    for (let k = 2; k < 22; k++) { const a = (1 - k / 22) * 0.45; f.add(x - k, y + 1 + k * 0.2, "#ebdbb2", a, LAKE); f.add(x - k, y - k * 0.12, "#ebdbb2", a * 0.6, LAKE); }
    for (let i = -9; i <= 9; i++) { const lift = Math.pow(Math.abs(i) / 9, 3) * 2; f.put(x + i, y - lift, "#cc241d"); f.put(x + i, y + 1 - lift * 0.5, "#cc241d"); }
    for (const [px, ph, c] of [[-4, 0, "#fabd2f"], [4, Math.PI, "#1d2021"]]) {
      f.rect(x + px, y - 5, x + px + 1, y - 1, c); f.put(x + px, y - 6, "#ebdbb2");
      const s = Math.sin(t * 2.2 + ph);
      f.line(x + px, y - 3, x + px + (s > 0 ? 3 : -3), y + 2, "#1d2021", 1);
    }
    birds(f, t, { n: 4, y: 12, period: 17, c: "#1d2021", only: SKY });
    return enc(f);
  };
}
