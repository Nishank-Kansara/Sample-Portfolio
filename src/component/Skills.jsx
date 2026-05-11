import { useRef, useEffect, useState } from 'react';
import { skills } from '../constants';
import BgCanvas from './BgCanvas';
import './Skills.css';

function SkillBar({ name, level, color, inView }) {
  return (
    <div className="skill-bar">
      <div className="skill-bar__header">
        <span className="skill-bar__name">{name}</span>
        <span className="skill-bar__level" style={{ color }}>{level}%</span>
      </div>
      <div className="skill-bar__track">
        <div
          className="skill-bar__fill"
          style={{
            width: inView ? `${level}%` : '0%',
            background: `linear-gradient(90deg, ${color}, ${color}99)`,
          }}
        />
      </div>
    </div>
  );
}

function SkillCard({ category, icon, color, items, inView, delay }) {
  return (
    <div className="skill-card glass-card" style={{ animationDelay: `${delay}s` }}>
      <div className="skill-card__header">
        <span className="skill-card__icon">{icon}</span>
        <div>
          <h3 className="skill-card__category">{category}</h3>
          <div className="skill-card__line" style={{ background: color }} />
        </div>
      </div>
      <div className="skill-card__bars">
        {items.map((item, i) => (
          <SkillBar key={item.name} {...item} color={color} inView={inView} />
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="skills section" id="skills" ref={sectionRef}>
      <BgCanvas color="#00d4ff" />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="skills__header">
          <p className="section-tag">What I Know</p>
          <h2 className="section-title">Technical Skills</h2>
          <div className="divider" />
          <p className="section-subtitle">
            A curated set of tools, technologies, and frameworks I use to bring ideas to life.
          </p>
        </div>

        <div className="skills__grid stagger-children">
          {skills.map((cat, i) => (
            <SkillCard key={cat.category} {...cat} inView={inView} delay={i * 0.15} />
          ))}
        </div>

        {/* Tech pill cloud */}
        <div className="skills__pills">
          {['React', 'Node.js', 'Three.js', 'Python', 'TypeScript', 'MongoDB', 'Docker', 'AWS',
            'GraphQL', 'PostgreSQL', 'Redis', 'GSAP', 'WebGL', 'Vite', 'Git'].map((tech) => (
            <span key={tech} className="skills__pill">{tech}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
