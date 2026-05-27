import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const messages = [
  'System Online',
  'Welcome Narendra',
  'GitHub Synced',
  'Django Systems Active',
  'React Modules Loaded',
  'Developer Environment Ready',
];

export default function AIAssistant() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((value) => (value + 1) % messages.length);
    }, 2600);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="fixed bottom-5 right-4 z-40 flex items-center gap-3 rounded-full border border-cyan-neon/30 bg-black/45 px-3 py-2 shadow-neon backdrop-blur-xl sm:bottom-7 sm:right-7"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.04 }}
    >
      <div className="relative grid h-12 w-12 place-items-center rounded-full border border-cyan-neon/45 bg-cyan-neon/10">
        <span className="absolute h-full w-full animate-ping rounded-full bg-cyan-neon/20" />
        <span className="h-4 w-4 rounded-full bg-cyan-neon shadow-[0_0_28px_#00f5ff]" />
      </div>
      <div className="hidden pr-2 sm:block">
        <p className="font-display text-[10px] uppercase tracking-[0.25em] text-slate-400">AI Orb</p>
        <p className="text-sm font-semibold text-cyan-100">{messages[index]}</p>
      </div>
    </motion.div>
  );
}
