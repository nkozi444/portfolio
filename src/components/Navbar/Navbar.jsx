import { useState, useEffect } from 'react';
import './Navbar.css';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (href) => {
    setActive(href);
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">
        {/* Logo */}
        <a href="#hero" className="navbar__logo" onClick={() => handleNav('')}>
          <span className="navbar__logo-monogram">AN</span>
          <span className="navbar__logo-text">Anna Nicole</span>
        </a>

        {/* Desktop Links */}
        <ul className="navbar__links">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`navbar__link ${active === l.href ? 'navbar__link--active' : ''}`}
                onClick={() => handleNav(l.href)}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a href="#contact" className="navbar__cta btn-primary">
          Hire Me ✨
        </a>

        {/* Mobile Hamburger */}
        <button
          className={`navbar__burger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`navbar__mobile ${menuOpen ? 'navbar__mobile--open' : ''}`}>
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="navbar__mobile-link"
            onClick={() => handleNav(l.href)}
          >
            {l.label}
          </a>
        ))}
        <a href="#contact" className="btn-primary" style={{ marginTop: '1rem', textAlign: 'center' }}>
          Hire Me ✨
        </a>
      </div>
    </nav>
  );
}