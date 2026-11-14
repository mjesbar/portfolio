import { useState, type ReactNode } from "react";
import { motion } from "framer-motion";
import MjSection from "./MjSection";

interface MjSectionServiceProps {
  subtitle: string;
  description: ReactNode;
  imgSrc: string;
}

const SWITCH_COLORS = [
  "bg-primary-500",
  "bg-primary-600",
  "bg-primary-800",
  "bg-secondary-500",
  "bg-secondary-600",
  "bg-neutral-300",
  "bg-neutral-400",
];

const CONTAINER_VARIANTS = {
  hidden: { opacity: 0, x: "-50%" },
  visible: { opacity: 1, x: "0%" },
};

const SWITCH_VARIANTS = {
  hidden: { width: "2vw" },
  visible: { width: "10vw" },
};

export default function MjSectionService({ subtitle, description, imgSrc }: MjSectionServiceProps) {
  const [switchColor] = useState(
    () => SWITCH_COLORS[Math.floor(Math.random() * SWITCH_COLORS.length)],
  );

  return (
    <MjSection className="flex flex-row items-center justify-center overflow-visible">
      <motion.div
        variants={CONTAINER_VARIANTS}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="relative z-[1] flex h-full w-full flex-col items-center justify-center"
      >
        <div className="flex h-1/2 w-1/2 flex-col items-center justify-center text-center text-sm">
          <h1 className="text-xl font-bold">{subtitle}</h1>
          <p>{description}</p>
        </div>
        <img src={imgSrc} alt={subtitle} className="h-[40%] w-auto rounded-lg" />
      </motion.div>
      <motion.div
        variants={SWITCH_VARIANTS}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`absolute left-0 z-[2] h-full ${switchColor}`}
      />
    </MjSection>
  );
}
