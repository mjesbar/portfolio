import { useRef, useState } from 'react';
import { NavLink } from 'react-router';
import useNavVisibility from '../lib/use-nav-visibility';

const LEFT_LINKS = [
  { label: 'Work', path: '/work' },
  { label: 'Service', path: '/service' },
];

const RIGHT_LINKS = [
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

const RING_COLORS = [
  'var(--color-neutral-300)',
  'var(--color-neutral-400)',
  'var(--color-secondary-500)',
  'var(--color-secondary-600)',
  'var(--color-primary-600)',
];

function MjNavLogo() {
  const [hovered, setHovered] = useState(false);
  const [rotations, setRotations] = useState<number[]>([]);

  const handleMouseEnter = () => {
    setRotations(RING_COLORS.map(() => Math.floor(Math.random() * 180) - 180));
    setHovered(true);
  };

  return (
    <a
      href={import.meta.env.VITE_SITE_URL}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setHovered(false)}
      className={`relative z-[1] flex h-full w-[30vw] flex-row items-center justify-center transition-transform duration-250 ${hovered ? 'scale-[1.6] translate-y-1/4' : ''}`}
    >
      <span className={`flex h-full w-1/3 items-center justify-center text-sm font-bold transition-transform duration-500 ${hovered ? '-translate-y-2/5' : ''}`}>
        Mjesbar
      </span>
      <div className={`relative flex aspect-square w-auto items-center justify-center rounded-full bg-primary-500 shadow-[0_0_12px_6px_var(--color-primary-600)] transition-[height] duration-250 ${hovered ? 'h-[30%]' : 'h-[10%]'}`}>
        {RING_COLORS.map((color, index) => {
          const ringSize = 80 + 2 * (RING_COLORS.length - index);
          const borderSize = 5 * (RING_COLORS.length - index);
          return (
            <div
              key={color}
              className="absolute top-1/2 left-1/2 -z-[1] aspect-square rounded-full transition-[transform,opacity] duration-1000"
              style={{
                height: hovered ? `${ringSize}%` : 0,
                border: `${borderSize}px solid transparent`,
                borderLeftColor: color,
                borderRightColor: color,
                transform: `translate(-50%, -50%) rotate(${hovered ? rotations[index] : 0}deg)`,
                opacity: hovered ? 1 : 0,
              }}
            />
          );
        })}
      </div>
      <span className={`flex h-full w-1/3 items-center justify-center text-sm font-bold transition-transform duration-500 ${hovered ? 'translate-y-2/5' : ''}`}>
        Dev
      </span>
    </a>
  );
}

function MjNavLink({ label, path }: { label: string; path: string }) {
  return (
    <NavLink
      to={path}
      className={({ isActive }) => `relative z-[2] flex h-[70%] w-[10%] items-center justify-center text-sm font-bold transition-all duration-500 ${isActive ? 'text-neutral-400' : 'hover:text-primary-600'}`}
    >
      {label}
    </NavLink>
  );
}

export default function MjNav() {
  const navRef = useRef<HTMLElement>(null);
  const showing = useNavVisibility(navRef);

  return (
    <header
      ref={navRef}
      className={`fixed top-0 left-0 z-10 flex h-[10vh] w-full flex-row items-center justify-center overflow-visible bg-neutral-900 text-neutral-100 transition-transform duration-250 ${showing ? 'translate-y-0' : '-translate-y-[10vh]'}`}
    >
      {LEFT_LINKS.map((link) => (
        <MjNavLink key={link.path} {...link} />
      ))}
      <MjNavLogo />
      {RIGHT_LINKS.map((link) => (
        <MjNavLink key={link.path} {...link} />
      ))}
    </header>
  );
}
