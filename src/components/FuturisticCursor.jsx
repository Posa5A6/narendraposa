import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function FuturisticCursor() {
  const [enabled, setEnabled] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const smoothX = useSpring(x, { stiffness: 320, damping: 32 });
  const smoothY = useSpring(y, { stiffness: 320, damping: 32 });

  useEffect(() => {
    const media = window.matchMedia('(pointer: fine)');
    const updateEnabled = () => setEnabled(media.matches);
    const move = (event) => {
      x.set(event.clientX - 18);
      y.set(event.clientY - 18);
    };

    updateEnabled();
    window.addEventListener('mousemove', move);
    media.addEventListener('change', updateEnabled);

    return () => {
      window.removeEventListener('mousemove', move);
      media.removeEventListener('change', updateEnabled);
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[90] hidden h-9 w-9 rounded-full border border-cyan-neon/60 mix-blend-screen shadow-[0_0_22px_rgba(0,245,255,.75)] lg:block"
      style={{ x: smoothX, y: smoothY }}
    >
      <span className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-magenta-hot shadow-[0_0_16px_#ff2ef7]" />
    </motion.div>
  );
}
