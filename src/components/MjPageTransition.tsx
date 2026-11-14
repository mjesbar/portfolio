import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useLocation, useOutlet } from 'react-router';
import { getPageOffset, PAGE_TRANSITION, PAGE_VARIANTS } from '../lib/page-transition';

export default function MjPageTransition() {
  const { pathname } = useLocation();
  const outlet = useOutlet();
  const [route, setRoute] = useState({ from: pathname, to: pathname });
  if (route.to !== pathname) setRoute({ from: route.to, to: pathname });
  const offset = getPageOffset(route.from, pathname);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="relative w-full overflow-hidden">
      <AnimatePresence initial={false} mode="popLayout" custom={offset}>
        <motion.div key={pathname} custom={offset} variants={PAGE_VARIANTS} initial="enter" animate="center" exit="exit" transition={PAGE_TRANSITION} className="w-full">
          {outlet}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
