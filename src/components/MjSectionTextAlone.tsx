import { motion } from 'framer-motion';
import MjSection from './MjSection';

interface MjSectionTextAloneProps {
  mainText: string;
  subText: string;
  miniText: string;
  backgroundImage: string;
}

const MAIN_VARIANTS = {
  hidden: { opacity: 0, y: -100, filter: 'blur(3px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
};

const SUB_VARIANTS = {
  hidden: { opacity: 0, x: 200, filter: 'blur(3px)' },
  visible: { opacity: 1, x: 0, filter: 'blur(0px)' },
};

const MINI_VARIANTS = {
  hidden: { opacity: 0, x: -200, filter: 'blur(3px)' },
  visible: { opacity: 1, x: 0, filter: 'blur(0px)' },
};

export default function MjSectionTextAlone({ mainText, subText, miniText, backgroundImage }: MjSectionTextAloneProps) {
  return (
    <MjSection className="flex flex-col items-center justify-center">
      <img src={backgroundImage} alt="" className="absolute -z-[1] h-[40%] w-auto opacity-25" />
      <div className="absolute inset-0 z-0 backdrop-blur-[3px]" />
      <motion.h1 variants={MAIN_VARIANTS} transition={{ duration: 1 }} className="relative text-xl font-bold">
        {mainText}
      </motion.h1>
      <motion.h2 variants={SUB_VARIANTS} transition={{ duration: 1.5 }} className="relative left-15 text-base font-bold text-neutral-400">
        {subText}
      </motion.h2>
      <motion.p variants={MINI_VARIANTS} transition={{ duration: 2 }} className="relative right-[50px] text-sm text-neutral-500">
        {miniText}
      </motion.p>
    </MjSection>
  );
}
