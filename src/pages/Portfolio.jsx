import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

import i1 from "../assets/images/Display/i1.png";
import i2 from "../assets/images/Display/i2.png";
import i3 from "../assets/images/Display/i3.png";
import i4 from "../assets/images/Display/i4.png";
import i5 from "../assets/images/Display/i5.png";
import i6 from "../assets/images/Display/i6.png";
import i7 from "../assets/images/Display/i7.png";

// stablecoin images
import s1 from "../assets/images/Display/stablecoin/1.png";
import s2 from "../assets/images/Display/stablecoin/2.png";
import s3 from "../assets/images/Display/stablecoin/3.png";
import s4 from "../assets/images/Display/stablecoin/4.png";
import s5 from "../assets/images/Display/stablecoin/5.png";
import s6 from "../assets/images/Display/stablecoin/6.png";
import s7 from "../assets/images/Display/stablecoin/7.png";
import s8 from "../assets/images/Display/stablecoin/8.png";
import s9 from "../assets/images/Display/stablecoin/9.png";
import s10 from "../assets/images/Display/stablecoin/10.png";

// technova images
import t1 from "../assets/images/Display/technova/t1.JPG"

// nige images
import n1 from "../assets/images/Display/Nige/n1.png"
import n2 from "../assets/images/Display/Nige/n2.png"
import n3 from "../assets/images/Display/Nige/n3.png"
import n4 from "../assets/images/Display/Nige/n4.png"
import n5 from "../assets/images/Display/Nige/n5.png"
import n6 from "../assets/images/Display/Nige/n6.png"
import n7 from "../assets/images/Display/Nige/n7.png"
import n8 from "../assets/images/Display/Nige/n8.png"
import n9 from "../assets/images/Display/Nige/n9.png"
import n10 from "../assets/images/Display/Nige/n10.png"
import n11 from "../assets/images/Display/Nige/n11.png"
import n12 from "../assets/images/Display/Nige/n12.png"


const events = [
  {
    id: 1,
    title: 'NIGE',
    tag: 'Full Media Coverage',
    year: '2025',
    cover: n1,
    images: [n1, n2, n3, n4, n5, n6, n7, n8, n9, n10, n11, n12],
  },
  {
    id: 2,
    title: 'Stablecoin Summit Africa',
    tag: 'Full Media Coverage',
    year: '2025',
    cover: i3,
    images: [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10],
  },
  {
    id: 3,
    title: 'Technova',
    tag: 'Full Media Coverage',
    year: '2026',
    cover: t1,
    images: [],
  },

  // BLOCKFEST, SOLANA SUMMIT, WOMEN IN DEFI

  // {
  //   id: 4,
  //   title: 'Corporate Gala',
  //   tag: 'Events',
  //   year: '2023',
  //   cover: i4,
  //   images: [i4, i5, i6],
  // },
  // {
  //   id: 5,
  //   title: 'Luxury Wedding',
  //   tag: 'Photography',
  //   year: '2023',
  //   cover: i5,
  //   images: [i5, i6, i7, i1, i2],
  // },
  // {
  //   id: 6,
  //   title: 'Music Video',
  //   tag: 'Videography',
  //   year: '2023',
  //   cover: i6,
  //   images: [i6, i7, i1],
  // },
];

// ─────────────────────────────────────────────────────────────────────────────
// LIGHTBOX
// ─────────────────────────────────────────────────────────────────────────────
const Lightbox = ({ images, startIndex, onClose }) => {
  const [cur, setCur] = useState(startIndex);
  const total = images.length;

  useEffect(() => {
    const fn = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') setCur((i) => (i - 1 + total) % total);
      if (e.key === 'ArrowRight') setCur((i) => (i + 1) % total);
    };
    window.addEventListener('keydown', fn);
    return () => window.removeEventListener('keydown', fn);
  }, [total, onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 9999,
        background: 'rgba(5,5,5,0.98)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}
    >
      {/* Close */}
      <button
        onClick={onClose}
        style={{ position: 'absolute', top: 20, right: 20, background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.35)', padding: 6 }}
        onMouseEnter={e => e.currentTarget.style.color = '#fff'}
        onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.35)'}
      >
        <X size={20} />
      </button>

      {/* Counter */}
      <span style={{
        position: 'absolute', top: 26, left: 24,
        color: 'rgba(255,255,255,0.2)', fontSize: 11,
        fontFamily: 'Montserrat, sans-serif', fontWeight: 600, letterSpacing: '0.15em',
      }}>
        {String(cur + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
      </span>

      {/* Image area */}
      <div
        style={{ position: 'relative', width: '100%', maxWidth: 900, padding: '0 56px' }}
        onClick={e => e.stopPropagation()}
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={cur}
            src={images[cur]}
            alt=""
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            style={{ width: '100%', maxHeight: '82vh', objectFit: 'contain', borderRadius: 10, display: 'block' }}
          />
        </AnimatePresence>

        {total > 1 && (
          <>
            <button
              onClick={() => setCur((i) => (i - 1 + total) % total)}
              style={{ position: 'absolute', left: 6, top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.3)', padding: 4 }}
              onMouseEnter={e => e.currentTarget.style.color = '#fff'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.3)'}
            >
              <ChevronLeft size={26} />
            </button>
            <button
              onClick={() => setCur((i) => (i + 1) % total)}
              style={{ position: 'absolute', right: 6, top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.3)', padding: 4 }}
              onMouseEnter={e => e.currentTarget.style.color = '#fff'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.3)'}
            >
              <ChevronRight size={26} />
            </button>
          </>
        )}
      </div>

      {/* Dots */}
      <div style={{ position: 'absolute', bottom: 22, display: 'flex', gap: 8, alignItems: 'center' }}>
        {images.map((_, i) => (
          <button
            key={i}
            onClick={e => { e.stopPropagation(); setCur(i); }}
            style={{
              width: i === cur ? 22 : 6, height: 6, borderRadius: 99,
              border: 'none', cursor: 'pointer', padding: 0,
              background: i === cur ? '#f11717' : 'rgba(255,255,255,0.18)',
              transition: 'all 0.3s ease',
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// EVENT DETAIL
// ─────────────────────────────────────────────────────────────────────────────
const EventDetail = ({ event, onClose }) => {
  const [lightboxIdx, setLightboxIdx] = useState(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'fixed', inset: 0, zIndex: 100,
          background: '#0d0d0d', overflowY: 'auto',
          fontFamily: 'Montserrat, sans-serif',
        }}
      >
        {/* Sticky nav */}
        <div style={{
          position: 'sticky', top: 0, zIndex: 10,
          background: 'rgba(13,13,13,0.92)', backdropFilter: 'blur(14px)',
          borderBottom: '1px solid rgba(255,255,255,0.07)',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '15px 20px',
        }}>
          <button
            onClick={onClose}
            style={{
              display: 'flex', alignItems: 'center', gap: 5,
              background: 'none', border: 'none', cursor: 'pointer',
              color: 'rgba(255,255,255,0.4)', fontSize: 13, fontWeight: 600,
              fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.04em',
            }}
            onMouseEnter={e => e.currentTarget.style.color = '#fff'}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.4)'}
          >
            <ChevronLeft size={15} />
            Portfolio
          </button>
          <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: 10, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase' }}>
            {event.tag} · {event.year}
          </span>
        </div>

        {/* Hero */}
        <div style={{ position: 'relative', height: 'clamp(220px, 50vw, 500px)', overflow: 'hidden' }}>
          <img
            src={event.cover}
            alt={event.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.45)', display: 'block' }}
          />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to top, #0d0d0d 0%, transparent 55%)',
          }} />
          <div style={{ position: 'absolute', bottom: 28, left: 20, right: 20 }}>
            <p style={{ color: '#f11717', fontSize: 10, fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: 8 }}>
              {event.tag}
            </p>
            <h2 style={{ color: '#fff', fontSize: 'clamp(26px, 5vw, 56px)', fontWeight: 800, lineHeight: 1, letterSpacing: '-0.02em' }}>
              {event.title}
            </h2>
          </div>
        </div>

        {/* Gallery */}
        <div style={{ padding: '36px 20px 80px', maxWidth: 1100, margin: '0 auto' }}>
          <p style={{ color: 'rgba(255,255,255,0.2)', fontSize: 10, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 22 }}>
            {event.images.length} Photos
          </p>

          {/* Responsive grid via inline media-query-aware class */}
          <div className="ev-gallery">
            {event.images.map((src, i) => (
              <motion.div
                key={i}
                onClick={() => setLightboxIdx(i)}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: i * 0.06 }}
                style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden', borderRadius: 12, cursor: 'pointer', background: '#1a1a1a' }}
              >
                <img
                  src={src}
                  alt=""
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.5s ease' }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.06)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                />
                <div
                  style={{ position: 'absolute', inset: 0, borderRadius: 12, background: 'rgba(0,0,0,0)', transition: 'background 0.3s' }}
                  onMouseEnter={e => e.currentTarget.style.background = 'rgba(0,0,0,0.22)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'rgba(0,0,0,0)'}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {lightboxIdx !== null && (
          <Lightbox images={event.images} startIndex={lightboxIdx} onClose={() => setLightboxIdx(null)} />
        )}
      </AnimatePresence>
    </>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// EVENT CARD
// ─────────────────────────────────────────────────────────────────────────────
const EventCard = ({ ev, large, onClick, delay }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      onClick={onClick}
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ cursor: 'pointer' }}
    >
      {/* Image */}
      <div style={{
        position: 'relative',
        aspectRatio: large ? '16/10' : '4/5',
        overflow: 'hidden', borderRadius: 14,
        background: '#1a1a1a',
      }}>
        <img
          src={ev.cover}
          alt={ev.title}
          style={{
            width: '100%', height: '100%', objectFit: 'cover', display: 'block',
            transform: hovered ? 'scale(1.05)' : 'scale(1)',
            transition: 'transform 0.55s cubic-bezier(0.25,0.46,0.45,0.94)',
          }}
        />

        {/* Gradient */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 55%)',
          opacity: hovered ? 1 : 0.35,
          transition: 'opacity 0.35s ease',
        }} />

        {/* Tag pill */}
        <div style={{
          position: 'absolute', top: 12, left: 12,
          background: 'rgba(255,255,255,0.08)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255,255,255,0.13)',
          borderRadius: 99, padding: '4px 11px',
          fontSize: 9, fontWeight: 700, color: 'rgba(255,255,255,0.75)',
          letterSpacing: '0.09em', textTransform: 'uppercase',
          fontFamily: 'Montserrat, sans-serif',
        }}>
          {ev.tag}
        </div>

        {/* View badge — slides up on hover */}
        <div style={{
          position: 'absolute', bottom: 14, right: 14,
          background: '#f11717', borderRadius: 99, padding: '6px 15px',
          fontSize: 10, fontWeight: 700, color: '#fff',
          letterSpacing: '0.08em', textTransform: 'uppercase',
          fontFamily: 'Montserrat, sans-serif',
          opacity: hovered ? 1 : 0,
          transform: hovered ? 'translateY(0)' : 'translateY(8px)',
          transition: 'all 0.3s ease',
        }}>
          View
        </div>
      </div>

      {/* Caption */}
      <div style={{ padding: '11px 2px 0' }}>
        <p style={{ color: 'rgba(255,255,255,0.22)', fontSize: 10, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 4 }}>
          {ev.year} · {ev.images.length} photos
        </p>
        <h3 style={{
          fontSize: large ? 18 : 14, fontWeight: 800,
          color: hovered ? '#f11717' : '#fff',
          letterSpacing: '-0.01em', lineHeight: 1.2,
          transition: 'color 0.25s ease',
        }}>
          {ev.title}
        </h3>
      </div>
    </motion.div>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// MAIN PORTFOLIO
// ─────────────────────────────────────────────────────────────────────────────
const Portfolio = () => {
  const [active, setActive] = useState(null);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap');
        *, *::before, *::after { box-sizing: border-box; }

        .pf-root {
          min-height: 100vh;
          background: #0d0d0d;
          font-family: 'Montserrat', sans-serif;
        }

        .pf-main {
          max-width: 1200px;
          margin: 0 auto;
          padding: 36px 20px 80px;
        }

        .pf-label {
          color: rgba(255,255,255,0.2);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          margin-bottom: 18px;
          font-family: 'Montserrat', sans-serif;
        }

        /* Row 1 — 2 large cards */
        .pf-row-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
          margin-bottom: 14px;
        }
        @media (max-width: 580px) {
          .pf-row-2 { grid-template-columns: 1fr; }
        }

        /* Row 2+ — 3 cols > 2 cols > 1 col */
        .pf-row-3 {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
          margin-bottom: 14px;
        }
        @media (max-width: 860px) {
          .pf-row-3 { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 480px) {
          .pf-row-3 { grid-template-columns: 1fr; }
        }

        /* CTA */
        .pf-cta {
          border-top: 1px solid rgba(255,255,255,0.07);
          max-width: 1200px;
          margin: 0 auto;
          padding: 52px 20px 72px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 24px;
        }

        /* Event detail gallery */
        .ev-gallery {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
        }
        @media (max-width: 640px) {
          .ev-gallery { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 380px) {
          .ev-gallery { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="pf-root pt-16">
        <main className="pf-main">
          <p className="pf-label">Explore</p>

          {/* Row 1: 2 large */}
          <div className="pf-row-2">
            {events.slice(0, 2).map((ev, i) => (
              <EventCard key={ev.id} ev={ev} large onClick={() => setActive(ev)} delay={i * 0.08} />
            ))}
          </div>

          {/* Row 2: 3 cards */}
          <div className="pf-row-3">
            {events.slice(2, 5).map((ev, i) => (
              <EventCard key={ev.id} ev={ev} onClick={() => setActive(ev)} delay={0.16 + i * 0.08} />
            ))}
          </div>

          {/* Row 3: overflow */}
          {events.length > 5 && (
            <div className="pf-row-3">
              {events.slice(5).map((ev, i) => (
                <EventCard key={ev.id} ev={ev} onClick={() => setActive(ev)} delay={0.4 + i * 0.08} />
              ))}
            </div>
          )}
        </main>

        {/* CTA */}
        <div className="pf-cta">
          <h2 style={{ fontSize: 'clamp(20px, 3.5vw, 38px)', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em', lineHeight: 1.25 }}>
            Your story deserves the{' '}
            <span style={{ color: '#f11717' }}>IFEMedia</span> touch.
          </h2>
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            style={{
              background: '#f11717', color: '#fff', border: 'none', cursor: 'pointer',
              padding: '14px 32px', borderRadius: 10,
              fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
              fontFamily: 'Montserrat, sans-serif', whiteSpace: 'nowrap',
            }}
          >
            Book a Session
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {active && <EventDetail event={active} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </>
  );
};

export default Portfolio;