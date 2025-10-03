import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Star, Play } from "lucide-react";

// Mock testimonials
const testimonials = [
  {
    id: 1,
    name: "Sarah & Michael Thompson",
    role: "Wedding - June 2024",
    photo:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=200&q=80",
    quote:
      "IFEMedia didn’t just capture our wedding—they preserved the magic. We relive our perfect day every time we watch our film.",
    rating: 5,
    featured: true,
  },
  {
    id: 2,
    name: "Marcus Johnson",
    role: "CEO, Luxury Brands Inc",
    photo:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80",
    quote:
      "Our brand campaign exceeded every expectation. Truly exceptional artistry.",
    rating: 5,
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    role: "Concert - Album Launch",
    photo:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80",
    quote:
      "The energy during my album launch was incredible. This is storytelling at its finest.",
    rating: 5,
  },
];

const TestimonialCard = ({ testimonial }) => (
  <div className="bg-gradient-to-br from-black to-red-950 p-8 rounded-2xl h-full border border-red-900 relative">
    <Quote className="absolute top-4 right-4 w-20 h-20 text-red-900/40 rotate-12" />

    <div className="flex flex-col items-center text-center">
      <img
        src={testimonial.photo}
        alt={testimonial.name}
        className="w-20 h-20 rounded-full object-cover ring-4 ring-red-600 mb-6"
      />
      <blockquote className="text-lg md:text-xl text-red-100 italic leading-relaxed mb-6">
        "{testimonial.quote}"
      </blockquote>
      <h4 className="text-xl font-bold text-white">{testimonial.name}</h4>
      <p className="text-red-400 text-sm uppercase">{testimonial.role}</p>
      <div className="flex justify-center mt-4 space-x-1">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
        ))}
      </div>
    </div>
  </div>
);

const TestimonialCarousel = ({ testimonials }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setIndex((i) => (i + 1) % testimonials.length),
      5000
    );
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const prev = () =>
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setIndex((i) => (i + 1) % testimonials.length);

  return (
    <div className="relative h-[400px]">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0"
        >
          <TestimonialCard testimonial={testimonials[index]} />
        </motion.div>
      </AnimatePresence>

      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-red-800/70 p-3 rounded-full text-white"
      >
        <ChevronLeft />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-red-800/70 p-3 rounded-full text-white"
      >
        <ChevronRight />
      </button>
    </div>
  );
};

const Testimonials = () => {
  const featured = testimonials.find((t) => t.featured);

  return (
    <div className="bg-black text-white">
      {/* Hero */}
      <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-black via-red-950 to-black text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          Trusted. <span className="text-red-500">Celebrated.</span> Remembered.
        </motion.h1>
        <p className="text-xl text-red-200 max-w-2xl mx-auto leading-relaxed">
          Every client we serve becomes part of our legacy. Their voices tell
          our story best.
        </p>
      </section>

      {/* Carousel */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          What Our Clients Say
        </h2>
        <TestimonialCarousel testimonials={testimonials} />
      </section>

      {/* Featured Highlight */}
      {featured && (
        <section className="py-20 px-6 bg-gradient-to-r from-black via-red-950 to-black">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-video rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80"
                alt="Featured video"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <div className="bg-red-600 p-6 rounded-full shadow-lg">
                  <Play className="w-8 h-8 text-white ml-1" />
                </div>
              </div>
            </div>

            <div>
              <blockquote className="text-2xl italic text-red-100 mb-6">
                "{featured.quote}"
              </blockquote>
              <div className="flex items-center space-x-4">
                <img
                  src={featured.photo}
                  alt={featured.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-lg font-bold">{featured.name}</h4>
                  <p className="text-red-400 text-sm">{featured.role}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 text-center bg-gradient-to-t from-black via-red-950 to-black">
        <h2 className="text-4xl font-bold mb-6">
          Ready to create your{" "}
          <span className="text-red-500">unforgettable story?</span>
        </h2>
        <p className="text-lg text-red-200 mb-8 max-w-2xl mx-auto">
          Join our family of satisfied clients and let us capture the moments
          that matter most.
        </p>
        <button className="bg-red-600 hover:bg-red-700 px-10 py-4 rounded-xl text-lg font-medium shadow-lg">
          Let's Talk
        </button>
      </section>
    </div>
  );
};

export default Testimonials;
