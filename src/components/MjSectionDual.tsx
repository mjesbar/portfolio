import { Fragment, useState } from 'react';
import { Link } from 'react-router';
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

function MjDualWord({ word }: { word: string }) {
  const [hoverColor, setHoverColor] = useState<string>();
  const slug = word.toLowerCase();

  if (!ELIGIBLE_WORDS.includes(slug)) {
    return (
      <span className="cursor-default text-2xl text-neutral-500 opacity-25 transition-opacity duration-250 ease-out group-has-[[data-eligible]:hover]:opacity-75">
        {word}
      </span>
    );
  }

  return (
    <Link
      to={`/${slug}`}
      data-eligible
      onMouseEnter={() => setHoverColor(HOVER_COLORS[Math.floor(Math.random() * HOVER_COLORS.length)])}
      onMouseLeave={() => setHoverColor(undefined)}
      style={{ color: hoverColor }}
      className={`cursor-pointer font-heading font-bold transition-[color,font-size] duration-250 ease-out ${hoverColor ? 'text-5xl' : 'text-4xl'}`}
    >
      {word}
    </Link>
  );
}

export default function MjSectionDual({ imgSrc, imgPos, lines }: MjSectionDualProps) {
  return (
    <MjSection className="flex flex-row items-center justify-center overflow-hidden">
      <img
        src={imgSrc}
        alt=""
        className={`pointer-events-none absolute top-0 z-[1] h-auto w-[45%] min-w-[612px] max-w-[45%] select-none ${imgPos === 'right' ? 'right-0' : 'left-0'}`}
      />
      <div className="flex h-full w-full flex-col items-center justify-center">
        {lines.map((line) => (
          <div
            key={line}
            className="group relative whitespace-nowrap has-[[data-eligible]:hover]:z-[2]"
          >
            {line.split(' ').map((word, wordIndex) => (
              <Fragment key={word}>
                {wordIndex > 0 && <span className="text-2xl"> </span>}
                <MjDualWord word={word} />
              </Fragment>
            ))}
          </div>
        ))}
      </div>
    </MjSection>
  );
}
