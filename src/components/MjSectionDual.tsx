import { Fragment, useState } from 'react';
import { Link } from 'react-router';
import { motion } from 'framer-motion';
import MjSection from './MjSection';

interface MjSectionDualProps {
  imgSrc: string;
  imgPos: 'left' | 'right';
  lines: string[];
}

const ELIGIBLE_WORDS = ['work', 'service', 'about', 'contact'];

const HOVER_COLORS = [
  'var(--color-primary-600)',
  'var(--color-secondary-600)',
  'var(--color-neutral-400)',
  'var(--color-primary-500)',
  'var(--color-secondary-500)',
  'var(--color-neutral-300)',
];

const IMAGE_VARIANTS = {
  hidden: { y: 200 },
  visible: { y: 0 },
};

const LINE_VARIANTS = {
  hidden: (offsetX: number) => ({ opacity: 0, x: offsetX }),
  visible: { opacity: 1, x: 0 },
};

function MjDualWord({ word }: { word: string }) {
  const [hoverColor, setHoverColor] = useState<string>();
  const slug = word.toLowerCase();

  if (!ELIGIBLE_WORDS.includes(slug)) {
    return <span className="cursor-default text-2xl text-neutral-500">{word}</span>;
  }

  return (
    <Link
      to={`/${slug}`}
      data-eligible
      onMouseEnter={() => setHoverColor(HOVER_COLORS[Math.floor(Math.random() * HOVER_COLORS.length)])}
      onMouseLeave={() => setHoverColor(undefined)}
      style={{ color: hoverColor }}
      className={`cursor-pointer font-bold transition-[color,font-size] duration-250 ${hoverColor ? 'text-4xl' : 'text-3xl'}`}
    >
      {word}
    </Link>
  );
}

export default function MjSectionDual({ imgSrc, imgPos, lines }: MjSectionDualProps) {
  return (
    <MjSection className="flex flex-row items-center justify-center overflow-hidden">
      <motion.img
        src={imgSrc}
        alt=""
        variants={IMAGE_VARIANTS}
        transition={{ duration: 1 }}
        className={`pointer-events-none absolute top-0 z-[1] h-auto w-1/2 min-w-[680px] max-w-1/2 select-none ${imgPos === 'right' ? 'right-0' : 'left-0'}`}
      />
      <div className="flex h-full w-full flex-col items-center justify-center overflow-hidden">
        {lines.map((line, index) => (
          <motion.div
            key={line}
            custom={(index + 1) % 2 === 0 ? -200 : 200}
            variants={LINE_VARIANTS}
            transition={{ duration: 1 }}
            className="relative has-[[data-eligible]:hover]:z-[2]"
          >
            {line.split(' ').map((word, wordIndex) => (
              <Fragment key={word}>
                {wordIndex > 0 && ' '}
                <MjDualWord word={word} />
              </Fragment>
            ))}
          </motion.div>
        ))}
      </div>
    </MjSection>
  );
}
