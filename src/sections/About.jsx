import { motion } from 'framer-motion';
import GlassPanel from '../components/GlassPanel.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import { specializations } from '../data/profile.js';
import { fadeUp, stagger } from '../utils/motion.js';

export default function About() {
  return (
    <section id="about" className="section-shell">
      <SectionHeader eyebrow="Identity Core" title="About Me">
        POSA NARENDRA is a Full Stack Python Developer currently working at TRACEBYTE.
      </SectionHeader>
      <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid gap-5 lg:grid-cols-[1fr_1.15fr]">
        <GlassPanel variants={fadeUp} className="p-6 sm:p-8">
          <p className="font-display text-sm uppercase tracking-[0.28em] text-cyan-neon">Profile Packet</p>
          <h3 className="mt-4 text-3xl font-black uppercase text-white">POSA NARENDRA</h3>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Full Stack Python Developer passionate about building futuristic, scalable, and immersive digital experiences using Django, React.js, REST APIs, and modern frontend technologies.
          </p>
          <p className="mt-4 text-base leading-7 text-slate-400">
            Currently working at TRACEBYTE as a Full Stack Developer, building real-world applications and modern web systems.
          </p>
          <div className="mt-7 grid grid-cols-2 gap-3 text-sm">
            {['TRACEBYTE', 'Python + Django', 'REST API Systems', 'Production Web Apps'].map((item) => (
              <div key={item} className="border border-cyan-neon/15 bg-cyan-neon/[0.04] p-4 text-cyan-100">{item}</div>
            ))}
          </div>
        </GlassPanel>
        <motion.div variants={stagger} className="grid gap-4 sm:grid-cols-2">
          {specializations.map((item, index) => (
            <GlassPanel key={item} variants={fadeUp} className="group p-5">
              <div className="mb-5 flex items-center justify-between">
                <span className="font-display text-xs uppercase tracking-[0.28em] text-slate-500">module {String(index + 1).padStart(2, '0')}</span>
                <span className="h-2 w-2 rounded-full bg-cyan-neon shadow-[0_0_18px_#00f5ff]" />
              </div>
              <p className="text-xl font-bold text-white transition group-hover:text-cyan-neon">{item}</p>
            </GlassPanel>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
