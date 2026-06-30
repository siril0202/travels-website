import { useState, FormEvent } from 'react';
import { Compass, Mail, Send, Instagram, Facebook, Linkedin, Twitter, ArrowUp, CheckCircle } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-navy-950 border-t border-white/5 relative overflow-hidden pt-20 pb-12">
      {/* Background radial highlight */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 space-y-16">
        
        {/* Top Segment: Brand & Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pb-12 border-b border-white/5">
          {/* Brand Presentation */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-gold-accent/30 flex items-center justify-center bg-navy-900/50">
                <Compass className="w-5 h-5 text-gold-accent" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl tracking-widest font-semibold text-white">
                  AURORA
                </span>
                <span className="text-[9px] font-mono tracking-[0.4em] text-gold-accent/80">
                  TRAVELS
                </span>
              </div>
            </div>
            <p className="text-xs md:text-sm text-white/50 font-light leading-relaxed max-w-sm">
              An accredited elite travel agency engineering flawless bespoke journeys, private estate booking, and custom flights from our lounge on Race Course Road, Madurai.
            </p>
          </div>

          {/* Newsletter subscription form */}
          <div className="lg:col-span-7 space-y-4 lg:pl-12">
            <div>
              <span className="text-[9px] font-mono tracking-[0.25em] text-gold-accent uppercase font-medium block mb-1">
                Aurora Privé Club
              </span>
              <h3 className="text-lg font-serif font-semibold text-white tracking-wide">
                Subscribe to Our Curated Seasonal Chronicles
              </h3>
              <p className="text-xs text-white/40 font-light mt-0.5">
                Lock in early VIP announcements, private jet shared seats, and seasonal portfolio itineraries.
              </p>
            </div>

            {!isSubscribed ? (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md">
                <div className="relative flex-grow">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gold-accent" />
                  <input
                    id="newsletter-email"
                    type="email"
                    required
                    placeholder="your.private.email@domain.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-navy-900 border border-white/10 rounded-xl py-3.5 pl-11 pr-4 text-xs text-white placeholder-white/30 focus:outline-none focus:border-gold-accent transition-all"
                  />
                </div>
                <button
                  id="btn-subscribe-newsletter"
                  type="submit"
                  className="px-6 py-3.5 rounded-xl bg-gold-accent hover:bg-gold-light text-navy-950 text-xs font-semibold tracking-wider uppercase transition-colors flex items-center justify-center gap-1.5 shrink-0 cursor-pointer"
                >
                  Join Club
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            ) : (
              <div className="flex items-center gap-2.5 text-gold-accent text-xs font-mono py-2 animate-fadeIn">
                <CheckCircle className="w-5 h-5 stroke-[2.5]" />
                <span>Subscription Active! Welcome to the Aurora Privé Registry.</span>
              </div>
            )}
          </div>
        </div>

        {/* Middle Segment: Links and coordinates */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Quick Links Column */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono tracking-widest text-gold-accent uppercase font-semibold">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-white/60 font-light">
              <li>
                <a href="#destinations" onClick={(e) => { e.preventDefault(); handleScrollToSection('#destinations'); }} className="hover:text-gold-accent transition-colors">
                  Featured Destinations
                </a>
              </li>
              <li>
                <a href="#experiences" onClick={(e) => { e.preventDefault(); handleScrollToSection('#experiences'); }} className="hover:text-gold-accent transition-colors">
                  Travel Experiences
                </a>
              </li>
              <li>
                <a href="#packages" onClick={(e) => { e.preventDefault(); handleScrollToSection('#packages'); }} className="hover:text-gold-accent transition-colors">
                  Signature Packages
                </a>
              </li>
              <li>
                <a href="#why-choose-us" onClick={(e) => { e.preventDefault(); handleScrollToSection('#why-choose-us'); }} className="hover:text-gold-accent transition-colors">
                  The Aurora Standard
                </a>
              </li>
            </ul>
          </div>

          {/* Luxury Categories Column */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono tracking-widest text-gold-accent uppercase font-semibold">
              Travel Styles
            </h4>
            <ul className="space-y-2.5 text-xs text-white/60 font-light">
              <li>
                <a href="#packages" onClick={(e) => { e.preventDefault(); handleScrollToSection('#packages'); }} className="hover:text-gold-accent transition-colors">
                  Honeymoon Packages
                </a>
              </li>
              <li>
                <a href="#packages" onClick={(e) => { e.preventDefault(); handleScrollToSection('#packages'); }} className="hover:text-gold-accent transition-colors">
                  Family Villa Holidays
                </a>
              </li>
              <li>
                <a href="#packages" onClick={(e) => { e.preventDefault(); handleScrollToSection('#packages'); }} className="hover:text-gold-accent transition-colors">
                  High-Octane Adventure
                </a>
              </li>
              <li>
                <a href="#packages" onClick={(e) => { e.preventDefault(); handleScrollToSection('#packages'); }} className="hover:text-gold-accent transition-colors">
                  Executive Corporate
                </a>
              </li>
            </ul>
          </div>

          {/* Local Coordinates column */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono tracking-widest text-gold-accent uppercase font-semibold">
              Lounge Coordinates
            </h4>
            <ul className="space-y-2.5 text-xs text-white/60 font-light">
              <li>
                Race Course Road, Madurai,
                <br />
                Tamil Nadu 625002, India
              </li>
              <li>
                <span className="text-[10px] font-mono text-white/40 block mt-1">24/7 ENQUIRY</span>
                <span className="text-gold-accent font-semibold">+91 XXXXX XXXXX</span>
              </li>
              <li>
                <span className="text-[10px] font-mono text-white/40 block">SECURE EMAIL</span>
                <span className="text-white">hello@auroratravels.demo</span>
              </li>
            </ul>
          </div>

          {/* Social Links & Trust badge Column */}
          <div className="space-y-5">
            <h4 className="text-xs font-mono tracking-widest text-gold-accent uppercase font-semibold">
              Social Channels
            </h4>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-gold-accent hover:text-navy-950 border border-white/5 text-white/80 flex items-center justify-center transition-all duration-300"
                aria-label="Aurora Travels Instagram Handle"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-gold-accent hover:text-navy-950 border border-white/5 text-white/80 flex items-center justify-center transition-all duration-300"
                aria-label="Aurora Travels Facebook Handle"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-gold-accent hover:text-navy-950 border border-white/5 text-white/80 flex items-center justify-center transition-all duration-300"
                aria-label="Aurora Travels LinkedIn Handle"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-gold-accent hover:text-navy-950 border border-white/5 text-white/80 flex items-center justify-center transition-all duration-300"
                aria-label="Aurora Travels Twitter Handle"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>

            <div className="p-3.5 rounded-xl border border-white/5 bg-navy-900 text-[10px] text-white/40 font-mono tracking-wider">
              ESTD. 2026 &bull; MADURAI
              <br />
              <span className="text-gold-accent font-semibold text-[9px]">VIRTUOSO MEMBER</span>
            </div>
          </div>

        </div>

        {/* Bottom Segment: copyright & back to top */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-white/30 font-mono">
          <div className="text-center md:text-left space-y-1">
            <p>
              &copy; 2026 Aurora Travels. All Rights Reserved. &bull;{' '}
              <span className="text-white/40">Designed & Developed by</span>{' '}
              <a
                href="https://codewithsiril.site"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold-accent hover:text-gold-light hover:underline transition-all font-medium"
              >
                CodeWithSiril
              </a>
            </p>
            <p className="text-[9px]">
              Bespoke travel portfolio demonstration project serving Madurai, Tamil Nadu, India. Fully simulated UI.
            </p>
          </div>

          <button
            id="btn-scroll-to-top"
            onClick={handleScrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/5 hover:border-gold-accent/40 bg-navy-900 hover:bg-navy-950 text-white/50 hover:text-gold-accent transition-all cursor-pointer"
          >
            <span>Top of Canvas</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
