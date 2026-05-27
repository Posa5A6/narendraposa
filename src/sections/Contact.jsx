import { motion } from 'framer-motion';
import GlassPanel from '../components/GlassPanel.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import { contactLinks } from '../data/profile.js';
import { fadeUp, stagger } from '../utils/motion.js';

export default function Contact() {
  return (
    <section id="contact" className="section-shell pb-28">
      <SectionHeader eyebrow="Open Channel" title="Contact Interface">
        LinkedIn, GitHub, Gmail, phone field, and portfolio link in one holographic signal panel.
      </SectionHeader>
      <GlassPanel className="mx-auto max-w-5xl p-6 sm:p-8">
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {contactLinks.map(({ label, value, href, icon: Icon }) => (
            <motion.a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" variants={fadeUp} className="group border border-cyan-neon/15 bg-black/25 p-5 transition hover:-translate-y-1 hover:border-cyan-neon/60 hover:bg-cyan-neon/10">
              <Icon className="text-3xl text-cyan-neon transition group-hover:text-magenta-hot" />
              <p className="mt-5 font-display text-xs uppercase tracking-[0.24em] text-slate-400">{label}</p>
              <p className="mt-2 break-words text-lg font-bold text-white">{value}</p>
            </motion.a>
          ))}
        </motion.div>
      </GlassPanel>
    </section>
  );
}
