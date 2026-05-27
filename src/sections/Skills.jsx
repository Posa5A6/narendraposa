import { motion } from 'framer-motion';
import GlassPanel from '../components/GlassPanel.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import { skills } from '../data/profile.js';
import { fadeUp, stagger } from '../utils/motion.js';

export default function Skills() {
  return (
    <section id="skills" className="section-shell">
      <SectionHeader eyebrow="Skill Matrix" title="Cyberpunk Skills Dashboard">
        Python backend systems, Django APIs, React frontend modules, authentication flows, database engines, and responsive UI circuitry.
      </SectionHeader>
      <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {skills.map(({ name, level, icon: Icon }) => (
          <GlassPanel key={name} variants={fadeUp} className="group p-5">
            <div className="flex items-center justify-between gap-4">
              <Icon className="text-3xl text-cyan-neon transition group-hover:scale-110 group-hover:text-magenta-hot" />
              <div className="relative grid h-14 w-14 place-items-center rounded-full border border-cyan-neon/25">
                <svg className="absolute inset-0 h-full w-full -rotate-90">
                  <circle cx="28" cy="28" r="23" stroke="rgba(255,255,255,.08)" strokeWidth="4" fill="none" />
                  <motion.circle
                    cx="28"
                    cy="28"
                    r="23"
                    stroke="#00f5ff"
                    strokeWidth="4"
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray={145}
                    initial={{ strokeDashoffset: 145 }}
                    whileInView={{ strokeDashoffset: 145 - (145 * level) / 100 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.3, ease: 'easeOut' }}
                  />
                </svg>
                <span className="text-xs font-bold text-cyan-100">{level}</span>
              </div>
            </div>
            <h3 className="mt-5 text-xl font-bold text-white">{name}</h3>
            <div className="mt-4 h-2 overflow-hidden bg-white/10">
              <motion.div className="h-full bg-gradient-to-r from-cyan-neon to-magenta-hot" initial={{ width: 0 }} whileInView={{ width: `${level}%` }} viewport={{ once: true }} transition={{ duration: 1.1 }} />
            </div>
          </GlassPanel>
        ))}
      </motion.div>
    </section>
  );
}
