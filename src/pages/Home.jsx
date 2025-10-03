import React, { useState, useEffect } from "react";
import ScrollReveal from "scrollreveal";
import { Camera, Video, Calendar, ArrowRight, Star, Mail, MessageCircle, X } from "lucide-react";
import logo from "../assets/images/logo.png";
import bg from "../assets/images/Camera-mockup.jpg";
import i1 from "../assets/images/Display/i1.png";
import i2 from "../assets/images/Display/i2.png";
import i3 from "../assets/images/Display/i3.png";
import i4 from "../assets/images/Display/i4.png";
import i5 from "../assets/images/Display/i5.png";
import i6 from "../assets/images/Display/i6.png";
import i7 from "../assets/images/Display/i7.png";
import { Link } from "react-router-dom";

const Home = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

  const testimonials = [
    {
      quote:
        "IFEMedia transformed our event into a masterpiece, the quality was beyond our imagination.",
      author: "Adunni Okafor",
      role: "Event Planner",
    },
    {
      quote:
        "Their attention to detail and cinematic vision brought our story to life in ways we never expected.",
      author: "Kemi Adeleke",
      role: "Brand Director",
    },
    {
      quote:
        "Professional excellence meets artistic vision. IFEMedia delivers nothing short of perfection.",
      author: "Tunde Bakare",
      role: "CEO, Luxury Events",
    },
  ];

  const portfolioProjects = [
    {
      image: i1,
      title: "NIGE",
      description: "Web3 Invasion event in Lagos",
    },
    {
      image: i2,
      title: "Stablecoins Summit",
      description: "Africa's first stablecoin conference",
    },
    {
      image: i3,
      title: "Stablecoins Summit",
      description: "Africa's first stablecoin conference",
    },
    {
      image: i4,
      title: "Stablecoins Summit",
      description: "Africa's first stablecoin conference",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  // SCROLL REVEAL

  useEffect(() => {
    // ScrollReveal setup
    ScrollReveal().reveal(".reveal", {
      distance: "50px",
      origin: "bottom",
      duration: 1000,
      delay: 200,
      easing: "ease-in-out",
      opacity: 0,
      reset: false, // Optional: Reset animation on scroll back
      scale: 0.8, // Optional: You can scale the element
    });

    ScrollReveal().reveal(".reveal1", {
      origin: "left",
      distance: "800px",
      duration: 1200,
      delay: 200,
      reset: false,
    });
    ScrollReveal().reveal(".reveal2", {
      origin: "right",
      distance: "800px",
      duration: 1200,
      delay: 200,
      reset: false,
    });
  }, []);

  const handleEmailClick = () => {
    window.location.href = "mailto:IFEmedia.ng@gmail.com";
    setIsBottomSheetOpen(false);
  };

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/2348106728018", "_blank");
    setIsBottomSheetOpen(false);
  };

  return (
    <div className="bg-black text-white overflow-x-hidden montserrat">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${bg})`,
              backgroundAttachment: "fixed",
            }}
          >
            {/* Responsive overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30"></div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-5xl sm:text-6xl lg:text-6xl font-semibold leading-tight lg:flex gap-3 text-center justify-center">
              <span className="block">Capturing</span>
              <span className="block text-red-500 font-light italic">
                Moments.
              </span>
              <span className="block">Creating</span>
              <span className="block text-red-500 font-light italic">
                Legacies.
              </span>
            </h1>

            <div className="max-w-4xl mx-auto space-y-6">
              <p className="text-sm sm:text-2xl font-light text-gray-300 leading-relaxed tracking-wide">
                Nigeria's premium media company creating timeless photography,
                cinematic videography, and unforgettable event coverage that
                turn fleeting moments into powerful stories.
              </p>
            </div>

            <div className="pt-8">
              <button
                onClick={() => scrollToSection("contact")}
                className="group relative rounded-2xl inline-flex items-center space-x-3 px-12 py-4 bg-red-600 hover:bg-red-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/25 cursor-pointer"
              >
                <span className="text-sm font-medium tracking-wide">
                  Book Your Experience
                </span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white border-opacity-30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white bg-opacity-50 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section
        id="services"
        className="py-24 bg-gradient-to-br from-black via-red-950 to-black"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 reveal1">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold mb-6">
              Our <span className="text-red-500">Craft</span>
            </h2>
            <p className="text-sm text-gray-400 max-w-3xl mx-auto">
              Three pillars of excellence that define our approach to visual
              storytelling
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Photography */}
            <div
              className="group rounded-2xl relative overflow-hidden h-[480px] flex items-end transform transition-all duration-500 hover:-translate-y-3 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/20"
              style={{
                backgroundImage: `url(${i5})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Overlay gradients */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Content */}
              <div className="relative z-10 p-8 text-white">
                <Camera className="w-14 h-14 text-red-500 mb-4 group-hover:animate-bounce" />
                <h3 className="text-3xl font-light tracking-wide mb-2">
                  Photography
                </h3>
                <p className="text-red-400 text-base font-medium mb-4">
                  Bold. Timeless. Refined.
                </p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Every frame captures more than a moment, it preserves emotion,
                  tells a story, and creates lasting memories with artistic
                  precision.
                </p>
              </div>
            </div>

            {/* Videography */}
            <div
              className="group rounded-2xl relative overflow-hidden h-[480px] flex items-end transform transition-all duration-500 hover:-translate-y-3 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/20"
              style={{
                backgroundImage: `url(${i6})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10 p-8 text-white">
                <Video className="w-14 h-14 text-red-500 mb-4 group-hover:animate-bounce" />
                <h3 className="text-3xl font-light tracking-wide mb-2">
                  Videography
                </h3>
                <p className="text-red-400 text-base font-medium mb-4">
                  Cinema-quality storytelling beyond the frame.
                </p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  From concept to final cut, we create cinematic experiences
                  that captivate, inspire, and leave lasting impressions.
                </p>
              </div>
            </div>

            {/* Event Coverage */}
            <div
              className="group rounded-2xl relative overflow-hidden h-[480px] flex items-end transform transition-all duration-500 hover:-translate-y-3 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/20"
              style={{
                backgroundImage: `url(${i7})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10 p-8 text-white">
                <Calendar className="w-14 h-14 text-red-500 mb-4 group-hover:animate-bounce" />
                <h3 className="text-3xl font-light tracking-wide mb-2">
                  Event Coverage
                </h3>
                <p className="text-red-400 text-base font-medium mb-4">
                  Your moments, captured in real-time.
                </p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Comprehensive event documentation that preserves every
                  significant moment with professional excellence and creative
                  vision.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Highlights */}
      <section id="portfolio" className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl tracking-wider mb-6">
              Every{" "}
              <span className="text-red-500 font-bold italic">frame.</span>{" "}
              Every{" "}
              <span className="text-red-500 font-semibold italic">detail.</span>{" "}
              Every <span className="text-red-500 italic">story.</span>
            </h2>
          </div>

          {/* ONE grid only */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 reveal2">
            {portfolioProjects.map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden aspect-square"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-2xl transition-transform duration-700 group-hover:scale-110"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Red hover overlay */}
                <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-500"></div>

                {/* Text on hover */}
                <div className="absolute bottom-0 left-0 right-0 px-4 pb-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  <p className="text-sm text-gray-300">{project.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/portfolio">
              <button className="group inline-flex items-center space-x-3 px-10 py-3 border-2 rounded-2xl border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-all duration-300 transform hover:scale-105 cursor-pointer">
                <span className="font-medium tracking-wide text-sm">
                  Explore Portfolio
                </span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-16">
            <h2 className="text-4xl sm:text-5xl font-thin tracking-wider mb-8">
              Client <span className="text-red-500">Stories</span>
            </h2>
          </div>

          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentTestimonial * 100}%)`,
                }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-8">
                    <div className="max-w-3xl mx-auto">
                      <div className="mb-8">
                        <div className="flex justify-center mb-6">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-6 h-6 text-red-500 fill-current"
                            />
                          ))}
                        </div>
                        <blockquote className="text-2xl sm:text-3xl font-light italic text-gray-300 leading-relaxed mb-8">
                          "{testimonial.quote}"
                        </blockquote>
                        <div>
                          <cite className="text-xl font-medium text-white not-italic">
                            {testimonial.author}
                          </cite>
                          <p className="text-red-400 text-lg mt-2">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonial Indicators */}
            <div className="flex justify-center space-x-3 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                    index === currentTestimonial
                      ? "bg-red-500 scale-125"
                      : "bg-gray-600 hover:bg-gray-500"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final Call-to-Action */}
      <section
        id="contact"
        className="py-24 bg-gradient-to-br from-black via-red-950 to-black"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-thin leading-tight">
              <span className="block font-semibold">
                Professionalism in every{" "}
                <span className="font-thin text-red-500">detail.</span>
              </span>
            </h2>

            <p className="text-sm sm:text-3xl font-light text-gray-300 leading-relaxed">
              Let's tell your story the IFEMedia way.
            </p>

            <div className="pt-4">
              <button
                onClick={() => setIsBottomSheetOpen(true)}
                className="group relative inline-flex items-center rounded-2xl space-x-4 px-8 py-3.5 bg-white text-black hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl cursor-pointer"
              >
                <span className="text-sm font-medium tracking-wide">
                  Book Now
                </span>
                <ArrowRight className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center items-center py-5">
              <img src={logo} alt="IFEmedia logo" className="w-30" />
            </div>
            <p className="text-gray-400 text-lg">
              Premium media production • Nigeria
            </p>
            <div className="mt-8 pt-8 border-t border-gray-800 text-sm text-gray-500">
              © 2025 IFEMedia. All rights reserved.
            </div>
          </div>
        </div>
      </footer>

      {/* Bottom Sheet Overlay */}
      {isBottomSheetOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 z-50 transition-opacity duration-300"
          onClick={() => setIsBottomSheetOpen(false)}
        >
          {/* Bottom Sheet */}
          <div
            className={`fixed bottom-0 left-0 right-0 bg-gradient-to-b from-gray-900 to-black rounded-t-3xl shadow-2xl transform transition-transform duration-500 ease-out ${
              isBottomSheetOpen ? "translate-y-0" : "translate-y-full"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Handle Bar */}
            <div className="flex justify-center pt-4 pb-2">
              <div className="w-12 h-1.5 bg-gray-600 rounded-full"></div>
            </div>

            {/* Close Button */}
            <button
              onClick={() => setIsBottomSheetOpen(false)}
              className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors duration-200"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Content */}
            <div className="px-6 py-8 pb-12">
              <h3 className="text-2xl font-semibold text-center mb-2">
                Get in <span className="text-red-500">Touch</span>
              </h3>
              <p className="text-gray-400 text-center mb-8 text-sm">
                Choose your preferred way to reach us
              </p>

              {/* Contact Options */}
              <div className="space-y-4 max-w-md mx-auto">
                {/* Email Option */}
                <button
                  onClick={handleEmailClick}
                  className="w-full group flex items-center space-x-4 p-5 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-red-500/25"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 text-left">
                    <div className="text-white font-semibold text-lg">Email Us</div>
                    <div className="text-red-100 text-sm">IFEmedia.ng@gmail.com</div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-white transition-transform duration-300 group-hover:translate-x-1" />
                </button>

                {/* WhatsApp Option */}
                <button
                  onClick={handleWhatsAppClick}
                  className="w-full group flex items-center space-x-4 p-5 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-green-500/25"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 text-left">
                    <div className="text-white font-semibold text-lg">WhatsApp</div>
                    <div className="text-green-100 text-sm">+234 810 672 8018</div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-white transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;