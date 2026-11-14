import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import MjSection from './MjSection';
import { FADE_FROM_LEFT, FADE_FROM_RIGHT, RISE_UP } from '../lib/reveal-variants';

interface MjSectionAboutProps {
  subtitle: string;
  description: ReactNode;
  photoSrc: string;
}

export default function MjSectionAbout({ subtitle, description, photoSrc }: MjSectionAboutProps) {
  return (
    <MjSection once className="flex flex-col items-center justify-center bg-linear-to-b from-neutral-900 from-20% to-neutral-800">
      <motion.h1 variants={FADE_FROM_RIGHT} transition={{ duration: 0.5 }} className="flex h-[5vh] w-[80%] items-center justify-center text-lg font-bold">
        {subtitle}
      </motion.h1>
      <motion.p variants={FADE_FROM_LEFT} transition={{ duration: 0.5 }} className="w-[80%] text-left text-sm">
        {description}
      </motion.p>
      <motion.img src={photoSrc} alt={subtitle} variants={RISE_UP} transition={{ duration: 0.5 }} className="mt-[2vh] h-[10vh] w-auto rounded-full" />
    </MjSection>
  );
}
