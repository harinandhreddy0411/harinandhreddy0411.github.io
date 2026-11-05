import { Reveal } from '../components/Reveal';
import { beyondClass, coursework, education } from '../data';

export function Education() {
  return (
    <section id="education" className="section">
      <div className="wrap">
        <Reveal>
          <p className="label">Education</p>
          <h2 className="h2">
            Where I <em>study</em>, and what else fills the week.
          </h2>
        </Reveal>

        <div className="edu-grid">
          <Reveal>
            <ol className="timeline">
              {education.map((item) => (
                <li key={item.school}>
                  <div className="timeline-head">
                    <h3>{item.school}</h3>
                    {item.when && <span className="timeline-when">{item.when}</span>}
                  </div>
                  <p>{item.detail}</p>
                  <p className="timeline-score">{item.score}</p>
                </li>
              ))}
            </ol>

            <h3 className="mini">Coursework so far</h3>
            <ul className="tags">
              {coursework.map((course) => (
                <li key={course}>{course}</li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <h3 className="mini first">Beyond the classroom</h3>
            <ul className="beyond">
              {beyondClass.map((item) => (
                <li key={item.title}>
                  <strong>{item.title}</strong>
                  <span>{item.detail}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
