import { useEffect, useRef, useState } from 'react';
import HeroCanvas from './HeroCanvas';
import { heroData } from '../constants';
import './Hero.css';

const ROLES = heroData.roles;

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const timeoutRef = useRef(null);

  // Typewriter effect
  useEffect(() => {
    const current = ROLES[roleIndex];

    if (!isDeleting && displayed === current) {
      timeoutRef.current = setTimeout(() => setIsDeleting(true), 2200);
      return;
    }

    if (isDeleting && displayed === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
      return;
    }

    const speed = isDeleting ? 55 : 90;
    timeoutRef.current = setTimeout(() => {
      setDisplayed((prev) =>
        isDeleting ? current.slice(0, prev.length - 1) : current.slice(0, prev.length + 1)
      );
    }, speed);

    return () => clearTimeout(timeoutRef.current);
  }, [displayed, isDeleting, roleIndex]);

  return (
    <section className="hero" id="home">
      {/* 3D Canvas Background */}
      <div className="hero__canvas">
        <HeroCanvas />
      </div>

      {/* Content */}
      <div className="container hero__content">
        <div className="hero__text animate-fadeInUp">
          <span className="hero__greeting">{heroData.greeting}</span>
          <h1 className="hero__name gradient-text-animated">{heroData.name}</h1>

          <div className="hero__role-container">
            <span className="hero__role-static">I build </span>
            <span className="hero__role-typed">
              {displayed}
              <span className="hero__cursor">|</span>
            </span>
          </div>

          <p className="hero__tagline">{heroData.tagline}</p>

          <div className="hero__actions">
            <a href={heroData.cta.href} className="btn btn-primary hero__btn">
              🚀 {heroData.cta.label}
            </a>
            <a href={heroData.cta2.href} className="btn btn-outline hero__btn">
              📄 {heroData.cta2.label}
            </a>
          </div>

          {/* Social quick links */}
          <div className="hero__socials">
            {['GitHub', 'LinkedIn', 'Twitter'].map((s) => (
              <a key={s} href="#" className="hero__social-link" aria-label={s}>
                {s[0]}
              </a>
            ))}
          </div>
        </div>

        {/* Floating card */}
        <div className="hero__card animate-float">
          <div className="hero__card-inner glass-card">
            <div className="hero__card-dot" />
            <p className="hero__card-status">Available for work</p>
            <p className="hero__card-title">Building Digital Experiences</p>
            <div className="hero__card-tech-row">
              {['React', 'Three.js', 'Node.js'].map(t => (
                <span key={t} className="badge">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll">
        <span>Scroll</span>
        <div className="hero__scroll-line">
          <div className="hero__scroll-dot" />
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="hero__fade-bottom" />
    </section>
  );
}
