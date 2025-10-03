import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Film, Heart, Megaphone, Video, Calendar, Play, ArrowRight, Clapperboard, Sparkles, X, Mail, MessageCircle, Camera } from 'lucide-react';

const Videography = () => {
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const highlightRef = useRef(null);
  const isHighlightInView = useInView(highlightRef, { once: true, margin: "-100px" });

  const services = [
    {
      icon: Film,
      title: "Wedding Films",
      description: "Cinematic love stories that capture every precious moment, from vows to celebrations. Your wedding day, transformed into a timeless film.",
      features: ["Full-day coverage", "4K cinematic quality", "Drone footage", "Same-day edits", "Custom soundtracks"]
    },
    {
      icon: Megaphone,
      title: "Brand & Promo Videos",
      description: "Compelling visual narratives that elevate your brand, engage audiences, and drive results with professional storytelling.",
      features: ["Commercial spots", "Product showcases", "Brand documentaries", "Social media content", "Corporate videos"]
    },
    {
      icon: Video,
      title: "Event Highlights",
      description: "Dynamic event coverage that captures the energy, emotion, and essence of your special occasions in stunning detail.",
      features: ["Multi-cam setups", "Live streaming", "Highlight reels", "Full event documentation", "Post-event edits"]
    }
  ];

  const videoShowcase = [
    { id: 1, title: "Luxury Wedding", duration: "3:45", category: "Wedding" },
    { id: 2, title: "Tech Product Launch", duration: "2:30", category: "Brand" },
    { id: 3, title: "Corporate Gala", duration: "4:15", category: "Event" },
    { id: 4, title: "Fashion Brand Film", duration: "2:00", category: "Brand" },
    { id: 5, title: "Beach Wedding", duration: "5:20", category: "Wedding" },
    { id: 6, title: "Music Festival", duration: "3:10", category: "Event" }
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
          <div className="absolute inset-0 bg-black"></div>
          
          {/* Motion Blur Effect */}
          <motion.div
            animate={{ 
              x: ["-100%", "100%"],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-1/4 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent blur-xl"
          ></motion.div>
          
          <motion.div
            animate={{ 
              x: ["100%", "-100%"],
              opacity: [0.1, 0.15, 0.1]
            }}
            transition={{ 
              duration: 10,
              repeat: Infinity,
              ease: "linear",
              delay: 2
            }}
            className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent blur-xl"
          ></motion.div>
          
          <motion.div
            animate={{ 
              x: ["-100%", "100%"],
              opacity: [0.05, 0.1, 0.05]
            }}
            transition={{ 
              duration: 12,
              repeat: Infinity,
              ease: "linear",
              delay: 4
            }}
            className="absolute top-3/4 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-400 to-transparent blur-xl"
          ></motion.div>
          
          {/* Radial Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-500/10 via-transparent to-transparent"></div>
        </div>

        {/* Film Strip Elements */}
        <div className="absolute left-0 top-0 bottom-0 w-8 flex flex-col justify-around opacity-10">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="w-full h-4 bg-gray-700"></div>
          ))}
        </div>
        <div className="absolute right-0 top-0 bottom-0 w-8 flex flex-col justify-around opacity-10">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="w-full h-4 bg-gray-700"></div>
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center space-x-2 px-5 py-2.5 bg-red-500/10 border border-red-500/30 rounded-full mb-8 backdrop-blur-sm"
            >
              <Clapperboard className="w-4 h-4 text-red-400" />
              <span className="text-sm text-red-300 tracking-wide font-medium">Cinematic Videography</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
            >
              Stories in{" "}
              <span className="relative inline-block">
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="relative z-10 text-red-500 italic"
                >
                  Motion
                </motion.span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                  className="absolute bottom-0 left-0 right-0 h-4 bg-red-500/20 origin-left blur-sm"
                ></motion.span>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-xl sm:text-2xl text-gray-300 font-light max-w-3xl mx-auto mb-12 leading-relaxed"
            >
              We bring your vision to life with{" "}
              <span className="text-red-400 font-medium">cinematic precision</span>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <motion.button
                onClick={() => setIsBottomSheetOpen(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-10 py-4 bg-red-600 hover:bg-red-700 rounded-2xl transition-all duration-300 shadow-2xl shadow-red-500/40 hover:shadow-red-500/60 overflow-hidden"
              >
                <span className="relative z-10 flex items-center space-x-2 font-semibold">
                  <span>Book A Session</span>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-700"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                  style={{ opacity: 0.5 }}
                ></motion.div>
              </motion.button>

              <a href="#showcase">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-4 border-2 border-white/20 hover:border-red-500 rounded-2xl transition-all duration-300 font-semibold backdrop-blur-sm"
                >
                  Watch
                </motion.button>
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center space-y-2"
          >
            <Film className="w-6 h-6 text-red-500" />
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
              <motion.div
                animate={{ opacity: [1, 0, 1], y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-red-500 rounded-full"
              ></motion.div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Service Details Grid */}
      <section className="py-32 bg-gradient-to-b from-black via-gray-900 to-black relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-red-500/5 via-transparent to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl sm:text-6xl font-bold mb-6">
              Our <span className="text-red-500">Services</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Professional videography tailored to capture your unique story
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="group"
                >
                  <motion.div
                    whileHover={{ y: -12 }}
                    transition={{ duration: 0.3 }}
                    className="relative h-full bg-gradient-to-br from-gray-800/40 to-gray-900/60 backdrop-blur-md rounded-3xl p-8 border border-gray-700/40 hover:border-red-500/60 transition-all duration-500 overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-red-500/20"
                  >
                    {/* Soft Red Glow */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.4 }}
                      className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-transparent to-red-500/5"
                    ></motion.div>
                    
                    {/* Icon */}
                    <motion.div
                      whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      className="relative w-20 h-20 mb-6 bg-gradient-to-br from-red-500 to-red-700 rounded-2xl flex items-center justify-center shadow-xl shadow-red-500/40"
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
                          transition={{ delay: index * 0.15 + i * 0.08 }}
                          className="flex items-center space-x-3 text-gray-400 group-hover:text-gray-300 transition-colors"
                        >
                          <motion.div 
                            whileHover={{ scale: 1.5 }}
                            className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"
                          ></motion.div>
                          <span className="text-sm">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>

                    {/* Sparkle Effect */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0, rotate: 0 }}
                      whileHover={{ opacity: 1, scale: 1, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="absolute top-6 right-6"
                    >
                      <Sparkles className="w-6 h-6 text-red-400" />
                    </motion.div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Highlight Reel */}
      <section id="showcase" ref={highlightRef} className="py-32 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-gray-900"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isHighlightInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl sm:text-6xl font-bold mb-6">
              Featured <span className="text-red-500">Work</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Cinematic moments that tell compelling stories
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {videoShowcase.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isHighlightInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative aspect-video rounded-2xl overflow-hidden cursor-pointer"
              >
                {/* Video Thumbnail Placeholder */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900"></div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent group-hover:from-black/90 group-hover:via-black/60 transition-all duration-300"></div>
                
                {/* Play Button */}
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <motion.div
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    className="relative"
                  >
                    <div className="absolute inset-0 bg-red-500/20 rounded-full blur-xl animate-pulse"></div>
                    <div className="relative w-20 h-20 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transition-all duration-300 shadow-2xl shadow-red-500/50">
                      <Play className="w-8 h-8 text-white ml-1" fill="white" />
                    </div>
                  </motion.div>
                </motion.div>
                
                {/* Video Info */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-0 left-0 right-0 p-6 opacity-0 group-hover:opacity-100"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-3 py-1 bg-red-500/80 backdrop-blur-sm rounded-full text-xs font-semibold">
                      {video.category}
                    </span>
                    <span className="text-sm text-gray-300 flex items-center space-x-1">
                      <Video className="w-4 h-4" />
                      <span>{video.duration}</span>
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white">{video.title}</h3>
                </motion.div>

                {/* Hover Border Glow */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 border-2 border-red-500/60 rounded-2xl"
                ></motion.div>

                {/* Zoom Effect on Image */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 bg-gradient-to-br from-gray-700/50 via-gray-800/50 to-gray-900/50"
                ></motion.div>
              </motion.div>
            ))}
          </div>

          {/* View All Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isHighlightInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center space-x-3 px-10 py-4 border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white rounded-2xl transition-all duration-300 font-semibold"
            >
              <span>View Full Portfolio</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-32 bg-gradient-to-br from-black via-red-950/30 to-black relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.1, 0.2, 0.1],
              rotate: [0, 180, 360]
            }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-500 rounded-full blur-[200px]"
          ></motion.div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-block mb-8"
            >
              <Clapperboard className="w-20 h-20 text-red-500" />
            </motion.div>

            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Let's create your
              <br />
              <span className="text-red-500 italic">timeless motion picture.</span>
            </h2>

            <p className="text-xl sm:text-2xl text-gray-300 mb-12 font-light max-w-2xl mx-auto leading-relaxed">
              Transform your vision into a cinematic masterpiece that resonates for generations.
            </p>

            <motion.button
              onClick={() => setIsBottomSheetOpen(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-12 py-5 bg-red-600 hover:bg-red-700 rounded-xl text-lg font-bold transition-all duration-300 shadow-2xl shadow-red-500/40 hover:shadow-red-500/60 overflow-hidden"
            >
              <span className="relative z-10 flex items-center space-x-3">
                <span>Book Videography</span>
                <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-2" />
              </span>
              
              {/* Animated Glow */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-red-400 via-red-500 to-red-600"
                animate={{ 
                  x: ["-200%", "200%"]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{ opacity: 0.4 }}
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
          className="fixed inset-0 bg-black/85 backdrop-blur-md z-50 flex items-end"
          onClick={() => setIsBottomSheetOpen(false)}
        >
          {/* Bottom Sheet */}
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="w-full bg-gradient-to-b from-gray-900 to-black rounded-t-3xl shadow-2xl border-t-2 border-red-500/20"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Handle Bar */}
            <div className="flex justify-center pt-4 pb-2">
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="w-12 h-1.5 bg-red-500/50 rounded-full"
              ></motion.div>
            </div>

            {/* Close Button */}
            <button
              onClick={() => setIsBottomSheetOpen(false)}
              className="absolute top-6 right-6 p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-all duration-200 z-10"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Content */}
            <div className="px-6 py-8 pb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-3xl font-bold text-center mb-2">
                  Let's Start Your <span className="text-red-500">Film</span>
                </h3>
                <p className="text-gray-400 text-center mb-8">
                  Choose your preferred way to connect with us
                </p>
              </motion.div>

              {/* Contact Options */}
              <div className="space-y-4 max-w-md mx-auto">
                {/* Email Option */}
                <motion.button
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleEmailClick}
                  className="w-full group flex items-center space-x-4 p-6 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-red-500/40"
                >
                  <div className="flex-shrink-0 w-14 h-14 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
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
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleWhatsAppClick}
                  className="w-full group flex items-center space-x-4 p-6 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-green-500/40"
                >
                  <div className="flex-shrink-0 w-14 h-14 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
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

export default Videography;