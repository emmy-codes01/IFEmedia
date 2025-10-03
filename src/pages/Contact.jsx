import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MessageCircle, Send, MapPin } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for reaching out! We will get back to you shortly.');
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
      detail: '+234 XXX XXX XXXX',
      link: 'tel:+234XXXXXXXXXX',
      color: 'from-red-600 to-red-800'
    },
    {
      icon: Mail,
      title: 'Email Us',
      detail: 'hello@ifemedia.com',
      link: 'mailto:hello@ifemedia.com',
      color: 'from-red-700 to-rose-900'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      detail: 'Chat with us',
      link: 'https://wa.me/234XXXXXXXXXX',
      color: 'from-red-800 to-red-950'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
        {/* Red Vignette Effect */}
        <div className="absolute inset-0 bg-gradient-radial from-red-950/30 via-black to-black"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-900/20 via-transparent to-transparent"></div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-red-100 to-red-200 bg-clip-text text-transparent">
            Let's Create Something Timeless
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-light">
            Reach out today and let's capture your story in the most cinematic way.
          </p>
        </motion.div>
      </section>

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
                href={option.link}
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

      {/* Google Map Embed */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="px-6 py-20 max-w-6xl mx-auto"
      >
        <div className="rounded-xl overflow-hidden shadow-2xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126846.01179817388!2d3.2441726!3d6.6018154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b9228fa2a3999%3A0xd7a8324bddbae603!2sIkeja%2C%20Lagos!5e0!3m2!1sen!2sng!4v1234567890"
            width="100%"
            height="450"
            style={{ border: 0, filter: 'grayscale(100%) contrast(1.2)' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="IFEMedia Location"
          ></iframe>
        </div>
      </motion.section>

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
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-red-700 to-red-900 hover:from-red-600 hover:to-red-800 text-white font-bold py-5 px-12 rounded-xl text-lg transition-all duration-300 shadow-2xl hover:shadow-red-900/50"
          >
            Book Now
          </motion.button>
        </div>
      </motion.section>
    </div>
  );
}