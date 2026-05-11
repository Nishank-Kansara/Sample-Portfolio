import { timelineData } from '../constants';
import './Timeline.css';

export default function Timeline() {
  return (
    <section className="timeline section" id="timeline">
      <div className="gradient-orb gradient-orb-2" />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="timeline__header">
          <p className="section-tag">My Journey</p>
          <h2 className="section-title">Experience & Education</h2>
          <div className="divider" />
          <p className="section-subtitle">
            A timeline of milestones, roles, and achievements that have shaped my career.
          </p>
        </div>

        <div className="timeline__track">
          {/* Center line */}
          <div className="timeline__line" />

          {timelineData.map((item, i) => (
            <div
              key={i}
              className={`timeline__item ${i % 2 === 0 ? 'timeline__item--left' : 'timeline__item--right'}`}
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              {/* Connector dot */}
              <div className="timeline__dot" style={{ background: item.color, boxShadow: `0 0 20px ${item.color}` }}>
                <span>{item.icon}</span>
              </div>

              {/* Card */}
              <div className="timeline__card glass-card">
                <div className="timeline__year" style={{ color: item.color }}>{item.year}</div>
                <h3 className="timeline__title">{item.title}</h3>
                <p className="timeline__company">
                  <span className="timeline__company-dot" style={{ background: item.color }} />
                  {item.company}
                </p>
                <p className="timeline__desc">{item.description}</p>
                <div className="timeline__accent" style={{ background: `linear-gradient(90deg, ${item.color}, transparent)` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
