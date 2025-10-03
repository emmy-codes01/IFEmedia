import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Video, Eye, Grid, Play, ArrowRight } from 'lucide-react';

// Mock portfolio data - replace with real data
const portfolioItems = [
  {
    id: 1,
    title: 'Elegant Wedding Ceremony',
    category: 'Photography',
    type: 'image',
    src: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    description: 'Timeless moments captured in golden hour perfection'
  },
  {
    id: 2,
    title: 'Brand Campaign Shoot',
    category: 'Photography',
    type: 'image',
    src: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    description: 'Luxury fashion meets contemporary storytelling'
  },
  {
    id: 3,
    title: 'Concert Cinematography',
    category: 'Videography',
    type: 'video',
    src: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    description: 'Energy and emotion captured in motion'
  },
  {
    id: 4,
    title: 'Corporate Event Coverage',
    category: 'Events',
    type: 'image',
    src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    description: 'Professional moments that matter'
  },
  {
    id: 5,
    title: 'Brand Story Documentary',
    category: 'Stories',
    type: 'video',
    src: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    description: 'Authentic narratives that resonate'
  },
  {
    id: 6,
    title: 'Luxury Portrait Session',
    category: 'Photography',
    type: 'image',
    src: 'https://images.unsplash.com/photo-1594736797933-d0ad6ba42c78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    description: 'Sophisticated portraiture with artistic vision'
  },
  {
    id: 7,
    title: 'Music Video Production',
    category: 'Videography',
    type: 'video',
    src: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    description: 'Creative vision meets technical excellence'
  },
  {
    id: 8,
    title: 'Gala Event Documentation',
    category: 'Events',
    type: 'image',
    src: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    description: 'Elegance captured in every detail'
  }
];

const featuredProjects = [
  {
    id: 1,
    title: 'Luxury Wedding Coverage',
    description: 'Capturing timeless love stories with elegance and precision. From intimate moments to grand celebrations, we document every precious detail of your special day.',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    category: 'Wedding Photography'
  },
  {
    id: 2,
    title: 'Brand Campaign Excellence',
    description: 'Elevating brands through compelling visual narratives. Our creative team brings your vision to life with stunning imagery and cinematic storytelling.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    category: 'Commercial Work'
  }
];

// Simple lightbox component
const Lightbox = ({ images, currentIndex, onClose, onPrevious, onNext }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrevious();
      if (e.key === 'ArrowRight') onNext();
    };
    
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onPrevious, onNext]);

  if (currentIndex === -1) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center"
        onClick={onClose}
      >
        <div className="relative max-w-7xl max-h-full mx-4 montserrat" onClick={(e) => e.stopPropagation()}>
          <img
            src={images[currentIndex]?.src}
            alt={images[currentIndex]?.title}
            className="max-w-full max-h-[90vh] object-contain"
          />
          
          {/* Navigation */}
          <button
            onClick={onPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-red-500 transition-colors"
          >
            <ArrowRight className="w-8 h-8 rotate-180" />
          </button>
          
          <button
            onClick={onNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-red-500 transition-colors"
          >
            <ArrowRight className="w-8 h-8" />
          </button>
          
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:text-red-500 transition-colors text-2xl"
          >
            ×
          </button>
          
          {/* Image info */}
          <div className="absolute bottom-4 left-4 text-white">
            <h3 className="text-xl font-bold">{images[currentIndex]?.title}</h3>
            <p className="text-gray-300">{images[currentIndex]?.description}</p>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [filteredItems, setFilteredItems] = useState(portfolioItems);
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  const categories = ['All', 'Photography', 'Videography', 'Events', 'Stories'];

  useEffect(() => {
    if (activeFilter === 'All') {
      setFilteredItems(portfolioItems);
    } else {
      setFilteredItems(portfolioItems.filter(item => item.category === activeFilter));
    }
  }, [activeFilter]);

  const openLightbox = (index) => {
    const actualIndex = portfolioItems.findIndex(item => item.id === filteredItems[index].id);
    setLightboxIndex(actualIndex);
  };

  const closeLightbox = () => setLightboxIndex(-1);
  
  const nextImage = () => {
    setLightboxIndex((prev) => (prev + 1) % portfolioItems.length);
  };
  
  const prevImage = () => {
    setLightboxIndex((prev) => (prev - 1 + portfolioItems.length) % portfolioItems.length);
  };

  return (
    <div className="min-h-screen bg-black text-white montserrat">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black to-red-950 opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative z-10 text-center max-w-4xl mx-auto px-6"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            Every frame. <br />
            <span className="text-red-500">Every detail.</span> <br />
            Every story.
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed"
          >
            Step inside our world, a curated showcase of iconic weddings, 
            brand campaigns, concerts, and storytelling masterpieces.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex justify-center gap-4"
          >
            <Camera className="w-8 h-8 text-red-500" />
            <Video className="w-8 h-8 text-white" />
            <Grid className="w-8 h-8 text-red-500" />
          </motion.div>
        </motion.div>
        
        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-red-500 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Portfolio Gallery */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-12"
          >
            <div className="flex flex-wrap gap-4 p-2 bg-white/5 rounded-xl border border-gray-800">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeFilter === category
                      ? 'bg-red-500 text-white shadow-lg shadow-red-500/25'
                      : 'text-gray-300 hover:text-white hover:bg-gray-800'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Gallery Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            <AnimatePresence>
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group relative aspect-[4/5] overflow-hidden rounded-lg bg-gray-900 cursor-pointer"
                  onClick={() => openLightbox(index)}
                >
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Video indicator */}
                  {item.type === 'video' && (
                    <div className="absolute top-4 right-4 bg-black bg-opacity-60 rounded-full p-2">
                      <Play className="w-4 h-4 text-white" />
                    </div>
                  )}
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                      <p className="text-gray-300 text-sm mb-4">{item.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-red-500 text-sm font-medium">{item.category}</span>
                        <Eye className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-20 px-6 bg-gradient-to-r from-gray-950 to-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Stories</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Dive deeper into our most impactful projects and discover the artistry behind each frame.
            </p>
          </motion.div>

          <div className="space-y-20">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`flex flex-col lg:flex-row items-center gap-12 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className="flex-1">
                  <div className="relative overflow-hidden rounded-2xl">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-[500px] object-cover transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>
                </div>
                
                <div className="flex-1 space-y-6">
                  <div className="text-red-500 text-sm font-medium uppercase tracking-wider">
                    {project.category}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold">{project.title}</h3>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    {project.description}
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-3 bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-red-500/25"
                  >
                    View Full Story
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Your story deserves the <span className="text-red-500">IFEMedia</span> touch.
          </h2>
          <p className="text-xl text-gray-400 mb-12 leading-relaxed">
            Ready to transform your vision into cinematic reality? Let's create something extraordinary together.
          </p>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(239, 68, 68, 0.3)' }}
            whileTap={{ scale: 0.95 }}
            className="bg-red-500 hover:bg-red-600 text-white px-12 py-6 rounded-xl text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-red-500/25"
          >
            Start Your Journey
          </motion.button>
        </motion.div>
      </section>

      {/* Lightbox */}
      <Lightbox
        images={portfolioItems}
        currentIndex={lightboxIndex}
        onClose={closeLightbox}
        onNext={nextImage}
        onPrevious={prevImage}
      />
    </div>
  );
};

export default Portfolio;