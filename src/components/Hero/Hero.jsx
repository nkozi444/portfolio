import './Hero.css';
import profilePic from "../../assets/your-photo.png";

const roles = ['Virtual Assistant', 'Customer Support Pro', 'Travel Coordinator', 'Admin Specialist'];

export default function Hero() {
  return (
    <section className="hero" id="hero">
      {/* Decorative blobs */}
      <div className="hero__blob hero__blob--1" />
      <div className="hero__blob hero__blob--2" />
      <div className="hero__blob hero__blob--3" />

      {/* Floating deco elements */}
      <div className="hero__deco hero__deco--star">✦</div>
      <div className="hero__deco hero__deco--heart">♡</div>
      <div className="hero__deco hero__deco--dot" />
      <div className="hero__deco hero__deco--ring" />

      <div className="container hero__inner">
        {/* Left: Text */}
        <div className="hero__content">
          <div className="hero__badge">
            <span className="hero__badge-dot" />
            Available for Work ✨
          </div>

          <p className="hero__hello">Hello, I'm</p>
          <h1 className="hero__name">
            Anna Nicole
            <span className="hero__name-accent"> Villegas</span>
          </h1>

          {/* Animated role ticker */}
          <div className="hero__roles">
            {roles.map((r, i) => (
              <span key={r} className="hero__role" style={{ animationDelay: `${i * 2.5}s` }}>
                {r}
              </span>
            ))}
          </div>

          <p className="hero__tagline">
            A versatile VA with <strong>3+ years</strong> of experience turning chaos into
            smooth operations — from customer support to travel booking & admin wizardry. ✨
          </p>

          <div className="hero__actions">
            <a href="#contact" className="btn-primary">
              Let's work together →
            </a>
            <a href="#about" className="btn-outline">
              Learn more
            </a>
          </div>

          {/* Mini stats */}
          <div className="hero__stats">
            <div className="hero__stat">
              <span className="hero__stat-num">3+</span>
              <span className="hero__stat-label">Years Exp.</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-num">100%</span>
              <span className="hero__stat-label">Remote-Ready</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-num">20+</span>
              <span className="hero__stat-label">Tools Mastered</span>
            </div>
          </div>
        </div>

        {/* Right: Avatar card */}
        <div className="hero__visual">
          <div className="hero__avatar-wrap">
            <div className="hero__avatar-ring" />
            <div className="hero__avatar">
              <img
              src={profilePic}
              alt="Profile"
              className='hero__avatar-image'
              />
            </div>
            {/* Floating chips */}
            <div className="hero__chip hero__chip--1">
              <span>📧</span> Zendesk Pro
            </div>
            <div className="hero__chip hero__chip--2">
              <span>✈️</span> Sabre GDS
            </div>
            <div className="hero__chip hero__chip--3">
              <span>📓</span> Notion
            </div>
            <div className="hero__chip hero__chip--4">
              <span>🗓️</span> Scheduling
            </div>
          </div>
        </div>
      </div>

      {/* Scroll nudge */}
      <div className="hero__scroll-nudge">
        <div className="hero__scroll-mouse">
          <div className="hero__scroll-wheel" />
        </div>
        <span>Scroll down</span>
      </div>
    </section>
  );
}