import { useState, useRef } from 'react';
import { contactData } from '../constants';
import BgCanvas from './BgCanvas';
import './Contact.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const formRef = useRef(null);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    // Simulate network delay
    await new Promise((r) => setTimeout(r, 1800));
    setStatus('sent');
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setStatus('idle'), 4000);
  };

  return (
    <section className="contact section" id="contact">
      <BgCanvas color="#ff6b6b" />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="contact__header">
          <p className="section-tag">{contactData.tag}</p>
          <h2 className="section-title">{contactData.title}</h2>
          <div className="divider" />
          <p className="section-subtitle">{contactData.description}</p>
        </div>

        <div className="contact__inner">
          {/* Left: Info */}
          <div className="contact__info">
            {/* Email card */}
            <a href={`mailto:${contactData.email}`} className="contact__email-card glass-card">
              <div className="contact__email-icon">✉️</div>
              <div>
                <p className="contact__email-label">Email Me At</p>
                <p className="contact__email-value">{contactData.email}</p>
              </div>
            </a>

            {/* Socials */}
            <div className="contact__socials">
              {contactData.socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="contact__social glass-card"
                  style={{ '--hover-color': social.color }}
                >
                  <span className="contact__social-icon" style={{ color: social.color }}>
                    {social.icon}
                  </span>
                  <span className="contact__social-name">{social.name}</span>
                  <svg className="contact__social-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
              ))}
            </div>

            {/* Availability card */}
            <div className="contact__availability glass-card">
              <div className="contact__avail-pulse" />
              <div>
                <p className="contact__avail-title">Open to Opportunities</p>
                <p className="contact__avail-desc">Available for freelance, full-time, or consulting roles.</p>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <form ref={formRef} onSubmit={handleSubmit} className="contact__form glass-card">
            <h3 className="contact__form-title">Send a Message</h3>

            <div className="contact__field">
              <label className="contact__label">Your Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
                className="contact__input"
              />
            </div>

            <div className="contact__field">
              <label className="contact__label">Email Address</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="john@example.com"
                required
                className="contact__input"
              />
            </div>

            <div className="contact__field">
              <label className="contact__label">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                required
                rows={5}
                className="contact__input contact__textarea"
              />
            </div>

            <button
              type="submit"
              className={`btn btn-primary contact__submit ${status === 'sending' ? 'contact__submit--loading' : ''}`}
              disabled={status === 'sending' || status === 'sent'}
            >
              {status === 'idle' && '🚀 Send Message'}
              {status === 'sending' && (
                <>
                  <span className="contact__spinner" />
                  Sending...
                </>
              )}
              {status === 'sent' && '✅ Message Sent!'}
              {status === 'error' && '❌ Try Again'}
            </button>

            {status === 'sent' && (
              <p className="contact__success">
                Thank you! I'll get back to you within 24 hours. 🎉
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
