import { motion } from 'framer-motion';
import { TbAwardFilled } from 'react-icons/tb';
import GlassPanel from '../components/GlassPanel.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import { achievements } from '../data/profile.js';
import { fadeUp, stagger } from '../utils/motion.js';

export default function Achievements() {
  return (
    <section id="achievements" className="section-shell">
      <SectionHeader eyebrow="Unlocked Credentials" title="Certifications & Achievements" />
      <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {achievements.map((achievement, index) => (
          <GlassPanel key={achievement} variants={fadeUp} className="p-6">
            <TbAwardFilled className="text-4xl text-magenta-hot" />
            <p className="mt-6 font-display text-xs uppercase tracking-[0.24em] text-cyan-neon">unlock {index + 1}</p>
            <h3 className="mt-3 text-xl font-black text-white">{achievement}</h3>
          </GlassPanel>
        ))}
      </motion.div>
    </section>
  );
}
