import { useEffect, useRef } from 'react';
import './About.css';

const adminSkills = [
  { icon: '📞', title: 'Omnichannel Support', desc: 'Inbound/outbound calls, live chat, and email via Zendesk.' },
  { icon: '💳', title: 'Account & Billing', desc: 'Payments, subscription status, and billing discrepancies.' },
  { icon: '🔁', title: 'Escalation Management', desc: 'Identifying complex financial issues and routing refund requests accurately.' },
  { icon: '✈️', title: 'Logistics & Travel', desc: 'Coordinating travel arrangements and maintaining accurate booking records.' },
];

const techSkills = [
  { icon: '💻', title: 'Languages', desc: 'PHP, Python, JavaScript, HTML5, and CSS3.' },
  { icon: '⚙️', title: 'Frameworks & Tools', desc: 'Laravel, Symfony, React JS, MySQL, and Supabase.' },
  { icon: '🐳', title: 'Systems', desc: 'Docker environments and Git/GitHub for version control.' },
];

const stats = [
  { num: '3+', label: 'Years Experience' },
  { num: '100%', label: 'Remote Ready' },
  { num: '20+', label: 'Tools Mastered' },
  { num: '3', label: 'Roles Held' },
];

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.12 }
    );
    const reveals = sectionRef.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    reveals?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about" ref={sectionRef}>
      <div className="about__blob about__blob--1" />
      <div className="about__blob about__blob--2" />

      <div className="container">

        {/* ── Header ── */}
        <div className="about__header reveal">
          <span className="section-label">About Me</span>
          <h2 className="section-title about__title">
            The intersection of<br />
            <em>Efficiency</em> & Technology.
          </h2>
          <div className="about__header-line" />
        </div>

        {/* ── Summary + Stats ── */}
        <div className="about__summary-row">
          <div className="about__summary reveal-left">
            <p className="about__bio-lead">
              I'm a versatile <strong>Virtual Assistant & Technical Operations Specialist</strong> with
              over three years of experience delivering high-impact administrative support and
              customer-centric solutions.
            </p>
            <p className="about__bio-body">
              With a background in <strong>Computer Science</strong>, I offer a unique advantage:
              the ability to blend traditional assistance with a deep understanding of the technology
              that powers modern business. My goal is to provide dependable support and implement
              technology-driven solutions that help businesses grow while making day-to-day
              operations easier to manage. ✨
            </p>
          </div>

          {/* Stats */}
          <div className="about__stats-card reveal-right">
            {stats.map((s) => (
              <div className="about__stat" key={s.label}>
                <span className="about__stat-num">{s.num}</span>
                <span className="about__stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Two pillars ── */}
        <div className="about__pillars">

          {/* Admin pillar */}
          <div className="about__pillar card reveal-left" style={{ transitionDelay: '0.1s' }}>
            <div className="about__pillar-header">
              <span className="about__pillar-emoji">🗂️</span>
              <div>
                <span className="tag">Operations</span>
                <h3 className="about__pillar-title">Administrative &amp; Support</h3>
              </div>
            </div>
            <p className="about__pillar-intro">
              I excel in high-pressure environments, managing high-volume inquiries and complex
              operational tasks with precision.
            </p>
            <ul className="about__skill-list">
              {adminSkills.map((sk) => (
                <li key={sk.title} className="about__skill-item">
                  <span className="about__skill-icon">{sk.icon}</span>
                  <div>
                    <strong className="about__skill-title">{sk.title}</strong>
                    <p className="about__skill-desc">{sk.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech pillar */}
          <div className="about__pillar card reveal-right" style={{ transitionDelay: '0.2s' }}>
            <div className="about__pillar-header">
              <span className="about__pillar-emoji">💻</span>
              <div>
                <span className="tag">Technical</span>
                <h3 className="about__pillar-title">Technical Proficiency &amp; Dev</h3>
              </div>
            </div>
            <p className="about__pillar-intro">
              I bring a developer's mindset to process improvement — troubleshooting technical
              roadblocks and maintaining digital infrastructure with ease.
            </p>
            <ul className="about__skill-list">
              {techSkills.map((sk) => (
                <li key={sk.title} className="about__skill-item">
                  <span className="about__skill-icon">{sk.icon}</span>
                  <div>
                    <strong className="about__skill-title">{sk.title}</strong>
                    <p className="about__skill-desc">{sk.desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            {/* Quote sits inside tech pillar */}
            <div className="about__quote">
              <span className="about__quote-mark">"</span>
              <p>
                Detail-oriented, adaptable, and always ready to make your workflow smoother —
                one task at a time.
              </p>
              <span className="about__quote-author">— Anna Nicole Villegas</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}