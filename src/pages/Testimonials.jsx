import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ArrowRight, Sparkles, Users, Award, Camera, X, Mail, MessageCircle } from 'lucide-react';

const Testimonials = () => {
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

  const testimonials = [
    {
      id: 1,
      name: "Adunni Okafor",
      role: "Event Planner",
      company: "Luxury Events Nigeria",
      rating: 5,
      quote: "IFEMedia transformed our event into a masterpiece. The quality was beyond our imagination, and every frame told a story. Their attention to detail is unmatched.",
      image: "AO"
    },
    {
      id: 2,
      name: "Kemi Adeleke",
      role: "Brand Director",
      company: "Stellar Brands",
      rating: 5,
      quote: "Their cinematic vision brought our brand story to life in ways we never expected. The team's professionalism and creativity exceeded all our expectations.",
      image: "KA"
    },
    {
      id: 3,
      name: "Tunde Bakare",
      role: "CEO",
      company: "TechVentures Africa",
      rating: 5,
      quote: "Professional excellence meets artistic vision. IFEMedia delivers nothing short of perfection. They understood our vision and brought it to life beautifully.",
      image: "TB"
    },
    {
      id: 4,
      name: "Chioma Nwankwo",
      role: "Wedding Couple",
      company: "Private Client",
      rating: 5,
      quote: "Our wedding film was absolutely breathtaking! They captured every emotion, every tear, every smile. We relive our special day every time we watch it.",
      image: "CN"
    },
    {
      id: 5,
      name: "Ibrahim Musa",
      role: "Marketing Manager",
      company: "GreenTech Solutions",
      rating: 5,
      quote: "The promotional video they created for our product launch was phenomenal. The response from our audience was incredible. Highly recommend their services!",
      image: "IM"
    },
    {
      id: 6,
      name: "Blessing Okonkwo",
      role: "Creative Director",
      company: "Afro Fashion Week",
      rating: 5,
      quote: "Working with IFEMedia was an absolute pleasure. Their creative approach and technical expertise resulted in stunning visuals that perfectly captured our fashion event.",
      image: "BO"
    }
  ];

  const clients = [
    { name: "Luxury Events", industry: "Events" },
    { name: "Stellar Brands", industry: "Marketing" },
    { name: "TechVentures", industry: "Technology" },
    { name: "GreenTech", industry: "Sustainability" },
    { name: "Afro Fashion", industry: "Fashion" },
    { name: "Urban Lifestyle", industry: "Lifestyle" }
  ];

  const stats = [
    { icon: Users, number: "500+", label: "Happy Clients" },
    { icon: Camera, number: "1000+", label: "Projects Completed" },
    { icon: Award, number: "50+", label: "Awards Won" }
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
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black"></div>
          
          {/* Red Gradient Glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 0.2, scale: 1 }}
            transition={{ duration: 2 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-gradient-radial from-red-500 via-red-600 to-transparent rounded-full blur-[150px]"
          ></motion.div>
          
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-black/50 to-black"></div>
        </div>

        {/* Floating Quote Marks */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, rotate: 0 }}
            animate={{ 
              opacity: [0.05, 0.15, 0.05],
              rotate: [0, 360],
              y: [0, -30, 0]
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
            className="absolute text-red-500/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 80 + 40}px`
            }}
          >
            <Quote />
          </motion.div>
        ))}

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center space-x-2 px-5 py-2.5 bg-red-500/10 border border-red-500/30 rounded-full mb-8 backdrop-blur-sm"
            >
              <Star className="w-4 h-4 text-red-400 fill-red-400" />
              <span className="text-sm text-red-300 tracking-wide font-medium">Client Testimonials</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              Stories From Our{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-red-500 italic">Clients</span>
                {/* <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 1 }}
                  className="absolute bottom-2 left-0 right-0 h-3 bg-red-500/30 origin-left"
                ></motion.span> */}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-xl sm:text-2xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed"
            >
              Trusted by brands and loved by people, we let our clients{" "}
              <span className="text-red-400 font-medium">do the talking</span>.
            </motion.p>
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
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
          >
            <motion.div
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-red-500 rounded-full"
            ></motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-red-500/10 border-2 border-red-500/30 rounded-2xl mb-4">
                    <Icon className="w-10 h-10 text-red-500" />
                  </div>
                  <motion.h3
                    initial={{ scale: 0.5 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                    className="text-5xl font-bold text-red-500 mb-2"
                  >
                    {stat.number}
                  </motion.h3>
                  <p className="text-gray-400 text-lg">{stat.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-32 bg-black relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-red-500/5 via-transparent to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              What Our <span className="text-red-500">Clients Say</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Real experiences from real people who trusted us with their stories
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                <div className="relative h-full bg-gradient-to-br from-gray-800/40 to-gray-900/60 backdrop-blur-md rounded-3xl p-8 border-2 border-gray-700/40 hover:border-red-500/40 transition-all duration-500 overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-red-500/20">
                  {/* Glow Effect */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-red-500/5"
                  ></motion.div>

                  {/* Quote Icon */}
                  <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Quote className="w-16 h-16 text-red-500" />
                  </div>

                  {/* Client Photo */}
                  <div className="relative mb-6">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center text-2xl font-bold border-4 border-red-500/30 shadow-lg shadow-red-500/30">
                      {testimonial.image}
                    </div>
                  </div>

                  {/* Star Rating */}
                  <div className="flex space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + i * 0.05 }}
                      >
                        <Star className="w-5 h-5 text-red-500 fill-red-500" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-gray-300 leading-relaxed mb-6 font-serif italic text-lg relative z-10">
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Client Info */}
                  <div className="relative z-10">
                    <h4 className="text-white font-bold text-xl mb-1">
                      {testimonial.name}
                    </h4>
                    <p className="text-red-400 text-sm font-medium mb-1">
                      {testimonial.role}
                    </p>
                    <p className="text-gray-500 text-sm">
                      {testimonial.company}
                    </p>
                  </div>

                  {/* Sparkle Effect */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0, rotate: 0 }}
                    whileHover={{ opacity: 1, scale: 1, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="absolute bottom-6 right-6"
                  >
                    <Sparkles className="w-6 h-6 text-red-400" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Client Logos */}
      <section className="py-32 bg-gradient-to-b from-black via-gray-900 to-black relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Trusted By <span className="text-red-500">Leading Brands</span>
            </h2>
            <p className="text-xl text-gray-400">
              Partnering with industry leaders across Nigeria
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {clients.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="group"
              >
                <div className="aspect-square bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border-2 border-gray-700/40 hover:border-red-500/40 transition-all duration-300 flex flex-col items-center justify-center p-6 grayscale hover:grayscale-0">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2 group-hover:text-red-500 transition-colors">
                      {client.name.split(' ')[0]}
                    </div>
                    <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                      {client.industry}
                    </div>
                  </div>
                </div>
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
              scale: [1, 1.3, 1],
              opacity: [0.1, 0.25, 0.1],
              rotate: [0, 90, 180, 270, 360]
            }}
            transition={{ duration: 25, repeat: Infinity }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-red-500 rounded-full blur-[200px]"
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
              <div className="relative">
                <Quote className="w-20 h-20 text-red-500" />
                <motion.div
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 bg-red-500/20 rounded-full blur-xl"
                ></motion.div>
              </div>
            </motion.div>

            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Your story deserves to be
              <br />
              <span className="text-red-500 italic">told beautifully.</span>
            </h2>

            <p className="text-xl sm:text-2xl text-gray-300 mb-12 font-light max-w-2xl mx-auto leading-relaxed">
              Join hundreds of satisfied clients who trusted us to capture their most precious moments.
            </p>

            <motion.button
              onClick={() => setIsBottomSheetOpen(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-12 py-5 bg-red-600 hover:bg-red-700 rounded-xl text-lg font-bold transition-all duration-300 shadow-2xl shadow-red-500/40 hover:shadow-red-500/60 overflow-hidden"
            >
              <span className="relative z-10 flex items-center space-x-3">
                <span>Work With Us</span>
                <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-2" />
              </span>
              
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

      {/* Bottom Sheet */}
      {isBottomSheetOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/85 backdrop-blur-md z-50 flex items-end"
          onClick={() => setIsBottomSheetOpen(false)}
        >
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="w-full bg-gradient-to-b from-gray-900 to-black rounded-t-3xl shadow-2xl border-t-2 border-red-500/20"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-center pt-4 pb-2">
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="w-12 h-1.5 bg-red-500/50 rounded-full"
              ></motion.div>
            </div>

            <button
              onClick={() => setIsBottomSheetOpen(false)}
              className="absolute top-6 right-6 p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-all duration-200 z-10"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="px-6 py-8 pb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-3xl font-bold text-center mb-2">
                  Let's Create Your <span className="text-red-500">Story</span>
                </h3>
                <p className="text-gray-400 text-center mb-8">
                  Choose your preferred way to connect with us
                </p>
              </motion.div>

              <div className="space-y-4 max-w-md mx-auto">
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

export default Testimonials;