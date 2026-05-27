import { AnimatePresence, motion } from 'framer-motion';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import MainLayout from './layouts/MainLayout.jsx';
import Home from './pages/Home.jsx';
import BootScreen from './components/BootScreen.jsx';

export default function App() {
  const [bootComplete, setBootComplete] = useState(
    () => new URLSearchParams(window.location.search).get('skipBoot') === '1',
  );

  return (
    <div className="min-h-screen bg-void text-slate-100 selection:bg-cyan-neon selection:text-void">
      <AnimatePresence mode="wait">
        {!bootComplete && <BootScreen key="boot" onComplete={() => setBootComplete(true)} />}
      </AnimatePresence>
      <motion.div
        initial={{ opacity: bootComplete ? 1 : 0 }}
        animate={{ opacity: bootComplete ? 1 : 0 }}
        transition={{ duration: 1.1, ease: 'easeOut' }}
      >
        <Routes>
          <Route element={<MainLayout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </motion.div>
    </div>
  );
}
