import type { CSSProperties } from 'react';
import { profile } from '../data';

interface NameLineProps {
  text: string;
  baseDelay: number;
  className: string;
}

function NameLine({ text, baseDelay, className }: NameLineProps) {
  return (
    <span className={`name-line ${className}`}>
      {Array.from(text).map((letter, index) => (
        <span
          key={index}
          className="ch"
          aria-hidden="true"
          style={{ '--i': index, '--d': `${baseDelay}ms` } as CSSProperties}
        >
          {letter}
        </span>
      ))}
    </span>
  );
}

export function Hero() {
  return (
    <section id="top" className="hero">
      <div className="wrap hero-grid">
        <p className="eyebrow">B.Tech CSE · Amrita Amritapuri · Kyverno contributor</p>

        <h1 className="name" aria-label={`${profile.firstName} ${profile.lastName}`}>
          <NameLine text={profile.firstName} baseDelay={150} className="name-first" />
          <NameLine text={profile.lastName} baseDelay={900} className="name-last" />
        </h1>

        <div className="hero-foot">
          <p className="hero-intro">
            I build things where the rules are enforced by the system, not by hope: a database that refuses bad data, a
            planner that can only pick verified places, and policy fixes that merge into Kyverno.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#projects">
              View work
            </a>
            <a className="btn btn-ghost" href="#contact">
              Get in touch
            </a>
            <a className="btn-text" href={profile.cvPath} download>
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
