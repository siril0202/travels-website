import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, ChevronDown, Sparkles, MessageSquare } from 'lucide-react';
import { FAQS } from '../data';
import { FaqItem } from '../types';

export default function FaqAccordion() {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 relative bg-navy-950 overflow-hidden">
      
      {/* Curved Background Mask top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg className="relative block w-full h-8 text-navy-900" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M1200 120L0 16.48V0h1200v120z" fill="currentColor"></path>
        </svg>
      </div>

      <div className="absolute bottom-10 left-1/4 w-80 h-80 bg-gold-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 justify-center">
            <span className="h-[1px] w-6 bg-gold-accent" />
            <span className="text-xs font-mono tracking-[0.3em] text-gold-accent uppercase font-medium">
              Common Enquiries
            </span>
            <span className="h-[1px] w-6 bg-gold-accent" />
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white leading-tight">
            Frequently Asked <span className="italic font-normal gold-text-gradient">Questions</span>
          </h2>
          <p className="text-sm text-white/50 font-light">
            Everything you need to know about locking in five-star reservations, custom flights, and VIP security clearances.
          </p>
        </div>

        {/* FAQs Accordion Block */}
        <div className="space-y-4">
          {FAQS.map((faq: FaqItem) => {
            const isOpen = openId === faq.id;
            return (
              <div
                id={`faq-accordion-item-${faq.id}`}
                key={faq.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden bg-navy-900/60 ${
                  isOpen
                    ? 'border-gold-accent/30 shadow-lg shadow-gold-accent/2'
                    : 'border-white/5 hover:border-white/10'
                }`}
              >
                {/* Accordion header toggle */}
                <button
                  id={`btn-toggle-faq-${faq.id}`}
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-8 h-8 rounded-lg border flex items-center justify-center shrink-0 transition-all ${
                      isOpen
                        ? 'bg-gold-accent border-gold-accent text-navy-950 shadow-md shadow-gold-accent/10'
                        : 'bg-white/5 border-white/5 text-gold-accent'
                    }`}>
                      <HelpCircle className="w-4 h-4" />
                    </div>
                    <span className="text-sm md:text-base font-serif font-semibold text-white tracking-wide pr-4">
                      {faq.question}
                    </span>
                  </div>

                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="shrink-0 text-gold-accent"
                  >
                    <ChevronDown className="w-5 h-5" />
                  </motion.div>
                </button>

                {/* Animated accordion panel */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 pl-18 border-t border-white/5 pt-4">
                        <p className="text-xs md:text-sm text-white/70 font-light leading-relaxed">
                          {faq.answer}
                        </p>
                        <div className="mt-4 flex items-center gap-2">
                          <span className="text-[9px] font-mono uppercase tracking-wider bg-navy-950/80 text-white/40 border border-white/5 px-2.5 py-1 rounded">
                            Category: {faq.category}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Dynamic support footer block */}
        <div className="mt-12 text-center p-6 rounded-2xl glass-panel-gold border border-gold-accent/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <MessageSquare className="w-5 h-5 text-gold-accent animate-bounce" />
            <div>
              <p className="text-xs font-semibold text-white">Still have unresolved travel questions?</p>
              <p className="text-[10px] text-white/50 font-light">Contact our head office in Madurai for an immediate consultation.</p>
            </div>
          </div>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-6 py-2.5 rounded-full bg-gold-accent text-navy-950 text-xs font-semibold tracking-wider uppercase hover:bg-gold-light transition-colors whitespace-nowrap"
          >
            Ask Curator
          </a>
        </div>

      </div>
    </section>
  );
}
