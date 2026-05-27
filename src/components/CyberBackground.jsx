import Particles from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { useCallback } from 'react';

export default function CyberBackground() {
  const init = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 cyber-city" />
      <div className="absolute inset-0 bg-grid bg-[length:72px_72px] opacity-[0.09]" />
      <div className="absolute inset-0 rain-layer animate-rain" />
      <div className="absolute inset-0 scanlines opacity-40" />
      <div className="absolute left-1/2 top-0 h-[50rem] w-[50rem] -translate-x-1/2 rounded-full bg-cyan-neon/10 blur-[140px]" />
      <div className="absolute bottom-0 right-0 h-[36rem] w-[36rem] rounded-full bg-magenta-hot/10 blur-[110px]" />
      <Particles
        id="tsparticles"
        init={init}
        options={{
          fullScreen: false,
          fpsLimit: 45,
          particles: {
            number: { value: 70, density: { enable: true, area: 900 } },
            color: { value: ['#00f5ff', '#1877ff', '#ff2ef7'] },
            links: { enable: true, color: '#00f5ff', opacity: 0.16, distance: 145 },
            move: { enable: true, speed: 0.55 },
            opacity: { value: { min: 0.15, max: 0.55 } },
            size: { value: { min: 1, max: 3 } },
          },
        }}
        className="absolute inset-0"
      />
    </div>
  );
}
