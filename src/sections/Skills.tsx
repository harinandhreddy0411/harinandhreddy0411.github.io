import { Reveal } from '../components/Reveal';
import { skillGroups } from '../data';

export function Skills() {
  return (
    <section id="skills" className="section">
      <div className="wrap">
        <Reveal>
          <p className="label">What I work with</p>
          <h2 className="h2">
            Tools I have actually <em>shipped</em> with.
          </h2>
        </Reveal>

        <ul className="skill-grid">
          {skillGroups.map((group, index) => (
            <li key={group.label}>
              <Reveal delay={(index % 3) * 0.08}>
                <div className="skill-card">
                  <div className="skill-top">
                    <span className="skill-badge">{group.badge}</span>
                    <span className="skill-num">{String(index + 1).padStart(2, '0')}</span>
                  </div>
                  <h3>{group.label}</h3>
                  <p>{group.items.join(' · ')}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
