import { useEffect, useRef, useState } from 'react';
import './Contact.css';

/* ── FeaturedCardEventCTA ───────────────────────────────────── */
function FeaturedCardEventCTA({ title, badge, description, confirmLabel }) {
  const [confirmed, setConfirmed] = useState(false);

  return (
    <div className={`featured-cta ${confirmed ? 'featured-cta--confirmed' : ''}`}>
      <div className="featured-cta__inner">
        <div className="featured-cta__top">
          <span className="featured-cta__badge">{badge}</span>
          <div className="featured-cta__badge-pulse" />
        </div>
        <h3 className="featured-cta__title">{title}</h3>
        <p className="featured-cta__desc">{description}</p>
        {!confirmed ? (
          <button className="featured-cta__btn btn-primary" onClick={() => setConfirmed(true)}>
            {confirmLabel}
          </button>
        ) : (
          <div className="featured-cta__success">
            <span>✓</span> You're in! Talk to you soon. ✨
          </div>
        )}
      </div>
      <div className="featured-cta__deco">🌸</div>
    </div>
  );
}

/* ── Contact ────────────────────────────────────────────────── */
const contactLinks = [
  {
    icon: '📧',
    label: 'Email',
    value: 'anic.villegas@gmail.com',
    href: 'mailto:anic.villegas@gmail.com',
  },
  {
    icon: '📱',
    label: 'Phone / WhatsApp',
    value: '+63 961-9488-981',
    href: 'tel:+639619488981',
  },
  {
    icon: '📍',
    label: 'Location',
    value: 'Valencia, Negros Oriental, Philippines',
    href: null,
  },
];

export default function Contact() {
  const sectionRef = useRef(null);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    const els = sectionRef.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    els?.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => setFormState(s => ({ ...s, [e.target.name]: e.target.value }));
  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="contact" ref={sectionRef}>
      <div className="contact__blob contact__blob--1" />
      <div className="contact__blob contact__blob--2" />

      <div className="container">
        {/* Header */}
        <div className="contact__header reveal">
          <span className="section-label">Let's Connect</span>
          <h2 className="section-title">
            Ready to work<br />
            <em style={{ fontStyle: 'italic', color: 'var(--burgundy)' }}>together?</em>
          </h2>
          <p className="contact__subtitle">
            I'm actively looking for VA opportunities. Drop me a message — I'd love to hear from you! 💌
          </p>
        </div>

        {/* Featured CTA card — light + dark mode bg-secondary wrapper */}
        <div className="light-mode bg-secondary contact__featured-wrap reveal">
          <div className="dark-mode bg-secondary">
            <FeaturedCardEventCTA
              title="Let's work together!"
              badge="Available"
              description="I'm open to virtual assistant, customer support, or admin roles. Let's hop on a quick call and see how I can help your business."
              confirmLabel="Reach out now! ✨"
            />
          </div>
        </div>

        {/* Main two-column layout */}
        <div className="contact__grid">
          {/* Left: Contact info */}
          <div className="contact__info reveal-left">
            <h3 className="contact__info-title">Get in touch</h3>
            <p className="contact__info-sub">
              Prefer a direct line? Here's how to reach me.
            </p>

            <div className="contact__links">
              {contactLinks.map((c) => (
                <div key={c.label} className="contact__link-item">
                  <span className="contact__link-icon">{c.icon}</span>
                  <div className="contact__link-text">
                    <span className="contact__link-label">{c.label}</span>
                    {c.href ? (
                      <a href={c.href} className="contact__link-value">{c.value}</a>
                    ) : (
                      <span className="contact__link-value">{c.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Availability note */}
            <div className="contact__availability">
              <span className="contact__avail-dot" />
              <div>
                <strong>Open to opportunities</strong>
                <p>Full-time · Part-time · Contract</p>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="contact__form-wrap reveal-right">
            {!sent ? (
              <form className="contact__form card" onSubmit={handleSubmit}>
                <h3 className="contact__form-title">Send me a message 💌</h3>
                <div className="contact__field">
                  <label className="contact__label">Your Name</label>
                  <input
                    className="contact__input"
                    type="text"
                    name="name"
                    placeholder="e.g. Jane Smith"
                    value={formState.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="contact__field">
                  <label className="contact__label">Email Address</label>
                  <input
                    className="contact__input"
                    type="email"
                    name="email"
                    placeholder="you@email.com"
                    value={formState.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="contact__field">
                  <label className="contact__label">Message</label>
                  <textarea
                    className="contact__input contact__textarea"
                    name="message"
                    placeholder="Tell me about the role or project..."
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={4}
                  />
                </div>
                <button type="submit" className="btn-primary contact__submit">
                  Send message →
                </button>
              </form>
            ) : (
              <div className="contact__success card">
                <div className="contact__success-icon">🎉</div>
                <h3>Message sent!</h3>
                <p>Thank you for reaching out. I'll get back to you within 24 hours. ✨</p>
                <button className="btn-outline" onClick={() => setSent(false)}>
                  Send another
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer strip */}
      <div className="contact__footer">
        <p>© 2025 Anna Nicole Villegas · Built with ♡ in the Philippines</p>
      </div>
    </section>
  );
}