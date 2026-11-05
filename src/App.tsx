import { useEffect } from 'react';
import { MotionConfig } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { navLinks } from './data';
import { useActiveSection } from './hooks/useActiveSection';
import { About } from './sections/About';
import { Contact } from './sections/Contact';
import { Education } from './sections/Education';
import { Hero } from './sections/Hero';
import { Projects } from './sections/Projects';
import { Skills } from './sections/Skills';

const sectionIds = ['top', ...navLinks.map((link) => link.id)] as const;

export default function App() {
  const active = useActiveSection(sectionIds);

  useEffect(() => {
    const id = window.location.hash.slice(1);
    if (!id) return;
    const frame = requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'auto' });
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <Navbar active={active} />
      <main>
        <Hero />
        <About />
        <Projects />
        <Education />
        <Skills />
        <Contact />
      </main>
    </MotionConfig>
  );
}
