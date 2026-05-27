import { lazy, Suspense } from 'react';

const About = lazy(() => import('../sections/About.jsx'));
const Achievements = lazy(() => import('../sections/Achievements.jsx'));
const Contact = lazy(() => import('../sections/Contact.jsx'));
const Experience = lazy(() => import('../sections/Experience.jsx'));
const GitHubDashboard = lazy(() => import('../sections/GitHubDashboard.jsx'));
const Hero = lazy(() => import('../sections/Hero.jsx'));
const Projects = lazy(() => import('../sections/Projects.jsx'));
const Skills = lazy(() => import('../sections/Skills.jsx'));

export default function Home() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-void" />}>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <GitHubDashboard />
      <Achievements />
      <Contact />
    </Suspense>
  );
}
