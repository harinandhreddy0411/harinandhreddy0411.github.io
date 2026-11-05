import { Reveal } from '../components/Reveal';

const stats = [
  { value: '9.01', label: 'CGPA out of 10' },
  { value: '3', label: 'Kyverno pull requests' },
  { value: '5', label: 'featured builds below' },
];

export function About() {
  return (
    <section id="about" className="section">
      <div className="wrap about-grid">
        <Reveal>
          <p className="label">About me</p>
          <h2 className="h2">
            A first-year student who ships <em>real</em> things.
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="about-body">
          <p>
            I'm a computer science student at <mark>Amrita Vishwa Vidyapeetham</mark> in Amritapuri, and I learn fastest by
            building something that has to work for other people.
          </p>
          <p>
            My projects keep landing on the same idea: put the rules where they cannot be skipped. In a mentor-matching
            platform that meant <mark>triggers and stored procedures in MySQL</mark>. In a trip planner it meant a language
            model that is only allowed to choose from places a map service has verified.
          </p>
          <p>
            Outside coursework I contribute to <mark>Kyverno</mark>, a CNCF Kubernetes policy engine, where reviewers have
            taught me more about testing and scoping a change than any lecture. I also write Android reverse-engineering
            challenges with the biOs Pentest Club, and I play hockey for the college team.
          </p>

          <dl className="stats">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt>{stat.value}</dt>
                <dd>{stat.label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
