import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export default function TestimonialsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const nextSlide = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  // Auto scroll testimonials every 8 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' }
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -100 : 100,
      opacity: 0,
      transition: { duration: 0.4, ease: 'easeIn' }
    })
  };

  const current = TESTIMONIALS[activeIndex];

  return (
    <section id="testimonials" className="py-24 relative bg-navy-950 overflow-hidden">
      {/* Decorative vectors */}
      <div className="absolute top-1/2 left-10 -translate-y-1/2 w-48 h-48 bg-gold-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-48 h-48 bg-navy-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 justify-center">
            <span className="h-[1px] w-6 bg-gold-accent" />
            <span className="text-xs font-mono tracking-[0.3em] text-gold-accent uppercase font-medium">
              Client Appraisals
            </span>
            <span className="h-[1px] w-6 bg-gold-accent" />
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white leading-tight">
            Voices of the <span className="italic font-normal gold-text-gradient">Discerning Few</span>
          </h2>
          <p className="text-sm text-white/50 font-light max-w-md mx-auto">
            Read first-hand accounts of elite travel memories engineered flawlessly by our personal curators.
          </p>
        </div>

        {/* Carousel Window */}
        <div className="relative min-h-[420px] md:min-h-[360px] flex items-center justify-center">
          
          {/* Navigation Buttons */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 z-20 hidden md:block">
            <button
              id="prev-testimonial"
              onClick={prevSlide}
              className="w-12 h-12 rounded-full border border-white/10 hover:border-gold-accent/40 bg-navy-900/60 hover:bg-navy-950 text-white hover:text-gold-accent flex items-center justify-center transition-all duration-300"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          </div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 z-20 hidden md:block">
            <button
              id="next-testimonial"
              onClick={nextSlide}
              className="w-12 h-12 rounded-full border border-white/10 hover:border-gold-accent/40 bg-navy-900/60 hover:bg-navy-950 text-white hover:text-gold-accent flex items-center justify-center transition-all duration-300"
              aria-label="Next review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={current.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="w-full max-w-3xl mx-auto glass-panel border border-white/10 p-8 md:p-12 rounded-3xl relative shadow-2xl flex flex-col md:flex-row gap-8 items-center"
            >
              {/* Giant elegant quote mark */}
              <Quote className="absolute top-6 right-8 w-12 h-12 text-gold-accent/10 pointer-events-none" />

              {/* Avatar Photo Frame */}
              <div className="relative shrink-0">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl overflow-hidden border border-gold-accent/30 relative">
                  <img
                    src={current.avatar}
                    alt={current.author}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover filter brightness-[0.9] contrast-[1.05]"
                  />
                </div>
                {/* Visual badge */}
                <div className="absolute -bottom-2 -right-2 bg-navy-950 border border-gold-accent/20 px-3 py-1 rounded-full text-[8px] font-mono uppercase text-gold-accent">
                  Verified Client
                </div>
              </div>

              {/* Text Review Info */}
              <div className="flex-grow text-center md:text-left space-y-4">
                {/* Star rating */}
                <div className="flex items-center justify-center md:justify-start gap-1">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-gold-accent fill-gold-accent" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-sm md:text-base text-navy-50 font-serif italic font-light leading-relaxed">
                  "{current.quote}"
                </p>

                {/* Author Info */}
                <div className="border-t border-white/5 pt-4 flex flex-col md:flex-row md:items-center justify-between gap-2">
                  <div>
                    <h4 className="text-base font-semibold text-white tracking-wide">
                      {current.author}
                    </h4>
                    <span className="text-[10px] font-mono text-white/40 uppercase tracking-wider">
                      {current.location}
                    </span>
                  </div>

                  <div className="text-[10px] font-mono tracking-widest text-gold-accent uppercase bg-gold-accent/5 border border-gold-accent/10 px-3 py-1 rounded-md self-center md:self-auto">
                    {current.trip}
                  </div>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>

        </div>

        {/* Carousel Dots & Mobile Chevrons */}
        <div className="mt-8 flex flex-col items-center gap-4">
          <div className="flex items-center gap-1.5">
            {TESTIMONIALS.map((_, idx) => (
              <button
                id={`btn-dot-testimonial-${idx}`}
                key={idx}
                onClick={() => {
                  setDirection(idx > activeIndex ? 1 : -1);
                  setActiveIndex(idx);
                }}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  activeIndex === idx ? 'w-6 bg-gold-accent' : 'bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <div className="flex md:hidden items-center gap-4 mt-2">
            <button
              id="prev-testimonial-mobile"
              onClick={prevSlide}
              className="w-10 h-10 rounded-full border border-white/10 bg-navy-900/60 text-white flex items-center justify-center"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              id="next-testimonial-mobile"
              onClick={nextSlide}
              className="w-10 h-10 rounded-full border border-white/10 bg-navy-900/60 text-white flex items-center justify-center"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
