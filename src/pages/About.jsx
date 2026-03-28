import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Check, Heart, Shield, Mail } from 'lucide-react';
import ife from '../assets/images/Display/ife.png';

const values = [
  {
    icon: Star,
    title: 'Creativity',
    description: 'Pushing boundaries with innovative visual storytelling that captivates and inspires.',
  },
  {
    icon: Check,
    title: 'Excellence',
    description: 'Uncompromising quality in every frame, every edit, every final delivery.',
  },
  {
    icon: Heart,
    title: 'Integrity',
    description: 'Building trust through transparent communication and ethical business practices.',
  },
  {
    icon: Shield,
    title: 'Legacy',
    description: 'Creating timeless content that will be treasured for generations to come.',
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
};

const About = () => {
  const [hoveredVal, setHoveredVal] = useState(null);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap');
        *, *::before, *::after { box-sizing: border-box; }

        .about-root {
          min-height: 100vh;
          background: #0d0d0d;
          color: #fff;
          font-family: 'Montserrat', sans-serif;
          overflow-x: hidden;
        }

        /* ── Hero ── */
        .ab-hero {
          min-height: 92vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          padding: 80px 20px;
          text-align: center;
        }
        .ab-hero-glow {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          pointer-events: none;
        }

        /* ── Section shared ── */
        .ab-section {
          max-width: 1200px;
          margin: 0 auto;
          padding: 80px 20px;
        }
        .ab-divider {
          height: 1px;
          background: rgba(255,255,255,0.07);
          max-width: 1200px;
          margin: 0 auto;
        }
        .ab-label {
          color: #f11717;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          margin-bottom: 14px;
          display: block;
        }

        /* ── Values grid ── */
        .ab-values-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          margin-top: 48px;
        }
        @media (max-width: 900px) {
          .ab-values-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 480px) {
          .ab-values-grid { grid-template-columns: 1fr; }
        }

        /* ── Story layout ── */
        .ab-story-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }
        @media (max-width: 780px) {
          .ab-story-grid { grid-template-columns: 1fr; gap: 36px; }
        }

        /* ── CTA ── */
        .ab-cta {
          text-align: center;
          padding: 80px 20px 100px;
          max-width: 800px;
          margin: 0 auto;
        }
      `}</style>

      <div className="about-root">

        {/* ─── HERO ─────────────────────────────────────────────────────── */}
        <section className="ab-hero">
          {/* ambient glows */}
          <div className="ab-hero-glow" style={{ width: 340, height: 340, background: 'rgba(239,68,68,0.08)', top: '10%', right: '-5%' }} />
          <div className="ab-hero-glow" style={{ width: 220, height: 220, background: 'rgba(239,68,68,0.1)', bottom: '12%', left: '-3%' }} />

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            style={{ position: 'relative', zIndex: 1, maxWidth: 860 }}
          >
            <span className="ab-label">IFEMedia</span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{
                fontSize: 'clamp(36px, 6vw, 76px)',
                fontWeight: 900,
                lineHeight: 1.05,
                letterSpacing: '-0.03em',
                marginBottom: 28,
              }}
            >
              Driven by{' '}
              <span style={{ color: '#f11717' }}>Passion</span>.
              <br />
              Defined by{' '}
              <span style={{ color: '#f11717' }}>Excellence</span>.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              style={{
                fontSize: 'clamp(14px, 2vw, 18px)',
                color: 'rgba(255,255,255,0.45)',
                lineHeight: 1.8,
                maxWidth: 600,
                margin: '0 auto',
                fontWeight: 400,
              }}
            >
              IFEMedia was born from a singular vision — to capture life's most powerful moments
              and turn them into timeless stories.
            </motion.p>
          </motion.div>
        </section>

        <div className="ab-divider" />

        {/* ─── MISSION ──────────────────────────────────────────────────── */}
        <section className="ab-section" style={{ textAlign: 'center', paddingBottom: 60 }}>
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            <span className="ab-label">Our Mission</span>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 52px)', fontWeight: 900, letterSpacing: '-0.02em', marginBottom: 28 }}>
              What drives us every day
            </h2>
            <p style={{
              fontSize: 'clamp(16px, 2.5vw, 22px)',
              color: '#f11717',
              fontStyle: 'italic',
              fontWeight: 300,
              lineHeight: 1.7,
              maxWidth: 720,
              margin: '0 auto',
            }}>
              "To create premium visual stories and deliver Excellence with speed."
            </p>
          </motion.div>
        </section>

        <div className="ab-divider" />

        {/* ─── VALUES ───────────────────────────────────────────────────── */}
        <section className="ab-section">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            <span className="ab-label">What we stand for</span>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 52px)', fontWeight: 900, letterSpacing: '-0.02em' }}>
              Our Values
            </h2>
          </motion.div>

          <div className="ab-values-grid">
            {values.map((v, i) => {
              const Icon = v.icon;
              const isHov = hoveredVal === i;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  onMouseEnter={() => setHoveredVal(i)}
                  onMouseLeave={() => setHoveredVal(null)}
                  style={{
                    padding: '32px 28px',
                    borderRadius: 16,
                    border: `1px solid ${isHov ? 'rgba(239,68,68,0.4)' : 'rgba(255,255,255,0.07)'}`,
                    background: isHov ? 'rgba(239,68,68,0.05)' : 'rgba(255,255,255,0.02)',
                    transition: 'all 0.35s ease',
                    cursor: 'default',
                  }}
                >
                  <div style={{
                    width: 44, height: 44, borderRadius: 10,
                    background: isHov ? 'rgba(239,68,68,0.15)' : 'rgba(255,255,255,0.05)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: 22, transition: 'background 0.35s ease',
                  }}>
                    <Icon size={20} color={isHov ? '#f11717' : 'rgba(255,255,255,0.5)'} style={{ transition: 'color 0.3s' }} />
                  </div>
                  <h3 style={{
                    fontSize: 16, fontWeight: 800, marginBottom: 10,
                    color: isHov ? '#f11717' : '#fff',
                    letterSpacing: '-0.01em', transition: 'color 0.3s',
                  }}>
                    {v.title}
                  </h3>
                  <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', lineHeight: 1.7, fontWeight: 400 }}>
                    {v.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </section>

        <div className="ab-divider" />

        {/* ─── STORY ────────────────────────────────────────────────────── */}
        <section className="ab-section">
          <div className="ab-story-grid">

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              style={{ position: 'relative' }}
            >
              <div style={{ position: 'relative', borderRadius: 18, overflow: 'hidden', background: '#1a1a1a' }}>
                <img
                  src={ife}
                  alt="Behind the scenes"
                  style={{ width: '100%', height: 'clamp(280px, 40vw, 500px)', objectFit: 'cover', display: 'block' }}
                />
                {/* Bottom overlay */}
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to top, rgba(13,13,13,0.7) 0%, transparent 50%)',
                }} />
                <div style={{ position: 'absolute', bottom: 22, left: 22 }}>
                  <div style={{ width: 36, height: 3, background: '#f11717', borderRadius: 2, marginBottom: 8 }} />
                  <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 12, fontWeight: 600, letterSpacing: '0.06em' }}>
                    Behind the Magic
                  </p>
                </div>
              </div>

              {/* Decorative ring */}
              <div style={{
                position: 'absolute', top: -14, right: -14,
                width: 70, height: 70,
                border: '1.5px solid rgba(239,68,68,0.25)',
                borderRadius: '50%',
                pointerEvents: 'none',
              }} />
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            >
              <span className="ab-label">Who we are</span>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 52px)', fontWeight: 900, letterSpacing: '-0.02em', marginBottom: 20, lineHeight: 1.1 }}>
                Our Story
              </h2>
              <div style={{ width: 36, height: 3, background: '#f11717', borderRadius: 2, marginBottom: 28 }} />
              <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.6)', lineHeight: 1.85, marginBottom: 18, fontWeight: 400 }}>
                We believe every project is more than just visuals — it's about emotion, legacy, and artistry. Our team of seasoned photographers, cinematographers, and storytellers combine technical mastery with an eye for detail to deliver a world-class media experience.
              </p>
              <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.35)', lineHeight: 1.85, fontWeight: 400 }}>
                From intimate moments to grand celebrations, we approach each project with the same dedication to excellence that has defined our brand since day one.
              </p>
            </motion.div>
          </div>
        </section>

        <div className="ab-divider" />

        {/* ─── CTA ──────────────────────────────────────────────────────── */}
        <div className="ab-cta">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="ab-label" style={{ display: 'block', textAlign: 'center' }}>Ready?</span>
            <h2 style={{
              fontSize: 'clamp(28px, 5vw, 58px)',
              fontWeight: 900,
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              marginBottom: 20,
            }}>
              Let's create something{' '}
              <span style={{ color: '#f11717' }}>timeless</span> together.
            </h2>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.35)', marginBottom: 40, lineHeight: 1.8 }}>
              Ready to bring your vision to life? We're here to make it extraordinary.
            </p>

            <motion.button
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
              <Mail size={15} />
            </motion.button>
          </motion.div>
        </div>

      </div>
    </>
  );
};

export default About;