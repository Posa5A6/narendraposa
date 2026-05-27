import { motion } from 'framer-motion';
import GlassPanel from '../components/GlassPanel.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import { experienceSignals } from '../data/profile.js';
import { fadeUp } from '../utils/motion.js';

export default function Experience() {
  return (
    <section id="experience" className="section-shell">
      <SectionHeader eyebrow="Professional Timeline" title="TRACEBYTE Signal">
        Current professional experience building Django backends, React interfaces, REST APIs, and production web systems.
      </SectionHeader>
      <div className="relative mx-auto max-w-5xl">
        <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-cyan-neon via-magenta-hot to-transparent md:block" />
        <GlassPanel variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="p-6 sm:p-8 md:ml-12">
          <div className="flex flex-wrap items-start justify-between gap-5">
            <div>
              <p className="font-display text-xs uppercase tracking-[0.3em] text-cyan-neon">Current Node</p>
              <h3 className="mt-3 text-4xl font-black uppercase text-white">TRACEBYTE</h3>
              <p className="mt-2 text-xl text-cyan-100">Full Stack Developer</p>
            </div>
            <div className="border border-magenta-hot/25 bg-magenta-hot/10 px-4 py-3 text-sm uppercase tracking-[0.18em] text-magenta-100">
              Current Working Professional Experience
            </div>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {experienceSignals.map((item) => (
              <div key={item} className="border border-cyan-neon/15 bg-black/20 p-4 text-slate-200">
                <span className="mr-2 text-cyan-neon">◆</span>{item}
              </div>
            ))}
          </div>
        </GlassPanel>
      </div>
    </section>
  );
}
