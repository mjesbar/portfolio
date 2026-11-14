import { useState, type ReactNode } from 'react';
import { motion } from 'framer-motion';
import MjSection from './MjSection';

interface MjSectionWorkProps {
  subtitle: string;
  description1: ReactNode;
  description2: ReactNode;
  backgroundSrc: string;
  mediaSrc: string;
  medias: number;
  iconTopSrc: string;
  iconBotSrc: string;
  linkUrl: string;
}

const ARROW_SRC = '/assets/arrow.webp';

const CONTAINER_VARIANTS = {
  hidden: { opacity: 0.5, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const TEXT_VARIANTS = {
  hidden: { scale: 0.8, y: '-20%' },
  visible: { scale: 1, y: '0%' },
};

const MEDIA_VARIANTS = {
  hidden: { scale: 0.8, y: '20%' },
  visible: { scale: 1, y: '0%' },
};

const ICON_TOP_VARIANTS = {
  hidden: { x: '200%', rotate: -15 },
  visible: { x: '0%', rotate: -15 },
};

const ICON_BOT_VARIANTS = {
  hidden: { x: '-200%', rotate: 15 },
  visible: { x: '0%', rotate: 15 },
};

export default function MjSectionWork({
  subtitle,
  description1,
  description2,
  backgroundSrc,
  mediaSrc,
  medias,
  iconTopSrc,
  iconBotSrc,
  linkUrl,
}: MjSectionWorkProps) {
  const [currentMedia, setCurrentMedia] = useState(1);
  const handleMediaEnded = () => setCurrentMedia((media) => (media % medias) + 1);

  return (
    <MjSection className="flex flex-row items-center justify-center overflow-hidden">
      <img src={backgroundSrc} alt="" className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover opacity-40" />
      <div className="absolute inset-0 z-[1] bg-[linear-gradient(to_top,var(--color-neutral-900)_20%,transparent_50%,var(--color-neutral-900)_80%)]" />
      <motion.div
        variants={CONTAINER_VARIANTS}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="relative top-[3vh] z-[2] box-content flex h-[85%] w-[85%] flex-row items-center justify-evenly rounded-lg border-(length:--border-heavy) border-neutral-700 backdrop-blur-[20px]"
      >
        <motion.div variants={TEXT_VARIANTS} transition={{ duration: 0.5, ease: 'easeOut' }} className="box-content flex w-[30%] flex-col items-start justify-center gap-4 p-[2%] text-sm [&_a]:underline">
          <h1 className="text-xl font-bold">{subtitle}</h1>
          <p>{description1}</p>
          <p>{description2}</p>
        </motion.div>
        <motion.video
          key={currentMedia}
          src={mediaSrc.replace('*', String(currentMedia))}
          autoPlay
          muted
          playsInline
          onEnded={handleMediaEnded}
          variants={MEDIA_VARIANTS}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="h-auto w-[60%] rounded-lg object-contain"
        />
        <motion.img src={iconTopSrc} alt="" variants={ICON_TOP_VARIANTS} transition={{ duration: 0.5, ease: 'easeOut' }} className="absolute top-[5%] left-[90%] z-[4] h-auto w-[20%]" />
        <motion.img src={iconBotSrc} alt="" variants={ICON_BOT_VARIANTS} transition={{ duration: 0.5, ease: 'easeOut' }} className="absolute top-1/2 left-[-18%] z-[4] h-auto w-[20%]" />
        <motion.a
          href={linkUrl}
          target="_blank"
          rel="noreferrer"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 0.5, repeat: Infinity, ease: 'easeOut' }}
          className="absolute top-[85%] left-[40%] z-[4] flex h-[5%] w-[15%] flex-row items-center justify-around text-base underline"
        >
          <p>View Project</p>
          <img src={ARROW_SRC} alt="arrow" className="h-full w-auto" />
        </motion.a>
      </motion.div>
    </MjSection>
  );
}
