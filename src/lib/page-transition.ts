import type { Variants } from 'framer-motion';

export interface PageOffset {
  x: number;
  y: number;
}

const PAGE_POSITIONS: Record<string, PageOffset> = {
  '/': { x: 0, y: 0 },
  '/work': { x: 0, y: -1 },
  '/service': { x: 1, y: 0 },
  '/about': { x: 0, y: 1 },
  '/contact': { x: -1, y: 0 },
};

export const PAGE_TRANSITION = { duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] };

export function getPageOffset(from: string, to: string): PageOffset {
  const origin = PAGE_POSITIONS[from] ?? PAGE_POSITIONS['/'];
  const target = PAGE_POSITIONS[to] ?? PAGE_POSITIONS['/'];
  return { x: target.x - origin.x, y: target.y - origin.y };
}

export const PAGE_VARIANTS: Variants = {
  enter: ({ x, y }: PageOffset) => ({ x: `${x * 100}vw`, y: `${y * 100}vh`, opacity: 0 }),
  center: { x: 0, y: 0, opacity: 1 },
  exit: ({ x, y }: PageOffset) => ({ x: `${-x * 100}vw`, y: `${-y * 100}vh`, opacity: 0 }),
};
