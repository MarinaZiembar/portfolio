import type { CSSProperties } from "react";

/**
 * Miniatura generativa: una composición geométrica única por proyecto
 * (determinada por `seed`). Al hacer hover sobre la card, las piezas giran.
 * Reemplazala por una <Image> cuando tengas capturas reales.
 */

function mulberry32(a: number) {
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const RED = "var(--red)";
const INK = "var(--ink)";

type Piece = { kind: number; x: number; y: number; s: number; color: string; rot: number; spin: number };

export default function ProjectArt({ seed, title }: { seed: number; title: string }) {
  const rnd = mulberry32(seed * 9973);
  const cols = 4;
  const rows = 3;
  const cell = 100;
  const pieces: Piece[] = [];
  rnd(); // mantiene la secuencia del seed
  const bg = "var(--paper-2)";

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const roll = rnd();
      if (roll < 0.22) continue; // celdas vacías para respirar
      const colorRoll = rnd();
      pieces.push({
        kind: Math.floor(rnd() * 6),
        x: c * cell,
        y: r * cell,
        s: cell,
        color: colorRoll < 0.5 ? RED : colorRoll < 0.85 ? INK : "transparent",
        rot: Math.floor(rnd() * 4) * 90,
        spin: (rnd() < 0.5 ? -1 : 1) * (rnd() < 0.5 ? 90 : 180),
      });
    }
  }

  return (
    <svg className="art" viewBox={`0 0 ${cols * cell} ${rows * cell}`} role="img" aria-label={`Ilustración de ${title}`}>
      <rect width="100%" height="100%" fill={bg} />
      {pieces.map((p, i) => {
        const cx = p.x + p.s / 2;
        const cy = p.y + p.s / 2;
        const h = p.s / 2;
        const outline = p.color === "transparent";
        const fill = outline ? "none" : p.color;
        const stroke = outline ? INK : "none";
        const style = {
          transformOrigin: `${cx}px ${cy}px`,
          "--rot": `${p.rot}deg`,
          "--spin": `${p.rot + p.spin}deg`,
          transitionDelay: `${i * 25}ms`,
        } as CSSProperties;
        let shape;
        switch (p.kind) {
          case 0:
            shape = <circle cx={cx} cy={cy} r={h * 0.86} />;
            break;
          case 1:
            shape = <rect x={p.x + p.s * 0.1} y={p.y + p.s * 0.1} width={p.s * 0.8} height={p.s * 0.8} />;
            break;
          case 2:
            shape = <path d={`M${p.x} ${p.y + p.s}L${p.x} ${p.y}L${p.x + p.s} ${p.y + p.s}Z`} />;
            break;
          case 3:
            shape = <path d={`M${p.x} ${p.y + p.s}A${p.s} ${p.s} 0 0 1 ${p.x + p.s} ${p.y}L${p.x + p.s} ${p.y + p.s}Z`} />;
            break;
          case 4:
            shape = <path d={`M${p.x} ${cy}A${h} ${h} 0 0 1 ${p.x + p.s} ${cy}Z`} />;
            break;
          default:
            shape = (
              <path
                d={`M${cx - h * 0.18} ${p.y + p.s * 0.12}h${h * 0.36}v${h * 0.7}h${h * 0.7}v${h * 0.36}h-${h * 0.7}v${h * 0.7}h-${h * 0.36}v-${h * 0.7}h-${h * 0.7}v-${h * 0.36}h${h * 0.7}z`}
              />
            );
        }
        return (
          <g key={i} className="art__piece" style={style} fill={fill} stroke={stroke} strokeWidth={outline ? 6 : 0}>
            {shape}
          </g>
        );
      })}
    </svg>
  );
}
