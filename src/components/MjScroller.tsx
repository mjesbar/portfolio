import { Fragment, useRef, useState, type WheelEvent } from 'react';
import { motion } from 'framer-motion';
import MjAsciiFrame from './MjAsciiFrame';
import MjRichText, { type MjParagraph } from './MjRichText';

export interface MjScrollerItem {
  subtitle?: string;
  paragraphs?: MjParagraph[];
  bullets?: MjParagraph[];
  media?: string;
}

interface MjScrollerProps {
  items: MjScrollerItem[];
}

const EASE_OUT_QUAD = [0.5, 1, 0.89, 1] as [number, number, number, number];
const STEP_TRANSITION = { duration: 0.5, ease: EASE_OUT_QUAD };

function MjScrollerSlide({ subtitle, paragraphs, bullets, media }: MjScrollerItem) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-6 p-[3%]">
      {subtitle && <h1 className="text-center text-2xl font-bold">{subtitle}</h1>}
      {paragraphs && (
        <div className="w-full text-left text-base">
          <MjRichText paragraphs={paragraphs} />
        </div>
      )}
      {bullets && (
        <div className="w-full text-left text-base">
          <MjRichText paragraphs={bullets} bulleted />
        </div>
      )}
      {media && <img src={media} alt={subtitle ?? ''} className="max-h-[30%] w-auto object-contain" />}
    </div>
  );
}

export default function MjScroller({ items }: MjScrollerProps) {
  const [active, setActive] = useState(0);
  const busy = useRef(false);
  const steps = items.length;
  const progress = steps > 1 ? active / (steps - 1) : 0;

  const goTo = (index: number) => {
    const next = Math.min(Math.max(index, 0), steps - 1);
    if (busy.current || next === active) return;
    busy.current = true;
    setActive(next);
  };

  const handleWheel = ({ deltaY }: WheelEvent<HTMLDivElement>) => {
    if (deltaY !== 0) goTo(active + Math.sign(deltaY));
  };

  return (
    <div onWheel={handleWheel} className="relative h-screen w-full">
      <div className="absolute top-[14.5%] left-[20%] h-[71%] w-[60%]">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ y: `${-active * 100}%` }}
            transition={STEP_TRANSITION}
            onAnimationComplete={() => (busy.current = false)}
            className="flex h-full flex-col [&>*]:h-full [&>*]:shrink-0"
          >
            {items.map((item, index) => (
              <MjScrollerSlide key={index} {...item} />
            ))}
          </motion.div>
        </div>
        <MjAsciiFrame />
      </div>
      {steps > 1 && (
        <nav className="absolute top-1/2 left-[16%] z-[3] flex h-[50%] -translate-x-1/2 -translate-y-1/2 flex-col items-center">
          <span
            style={{ top: `calc(${progress * 100}% + ${6 - 12 * progress}px)` }}
            className="pointer-events-none absolute left-1/2 z-[1] h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-300 transition-[top] duration-500 ease-[cubic-bezier(0.5,1,0.89,1)]"
          />
          {items.map((_, index) => (
            <Fragment key={index}>
              <button type="button" aria-label={`Go to item ${index + 1}`} onClick={() => goTo(index)} className="h-3 w-3 shrink-0 rounded-full" />
              {index < steps - 1 && <span className="my-2 w-1 flex-1 rounded-full bg-neutral-100" />}
            </Fragment>
          ))}
        </nav>
      )}
    </div>
  );
}
