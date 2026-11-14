import { useEffect, useState, type RefObject } from 'react';

const REVEAL_TOLERANCE_PX = 50;

export default function useNavVisibility(navRef: RefObject<HTMLElement | null>): boolean {
  const [showing, setShowing] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY !== lastScrollY) setShowing(scrollY < lastScrollY);
      lastScrollY = scrollY;
    };

    const handleMouseMove = (event: MouseEvent) => {
      const rect = navRef.current?.getBoundingClientRect();
      if (!rect) return;
      const isNearNav =
        event.clientY >= rect.top - REVEAL_TOLERANCE_PX &&
        event.clientY <= rect.bottom + REVEAL_TOLERANCE_PX;
      if (isNearNav) setShowing(true);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [navRef]);

  return showing;
}
