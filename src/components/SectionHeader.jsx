import { motion } from 'framer-motion';
import { fadeUp } from '../utils/motion.js';

export default function SectionHeader({ eyebrow, title, children }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-120px' }}
      className="mx-auto mb-10 max-w-3xl text-center"
    >
      <p className="font-display text-xs uppercase tracking-[0.35em] text-cyan-neon">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-black uppercase tracking-wide text-white sm:text-5xl">
        {title}
      </h2>
      {children && <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg">{children}</p>}
    </motion.div>
  );
}
