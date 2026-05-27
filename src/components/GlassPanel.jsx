import { motion } from 'framer-motion';

export default function GlassPanel({ children, className = '', as = motion.div, ...props }) {
  const Component = as;
  return (
    <Component
      className={`glass-panel relative overflow-hidden border border-cyan-neon/18 bg-white/[0.045] shadow-panel backdrop-blur-xl ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
