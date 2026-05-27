import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { bootLines } from '../data/profile.js';

export default function BootScreen({ onComplete }) {
  const [lineIndex, setLineIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLineIndex((value) => {
        if (value >= bootLines.length - 1) {
          clearInterval(interval);
          setTimeout(onComplete, 900);
          return value;
        }
        return value + 1;
      });
    }, 650);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-void"
      exit={{ opacity: 0, scale: 1.08, filter: 'blur(16px)' }}
      transition={{ duration: 0.9, ease: 'easeInOut' }}
    >
      <div className="absolute inset-0 bg-grid bg-[length:42px_42px] opacity-25" />
      <div className="absolute inset-0 boot-radial" />
      <div className="absolute inset-0 scanlines" />
      <motion.div
        className="relative w-[min(92vw,780px)] border border-cyan-neon/35 bg-black/45 p-5 shadow-neon backdrop-blur-2xl sm:p-8"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="mb-6 flex items-center justify-between border-b border-cyan-neon/20 pb-4 font-display text-xs uppercase tracking-[0.3em] text-cyan-neon">
          <span>Narendra OS</span>
          <span>Secure Boot v7.7</span>
        </div>
        <div className="space-y-4 font-mono text-sm text-cyan-100 sm:text-lg">
          {bootLines.map((line, index) => (
            <motion.div
              key={line}
              className={`terminal-line ${index <= lineIndex ? 'opacity-100' : 'opacity-20'}`}
              initial={{ opacity: 0, x: -14 }}
              animate={{ opacity: index <= lineIndex ? 1 : 0.2, x: 0 }}
            >
              <span className="text-magenta-hot">root@narendra-ai:</span>
              <span className="mx-2 text-cyan-neon">~$</span>
              <span>{line}</span>
            </motion.div>
          ))}
        </div>
        <div className="mt-8 h-2 overflow-hidden border border-cyan-neon/30 bg-cyan-neon/5">
          <motion.div
            className="h-full bg-gradient-to-r from-cyan-neon via-blue-electric to-magenta-hot"
            initial={{ width: '8%' }}
            animate={{ width: `${((lineIndex + 1) / bootLines.length) * 100}%` }}
            transition={{ duration: 0.45 }}
          />
        </div>
        <div className="mt-5 grid grid-cols-3 gap-3 text-[10px] uppercase tracking-[0.2em] text-slate-400">
          <span>Neural UI</span>
          <span className="text-center">GitHub Sync</span>
          <span className="text-right">Online</span>
        </div>
      </motion.div>
    </motion.div>
  );
}
