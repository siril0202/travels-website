import { motion } from 'motion/react';
import { Sliders, PhoneCall, Award, Gem, Star, ShieldCheck } from 'lucide-react';

export default function WhyChooseUs() {
  const pillars = [
    {
      id: 'personalized',
      icon: Sliders,
      title: 'Personalized Travel Planning',
      description: 'Our expert travel architects in Madurai craft bespoke, tailor-made itineraries tailored to your unique tastes. From private villa selections to customized daily excursions, every detail is uniquely yours.',
      highlight: '100% Bespoke'
    },
    {
      id: 'support',
      icon: PhoneCall,
      title: '24/7 Elite Concierge Support',
      description: 'Travel with complete peace of mind. From the minute you step out of your South Indian residence until you return, your personal concierge is available instantly by text or call to handle any real-time request.',
      highlight: 'Continuous Care'
    },
    {
      id: 'partners',
      icon: Award,
      title: 'Trusted Global Partners',
      description: 'We hold direct alliances with elite global luxury programs such as Virtuoso, Rosewood Elite, and Four Seasons Preferred. This gives our guests automatic room upgrades, spa credits, and VIP greetings.',
      highlight: 'Elite Network'
    },
    {
      id: 'guarantee',
      icon: Gem,
      title: 'Best Price & Perk Guarantee',
      description: 'Enjoy complete pricing transparency with no hidden markups. We guarantee the absolute best rates for equivalent high-end stays, bolstered by thousands of rupees in complimentary room upgrades and VIP amenities.',
      highlight: 'Virtuoso Privileges'
    }
  ];

  return (
    <section id="why-choose-us" className="py-24 md:py-32 relative bg-navy-900 overflow-hidden">
      {/* Curved Background Mask */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg className="relative block w-full h-8 text-navy-950" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M1200 120L0 16.48V0h1200v120z" fill="currentColor"></path>
        </svg>
      </div>

      {/* Decorative radial gradients */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-gold-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Visual Text Panel */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2">
              <span className="h-[1px] w-8 bg-gold-accent" />
              <span className="text-xs font-mono tracking-[0.3em] text-gold-accent uppercase font-medium">
                The Aurora standard
              </span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white leading-tight">
              Crafting Irreproachable <span className="italic font-normal gold-text-gradient">Journeys</span>
            </h2>
            
            <p className="text-sm md:text-base text-white/60 font-light leading-relaxed">
              We do not merely book travel; we engineer bespoke masterpieces. Founded on precision and styled with luxury, Aurora Travels elevates global exploration to an art form for Madurai's discerning citizens.
            </p>

            <div className="pt-6 grid grid-cols-2 gap-6 border-t border-white/5">
              <div className="space-y-1">
                <span className="text-3xl font-serif font-bold gold-text-gradient">150+</span>
                <p className="text-[10px] font-mono tracking-wider text-white/40 uppercase">Elite Destinations</p>
              </div>
              <div className="space-y-1">
                <span className="text-3xl font-serif font-bold gold-text-gradient">100%</span>
                <p className="text-[10px] font-mono tracking-wider text-white/40 uppercase">Bespoke Satisfaction</p>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-navy-950 p-4 rounded-xl border border-white/5">
              <ShieldCheck className="w-5 h-5 text-gold-accent" />
              <p className="text-xs text-white/80 font-light">
                Secure financial bonding, registered agency accreditation, and complete privacy compliance.
              </p>
            </div>
          </div>

          {/* Right pillars list */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  id={`why-pillar-${pillar.id}`}
                  key={pillar.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="p-6 md:p-8 rounded-2xl border border-white/10 bg-navy-950/40 hover:bg-navy-950 hover:border-gold-accent/25 transition-all duration-300 relative flex flex-col justify-between h-72"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-navy-900 border border-white/5 flex items-center justify-center text-gold-accent">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[9px] font-mono tracking-widest text-gold-accent uppercase bg-gold-accent/5 px-2 py-1 rounded">
                        {pillar.highlight}
                      </span>
                    </div>

                    <h3 className="text-lg font-serif font-semibold text-white tracking-wide">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-white/50 font-light leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                  
                  {/* Absolute subtle number indicator */}
                  <span className="absolute bottom-4 right-6 text-3xl font-serif font-bold text-white/5 select-none pointer-events-none">
                    0{idx + 1}
                  </span>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
