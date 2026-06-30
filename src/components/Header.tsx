import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Compass, PhoneCall, Sparkles } from 'lucide-react';

interface HeaderProps {
  onPlanJourneyClick: () => void;
}

export default function Header({ onPlanJourneyClick }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Destinations', href: '#destinations' },
    { name: 'Experiences', href: '#experiences' },
    { name: 'Signature Packages', href: '#packages' },
    { name: 'Why Aurora', href: '#why-choose-us' },
    { name: 'Curated Gallery', href: '#gallery' },
    { name: 'FAQ', href: '#faq' },
  ];

  const handleScrollTo = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.header
        id="aurora-header"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? 'py-4 glass-panel border-b border-white/5 shadow-2xl bg-navy-950/80'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo Brand */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-3 group"
          >
            <div className="relative w-10 h-10 flex items-center justify-center rounded-full border border-gold-accent/30 overflow-hidden bg-navy-900/50">
              <Compass className="w-5 h-5 text-gold-accent group-hover:rotate-45 transition-transform duration-700 ease-out" />
              <div className="absolute inset-0 bg-gold-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl tracking-widest font-semibold text-white group-hover:text-gold-light transition-colors duration-300">
                AURORA
              </span>
              <span className="text-[9px] font-mono tracking-[0.4em] text-gold-accent/80">
                TRAVELS
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollTo(link.href);
                }}
                className="relative text-xs tracking-widest font-medium uppercase text-white/70 hover:text-white transition-colors duration-300 group py-1"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gradient-to-right from-gold-accent to-gold-light transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* CTA & Actions */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="flex flex-col text-right">
              <span className="text-[10px] font-mono uppercase tracking-wider text-white/40">
                24/7 Concierge
              </span>
              <span className="text-xs font-semibold text-gold-accent">
                +91 XXXXX XXXXX
              </span>
            </div>
            <button
              id="cta-plan-journey-desktop"
              onClick={onPlanJourneyClick}
              className="relative px-6 py-3 rounded-full overflow-hidden border border-gold-accent/30 group hover:border-gold-accent transition-all duration-500 bg-navy-900/20"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-gold-accent/20 to-gold-dark/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
              <span className="relative text-xs font-semibold tracking-widest uppercase text-gold-accent group-hover:text-white flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5" />
                Plan Your Journey
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg border border-white/10 hover:border-white/20 bg-white/5 text-white transition-all"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-navy-950/95 backdrop-blur-xl lg:hidden flex flex-col justify-between pt-28 pb-12 px-8"
          >
            {/* Background Decorative Circles */}
            <div className="absolute top-1/4 -right-24 w-80 h-80 rounded-full bg-gold-accent/5 blur-3xl pointer-events-none" />
            <div className="absolute bottom-1/4 -left-24 w-80 h-80 rounded-full bg-navy-500/5 blur-3xl pointer-events-none" />

            <div className="flex flex-col gap-6">
              <span className="text-[10px] font-mono tracking-[0.3em] text-gold-accent/60 uppercase">
                Explore Our World
              </span>
              <nav className="flex flex-col gap-5">
                {navLinks.map((link, idx) => (
                  <motion.a
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: idx * 0.05 }}
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleScrollTo(link.href);
                    }}
                    className="text-xl font-serif text-white hover:text-gold-accent transition-colors duration-300"
                  >
                    {link.name}
                  </motion.a>
                ))}
              </nav>
            </div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col gap-6 border-t border-white/10 pt-8"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                  <PhoneCall className="w-4 h-4 text-gold-accent" />
                </div>
                <div>
                  <p className="text-[10px] font-mono tracking-wider text-white/40 uppercase">
                    Madurai Head Office
                  </p>
                  <p className="text-sm font-semibold text-white">+91 XXXXX XXXXX</p>
                </div>
              </div>

              <button
                id="cta-plan-journey-mobile"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onPlanJourneyClick();
                }}
                className="w-full py-4 rounded-full bg-gradient-to-r from-gold-dark via-gold-accent to-gold-light text-navy-950 text-xs font-semibold tracking-widest uppercase shadow-lg shadow-gold-accent/10 flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                Plan Your Journey
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
