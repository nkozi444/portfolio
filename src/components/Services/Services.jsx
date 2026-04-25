import { useEffect, useRef } from 'react';
import './Services.css';

const services = [
  {
    icon: '📧',
    title: 'Email, Chat & Phone Support',
    desc: 'Management of high-volume inboxes, live chat, and inbound/outbound calls. Specialized in Zendesk ticket resolution and phone-based troubleshooting—delivered with speed, precision, and a human touch.',
    tags: ['Zendesk', 'Email and Chat', 'Phone'],
    color: 'rose',
  },
  {
    icon: '🗓️',
    title: 'Calendar & Inbox Management',
    desc: 'Scheduling appointments, coordinating meetings, managing reminders, and keeping your calendar conflict-free.',
    tags: ['Google Calendar', 'Calendly', 'Zoom'],
    color: 'lavender',
  },
  {
    icon: '✈️',
    title: 'Travel Booking (Sabre GDS)',
    desc: 'End-to-end travel coordination — flights, itineraries, rebooking, cancellations, and fare compliance with 100% accuracy.',
    tags: ['Sabre GDS', 'Ticketing', 'Itineraries'],
    color: 'sage',
  },
  {
    icon: '📊',
    title: 'Data Entry & Admin Tasks',
    desc: 'Precise data entry, record keeping, file organization, and workflow coordination across Google Drive and Office tools.',
    tags: ['Excel', 'Google Sheets', 'Drive'],
    color: 'gold',
  },
  {
    icon: '💳',
    title: 'Payment & Refund Processing',
    desc: 'Transaction verification, dispute resolution, and refund processing via Stripe with meticulous attention to detail.',
    tags: ['Stripe', 'Billing', 'Refunds'],
    color: 'rose',
  },
  {
    icon: '🖥️',
    title: 'CRM & Technical Support',
    desc: 'Managing customer data in CRM platforms, plus a tech-savvy edge with knowledge of React JS, MySQL, and Firebase.',
    tags: ['CRM', 'React JS', 'MySQL'],
    color: 'lavender',
  },
];

export default function Services() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.12 }
    );
    const els = sectionRef.current?.querySelectorAll('.reveal, .reveal-left');
    els?.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="services" ref={sectionRef}>
      <div className="services__blob services__blob--1" />

      <div className="container">
        {/* Header */}
        <div className="services__header reveal">
          <span className="section-label">What I Offer</span>
          <h2 className="section-title">
            Services tailored<br />
            <em style={{ fontStyle: 'italic', color: 'var(--burgundy)' }}>just for you.</em>
          </h2>
          <p className="services__subtitle">
            From admin operations to technical support — I've got your back, no matter the task.
          </p>
        </div>

        {/* Cards grid */}
        <div className="services__grid">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`services__card card reveal`}
              style={{ transitionDelay: `${0.08 * i}s` }}
              data-color={s.color}
            >
              <div className="services__card-icon">{s.icon}</div>
              <h3 className="services__card-title">{s.title}</h3>
              <p className="services__card-desc">{s.desc}</p>
              <div className="services__card-tags">
                {s.tags.map(t => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
              <div className="services__card-arrow">→</div>
            </div>
          ))}
        </div>

        {/* Bottom CTA banner */}
        <div className="services__cta reveal">
          <div className="services__cta-text">
            <span className="services__cta-label">✦ Ready to get started?</span>
            <p>Let's discuss how I can streamline your operations.</p>
          </div>
          <a href="#contact" className="btn-primary">Book a call →</a>
        </div>
      </div>
    </section>
  );
}