import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MessageCircle, Send, MapPin, X, ArrowRight } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for reaching out! We will get back to you shortly.');
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:IFEmedia.ng@gmail.com";
    setIsBottomSheetOpen(false);
  };

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/2348106728018", "_blank");
    setIsBottomSheetOpen(false);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const services = [
    'Wedding Photography',
    'Corporate Events',
    'Music Videos',
    'Commercial Production',
    'Documentary',
    'Portrait Session'
  ];

  const contactOptions = [
    {
      icon: Phone,
      title: 'Call Us',
      detail: '+234 810 672 8018',
      action: 'tel:+2348106728018',
      color: 'from-red-600 to-red-800'
    },
    {
      icon: Mail,
      title: 'Email Us',
      detail: 'IFEmedia.ng@gmail.com',
      action: 'mailto:IFEmedia.ng@gmail.com',
      color: 'from-red-700 to-rose-900'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      detail: 'Chat with us',
      action: 'https://wa.me/2348106728018',
      color: 'from-red-800 to-red-950'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden py-16">
      {/* Contact Form Section */}
      <section className="relative px-6 py-20 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 variants={itemVariants} className="text-4xl font-bold mb-8 text-white">
              Get In Touch
            </motion.h2>
            
            <div className="space-y-6">
              <motion.div variants={itemVariants}>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full bg-zinc-900 border-2 border-zinc-800 focus:border-red-600 rounded-xl px-6 py-4 text-white placeholder-gray-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-600/50"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-zinc-900 border-2 border-zinc-800 focus:border-red-600 rounded-xl px-6 py-4 text-white placeholder-gray-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-600/50"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-zinc-900 border-2 border-zinc-800 focus:border-red-600 rounded-xl px-6 py-4 text-white placeholder-gray-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-600/50"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full bg-zinc-900 border-2 border-zinc-800 focus:border-red-600 rounded-xl px-6 py-4 text-white placeholder-gray-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-600/50"
                >
                  <option value="">Select a Service</option>
                  {services.map((service) => (
                    <option key={service} value={service}>{service}</option>
                  ))}
                </select>
              </motion.div>

              <motion.div variants={itemVariants}>
                <textarea
                  name="message"
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full bg-zinc-900 border-2 border-zinc-800 focus:border-red-600 rounded-xl px-6 py-4 text-white placeholder-gray-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-600/50 resize-none"
                ></textarea>
              </motion.div>

              <motion.button
                variants={itemVariants}
                onClick={handleSubmit}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-red-700 to-red-900 hover:from-red-600 hover:to-red-800 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-red-900/50"
              >
                Send Message
                <Send className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>

          {/* Quick Contact Options */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.h2 variants={itemVariants} className="text-4xl font-bold mb-8 text-white">
              Quick Contact
            </motion.h2>

            {contactOptions.map((option, index) => (
              <motion.a
                key={index}
                href={option.action}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="block bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-xl p-6 transition-all duration-300 hover:border-red-600 hover:shadow-lg hover:shadow-red-900/30 group"
              >
                <div className="flex items-center gap-4">
                  <div className={`bg-gradient-to-br ${option.color} p-4 rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                    <option.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">{option.title}</h3>
                    <p className="text-gray-400">{option.detail}</p>
                  </div>
                </div>
              </motion.a>
            ))}

            {/* Location */}
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-xl p-6"
            >
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-red-700 to-red-900 p-4 rounded-lg">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">Visit Us</h3>
                  <p className="text-gray-400">Ikeja, Lagos, Nigeria</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Footer */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative px-6 py-32 text-center"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-red-950/20 via-transparent to-transparent"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
            Every masterpiece begins with a conversation.
          </h2>
          
          <motion.button
            onClick={() => setIsBottomSheetOpen(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-red-700 to-red-900 hover:from-red-600 hover:to-red-800 text-white font-bold py-5 px-12 rounded-xl text-lg transition-all duration-300 shadow-2xl hover:shadow-red-900/50"
          >
            Book Now
          </motion.button>
        </div>
      </motion.section>

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
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}