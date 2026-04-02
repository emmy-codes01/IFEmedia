import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MessageCircle, Send, MapPin, X, ChevronRight } from "lucide-react";

const services = [
  "Wedding Photography",
  "Corporate Events",
  "Music Videos",
  "Commercial Production",
  "Documentary",
  "Portrait Session",
];

const contactCards = [
  { icon: Phone,         title: "Call Us",    detail: "+234 810 672 8018",    href: "tel:+2348106728018" },
  { icon: Mail,          title: "Email",      detail: "IFEmedia.ng@gmail.com", href: "mailto:IFEmedia.ng@gmail.com" },
  { icon: MessageCircle, title: "WhatsApp",   detail: "Chat with us",          href: "https://wa.me/2348106728018" },
  // { icon: MapPin,        title: "Location",   detail: "Ikeja, Lagos, Nigeria", href: null },
];

export default function Contact() {
  const [formData, setFormData] = useState({ fullName: "", email: "", phone: "", service: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sheetOpen, setSheetOpen] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch("https://formspree.io/f/xqayypqv", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, _replyto: formData.email }),
      });
      if (res.ok) {
        alert("Message sent! We'll get back to you shortly.");
        setFormData({ fullName: "", email: "", phone: "", service: "", message: "" });
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch {
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputStyle = (field) => ({
    width: "100%",
    background: focusedField === field ? "rgba(239,68,68,0.04)" : "rgba(255,255,255,0.03)",
    border: `1px solid ${focusedField === field ? "rgba(239,68,68,0.5)" : "rgba(255,255,255,0.08)"}`,
    borderRadius: 10,
    padding: "14px 18px",
    color: "#fff",
    fontSize: 14,
    fontFamily: "Montserrat, sans-serif",
    fontWeight: 500,
    outline: "none",
    transition: "all 0.25s ease",
    display: "block",
  });

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap');
        *, *::before, *::after { box-sizing: border-box; }

        .ct-root {
          min-height: 100vh;
          background: #0d0d0d;
          color: #fff;
          font-family: 'Montserrat', sans-serif;
          overflow-x: hidden;
        }

        .ct-section { max-width: 1200px; margin: 0 auto; padding: 72px 20px; }
        .ct-divider  { height: 1px; background: rgba(255,255,255,0.07); max-width: 1200px; margin: 0 auto; }

        .ct-label {
          display: block;
          color: #f11717;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          margin-bottom: 12px;
        }

        /* 2-col layout */
        .ct-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 56px;
          align-items: start;
        }
        @media (max-width: 780px) {
          .ct-grid { grid-template-columns: 1fr; gap: 40px; }
        }

        /* contact cards */
        .ct-cards {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          margin-top: 32px;
        }
        @media (max-width: 420px) {
          .ct-cards { grid-template-columns: 1fr; }
        }

        ::placeholder { color: rgba(255,255,255,0.22); }
        select option  { background: #1a1a1a; color: #fff; }
      `}</style>

      <div className="ct-root">

        {/* ── HERO ─────────────────────────────────────────────────────── */}
        <section style={{ textAlign: "center", padding: "90px 20px 60px", position: "relative" }}>
          <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 500, height: 500, background: "radial-gradient(circle, rgba(239,68,68,0.06) 0%, transparent 70%)", borderRadius: "50%", pointerEvents: "none" }} />
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            style={{ position: "relative", zIndex: 1, maxWidth: 640, margin: "0 auto" }}
          >
            <span className="ct-label" style={{ textAlign: "center" }}>Get in Touch</span>
            <h1 style={{ fontSize: "clamp(34px, 5.5vw, 64px)", fontWeight: 900, letterSpacing: "-0.03em", lineHeight: 1.05, marginBottom: 18 }}>
              Let's talk about{" "}
              <span style={{ color: "#f11717" }}>your vision</span>
            </h1>
            <p style={{ fontSize: "clamp(13px, 1.8vw, 16px)", color: "rgba(255,255,255,0.38)", lineHeight: 1.8, fontWeight: 400 }}>
              Fill in the form or reach us directly, we respond fast.
            </p>
          </motion.div>
        </section>

        <div className="ct-divider" />

        {/* ── MAIN ─────────────────────────────────────────────────────── */}
        <section className="ct-section">
          <div className="ct-grid">

            {/* ── FORM ── */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="ct-label">Send a Message</span>
              <h2 style={{ fontSize: "clamp(22px, 3vw, 36px)", fontWeight: 900, letterSpacing: "-0.02em", marginBottom: 32 }}>
                Tell us about your project
              </h2>

              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <input
                  type="text" name="fullName" placeholder="Your name"
                  value={formData.fullName} onChange={handleChange}
                  onFocus={() => setFocusedField("fullName")}
                  onBlur={() => setFocusedField(null)}
                  style={inputStyle("fullName")}
                />
                <input
                  type="email" name="email" placeholder="Email address"
                  value={formData.email} onChange={handleChange}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField(null)}
                  style={inputStyle("email")}
                />
                <input
                  type="tel" name="phone" placeholder="Phone number"
                  value={formData.phone} onChange={handleChange}
                  onFocus={() => setFocusedField("phone")}
                  onBlur={() => setFocusedField(null)}
                  style={inputStyle("phone")}
                />
                <select
                  name="service" value={formData.service} onChange={handleChange}
                  onFocus={() => setFocusedField("service")}
                  onBlur={() => setFocusedField(null)}
                  style={{ ...inputStyle("service"), appearance: "none", cursor: "pointer", color: formData.service ? "#fff" : "rgba(255,255,255,0.22)" }}
                >
                  <option value="">What service do you need?</option>
                  {services.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
                <textarea
                  name="message" placeholder="Tell us a little about your project..."
                  value={formData.message} onChange={handleChange}
                  rows={5}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                  style={{ ...inputStyle("message"), resize: "none" }}
                />

                <motion.button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  style={{
                    display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
                    background: isSubmitting ? "rgba(239,68,68,0.5)" : "#f11717",
                    color: "#fff", border: "none", cursor: isSubmitting ? "not-allowed" : "pointer",
                    padding: "15px 28px", borderRadius: 10, marginTop: 4,
                    fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase",
                    fontFamily: "Montserrat, sans-serif", transition: "background 0.25s",
                  }}
                >
                  {isSubmitting ? "Sending…" : "Send Message"}
                  <Send size={14} />
                </motion.button>
              </div>
            </motion.div>

            {/* ── CONTACT CARDS ── */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="ct-label">Or reach us directly</span>
              <h2 style={{ fontSize: "clamp(22px, 3vw, 36px)", fontWeight: 900, letterSpacing: "-0.02em", marginBottom: 8 }}>
                Quick contact
              </h2>
              <p style={{ fontSize: 13, color: "rgba(255,255,255,0.3)", marginBottom: 4, lineHeight: 1.7 }}>
                We're available and respond within 24 hours.
              </p>

              <div className="ct-cards">
                {contactCards.map((c, i) => {
                  const Icon = c.icon;
                  const isHov = hoveredCard === i;
                  const Tag = c.href ? "a" : "div";
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.45, delay: i * 0.08 }}
                    >
                      <Tag
                        href={c.href || undefined}
                        target={c.href?.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        onMouseEnter={() => setHoveredCard(i)}
                        onMouseLeave={() => setHoveredCard(null)}
                        style={{
                          display: "block",
                          padding: "22px 18px",
                          borderRadius: 14,
                          border: `1px solid ${isHov ? "rgba(239,68,68,0.4)" : "rgba(255,255,255,0.07)"}`,
                          background: isHov ? "rgba(239,68,68,0.05)" : "rgba(255,255,255,0.02)",
                          textDecoration: "none",
                          transition: "all 0.3s ease",
                          cursor: c.href ? "pointer" : "default",
                        }}
                      >
                        <div style={{
                          width: 38, height: 38, borderRadius: 10, marginBottom: 14,
                          background: isHov ? "rgba(239,68,68,0.15)" : "rgba(255,255,255,0.05)",
                          display: "flex", alignItems: "center", justifyContent: "center",
                          transition: "background 0.3s",
                        }}>
                          <Icon size={17} color={isHov ? "#f11717" : "rgba(255,255,255,0.45)"} style={{ transition: "color 0.3s" }} />
                        </div>
                        <p style={{ fontSize: 13, fontWeight: 800, color: isHov ? "#f11717" : "#fff", marginBottom: 4, transition: "color 0.3s" }}>
                          {c.title}
                        </p>
                        <p style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", fontWeight: 500, lineHeight: 1.5, wordBreak: "break-word" }}>
                          {c.detail}
                        </p>
                      </Tag>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

          </div>
        </section>

        <div className="ct-divider" />

        {/* ── CTA ──────────────────────────────────────────────────────── */}
        <section style={{ textAlign: "center", padding: "72px 20px 96px", maxWidth: 720, margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="ct-label" style={{ display: "block", textAlign: "center" }}>Ready?</span>
            <h2 style={{ fontSize: "clamp(26px, 4.5vw, 52px)", fontWeight: 900, letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: 16 }}>
              Every masterpiece begins with{" "}
              <span style={{ color: "#f11717" }}>a conversation.</span>
            </h2>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.3)", marginBottom: 36, lineHeight: 1.8 }}>
              Don't wait. let's start creating something extraordinary together.
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
              Book Now
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
              onClick={(e) => e.stopPropagation()}
              style={{
                width: "100%", background: "#141414",
                borderTop: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "20px 20px 0 0",
                padding: "28px 24px 52px",
                fontFamily: "Montserrat, sans-serif",
                position: "relative",
              }}
            >
              {/* Handle */}
              <div style={{ width: 40, height: 4, borderRadius: 99, background: "rgba(255,255,255,0.1)", margin: "0 auto 28px" }} />

              {/* Close */}
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
                  onClick={() => { window.location.href = "mailto:IFEmedia.ng@gmail.com"; setSheetOpen(false); }}
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
                  onClick={() => { window.open("https://wa.me/2348106728018", "_blank"); setSheetOpen(false); }}
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
}