/* Fits the ascii-magic-art hero to the content column.
 *
 * The <ascii-art> element sizes itself from the --ascii-size CSS variable (it
 * writes that variable inline from its size attribute). We override it from
 * styles.html with --hero-ascii-size, which this script keeps in sync with the
 * column width. Updating the variable rather than the attribute matters: the
 * player re-measures its font on the next frame, so resizing never restarts
 * the animation.
 */

const COLS = 192; // turquoise-lake-canoe columns (meta.cols, i.e. W in lib/scene.js)
const CELL_W = 0.602; // runtime/canvas.js CELL_W: cell width / font size
const MAX_PX = 6; // keep the art from growing past the column's own measure

function mountHero(): void {
  const hero = document.getElementById("lake-hero");
  if (!hero) return;

  const fit = () => {
    const width = hero.clientWidth;
    if (!width) return;
    const size = Math.min(MAX_PX, width / (COLS * CELL_W));
    hero.style.setProperty("--hero-ascii-size", `${size.toFixed(2)}px`);
  };

  fit();

  if (typeof ResizeObserver !== "undefined") {
    let frame = 0;
    new ResizeObserver(() => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(fit);
    }).observe(hero);
  } else {
    addEventListener("resize", fit);
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", mountHero, { once: true });
} else {
  mountHero();
}
