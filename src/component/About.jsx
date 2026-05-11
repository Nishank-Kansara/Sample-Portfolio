import { useRef, useEffect } from 'react';
import AboutCanvas from './AboutCanvas';
import { aboutData } from '../constants';
import './About.css';

function useIntersectionObserver(ref, threshold = 0.2) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, threshold]);
}

function StatCard({ value, label, delay }) {
  return (
    <div className="about__stat glass-card" style={{ animationDelay: `${delay}s` }}>
      <span className="about__stat-value gradient-text">{value}</span>
      <span className="about__stat-label">{label}</span>
    </div>
  );
}

export default function About() {
  const sectionRef = useRef(null);
  useIntersectionObserver(sectionRef);

  return (
    <section className="about section" id="about" ref={sectionRef}>
      <div className="gradient-orb gradient-orb-1" />
      <div className="container about__inner">
        {/* Left: 3D visual */}
        <div className="about__visual">
          <div className="about__canvas-wrapper">
            <AboutCanvas />
          </div>
        </div>

        {/* Right: Content */}
        <div className="about__content">
          <p className="section-tag">{aboutData.tag}</p>
          <h2 className="section-title">{aboutData.title}</h2>
          <div className="divider" />
          <p className="about__desc">{aboutData.description}</p>
          <p className="about__desc" style={{ marginTop: '1rem' }}>{aboutData.description2}</p>

          {/* Stats grid */}
          <div className="about__stats stagger-children">
            {aboutData.stats.map((stat, i) => (
              <StatCard key={stat.label} value={stat.value} label={stat.label} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
