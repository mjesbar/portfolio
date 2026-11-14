import type { ReactNode } from 'react';

interface MjSectionProps {
  children: ReactNode;
  className?: string;
}

export default function MjSection({ children, className = '' }: MjSectionProps) {
  return <section className={`relative h-screen w-full ${className}`}>{children}</section>;
}
