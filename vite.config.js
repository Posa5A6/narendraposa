import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 900,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom', 'react-router-dom'],
          data: ['axios'],
          motion: ['framer-motion', 'gsap', 'lenis'],
          three: ['three', '@react-three/fiber', '@react-three/drei'],
          particles: ['@tsparticles/react', '@tsparticles/slim'],
          icons: ['react-icons/fa', 'react-icons/si', 'react-icons/tb'],
        },
      },
    },
  },
});
