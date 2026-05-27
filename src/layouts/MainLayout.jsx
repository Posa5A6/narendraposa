import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import AIAssistant from '../components/AIAssistant.jsx';
import FuturisticCursor from '../components/FuturisticCursor.jsx';
import { SystemProvider } from '../context/SystemContext.jsx';
import { useLenis } from '../hooks/useLenis.js';

const navItems = ['about', 'experience', 'skills', 'projects', 'github', 'contact'];
const CyberBackground = lazy(() => import('../components/CyberBackground.jsx'));
const HudOverlay = lazy(() => import('../components/HudOverlay.jsx'));

export default function MainLayout() {
  useLenis();

  return (
    <SystemProvider>
      <Suspense fallback={null}>
        <CyberBackground />
        <HudOverlay />
      </Suspense>
      <FuturisticCursor />
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-cyan-neon/10 bg-void/70 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <a href="#home" className="font-display text-sm font-black uppercase tracking-[0.28em] text-cyan-neon">
            Narendra OS
          </a>
          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <a key={item} href={`#${item}`} className="hud-link">
                {item}
              </a>
            ))}
          </div>
          <a href="#contact" className="mobile-header-action neon-button compact">
            Open Link
          </a>
        </nav>
        <div className="mobile-nav-scroll border-t border-cyan-neon/10 px-4 pb-3 lg:hidden">
          <div className="mobile-nav-track flex gap-2 overflow-x-auto">
            {navItems.map((item) => (
              <a key={item} href={`#${item}`} className="hud-link shrink-0">
                {item}
              </a>
            ))}
          </div>
        </div>
      </header>
      <main className="relative z-10">
        <Outlet />
      </main>
      <AIAssistant />
    </SystemProvider>
  );
}
