import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import GlassPanel from '../components/GlassPanel.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import { projects } from '../data/profile.js';
import { fadeUp, stagger } from '../utils/motion.js';

export default function Projects() {
  return (
    <section id="projects" className="section-shell">
      <SectionHeader eyebrow="Project Arsenal" title="Immersive Build Cards">
        Premium holographic previews for real-world software projects and developer systems.
      </SectionHeader>
      <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <GlassPanel
            key={project.title}
            variants={fadeUp}
            whileHover={{ y: -10, rotateX: 2, rotateY: index % 2 ? -2 : 2 }}
            className="group p-4"
          >
            <div className="relative mb-5 aspect-[16/10] overflow-hidden border border-cyan-neon/20" style={{ background: project.image }}>
              <div className="absolute inset-0 bg-grid bg-[length:28px_28px] opacity-25" />
              <div className="absolute inset-x-4 bottom-4 border border-white/10 bg-black/45 p-3 backdrop-blur">
                <p className="font-display text-xs uppercase tracking-[0.22em] text-cyan-neon">Preview Layer</p>
                <p className="mt-1 text-lg font-black text-white">{project.title}</p>
              </div>
            </div>
            <h3 className="text-2xl font-black text-white">{project.title}</h3>
            <p className="mt-3 min-h-20 leading-7 text-slate-300">{project.signal}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span key={item} className="border border-cyan-neon/20 bg-cyan-neon/5 px-3 py-1 text-xs uppercase tracking-[0.14em] text-cyan-100">
                  {item}
                </span>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={project.github} target="_blank" rel="noreferrer" className="icon-action">
                <FaGithub /> GitHub
              </a>
              {project.live && (
                <a href={project.live} target="_blank" rel="noreferrer" className="icon-action">
                  <FaExternalLinkAlt /> Live
                </a>
              )}
            </div>
          </GlassPanel>
        ))}
      </motion.div>
    </section>
  );
}
