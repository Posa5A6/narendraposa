import { useGsapHud } from '../animations/useGsapHud.js';

export default function HudOverlay() {
  const scope = useGsapHud();

  return (
    <div ref={scope} className="pointer-events-none fixed inset-0 z-[2] overflow-hidden">
      <div className="gsap-sweep absolute left-[-30%] top-24 h-px w-1/2 bg-gradient-to-r from-transparent via-cyan-neon to-transparent opacity-40" />
      <div className="gsap-sweep absolute bottom-28 right-[10%] h-px w-1/3 bg-gradient-to-r from-transparent via-magenta-hot to-transparent opacity-30" />
      <div className="gsap-beacon absolute left-5 top-1/2 hidden h-20 w-px bg-cyan-neon/50 shadow-[0_0_24px_#00f5ff] lg:block" />
      <div className="gsap-beacon absolute right-5 top-1/3 hidden h-16 w-px bg-magenta-hot/50 shadow-[0_0_24px_#ff2ef7] lg:block" />
    </div>
  );
}
