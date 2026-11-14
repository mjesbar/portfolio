import { motion } from 'framer-motion';
import MjSection from './MjSection';
import { FADE_FROM_LEFT, FADE_FROM_RIGHT, RISE_UP } from '../lib/reveal-variants';

interface MjContactLink {
  href: string;
  icon: string;
  alt: string;
}

interface MjSectionContactProps {
  subtitle: string;
  description: string;
  links: MjContactLink[];
}

export default function MjSectionContact({ subtitle, description, links }: MjSectionContactProps) {
  return (
    <MjSection once className="flex flex-col items-center justify-center">
      <motion.h1 variants={FADE_FROM_RIGHT} transition={{ duration: 0.5, ease: 'easeOut' }} className="flex h-[5vh] w-[80%] items-center justify-center text-lg font-bold">
        {subtitle}
      </motion.h1>
      <motion.p variants={FADE_FROM_LEFT} transition={{ duration: 0.5, ease: 'easeOut' }} className="w-[80%] text-center text-sm">
        {description}
      </motion.p>
      <motion.div variants={RISE_UP} transition={{ duration: 0.5, ease: 'easeOut' }} className="my-[3vh] flex w-[15vw] flex-row items-center justify-between">
        {links.map((link) => (
          <a key={link.alt} href={link.href} target="_blank" rel="noreferrer">
            <img src={link.icon} alt={link.alt} className="h-[5vh] w-[5vh] cursor-pointer" />
          </a>
        ))}
      </motion.div>
    </MjSection>
  );
}
