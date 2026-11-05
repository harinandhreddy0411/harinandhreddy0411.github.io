import { useEffect, useState } from 'react';
import { navLinks, profile } from '../data';

interface NavbarProps {
  active: string;
}

export function Navbar({ active }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={`nav${scrolled || open ? ' nav-solid' : ''}`}>
      <div className="nav-inner">
        <a className="nav-brand" href="#top" onClick={close} aria-label="Back to top">
          HarinandhReddy <span>Areti</span>
        </a>

        <nav className="nav-links" aria-label="Primary">
          {navLinks.map((link) => (
            <a key={link.id} href={`#${link.id}`} aria-current={active === link.id ? 'true' : undefined}>
              {link.label}
            </a>
          ))}
        </nav>

        <a className="nav-cv" href={profile.cvPath} download>
          Download CV
        </a>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
        </button>
      </div>

      <div id="mobile-menu" className="nav-sheet" hidden={!open}>
        {navLinks.map((link) => (
          <a key={link.id} href={`#${link.id}`} onClick={close} aria-current={active === link.id ? 'true' : undefined}>
            {link.label}
          </a>
        ))}
        <a className="nav-sheet-cv" href={profile.cvPath} download onClick={close}>
          Download CV
        </a>
      </div>
    </header>
  );
}
