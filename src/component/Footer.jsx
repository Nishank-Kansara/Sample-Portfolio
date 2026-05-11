import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        {/* Logo */}
        <div className="footer__logo">
          <span className="footer__logo-bracket">{'<'}</span>
          <span className="footer__logo-name">Nisha</span>
          <span className="footer__logo-bracket">{'/>'}</span>
        </div>

        {/* Nav links */}
        <nav className="footer__nav">
          {['About', 'Skills', 'Projects', 'Journey', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="footer__link"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Copyright */}
        <p className="footer__copy">
          © {new Date().getFullYear()} Nisha. Crafted with ❤️ & Three.js
        </p>
      </div>

      {/* Decorative line */}
      <div className="footer__glow-line" />
    </footer>
  );
}
