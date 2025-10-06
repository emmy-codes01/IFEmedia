import React from 'react';
import { motion } from 'framer-motion';
import { Star, Check, Heart, Shield, Instagram, Twitter, Linkedin, Mail } from 'lucide-react';
import ife from '../assets/images/Display/ife.png'

const About = () => {
  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const fadeInLeft = {
    initial: { opacity: 0, x: -60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6 }
  };

  const fadeInRight = {
    initial: { opacity: 0, x: 60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  // Team data
  const team = [
    {
      name: "Sarah Chen",
      role: "Creative Director",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      socials: { instagram: "#", twitter: "#", linkedin: "#" }
    },
    {
      name: "Marcus Rodriguez",
      role: "Lead Cinematographer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      socials: { instagram: "#", twitter: "#", linkedin: "#" }
    },
    {
      name: "Emma Thompson",
      role: "Brand Strategist",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      socials: { instagram: "#", twitter: "#", linkedin: "#" }
    },
    {
      name: "James Park",
      role: "Senior Photographer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      socials: { instagram: "#", twitter: "#", linkedin: "#" }
    }
  ];

  // Values data
  const values = [
    {
      icon: Star,
      title: "Creativity",
      description: "Pushing boundaries with innovative visual storytelling that captivates and inspires."
    },
    {
      icon: Check,
      title: "Excellence",
      description: "Uncompromising quality in every frame, every edit, every final delivery."
    },
    {
      icon: Heart,
      title: "Integrity",
      description: "Building trust through transparent communication and ethical business practices."
    },
    {
      icon: Shield,
      title: "Legacy",
      description: "Creating timeless content that will be treasured for generations to come."
    }
  ];

  return (
    <div className="bg-black text-white overflow-hidden montserrat">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-red-960 to-black"></div>
        
        {/* Red accent elements */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-red-600 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-red-600 rounded-full blur-2xl opacity-30"></div>
        
        <motion.div 
          className="relative z-10 text-center max-w-5xl mx-auto px-6"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-8 leading-tight"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Driven by <span className="text-red-600">Passion</span>.
            <br />
            Defined by <span className="text-red-600">Excellence</span>.
          </motion.h1>
          
          <motion.p 
            className="text-sm md:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            IFEMedia was born from a singular vision: to capture life's most powerful moments and turn them into timeless stories.
          </motion.p>
        </motion.div>
      </section>

      {/* Mission Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-20"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-8">Our Mission</h2>
            <p className="text-2xl md:text-3xl text-red-600 font-light italic max-w-4xl mx-auto leading-relaxed">
              "To create premium visual stories and deliver Excellence with speed”"
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 px-6 bg-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-5xl md:text-6xl font-bold text-center mb-20"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Our Values
          </motion.h2>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group relative p-8 rounded-2xl bg-black/50 border border-gray-800 hover:border-red-600/50 transition-all duration-500 hover:shadow-2xl hover:shadow-red-600/10"
                whileHover={{ y: -10, scale: 1.02 }}
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-red-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <value.icon className="w-12 h-12 text-red-600 mb-6 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-red-600 transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              className="relative"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInLeft}
            >
              {/* Cinematic image with overlay */}
              <div className="relative overflow-hidden rounded-2xl">
                <img 
                  src={ife}
                  alt="Behind the scenes"
                  className="w-full h-96 md:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <div className="w-16 h-1 bg-red-600 mb-3"></div>
                  <p className="text-white font-medium">Behind the Magic</p>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 border-2 border-red-600 rounded-full opacity-30"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-red-600 rounded-full opacity-20"></div>
            </motion.div>
            
            <motion.div 
              className="space-y-8"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInRight}
            >
              <h2 className="text-5xl md:text-6xl font-bold leading-tight">
                Our Story
              </h2>
              
              <div className="w-16 h-1 bg-red-600"></div>
              
              <p className="text-xl text-gray-300 leading-relaxed">
                We believe every project is more than just visuals, it's about emotion, legacy, and artistry. Our team of seasoned photographers, cinematographers, and storytellers combine technical mastery with an eye for detail to deliver a world-class media experience.
              </p>
              
              <p className="text-lg text-gray-400 leading-relaxed">
                From intimate moments to grand celebrations, we approach each project with the same dedication to excellence that has defined our brand since day one.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 
              className="text-5xl md:text-7xl font-bold mb-8"
              variants={fadeInUp}
            >
              Let's create something
              <br />
              <span className="text-red-600">timeless</span> together.
            </motion.h2>
            
            <motion.p 
              className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              Ready to bring your vision to life? We're here to make it extraordinary.
            </motion.p>
            
            <motion.div variants={fadeInUp}>
              <motion.button 
                className="group relative px-10 py-4 bg-red-600 text-white text-xl font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-red-600/30"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Button glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <span className="relative z-10 flex items-center space-x-2">
                  <span className='text-sm'>Work With Us</span>
                  <Mail className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;