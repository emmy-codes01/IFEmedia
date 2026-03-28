import React, { useState, useEffect } from "react";
import { Camera, Video, Calendar, ArrowRight, Star, Mail, MessageCircle, X, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/images/logo.png";
import bg   from "../assets/images/Camera-mockup.jpg";
import i1   from "../assets/images/Display/i1.png";
import i2   from "../assets/images/Display/i2.png";
import i3   from "../assets/images/Display/i3.png";
import i4   from "../assets/images/Display/i4.png";
import i5   from "../assets/images/Display/i5.png";
import i6   from "../assets/images/Display/i6.png";
import i7   from "../assets/images/Display/i7.png";
import t1   from "../assets/images/Display/technova/t1.JPG";
import bf   from "../assets/images/brands/bf.JPG"

// ── data ─────────────────────────────────────────────────────────────────────
const services = [
  { icon: Camera,   img: i5, title: "Photography",    sub: "Bold. Timeless. Refined.",                         body: "Every frame captures more than a moment — it preserves emotion, tells a story, and creates lasting memories with artistic precision." },
  { icon: Video,    img: i6, title: "Videography",    sub: "Cinema-quality storytelling.",                     body: "From concept to final cut, we create cinematic experiences that captivate, inspire, and leave lasting impressions." },
  { icon: Calendar, img: i7, title: "Event Coverage", sub: "Your moments, captured in real-time.",             body: "Comprehensive event documentation that preserves every significant moment with professional excellence and creative vision." },
];

const portfolio = [
   { image: bf, title: "BLOCKFEST AFRICA",         desc: "Superbowl of Web3" },
  { image: t1, title: "TECHNOVA",         desc: "Web3 Conference Event" },
  { image: i2, title: "Stablecoins Summit", desc: "Africa's first stablecoin conference" },
  { image: i3, title: "Stablecoins Summit", desc: "Africa's first stablecoin conference" },
  { image: i1, title: "NIGE",             desc: "Web3 Invasion event in Lagos" },
  { image: i4, title: "Stablecoins Summit", desc: "Africa's first stablecoin conference" },
];

const testimonials = [
  { quote: "IFEMedia transformed our event into a masterpiece — the quality was beyond our imagination.", author: "Adunni Okafor",  role: "Event Planner" },
  { quote: "Their cinematic vision brought our brand story to life in ways we never expected.",           author: "Kemi Adeleke",   role: "Brand Director" },
  { quote: "Professional excellence meets artistic vision. IFEMedia delivers nothing short of perfection.", author: "Tunde Bakare", role: "CEO, Luxury Events" },
];

// ─────────────────────────────────────────────────────────────────────────────
const Home = () => {
  const [testimonialIdx, setTestimonialIdx]   = useState(0);
  const [sheetOpen,      setSheetOpen]         = useState(false);
  const [hoveredService, setHoveredService]    = useState(null);
  const [hoveredProject, setHoveredProject]    = useState(null);

  useEffect(() => {
    const t = setInterval(() => setTestimonialIdx(p => (p + 1) % testimonials.length), 5000);
    return () => clearInterval(t);
  }, []);

  const handleEmail = () => { window.location.href = "mailto:IFEmedia.ng@gmail.com"; setSheetOpen(false); };
  const handleWA    = () => { window.open("https://wa.me/2348106728018", "_blank");   setSheetOpen(false); };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap');
        *, *::before, *::after { box-sizing: border-box; }

        .hm-root { min-height: 100vh; background: #0d0d0d; color: #fff; font-family: 'Montserrat', sans-serif; overflow-x: hidden; }

        .hm-divider { height: 1px; background: rgba(255,255,255,0.07); max-width: 1200px; margin: 0 auto; }
        .hm-section { max-width: 1200px; margin: 0 auto; padding: 80px 20px; }

        .hm-label {
          display: block; color: #f11717; font-size: 10px; font-weight: 700;
          letter-spacing: 0.32em; text-transform: uppercase; margin-bottom: 12px;
        }

        /* services grid */
        .hm-services {
          display: grid; grid-template-columns: repeat(3,1fr); gap: 14px; margin-top: 44px;
        }
        @media (max-width: 860px) { .hm-services { grid-template-columns: 1fr; } }

        /* portfolio grid */
        .hm-portfolio {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
          margin-top: 44px;
        }
        /* first item spans 2 cols to make a nice editorial layout */
        .hm-portfolio > *:first-child { grid-column: span 2; }

        @media (max-width: 780px) {
          .hm-portfolio { grid-template-columns: repeat(2, 1fr); }
          .hm-portfolio > *:first-child { grid-column: span 2; }
        }
        @media (max-width: 480px) {
          .hm-portfolio { grid-template-columns: 1fr; }
          .hm-portfolio > *:first-child { grid-column: span 1; }
        }

        /* footer */
        .hm-footer { border-top: 1px solid rgba(255,255,255,0.07); padding: 52px 20px; text-align: center; }
      `}</style>

      <div className="hm-root">

        {/* ── HERO ──────────────────────────────────────────────────────── */}
        <section style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
          {/* BG image */}
          <div style={{
            position: "absolute", inset: 0,
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover", backgroundPosition: "center",
            filter: "brightness(0.3)",
          }} />
          {/* gradient vignette */}
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, #0d0d0d 0%, transparent 50%)" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(13,13,13,0.6) 0%, transparent 60%)" }} />

          <motion.div
            initial={{ opacity: 0, y: 44 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "0 20px", maxWidth: 800, margin: "0 auto" }}
          >
            <span className="hm-label" style={{ textAlign: "center" }}>IFEMedia</span>

            <h1 style={{
              fontSize: "clamp(40px, 7vw, 84px)",
              fontWeight: 900, lineHeight: 1.02,
              letterSpacing: "-0.03em", marginBottom: 24,
            }}>
              Capturing{" "}
              <span style={{ color: "#f11717", fontStyle: "italic", fontWeight: 300 }}>Moments.</span>
              <br />
              Creating{" "}
              <span style={{ color: "#f11717", fontStyle: "italic", fontWeight: 300 }}>Legacies.</span>
            </h1>

            <p style={{ fontSize: "clamp(13px, 1.8vw, 16px)", color: "rgba(255,255,255,0.45)", lineHeight: 1.8, maxWidth: 560, margin: "0 auto 36px", fontWeight: 400 }}>
              Africa's premium media company timeless photography, cinematic videography, and unforgettable event coverage.
            </p>

            <motion.button
              onClick={() => setSheetOpen(true)}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              style={{
                display: "inline-flex", alignItems: "center", gap: 10,
                background: "#f11717", color: "#fff", border: "none", cursor: "pointer",
                padding: "15px 36px", borderRadius: 10,
                fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase",
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              Book Your Experience
              <ArrowRight size={14} />
            </motion.button>
          </motion.div>

          {/* scroll indicator */}
          <div style={{ position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)" }}>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{ width: 24, height: 40, border: "1.5px solid rgba(255,255,255,0.2)", borderRadius: 99, display: "flex", justifyContent: "center", paddingTop: 6 }}
            >
              <motion.div
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{ width: 4, height: 10, background: "#f11717", borderRadius: 99 }}
              />
            </motion.div>
          </div>
        </section>

        {/* ── SERVICES ──────────────────────────────────────────────────── */}
        <section className="hm-section">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="hm-label">What we do</span>
            <h2 style={{ fontSize: "clamp(26px, 4vw, 50px)", fontWeight: 900, letterSpacing: "-0.02em" }}>
              Our <span style={{ color: "#f11717" }}>Craft</span>
            </h2>
          </motion.div>

          <div className="hm-services">
            {services.map((s, i) => {
              const Icon = s.icon;
              const isHov = hoveredService === i;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  onMouseEnter={() => setHoveredService(i)}
                  onMouseLeave={() => setHoveredService(null)}
                  style={{
                    position: "relative", borderRadius: 16, overflow: "hidden",
                    height: 400, cursor: "default",
                  }}
                >
                  <img src={s.img} alt={s.title} style={{
                    position: "absolute", inset: 0, width: "100%", height: "100%",
                    objectFit: "cover", display: "block",
                    transform: isHov ? "scale(1.06)" : "scale(1)",
                    transition: "transform 0.55s ease",
                    filter: "brightness(0.4)",
                  }} />
                  <div style={{
                    position: "absolute", inset: 0,
                    background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 55%)",
                  }} />
                  {/* Red tint on hover */}
                  <div style={{
                    position: "absolute", inset: 0,
                    background: "rgba(239,68,68,0.08)",
                    opacity: isHov ? 1 : 0,
                    transition: "opacity 0.35s",
                    border: `1px solid ${isHov ? "rgba(239,68,68,0.3)" : "transparent"}`,
                    borderRadius: 16,
                  }} />

                  <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "28px 24px" }}>
                    <div style={{
                      width: 38, height: 38, borderRadius: 10, marginBottom: 14,
                      background: isHov ? "rgba(239,68,68,0.2)" : "rgba(255,255,255,0.08)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      transition: "background 0.3s",
                    }}>
                      <Icon size={18} color={isHov ? "#f11717" : "rgba(255,255,255,0.7)"} style={{ transition: "color 0.3s" }} />
                    </div>
                    <h3 style={{ fontSize: 20, fontWeight: 800, color: "#fff", letterSpacing: "-0.01em", marginBottom: 4 }}>{s.title}</h3>
                    <p style={{ fontSize: 11, color: "#f11717", fontWeight: 700, letterSpacing: "0.05em", marginBottom: 10 }}>{s.sub}</p>
                    <p style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", lineHeight: 1.7, fontWeight: 400 }}>{s.body}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        <div className="hm-divider" />

        {/* ── PORTFOLIO HIGHLIGHTS ───────────────────────────────────────── */}
        <section className="hm-section">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ marginBottom: 0 }}
          >
            <span className="hm-label">Selected work</span>
            <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
              <h2 style={{ fontSize: "clamp(26px, 4vw, 50px)", fontWeight: 900, letterSpacing: "-0.02em", lineHeight: 1.1 }}>
                Every <span style={{ color: "#f11717", fontStyle: "italic" }}>frame.</span>{" "}
                Every <span style={{ color: "#f11717", fontStyle: "italic" }}>story.</span>
              </h2>
              <Link to="/portfolio" style={{ textDecoration: "none" }}>
                <motion.button
                  whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
                  style={{
                    display: "inline-flex", alignItems: "center", gap: 8,
                    background: "none", border: "1px solid rgba(239,68,68,0.5)",
                    color: "#f11717", cursor: "pointer",
                    padding: "10px 22px", borderRadius: 8,
                    fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase",
                    fontFamily: "Montserrat, sans-serif",
                    transition: "all 0.25s",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = "#f11717"; e.currentTarget.style.color = "#fff"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "none"; e.currentTarget.style.color = "#f11717"; }}
                >
                  View All <ChevronRight size={13} />
                </motion.button>
              </Link>
            </div>
          </motion.div>

          <div className="hm-portfolio">
            {portfolio.map((p, i) => {
              const isHov = hoveredProject === i;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.07 }}
                  onMouseEnter={() => setHoveredProject(i)}
                  onMouseLeave={() => setHoveredProject(null)}
                  style={{
                    position: "relative", borderRadius: 14, overflow: "hidden",
                    aspectRatio: i === 0 ? "4/3" : "1/1",
                    background: "#1a1a1a", cursor: "pointer",
                  }}
                >
                  <img src={p.image} alt={p.title} style={{
                    width: "100%", height: "100%", objectFit: "cover", display: "block",
                    transform: isHov ? "scale(1.06)" : "scale(1)",
                    transition: "transform 0.55s ease",
                  }} />
                  <div style={{
                    position: "absolute", inset: 0,
                    background: "linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 55%)",
                    opacity: isHov ? 1 : 0,
                    transition: "opacity 0.35s",
                  }} />
                  <div style={{
                    position: "absolute", bottom: 0, left: 0, right: 0, padding: "16px 16px",
                    opacity: isHov ? 1 : 0,
                    transform: isHov ? "translateY(0)" : "translateY(8px)",
                    transition: "all 0.3s ease",
                  }}>
                    <p style={{ fontSize: 13, fontWeight: 800, color: "#fff", marginBottom: 2 }}>{p.title}</p>
                    <p style={{ fontSize: 11, color: "rgba(255,255,255,0.55)", fontWeight: 500 }}>{p.desc}</p>
                  </div>
                  {/* Tag */}
                  <div style={{
                    position: "absolute", top: 12, left: 12,
                    background: "rgba(255,255,255,0.08)", backdropFilter: "blur(8px)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    borderRadius: 99, padding: "4px 10px",
                    fontSize: 9, fontWeight: 700, color: "rgba(255,255,255,0.7)",
                    letterSpacing: "0.08em", textTransform: "uppercase",
                    fontFamily: "Montserrat, sans-serif",
                  }}>
                    {p.title}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        <div className="hm-divider" />

        {/* ── TESTIMONIALS ──────────────────────────────────────────────── */}
        <section className="hm-section" style={{ textAlign: "center" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="hm-label" style={{ textAlign: "center" }}>Social proof</span>
            <h2 style={{ fontSize: "clamp(26px, 4vw, 50px)", fontWeight: 900, letterSpacing: "-0.02em", marginBottom: 52 }}>
              Client <span style={{ color: "#f11717" }}>Stories</span>
            </h2>
          </motion.div>

          <div style={{ maxWidth: 680, margin: "0 auto" }}>
            {/* Stars */}
            <div style={{ display: "flex", justifyContent: "center", gap: 4, marginBottom: 28 }}>
              {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#f11717" color="#f11717" />)}
            </div>

            {/* Sliding quote */}
            <div style={{ overflow: "hidden", marginBottom: 28 }}>
              <AnimatePresence mode="wait">
                <motion.blockquote
                  key={testimonialIdx}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.4 }}
                  style={{
                    fontSize: "clamp(15px, 2.2vw, 20px)",
                    fontStyle: "italic", fontWeight: 300,
                    color: "rgba(255,255,255,0.65)",
                    lineHeight: 1.75, margin: 0,
                  }}
                >
                  "{testimonials[testimonialIdx].quote}"
                </motion.blockquote>
              </AnimatePresence>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={testimonialIdx + "a"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <p style={{ fontSize: 14, fontWeight: 800, color: "#fff", marginBottom: 4 }}>
                  {testimonials[testimonialIdx].author}
                </p>
                <p style={{ fontSize: 11, color: "#f11717", fontWeight: 600, letterSpacing: "0.06em" }}>
                  {testimonials[testimonialIdx].role}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Dots */}
            <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 28 }}>
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setTestimonialIdx(i)} style={{
                  width: i === testimonialIdx ? 22 : 6, height: 6,
                  borderRadius: 99, border: "none", cursor: "pointer", padding: 0,
                  background: i === testimonialIdx ? "#f11717" : "rgba(255,255,255,0.15)",
                  transition: "all 0.3s ease",
                }} />
              ))}
            </div>
          </div>
        </section>

        <div className="hm-divider" />

        {/* ── CTA ───────────────────────────────────────────────────────── */}
        <section style={{ textAlign: "center", padding: "80px 20px 96px", maxWidth: 760, margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="hm-label" style={{ display: "block", textAlign: "center" }}>Ready?</span>
            <h2 style={{ fontSize: "clamp(28px, 5vw, 58px)", fontWeight: 900, letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: 16 }}>
              Professionalism in every{" "}
              <span style={{ color: "#f11717" }}>detail.</span>
            </h2>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.32)", marginBottom: 36, lineHeight: 1.8 }}>
              Let's tell your story the IFEMedia way.
            </p>
            <motion.button
              onClick={() => setSheetOpen(true)}
              whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
              style={{
                display: "inline-flex", alignItems: "center", gap: 10,
                background: "#f11717", color: "#fff", border: "none", cursor: "pointer",
                padding: "15px 36px", borderRadius: 10,
                fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase",
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              Book Now <ChevronRight size={14} />
            </motion.button>
          </motion.div>
        </section>

        {/* ── FOOTER ────────────────────────────────────────────────────── */}
        <footer className="hm-footer">
          <img src={logo} alt="IFEMedia logo" style={{ height: 52, objectFit: "contain", marginBottom: 14 }} />
          <p style={{ fontSize: 12, color: "rgba(255,255,255,0.25)", fontWeight: 500, letterSpacing: "0.08em", marginBottom: 28 }}>
            Premium media production · Nigeria
          </p>
          <div style={{ height: 1, background: "rgba(255,255,255,0.07)", maxWidth: 400, margin: "0 auto 24px" }} />
          <p style={{ fontSize: 11, color: "rgba(255,255,255,0.18)", fontWeight: 500 }}>
            © 2025 IFEMedia. All rights reserved.
          </p>
        </footer>

      </div>

      {/* ── BOTTOM SHEET ──────────────────────────────────────────────── */}
      <AnimatePresence>
        {sheetOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSheetOpen(false)}
            style={{
              position: "fixed", inset: 0, zIndex: 200,
              background: "rgba(0,0,0,0.85)", backdropFilter: "blur(10px)",
              display: "flex", alignItems: "flex-end",
            }}
          >
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
              onClick={e => e.stopPropagation()}
              style={{
                width: "100%", background: "#141414",
                borderTop: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "20px 20px 0 0",
                padding: "28px 24px 52px",
                fontFamily: "Montserrat, sans-serif",
                position: "relative",
              }}
            >
              <div style={{ width: 40, height: 4, borderRadius: 99, background: "rgba(255,255,255,0.1)", margin: "0 auto 28px" }} />

              <button
                onClick={() => setSheetOpen(false)}
                style={{ position: "absolute", top: 20, right: 20, background: "none", border: "none", cursor: "pointer", color: "rgba(255,255,255,0.3)", padding: 4 }}
                onMouseEnter={e => e.currentTarget.style.color = "#fff"}
                onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.3)"}
              >
                <X size={18} />
              </button>

              <h3 style={{ fontSize: 20, fontWeight: 800, textAlign: "center", color: "#fff", marginBottom: 6, letterSpacing: "-0.02em" }}>
                Get in <span style={{ color: "#f11717" }}>Touch</span>
              </h3>
              <p style={{ fontSize: 12, color: "rgba(255,255,255,0.3)", textAlign: "center", marginBottom: 28 }}>
                Choose your preferred way to reach us
              </p>

              <div style={{ maxWidth: 440, margin: "0 auto", display: "flex", flexDirection: "column", gap: 12 }}>
                <motion.button
                  whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                  onClick={handleEmail}
                  style={{ display: "flex", alignItems: "center", gap: 16, background: "#f11717", border: "none", cursor: "pointer", padding: "18px 22px", borderRadius: 14, width: "100%", fontFamily: "Montserrat, sans-serif" }}
                >
                  <div style={{ width: 42, height: 42, borderRadius: "50%", background: "rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Mail size={18} color="#fff" />
                  </div>
                  <div style={{ textAlign: "left", flex: 1 }}>
                    <p style={{ fontSize: 14, fontWeight: 700, color: "#fff", marginBottom: 2 }}>Email Us</p>
                    <p style={{ fontSize: 11, color: "rgba(255,255,255,0.6)" }}>IFEmedia.ng@gmail.com</p>
                  </div>
                  <ChevronRight size={15} color="rgba(255,255,255,0.5)" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                  onClick={handleWA}
                  style={{ display: "flex", alignItems: "center", gap: 16, background: "#16a34a", border: "none", cursor: "pointer", padding: "18px 22px", borderRadius: 14, width: "100%", fontFamily: "Montserrat, sans-serif" }}
                >
                  <div style={{ width: 42, height: 42, borderRadius: "50%", background: "rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <MessageCircle size={18} color="#fff" />
                  </div>
                  <div style={{ textAlign: "left", flex: 1 }}>
                    <p style={{ fontSize: 14, fontWeight: 700, color: "#fff", marginBottom: 2 }}>WhatsApp</p>
                    <p style={{ fontSize: 11, color: "rgba(255,255,255,0.6)" }}>+234 810 672 8018</p>
                  </div>
                  <ChevronRight size={15} color="rgba(255,255,255,0.5)" />
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Home;