import { motion } from 'framer-motion';
import { lazy, Suspense, useEffect, useState } from 'react';
import { FaGithub, FaPython, FaReact } from 'react-icons/fa';
import { SiDjango, SiPostman, SiTailwindcss } from 'react-icons/si';
import pnAvatar from '../assets/pn-avatar.jpg';
import { roles } from '../data/profile.js';

const icons = [FaPython, SiDjango, FaReact, SiPostman, SiTailwindcss, FaGithub];
const HologramScene = lazy(() => import('../components/HologramScene.jsx'));

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [pointer, setPointer] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const interval = setInterval(() => setRoleIndex((value) => (value + 1) % roles.length), 1800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-4 pb-16 pt-32 sm:px-6 sm:pb-20 lg:pt-24"
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        setPointer({
          x: (event.clientX - rect.left - rect.width / 2) / rect.width,
          y: (event.clientY - rect.top - rect.height / 2) / rect.height,
        });
      }}
    >
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-void to-transparent" />
      <div className="mx-auto grid w-full max-w-7xl items-center gap-7 sm:gap-10 lg:grid-cols-[1.05fr_.95fr]">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="min-w-0">
          <div className="mb-5 inline-flex max-w-full items-center gap-3 border border-cyan-neon/25 bg-cyan-neon/5 px-3 py-2 text-[10px] uppercase tracking-[0.22em] text-cyan-neon backdrop-blur sm:mb-6 sm:px-4 sm:text-xs sm:tracking-[0.28em]">
            <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-neon" />
            AI Developer Command Center
          </div>
          <h1 className="glitch-title max-w-full text-[3.1rem] font-black uppercase leading-[0.88] tracking-wide text-white sm:text-7xl xl:text-8xl" data-text="POSA NARENDRA">
            POSA <span className="block">NARENDRA</span>
          </h1>
          <div className="mt-5 min-h-16 font-display text-[1.45rem] font-bold leading-tight text-cyan-100 sm:mt-6 sm:min-h-12 sm:text-4xl">
            <span className="text-slate-500">role://</span>{' '}
            <motion.span
              key={roles[roleIndex]}
              initial={{ opacity: 0, y: 18, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              className="text-gradient inline-block max-w-full break-words"
            >
              {roles[roleIndex]}
            </motion.span>
          </div>
          <p className="mt-5 max-w-[calc(100vw-2rem)] break-words text-base leading-7 text-slate-300 sm:mt-6 sm:max-w-2xl sm:text-lg sm:leading-8">
            Full Stack Python Developer building scalable Django backends, React frontends, REST API systems, and immersive AI-inspired web experiences.
          </p>
          <div className="mt-7 grid gap-3 min-[520px]:grid-cols-2 sm:mt-8 sm:flex sm:flex-wrap">
            <a href="#projects" className="neon-button">Explore Projects</a>
            <a href="/Narendra-Resume.pdf" className="neon-button secondary">Download Resume</a>
            <a href="#contact" className="neon-button secondary">Contact Me</a>
            <a href="#github" className="neon-button ghost">Launch System</a>
          </div>
          <div className="mt-7 grid max-w-2xl grid-cols-1 gap-3 sm:mt-9 sm:grid-cols-3">
            {['TRACEBYTE', 'Django + React', 'REST API Core'].map((item) => (
              <div key={item} className="border border-cyan-neon/15 bg-white/[0.035] p-3 text-center backdrop-blur">
                <p className="font-display text-xs uppercase tracking-[0.22em] text-slate-400">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="relative min-h-[360px] sm:min-h-[460px] lg:min-h-[520px]"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{
            opacity: 1,
            scale: 1,
            rotateX: pointer.y * -4,
            rotateY: pointer.x * 6,
          }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
        >
          <div className="absolute inset-0">
            <Suspense fallback={<div className="h-full w-full bg-cyan-neon/5" />}>
              <HologramScene />
            </Suspense>
          </div>
          <div className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-neon/40 bg-black/20 p-2 shadow-neon backdrop-blur min-[390px]:h-60 min-[390px]:w-60 sm:h-72 sm:w-72">
            <div className="relative h-full overflow-hidden rounded-full border border-white/10 bg-[radial-gradient(circle,rgba(0,245,255,.24),transparent_65%)]">
              <img
                src={pnAvatar}
                alt="POSA NARENDRA cyberpunk developer avatar"
                className="h-full w-full scale-110 object-cover object-[62%_48%] saturate-125"
                loading="eager"
              />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_62%_42%,transparent_28%,rgba(2,3,10,.18)_55%,rgba(2,3,10,.58)_100%)]" />
              <div className="absolute inset-0 rounded-full shadow-[inset_0_0_42px_rgba(0,245,255,.35),inset_0_0_80px_rgba(255,46,247,.16)]" />
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 border border-cyan-neon/30 bg-black/55 px-3 py-1.5 text-center backdrop-blur sm:bottom-5 sm:px-4 sm:py-2">
                <p className="font-display text-[10px] uppercase tracking-[0.22em] text-cyan-neon sm:text-xs sm:tracking-[0.28em]">PN Avatar</p>
              </div>
            </div>
          </div>
          {icons.map((Icon, index) => (
            <motion.div
              key={index}
              className="absolute grid h-10 w-10 place-items-center border border-cyan-neon/25 bg-black/45 text-xl text-cyan-neon shadow-neon backdrop-blur sm:h-12 sm:w-12 sm:text-2xl"
              style={{
                left: `${15 + (index % 3) * 31}%`,
                top: `${12 + Math.floor(index / 3) * 64}%`,
              }}
              animate={{ y: [0, -16, 0], rotate: [0, 8, -4, 0] }}
              transition={{ duration: 4 + index * 0.35, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Icon />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
