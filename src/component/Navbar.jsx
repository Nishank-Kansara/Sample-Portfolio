import { useState, useEffect, useRef } from 'react';
import { navLinks } from '../constants';
import './Navbar.css';

export default function Navbar() {
  const [active, setActive] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);

      // Active section detection
      const sections = navLinks.map(link => document.getElementById(link.id));
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && window.scrollY >= section.offsetTop - 200) {
          setActive(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavClick = (id) => {
    setActive(id);
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        {/* Logo */}
        <a href="#" className="navbar__logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <span className="navbar__logo-bracket">{'<'}</span>
          <span className="navbar__logo-name">Nisha</span>
          <span className="navbar__logo-bracket">{'/>'}</span>
        </a>

        {/* Desktop Links */}
        <ul className="navbar__links">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                className={`navbar__link ${active === link.id ? 'navbar__link--active' : ''}`}
                onClick={() => handleNavClick(link.id)}
              >
                {link.label}
                <span className="navbar__link-dot" />
              </button>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <a href="#contact" className="navbar__cta btn btn-primary hide-mobile">
          Hire Me ✨
        </a>

        {/* Hamburger */}
        <button
          className={`navbar__hamburger ${menuOpen ? 'navbar__hamburger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile Menu */}
      <div ref={menuRef} className={`navbar__mobile-menu ${menuOpen ? 'navbar__mobile-menu--open' : ''}`}>
        {navLinks.map((link, i) => (
          <button
            key={link.id}
            className={`navbar__mobile-link ${active === link.id ? 'navbar__mobile-link--active' : ''}`}
            style={{ animationDelay: `${i * 0.07}s` }}
            onClick={() => handleNavClick(link.id)}
          >
            {link.label}
          </button>
        ))}
        <a href="#contact" className="btn btn-primary" style={{ marginTop: '1rem' }}>
          Hire Me ✨
        </a>
      </div>
    </nav>
  );
}
