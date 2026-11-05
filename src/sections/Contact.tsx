import { useRef } from 'react';
import { useScroll } from 'framer-motion';
import { Reveal } from '../components/Reveal';
import { ScrollSignature } from '../components/Signature';
import { navLinks, profile } from '../data';

export function Contact() {
  const signRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: signRef, offset: ['start 0.95', 'start 0.45'] });

  return (
    <section id="contact" className="section contact">
      <div className="wrap">
        <Reveal>
          <p className="label">Contact</p>
          <h2 className="h2 contact-title">
            Have something to <em>build</em> or fix?
          </h2>
          <p className="contact-lead">
            I'm happy to talk about open source, something you're building, or a project that needs another pair of hands.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <a className="contact-mail" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          <div className="contact-links">
            <a href={profile.github} target="_blank" rel="noreferrer">
              GitHub <span aria-hidden="true">↗</span>
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn <span aria-hidden="true">↗</span>
            </a>
            <a href={profile.cvPath} download>
              Download CV <span aria-hidden="true">↓</span>
            </a>
          </div>
        </Reveal>

        <div ref={signRef} className="sign-off">
          <ScrollSignature progress={scrollYProgress} className="signature contact-signature" />
        </div>
      </div>

      <footer className="footer">
        <div className="wrap footer-row">
          <p>© 2026 {profile.fullName}</p>
          <nav aria-label="Footer">
            {navLinks.map((link) => (
              <a key={link.id} href={`#${link.id}`}>
                {link.label}
              </a>
            ))}
            <a href="#top">Back to top ↑</a>
          </nav>
        </div>
      </footer>
    </section>
  );
}
