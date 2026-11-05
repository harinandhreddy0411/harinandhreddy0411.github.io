import type { CSSProperties } from 'react';
import { ProjectArt } from '../components/ProjectArt';
import { Reveal } from '../components/Reveal';
import { openSourceNotes, projects, pullRequests } from '../data';
import type { Project } from '../data';

function pad(index: number) {
  return String(index + 1).padStart(2, '0');
}

function Visual({ project }: { project: Project }) {
  if (project.image) {
    return (
      <div className="frame">
        <div className="frame-bar">
          <i />
          <i />
          <i />
          <span>{project.image.url}</span>
        </div>
        <img src={project.image.src} alt={project.image.alt} loading="lazy" width="1400" height="780" />
      </div>
    );
  }
  return (
    <div className="art">
      <ProjectArt kind={project.art} />
    </div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Reveal>
      <article
        className={`project${index % 2 === 1 ? ' project-flip' : ''}`}
        style={{ '--accent': project.accent } as CSSProperties}
      >
        <div className="project-visual">
          <Visual project={project} />
        </div>

        <div className="project-body">
          <p className="project-kicker">
            <span>{pad(index)}</span> {project.kind}
          </p>
          <h3 className="project-title">{project.title}</h3>
          <p className="project-pitch">{project.pitch}</p>

          <ul className="project-points">
            {project.highlights.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>

          <ul className="tags" aria-label="Technologies">
            {project.stack.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>

          {project.links.length > 0 && (
            <div className="project-links">
              {project.links.map((link) => (
                <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                  {link.label} <span aria-hidden="true">↗</span>
                </a>
              ))}
            </div>
          )}
          {project.note && <p className="project-note">{project.note}</p>}
        </div>
      </article>
    </Reveal>
  );
}

function OpenSource() {
  return (
    <Reveal>
      <article className="oss" style={{ '--accent': '#5b8def' } as CSSProperties}>
        <div className="oss-head">
          <p className="project-kicker">
            <span>{pad(projects.length)}</span> Open source
          </p>
          <h3 className="project-title">Kyverno pull requests</h3>
          <p className="project-pitch">
            Contributions to Kyverno, the Kubernetes policy engine in the CNCF.
          </p>
        </div>

        <ul className="pr-list">
          {pullRequests.map((pr) => (
            <li key={pr.number}>
              <a href={pr.href} target="_blank" rel="noreferrer" className="pr">
                <span className="pr-ref">
                  {pr.repo} #{pr.number}
                </span>
                <span className="pr-title">{pr.title}</span>
                <span className="pr-detail">{pr.detail}</span>
                <span className={`pr-status${pr.status === 'Merged' ? ' is-merged' : ''}`}>{pr.status}</span>
              </a>
            </li>
          ))}
        </ul>

        <ul className="oss-notes">
          {openSourceNotes.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
      </article>
    </Reveal>
  );
}

export function Projects() {
  return (
    <section id="projects" className="section">
      <div className="wrap">
        <Reveal>
          <p className="label">Selected work</p>
          <h2 className="h2">
            Projects, from the biggest <em>build</em> to the smallest PR.
          </h2>
        </Reveal>

        <div className="project-list">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
          <OpenSource />
        </div>
      </div>
    </section>
  );
}
