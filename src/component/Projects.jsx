import { useState } from 'react';
import { projects } from '../constants';
import BgCanvas from './BgCanvas';
import './Projects.css';

function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <article
      className={`project-card glass-card ${project.featured ? 'project-card--featured' : ''}`}
      style={{
        animationDelay: `${index * 0.1}s`,
        borderColor: hovered ? project.color + '66' : undefined,
        boxShadow: hovered ? `0 8px 40px ${project.color}33` : undefined,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Top gradient accent */}
      <div className="project-card__accent" style={{ background: project.gradient }} />

      {/* Emoji icon */}
      <div className="project-card__emoji" style={{ background: project.color + '22', boxShadow: `0 0 20px ${project.color}33` }}>
        {project.emoji}
      </div>

      {/* Featured badge */}
      {project.featured && (
        <span className="project-card__featured-badge">⭐ Featured</span>
      )}

      <h3 className="project-card__title">{project.title}</h3>
      <p className="project-card__desc">{project.description}</p>

      {/* Tags */}
      <div className="project-card__tags">
        {project.tags.map((tag) => (
          <span key={tag} className="project-card__tag" style={{ borderColor: project.color + '55', color: project.color }}>
            {tag}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="project-card__links">
        <a href={project.github} className="project-card__link" aria-label="GitHub">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
          </svg>
          Code
        </a>
        <a href={project.live} className="project-card__link project-card__link--primary" style={{ background: project.color + '22', color: project.color, borderColor: project.color + '55' }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
          </svg>
          Live Demo
        </a>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section className="projects section" id="projects">
      <BgCanvas color="#915eff" />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="projects__header">
          <p className="section-tag">What I've Built</p>
          <h2 className="section-title">Featured Projects</h2>
          <div className="divider" />
          <p className="section-subtitle">
            A selection of projects that showcase my skills in building full-stack applications, 
            3D experiences, and creative solutions.
          </p>
        </div>

        <div className="projects__grid stagger-children">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        <div className="projects__cta">
          <a href="#" className="btn btn-outline">
            View All Projects →
          </a>
        </div>
      </div>
    </section>
  );
}
