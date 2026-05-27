import gsap from 'gsap';
import { useEffect, useRef } from 'react';

export function useGsapHud() {
  const scope = useRef(null);

  useEffect(() => {
    if (!scope.current) return undefined;
    const context = gsap.context(() => {
      gsap.to('.gsap-sweep', {
        xPercent: 140,
        opacity: 0.75,
        duration: 2.8,
        repeat: -1,
        ease: 'power2.inOut',
        yoyo: true,
      });
      gsap.to('.gsap-beacon', {
        scale: 1.18,
        opacity: 0.45,
        duration: 1.6,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    }, scope);

    return () => context.revert();
  }, []);

  return scope;
}
