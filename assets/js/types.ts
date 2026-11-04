// Shared types for the scene modules.
export type Frame = (t: number, opts?: { color?: Uint8Array }) => string;

export interface Meta {
  name: string;
  category: string;
  note?: string;
  cols: number;
  rows: number;
  cell?: number;
  fps: number;
  ground?: string;
  palette: string[];
}
