import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Heart, User, Briefcase, Camera, ArrowRight, Aperture, Building2, Sparkles, X, Mail, MessageCircle } from 'lucide-react';

const Photography = () => {
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const showcaseRef = useRef(null);
  const isShowcaseInView = useInView(showcaseRef, { once: true, margin: "-100px" });

  const services = [
    {
      icon: Heart,
      title: "Weddings & Events",
      description: "From intimate ceremonies to grand celebrations, we capture every emotion, every tear of joy, and every magical moment that defines your special day.",
      features: ["Full-day coverage", "Pre-wedding sessions", "Candid moments", "Custom albums"]
    },
    {
      icon: User,
      title: "Portraits & Lifestyle",
      description: "Reveal your authentic self through stunning portraits that capture personality, character, and the essence of who you truly are.",
      features: ["Studio sessions", "Outdoor shoots", "Fashion photography", "Family portraits"]
    },
    {
      icon: Briefcase,
      title: "Corporate & Branding",
      description: "Elevate your brand with professional imagery that communicates excellence, builds trust, and creates lasting impressions.",
      features: ["Headshots", "Product photography", "Event documentation", "Brand storytelling"]
    }
  ];

  const showcaseImages = [
    { id: 1, quote: "Captured our love perfectly", author: "Sarah & James" },
    { id: 2, quote: "Exceeded all expectations", author: "Tunde O." },
    { id: 3, quote: "Pure artistry in every shot", author: "Amara K." },
    { id: 4, quote: "Professional and passionate", author: "David M." },
    { id: 5, quote: "Made us feel so comfortable", author: "Chioma & Efe" },
    { id: 6, quote: "Worth every penny", author: "Kemi A." }
  ];

  const handleEmailClick = () => {
    window.location.href = "mailto:IFEmedia.ng@gmail.com";
    setIsBottomSheetOpen(false);
  };

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/2348106728018", "_blank");
    setIsBottomSheetOpen(false);
  };

  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
          
          {/* Glowing Spotlight Effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.15, scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-500 rounded-full blur-[150px]"
          ></motion.div>
          
          {/* Vignette */}
          <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/40 to-black"></div>
        </div>

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 100 }}
            animate={{ 
              opacity: [0, 1, 0],
              y: [100, -100],
              x: [0, Math.random() * 100 - 50]
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
            className="absolute w-1 h-1 bg-red-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          ></motion.div>
        ))}

        {/* Hero Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center space-x-2 px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-full mb-8"
            >
              <Camera className="w-4 h-4 text-red-400" />
              <span className="text-sm text-red-300 tracking-wide">Premium Photography Services</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
            >
              Photography that{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-red-500">Speaks</span>
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 1 }}
                  className="absolute bottom-2 left-0 h-3 bg-red-500/30 -z-10"
                ></motion.span>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-xl sm:text-2xl text-gray-300 font-light max-w-3xl mx-auto mb-12 leading-relaxed"
            >
              We capture more than moments—we{" "}
              <span className="text-red-400 font-medium">immortalize emotions</span>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <button
                onClick={() => setIsBottomSheetOpen(true)}
                className="group relative px-10 py-4 bg-red-600 hover:bg-red-700 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/50 overflow-hidden"
              >
                <span className="relative z-10 flex items-center space-x-2 font-medium">
                  <span>Start Your Story</span>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-700"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                ></motion.div>
              </button>

              <a href="#showcase">
                <button className="px-10 py-4 border-2 border-white/20 hover:border-red-500 rounded-2xl transition-all duration-300 transform hover:scale-105 font-medium">
                  View Portfolio
                </button>
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
          >
            <motion.div
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 bg-red-400 rounded-full"
            ></motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Service Details Grid */}
      <section className="py-32 bg-gradient-to-b from-black via-gray-900 to-black relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-500/5 via-transparent to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl sm:text-6xl font-bold mb-6">
              Our <span className="text-red-500">Expertise</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Three pillars of photographic excellence, tailored to your vision
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ y: -10 }}
                  className="group relative"
                >
                  <div className="relative h-full bg-gradient-to-b from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50 hover:border-red-500/50 transition-all duration-500 overflow-hidden">
                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-red-500/0 via-red-500/0 to-red-500/0 group-hover:from-red-500/10 group-hover:via-red-500/5 group-hover:to-transparent transition-all duration-500"></div>
                    
                    {/* Icon */}
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className="relative w-20 h-20 mb-6 bg-gradient-to-br from-red-500 to-red-700 rounded-2xl flex items-center justify-center shadow-lg shadow-red-500/30"
                    >
                      <Icon className="w-10 h-10 text-white" />
                    </motion.div>

                    {/* Content */}
                    <h3 className="text-3xl font-bold mb-4 text-white group-hover:text-red-400 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-3">
                      {service.features.map((feature, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.2 + i * 0.1 }}
                          className="flex items-center space-x-3 text-gray-400"
                        >
                          <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                          <span className="text-sm">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>

                    {/* Sparkle Effect */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      whileHover={{ opacity: 1, scale: 1 }}
                      className="absolute top-4 right-4"
                    >
                      <Sparkles className="w-6 h-6 text-red-400" />
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Showcase Strip */}
      <section id="showcase" ref={showcaseRef} className="py-32 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-gray-900"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isShowcaseInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl sm:text-6xl font-bold mb-6">
              Client <span className="text-red-500">Testimonials</span>
            </h2>
            <p className="text-xl text-gray-400">
              Stories captured, emotions preserved
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {showcaseImages.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isShowcaseInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer"
              >
                {/* Placeholder Image with Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900"></div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300"></div>
                
                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-lg italic mb-2">"{item.quote}"</p>
                  <p className="text-red-400 font-medium">— {item.author}</p>
                </div>

                {/* Hover Border Glow */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-red-500/50 transition-colors duration-300 rounded-2xl"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-32 bg-gradient-to-br from-black via-red-950/30 to-black relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-500 rounded-full blur-[150px]"
          ></motion.div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block mb-8"
            >
              <Aperture className="w-16 h-16 text-red-500 animate-spin-slow" />
            </motion.div>

            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Every frame, a story
              <br />
              <span className="text-red-500">told forever.</span>
            </h2>

            <p className="text-xl sm:text-2xl text-gray-300 mb-12 font-light max-w-2xl mx-auto">
              Let's create timeless memories that transcend moments and capture the essence of your story.
            </p>

            <motion.button
              onClick={() => setIsBottomSheetOpen(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-12 py-5 bg-red-600 hover:bg-red-700 rounded-2xl text-lg font-semibold transition-all duration-300 shadow-2xl shadow-red-500/30 hover:shadow-red-500/50 overflow-hidden"
            >
              <span className="relative z-10 flex items-center space-x-3">
                <span>Book Photography</span>
                <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-2" />
              </span>
              
              {/* Animated Glow */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-red-400 to-red-600"
                animate={{ 
                  x: ["-100%", "100%"]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{ opacity: 0.3 }}
              ></motion.div>
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Bottom Sheet Overlay */}
      {isBottomSheetOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-end"
          onClick={() => setIsBottomSheetOpen(false)}
        >
          {/* Bottom Sheet */}
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="w-full bg-gradient-to-b from-gray-900 to-black rounded-t-3xl shadow-2xl border-t border-gray-800"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Handle Bar */}
            <div className="flex justify-center pt-4 pb-2">
              <div className="w-12 h-1.5 bg-gray-600 rounded-full"></div>
            </div>

            {/* Close Button */}
            <button
              onClick={() => setIsBottomSheetOpen(false)}
              className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors duration-200 z-10"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Content */}
            <div className="px-6 py-8 pb-12">
              <h3 className="text-3xl font-bold text-center mb-2">
                Let's Create <span className="text-red-500">Magic</span>
              </h3>
              <p className="text-gray-400 text-center mb-8">
                Choose your preferred way to reach us
              </p>

              {/* Contact Options */}
              <div className="space-y-4 max-w-md mx-auto">
                {/* Email Option */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleEmailClick}
                  className="w-full group flex items-center space-x-4 p-6 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-red-500/30"
                >
                  <div className="flex-shrink-0 w-14 h-14 bg-white/20 rounded-full flex items-center justify-center">
                    <Mail className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1 text-left">
                    <div className="text-white font-bold text-lg">Email Us</div>
                    <div className="text-red-100 text-sm">IFEmedia.ng@gmail.com</div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-white transition-transform group-hover:translate-x-1" />
                </motion.button>

                {/* WhatsApp Option */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleWhatsAppClick}
                  className="w-full group flex items-center space-x-4 p-6 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-green-500/30"
                >
                  <div className="flex-shrink-0 w-14 h-14 bg-white/20 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1 text-left">
                    <div className="text-white font-bold text-lg">WhatsApp</div>
                    <div className="text-green-100 text-sm">+234 810 672 8018</div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-white transition-transform group-hover:translate-x-1" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Photography;