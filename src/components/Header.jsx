import React, { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/images/logo.png";

const navLinks = [
  { name: "Home",         path: "/" },
  { name: "About",        path: "/about" },
  { name: "Portfolio",    path: "/portfolio" },
  { name: "Testimonials", path: "/testimonials" },
  { name: "Contact",      path: "/contact" },
];

const Header = () => {
  const [scrolled,    setScrolled]    = useState(false);
  const [mobileOpen,  setMobileOpen]  = useState(false);
  const [sheetOpen,   setSheetOpen]   = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // close mobile menu on route change
  useEffect(() => { setMobileOpen(false); }, [location.pathname]);

  // lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const handleNav = (path) => {
    navigate(path);
    setMobileOpen(false);
  };

  const isActive = (path) =>
    path === "/" ? location.pathname === "/" : location.pathname.startsWith(path);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap');
        .hdr-root *, .hdr-root *::before, .hdr-root *::after { box-sizing: border-box; }

        .hdr-root {
          position: fixed; top: 0; left: 0; right: 0; z-index: 9000;
          transition: background 0.3s ease, border-color 0.3s ease;
          font-family: 'Montserrat', sans-serif;
        }
        .hdr-root.scrolled {
          background: rgba(13,13,13,0.88);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }
        .hdr-root.top {
          background: transparent;
          border-bottom: 1px solid transparent;
        }

        .hdr-inner {
          max-width: 1200px; margin: 0 auto;
          padding: 0 20px;
          height: 68px;
          display: flex; align-items: center; justify-content: space-between;
        }

        /* nav link */
        .hdr-link {
          position: relative;
          background: none; border: none; cursor: pointer;
          font-family: 'Montserrat', sans-serif;
          font-size: 12px; font-weight: 600;
          letter-spacing: 0.08em; text-transform: uppercase;
          color: rgba(255,255,255,0.55);
          padding: 4px 0;
          transition: color 0.22s ease;
        }
        .hdr-link::after {
          content: '';
          position: absolute; bottom: -2px; left: 0;
          width: 0; height: 1.5px;
          background: #f11717;
          transition: width 0.28s ease;
        }
        .hdr-link:hover { color: #fff; }
        .hdr-link:hover::after { width: 100%; }
        .hdr-link.active { color: #fff; }
        .hdr-link.active::after { width: 100%; }

        /* book button */
        .hdr-book {
          display: inline-flex; align-items: center; gap: 7px;
          background: #f11717; color: #fff; border: none; cursor: pointer;
          padding: 9px 20px; border-radius: 8px;
          font-family: 'Montserrat', sans-serif;
          font-size: 11px; font-weight: 700;
          letter-spacing: 0.1em; text-transform: uppercase;
          transition: background 0.2s ease, transform 0.2s ease;
        }
        .hdr-book:hover { background: #dc2626; transform: scale(1.03); }

        /* hamburger */
        .hdr-burger {
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.08);
          color: rgba(255,255,255,0.7);
          border-radius: 8px; cursor: pointer;
          width: 38px; height: 38px;
          display: flex; align-items: center; justify-content: center;
          transition: background 0.2s, color 0.2s;
        }
        .hdr-burger:hover { background: rgba(255,255,255,0.1); color: #fff; }

        /* mobile nav link */
        .hdr-mob-link {
          display: block; width: 100%;
          background: none; border: none; cursor: pointer;
          font-family: 'Montserrat', sans-serif;
          font-size: 22px; font-weight: 800;
          letter-spacing: '-0.02em';
          color: rgba(255,255,255,0.45);
          text-align: left; padding: 10px 0;
          transition: color 0.22s;
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        .hdr-mob-link:last-child { border-bottom: none; }
        .hdr-mob-link:hover, .hdr-mob-link.active { color: #fff; }
        .hdr-mob-link.active { color: #f11717; }
      `}</style>

      {/* ── HEADER BAR ─────────────────────────────────────────────────── */}
      <header className={`hdr-root ${scrolled ? "scrolled" : "top"}`}>
        <div className="hdr-inner">

          {/* Logo */}
          <button onClick={() => handleNav("/")} style={{ background: "none", border: "none", cursor: "pointer", padding: 0, display: "flex", alignItems: "center" }}>
            <img
              src={logo}
              alt="IFEMedia"
              style={{ height: 16, width: "auto", objectFit: "contain", display: "block" }}
              onError={e => { e.target.style.display = "none"; }}
            />
          </button>

          {/* Desktop nav */}
          <nav style={{ display: "flex", alignItems: "center", gap: 32 }} className="hdr-desktop">
            <style>{`
              @media (max-width: 860px) { .hdr-desktop { display: none !important; } }
            `}</style>
            {navLinks.map(l => (
              <button
                key={l.name}
                onClick={() => handleNav(l.path)}
                className={`hdr-link ${isActive(l.path) ? "active" : ""}`}
              >
                {l.name}
              </button>
            ))}
          </nav>

          {/* Right: book + burger */}
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <button className="hdr-book hdr-book-desktop" onClick={() => setSheetOpen(true)}>
              <style>{`
                @media (max-width: 860px) { .hdr-book-desktop { display: none !important; } }
              `}</style>
              <Phone size={12} />
              Book Now
            </button>

            <button
              className="hdr-burger hdr-burger-mobile"
              onClick={() => setMobileOpen(o => !o)}
            >
              <style>{`
                @media (min-width: 861px) { .hdr-burger-mobile { display: none !important; } }
              `}</style>
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      {/* ── MOBILE MENU ────────────────────────────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            onClick={() => setMobileOpen(false)}
            style={{
              position: "fixed", inset: 0, zIndex: 8900,
              background: "rgba(0,0,0,0.7)", backdropFilter: "blur(6px)",
            }}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 26, stiffness: 260 }}
              onClick={e => e.stopPropagation()}
              style={{
                position: "absolute", top: 0, right: 0, bottom: 0,
                width: "min(320px, 85vw)",
                background: "#111",
                borderLeft: "1px solid rgba(255,255,255,0.07)",
                display: "flex", flexDirection: "column",
                padding: "0 0 40px",
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              {/* top bar */}
              <div style={{
                display: "flex", alignItems: "center", justifyContent: "space-between",
                padding: "18px 24px",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
              }}>
                {/* <img src={logo} alt="IFEMedia" style={{ height: 12, objectFit: "contain" }} onError={e => e.target.style.display = "none"} /> */}
                <button
                  onClick={() => setMobileOpen(false)}
                  style={{ background: "none", border: "none", cursor: "pointer", color: "rgba(255,255,255,0.4)", padding: 4 }}
                  onMouseEnter={e => e.currentTarget.style.color = "#fff"}
                  onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.4)"}
                >
                  <X size={20} />
                </button>
              </div>

              {/* links */}
              <nav style={{ flex: 1, padding: "32px 24px", display: "flex", flexDirection: "column" }}>
                {navLinks.map((l, i) => (
                  <motion.button
                    key={l.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.06 }}
                    onClick={() => handleNav(l.path)}
                    className={`hdr-mob-link ${isActive(l.path) ? "active" : ""}`}
                    style={{ letterSpacing: "-0.02em" }}
                  >
                    {l.name}
                  </motion.button>
                ))}
              </nav>

              {/* bottom CTA */}
              <div style={{ padding: "0 24px" }}>
                <button
                  onClick={() => { setSheetOpen(true); setMobileOpen(false); }}
                  style={{
                    width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                    background: "#f11717", color: "#fff", border: "none", cursor: "pointer",
                    padding: "14px 24px", borderRadius: 10,
                    fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase",
                    fontFamily: "Montserrat, sans-serif",
                  }}
                >
                  <Phone size={13} />
                  Book Now
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── BOTTOM SHEET ───────────────────────────────────────────────── */}
      <AnimatePresence>
        {sheetOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSheetOpen(false)}
            style={{
              position: "fixed", inset: 0, zIndex: 9999,
              background: "rgba(0,0,0,0.85)", backdropFilter: "blur(10px)",
              display: "flex", alignItems: "flex-end",
              fontFamily: "Montserrat, sans-serif",
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
                position: "relative",
              }}
            >
              {/* handle */}
              <div style={{ width: 40, height: 4, borderRadius: 99, background: "rgba(255,255,255,0.1)", margin: "0 auto 28px" }} />

              {/* close */}
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
              <p style={{ fontSize: 12, color: "rgba(255,255,255,0.3)", textAlign: "center", marginBottom: 28, fontFamily: "Montserrat, sans-serif" }}>
                Choose your preferred way to reach us
              </p>

              <div style={{ maxWidth: 440, margin: "0 auto", display: "flex", flexDirection: "column", gap: 12 }}>
                {/* Email */}
                <motion.button
                  whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                  onClick={() => { window.location.href = "mailto:IFEmedia.ng@gmail.com"; setSheetOpen(false); }}
                  style={{ display: "flex", alignItems: "center", gap: 16, background: "#f11717", border: "none", cursor: "pointer", padding: "18px 22px", borderRadius: 14, width: "100%", fontFamily: "Montserrat, sans-serif" }}
                >
                  <div style={{ width: 42, height: 42, borderRadius: "50%", background: "rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  </div>
                  <div style={{ textAlign: "left", flex: 1 }}>
                    <p style={{ fontSize: 14, fontWeight: 700, color: "#fff", marginBottom: 2 }}>Email Us</p>
                    <p style={{ fontSize: 11, color: "rgba(255,255,255,0.6)" }}>IFEmedia.ng@gmail.com</p>
                  </div>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                </motion.button>

                {/* WhatsApp */}
                <motion.button
                  whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                  onClick={() => { window.open("https://wa.me/2348106728018", "_blank"); setSheetOpen(false); }}
                  style={{ display: "flex", alignItems: "center", gap: 16, background: "#16a34a", border: "none", cursor: "pointer", padding: "18px 22px", borderRadius: 14, width: "100%", fontFamily: "Montserrat, sans-serif" }}
                >
                  <div style={{ width: 42, height: 42, borderRadius: "50%", background: "rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
                  </div>
                  <div style={{ textAlign: "left", flex: 1 }}>
                    <p style={{ fontSize: 14, fontWeight: 700, color: "#fff", marginBottom: 2 }}>WhatsApp</p>
                    <p style={{ fontSize: 11, color: "rgba(255,255,255,0.6)" }}>+234 810 672 8018</p>
                  </div>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;