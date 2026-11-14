import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface MjSectionProps {
  children: ReactNode;
  className?: string;
  once?: boolean;
}

export default function MjSection({ children, className = '', once = false }: MjSectionProps) {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 'some', once }}
      className={`relative h-screen w-full ${className}`}
    >
      {children}
    </motion.section>
  );
}
