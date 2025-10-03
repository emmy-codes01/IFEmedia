import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../src/components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from './pages/Contact';
import Portfolio from "./pages/Portfolio";
import Photography from './pages/Services/Photography'
import Videography from './pages/Services/Videography'
import Testimonials from "./pages/Testimonials";

const App = () => {
  return (
    <Router>
      {/* Header should be outside Routes so it shows on all pages */}
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/services/photography" element={<Photography />} />
        <Route path="/services/videography" element={<Videography />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
