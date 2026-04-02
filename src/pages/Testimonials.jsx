import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Users, Camera, Award, Mail, MessageCircle, X, ChevronRight } from 'lucide-react';

// Logos
import blockfest from "../assets/images/brands/blockfest.svg"

const testimonials = [
  {
    id: 1,
    initials: 'AO',
    name: 'Adunni Okafor',
    role: 'Event Planner',
    company: 'Luxury Events Nigeria',
    rating: 5,
    quote: 'IFEMedia transformed our event into a masterpiece. Every frame told a story. Their attention to detail is truly unmatched.',
  },
  {
    id: 2,
    initials: 'KA',
    name: 'Kemi Adeleke',
    role: 'Brand Director',
    company: 'Stellar Brands',
    rating: 5,
    quote: 'Their cinematic vision brought our brand story to life in ways we never expected. Professionalism and creativity at its finest.',
  },
  {
    id: 3,
    initials: 'TB',
    name: 'Tunde Bakare',
    role: 'CEO',
    company: 'TechVentures Africa',
    rating: 5,
    quote: 'Professional excellence meets artistic vision. IFEMedia delivers nothing short of perfection, every single time.',
  },
  {
    id: 4,
    initials: 'CN',
    name: 'Chioma Nwankwo',
    role: 'Private Client',
    company: 'Wedding Coverage',
    rating: 5,
    quote: 'Our wedding film was absolutely breathtaking. They captured every emotion, every tear, every smile. We relive our day each time we watch.',
  },
  {
    id: 5,
    initials: 'IM',
    name: 'Ibrahim Musa',
    role: 'Marketing Manager',
    company: 'GreenTech Solutions',
    rating: 5,
    quote: 'The promo video for our product launch was phenomenal. The audience response was incredible — highly recommend their services.',
  },
  {
    id: 6,
    initials: 'BO',
    name: 'Blessing Okonkwo',
    role: 'Creative Director',
    company: 'Afro Fashion Week',
    rating: 5,
    quote: 'Their creative approach and technical expertise resulted in stunning visuals that perfectly captured the essence of our fashion event.',
  },
];

const stats = [
  { icon: Users, number: '50+', label: 'Happy Clients' },
  { icon: Camera, number: '500+', label: 'Projects Completed' },
  { icon: Award, number: '10+', label: 'Awards Won' },
];

const clients = [
  'Blockfest Africa', 'Technova', 'Nige',
  'GreenTech', 'Afro Fashion', 'Urban Lifestyle',
];

const Testimonials = () => {
  const [sheetOpen, setSheetOpen] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredStat, setHoveredStat] = useState(null);

  const handleEmail = () => { window.location.href = 'mailto:IFEmedia.ng@gmail.com'; setSheetOpen(false); };
  const handleWA = () => { window.open('https://wa.me/2348106728018', '_blank'); setSheetOpen(false); };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap');
        *, *::before, *::after { box-sizing: border-box; }

        .tm-root {
          min-height: 100vh;
          background: #0d0d0d;
          color: #fff;
          font-family: 'Montserrat', sans-serif;
          overflow-x: hidden;
        }

        .tm-section { max-width: 1200px; margin: 0 auto; padding: 80px 20px; }
        .tm-divider { height: 1px; background: rgba(255,255,255,0.07); max-width: 1200px; margin: 0 auto; }

        .tm-label {
          display: block;
          color: #f11717;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          margin-bottom: 14px;
          font-family: 'Montserrat', sans-serif;
        }

        /* stats grid */
        .tm-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }
        @media (max-width: 600px) {
          .tm-stats { grid-template-columns: 1fr; }
        }

        /* testimonial grid */
        .tm-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          margin-top: 48px;
        }
        @media (max-width: 900px) { .tm-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 560px) { .tm-grid { grid-template-columns: 1fr; } }

        /* clients grid */
        .tm-clients {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 12px;
          margin-top: 40px;
        }
        @media (max-width: 860px) { .tm-clients { grid-template-columns: repeat(3, 1fr); } }
        @media (max-width: 480px) { .tm-clients { grid-template-columns: repeat(2, 1fr); } }
      `}</style>

      <div className="tm-root">

        {/* ── HERO ─────────────────────────────────────────────────────── */}
        <section style={{ position: 'relative', minHeight: '72vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '100px 20px 80px' }}>
          {/* ambient glow */}
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 600, height: 600, background: 'radial-gradient(circle, rgba(239,68,68,0.07) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            style={{ position: 'relative', zIndex: 1, maxWidth: 760 }}
          >
            <span className="tm-label" style={{ textAlign: 'center' }}>Client Testimonials</span>

            <h1 style={{ fontSize: 'clamp(36px, 6vw, 72px)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1.05, marginBottom: 24 }}>
              Stories From Our{' '}
              <span style={{ color: '#f11717' }}>Clients</span>
            </h1>

            <p style={{ fontSize: 'clamp(14px, 2vw, 17px)', color: 'rgba(255,255,255,0.4)', lineHeight: 1.8, maxWidth: 520, margin: '0 auto', fontWeight: 400 }}>
              Trusted by brands and loved by people, we let our clients do the talking.
            </p>
          </motion.div>
        </section>

        <div className="tm-divider" />

        {/* ── STATS ────────────────────────────────────────────────────── */}
        <section className="tm-section" style={{ paddingTop: 64, paddingBottom: 64 }}>
          <div className="tm-stats">
            {stats.map((s, i) => {
              const Icon = s.icon;
              const isHov = hoveredStat === i;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  onMouseEnter={() => setHoveredStat(i)}
                  onMouseLeave={() => setHoveredStat(null)}
                  style={{
                    padding: '36px 28px',
                    borderRadius: 16,
                    border: `1px solid ${isHov ? 'rgba(239,68,68,0.35)' : 'rgba(255,255,255,0.07)'}`,
                    background: isHov ? 'rgba(239,68,68,0.04)' : 'rgba(255,255,255,0.02)',
                    textAlign: 'center',
                    transition: 'all 0.3s ease',
                  }}
                >
                  <div style={{
                    width: 48, height: 48, borderRadius: 12, margin: '0 auto 18px',
                    background: isHov ? 'rgba(239,68,68,0.15)' : 'rgba(255,255,255,0.05)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    transition: 'background 0.3s',
                  }}>
                    <Icon size={22} color={isHov ? '#f11717' : 'rgba(255,255,255,0.4)'} style={{ transition: 'color 0.3s' }} />
                  </div>
                  <p style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 900, color: '#f11717', letterSpacing: '-0.03em', lineHeight: 1, marginBottom: 8 }}>
                    {s.number}
                  </p>
                  <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                    {s.label}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </section>

        <div className="tm-divider" />

        {/* ── TESTIMONIALS ─────────────────────────────────────────────── */}
        <section className="tm-section">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="tm-label">What they say</span>
            <h2 style={{ fontSize: 'clamp(26px, 4vw, 48px)', fontWeight: 900, letterSpacing: '-0.02em' }}>
              Real experiences,{' '}
              <span style={{ color: '#f11717' }}>real people</span>
            </h2>
          </motion.div>

          <div className="tm-grid">
            {testimonials.map((t, i) => {
              const isHov = hoveredCard === i;
              return (
                <motion.div
                  key={t.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  onMouseEnter={() => setHoveredCard(i)}
                  onMouseLeave={() => setHoveredCard(null)}
                  style={{
                    padding: '28px 24px',
                    borderRadius: 16,
                    border: `1px solid ${isHov ? 'rgba(239,68,68,0.35)' : 'rgba(255,255,255,0.07)'}`,
                    background: isHov ? 'rgba(239,68,68,0.04)' : 'rgba(255,255,255,0.02)',
                    transition: 'all 0.35s ease',
                    display: 'flex', flexDirection: 'column', gap: 18,
                  }}
                >
                  {/* Avatar + info */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                    <div style={{
                      width: 46, height: 46, borderRadius: '50%', flexShrink: 0,
                      background: isHov ? '#f11717' : 'rgba(239,68,68,0.2)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: 13, fontWeight: 800, color: '#fff',
                      transition: 'background 0.3s',
                      letterSpacing: '0.04em',
                    }}>
                      {t.initials}
                    </div>
                    <div>
                      <p style={{ fontSize: 14, fontWeight: 800, color: '#fff', marginBottom: 2 }}>{t.name}</p>
                      <p style={{ fontSize: 11, color: '#f11717', fontWeight: 600, letterSpacing: '0.04em' }}>{t.role}</p>
                      <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.25)', fontWeight: 500 }}>{t.company}</p>
                    </div>
                  </div>

                  {/* Stars */}
                  <div style={{ display: 'flex', gap: 3 }}>
                    {Array.from({ length: t.rating }).map((_, si) => (
                      <Star key={si} size={13} fill="#f11717" color="#f11717" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', lineHeight: 1.8, fontWeight: 400, fontStyle: 'italic', flexGrow: 1 }}>
                    "{t.quote}"
                  </p>
                </motion.div>
              );
            })}
          </div>
        </section>

        <div className="tm-divider" />

        {/* ── TRUSTED BY ───────────────────────────────────────────────── */}
        <section className="tm-section" style={{ paddingTop: 64, paddingBottom: 64 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ marginBottom: 8 }}
          >
            <span className="tm-label">Our clients</span>
            <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 44px)', fontWeight: 900, letterSpacing: '-0.02em' }}>
              Trusted by <span style={{ color: '#f11717' }}>leading CORPORATIONS</span>
            </h2>
          </motion.div>

          <div className="tm-clients">
            {clients.map((name, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                style={{
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: 12,
                  padding: '22px 12px',
                  textAlign: 'center',
                  background: 'rgba(255,255,255,0.02)',
                  cursor: 'default',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(239,68,68,0.3)';
                  e.currentTarget.style.background = 'rgba(239,68,68,0.04)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.02)';
                }}
              >
                <p style={{ fontSize: 13, fontWeight: 800, color: 'rgba(255,255,255,0.6)', letterSpacing: '-0.01em' }}>
                  {name}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        <div className="tm-divider" />

        {/* ── CTA ──────────────────────────────────────────────────────── */}
        <section style={{ textAlign: 'center', padding: '80px 20px 100px', maxWidth: 760, margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="tm-label" style={{ display: 'block', textAlign: 'center' }}>Ready?</span>
            <h2 style={{ fontSize: 'clamp(28px, 5vw, 58px)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: 18 }}>
              Your story deserves to be{' '}
              <span style={{ color: '#f11717' }}>told beautifully.</span>
            </h2>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.35)', marginBottom: 40, lineHeight: 1.8 }}>
              Join hundreds of satisfied clients who trusted us to capture their most precious moments.
            </p>

            <motion.button
              onClick={() => setSheetOpen(true)}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 10,
                background: '#f11717', color: '#fff',
                border: 'none', cursor: 'pointer',
                padding: '15px 36px', borderRadius: 10,
                fontSize: 12, fontWeight: 700,
                letterSpacing: '0.1em', textTransform: 'uppercase',
                fontFamily: 'Montserrat, sans-serif',
              }}
            >
              Work With Us
              <ChevronRight size={15} />
            </motion.button>
          </motion.div>
        </section>

      </div>

      {/* ── BOTTOM SHEET ─────────────────────────────────────────────── */}
      <AnimatePresence>
        {sheetOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSheetOpen(false)}
            style={{
              position: 'fixed', inset: 0, zIndex: 200,
              background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(10px)',
              display: 'flex', alignItems: 'flex-end',
            }}
          >
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 280 }}
              onClick={e => e.stopPropagation()}
              style={{
                width: '100%',
                background: '#141414',
                borderTop: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '20px 20px 0 0',
                padding: '28px 24px 48px',
                fontFamily: 'Montserrat, sans-serif',
                position: 'relative',
              }}
            >
              {/* Handle */}
              <div style={{ width: 40, height: 4, borderRadius: 99, background: 'rgba(255,255,255,0.12)', margin: '0 auto 28px' }} />

              {/* Close */}
              <button
                onClick={() => setSheetOpen(false)}
                style={{ position: 'absolute', top: 20, right: 20, background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.35)', padding: 4 }}
                onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.35)'}
              >
                <X size={18} />
              </button>

              <h3 style={{ fontSize: 22, fontWeight: 800, textAlign: 'center', color: '#fff', marginBottom: 6, letterSpacing: '-0.02em' }}>
                Let's create your <span style={{ color: '#f11717' }}>story</span>
              </h3>
              <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', textAlign: 'center', marginBottom: 28, fontWeight: 500 }}>
                Choose how you'd like to reach us
              </p>

              <div style={{ maxWidth: 440, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 12 }}>
                {/* Email */}
                <motion.button
                  whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                  onClick={handleEmail}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 16,
                    background: '#f11717', border: 'none', cursor: 'pointer',
                    padding: '18px 22px', borderRadius: 14, width: '100%',
                    fontFamily: 'Montserrat, sans-serif',
                  }}
                >
                  <div style={{ width: 42, height: 42, borderRadius: '50%', background: 'rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Mail size={18} color="#fff" />
                  </div>
                  <div style={{ textAlign: 'left', flex: 1 }}>
                    <p style={{ fontSize: 14, fontWeight: 700, color: '#fff', marginBottom: 2 }}>Email Us</p>
                    <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.6)' }}>IFEmedia.ng@gmail.com</p>
                  </div>
                  <ChevronRight size={16} color="rgba(255,255,255,0.5)" />
                </motion.button>

                {/* WhatsApp */}
                <motion.button
                  whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                  onClick={handleWA}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 16,
                    background: '#16a34a', border: 'none', cursor: 'pointer',
                    padding: '18px 22px', borderRadius: 14, width: '100%',
                    fontFamily: 'Montserrat, sans-serif',
                  }}
                >
                  <div style={{ width: 42, height: 42, borderRadius: '50%', background: 'rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <MessageCircle size={18} color="#fff" />
                  </div>
                  <div style={{ textAlign: 'left', flex: 1 }}>
                    <p style={{ fontSize: 14, fontWeight: 700, color: '#fff', marginBottom: 2 }}>WhatsApp</p>
                    <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.6)' }}>+234 810 672 8018</p>
                  </div>
                  <ChevronRight size={16} color="rgba(255,255,255,0.5)" />
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Testimonials;