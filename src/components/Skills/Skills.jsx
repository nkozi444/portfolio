import { useEffect, useRef } from 'react';
import './Skills.css';

const categories = [
  {
    label: 'Customer Support',
    icon: '💬',
    color: 'rose',
    skills: [
      { name: 'Zendesk', level: 95 },
      { name: 'Email & Chat Support', level: 98 },
      { name: 'Issue Resolution', level: 92 },
      { name: 'Phone Support', level: 90 },
    ],
  },
  {
    label: 'Travel & Admin',
    icon: '✈️',
    color: 'sage',
    skills: [
      { name: 'Sabre GDS', level: 93 },
      { name: 'Calendar Management', level: 96 },
      { name: 'Data Entry', level: 97 },
      { name: 'File Organization', level: 94 },
    ],
  },
  {
    label: 'Productivity Tools',
    icon: '🛠️',
    color: 'lavender',
    skills: [
      { name: 'Google Workspace', level: 97 },
      { name: 'Microsoft Office', level: 93 },
      { name: 'Slack / Asana', level: 90 },
      { name: 'Canva / Figma', level: 80 },
    ],
  },
  {
    label: 'Tech & Dev',
    icon: '💻',
    color: 'gold',
    skills: [
      { name: 'React JS', level: 78 },
      { name: 'MySQL / Supabase', level: 82 },
      { name: 'Firebase', level: 75 },
      { name: 'Git & GitHub', level: 80 },
    ],
  },
];

const toolBadges = [
  'Zendesk', 'Stripe', 'Sabre GDS', 'Google Workspace', 'Microsoft Office',
  'Gmail', 'Google Calendar', 'Slack', 'Asana', 'Calendly',
  'Zoom', 'Canva', 'Figma', 'Git & GitHub', 'Firebase',
  'Supabase', 'MySQL', 'React JS', 'Laravel', 'Visual Studio Code',
];

export default function Skills() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          // Animate bars
          const bars = e.target.querySelectorAll('.skills__bar-fill');
          bars.forEach(bar => {
            bar.style.width = bar.dataset.level + '%';
          });
        }
      }),
      { threshold: 0.1 }
    );
    const els = sectionRef.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    els?.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="skills" ref={sectionRef}>
      <div className="skills__blob" />

      <div className="container">
        {/* Header */}
        <div className="skills__header reveal">
          <span className="section-label">My Toolkit</span>
          <h2 className="section-title">
            Skills & <em style={{ fontStyle: 'italic', color: 'var(--burgundy)' }}>Expertise</em>
          </h2>
          <p className="skills__subtitle">
            A blend of sharp admin skills and technical know-how — built for modern remote work.
          </p>
        </div>

        {/* Skill categories */}
        <div className="skills__grid">
          {categories.map((cat, ci) => (
            <div
              key={cat.label}
              className={`skills__category card reveal`}
              style={{ transitionDelay: `${ci * 0.1}s` }}
              data-color={cat.color}
            >
              <div className="skills__cat-header">
                <span className="skills__cat-icon">{cat.icon}</span>
                <h3 className="skills__cat-title">{cat.label}</h3>
              </div>
              <div className="skills__bars">
                {cat.skills.map((sk, si) => (
                  <div key={sk.name} className="skills__bar-item">
                    <div className="skills__bar-meta">
                      <span className="skills__bar-name">{sk.name}</span>
                      <span className="skills__bar-pct">{sk.level}%</span>
                    </div>
                    <div className="skills__bar-track">
                      <div
                        className="skills__bar-fill"
                        data-level={sk.level}
                        style={{ width: '0%', transitionDelay: `${0.1 + si * 0.08}s` }}
                        data-color={cat.color}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tool badges ticker */}
        <div className="skills__tools-section reveal">
          <span className="section-label" style={{ marginBottom: '1.5rem' }}>All Tools & Platforms</span>
          <div className="skills__ticker-wrap">
            <div className="skills__ticker">
              {[...toolBadges, ...toolBadges].map((t, i) => (
                <span key={i} className="skills__tool-badge">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}