import { motion } from 'motion/react';
import { Star, ArrowUpRight, Globe, ShieldCheck } from 'lucide-react';
import { DESTINATIONS } from '../data';
import { Destination } from '../types';

interface DestinationsListProps {
  onSelectDestination: (destinationName: string) => void;
}

export default function DestinationsList({ onSelectDestination }: DestinationsListProps) {
  // Motion container presets
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: 'easeOut' }
    }
  };

  return (
    <section id="destinations" className="py-24 md:py-32 relative bg-navy-950">
      {/* Decorative Blur Spheres */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-navy-900/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-gold-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="h-[1px] w-8 bg-gold-accent" />
              <span className="text-xs font-mono tracking-[0.3em] text-gold-accent uppercase font-medium">
                Featured Portfolio
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white leading-tight">
              Curated Worlds of <span className="italic font-normal gold-text-gradient">Pure Indulgence</span>
            </h2>
            <p className="text-sm md:text-base text-white/60 font-light leading-relaxed">
              We scout the planet to select and secure exclusive entry, ultra-private villa reservations, and unmatched privileges across six premier global coordinates.
            </p>
          </div>

          <div className="flex items-center gap-3 bg-white/5 border border-white/5 rounded-2xl p-4 backdrop-blur-md self-start lg:self-auto">
            <Globe className="w-5 h-5 text-gold-accent" />
            <div className="flex flex-col">
              <span className="text-xs font-semibold text-white">Virtuoso Certified Elite Partner</span>
              <span className="text-[10px] font-mono text-white/40">VIP Upgrades Guaranteed globally</span>
            </div>
          </div>
        </div>

        {/* Staggered Destination Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {DESTINATIONS.map((dest: Destination) => (
            <motion.div
              id={`destination-card-${dest.id}`}
              key={dest.id}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative h-[480px] rounded-3xl overflow-hidden border border-white/10 flex flex-col justify-end bg-navy-900 shadow-xl"
            >
              {/* Destination Image backdrop */}
              <div className="absolute inset-0 z-0">
                <img
                  src={dest.image}
                  alt={dest.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s] ease-out filter brightness-[0.75] contrast-[1.05]"
                />
                {/* Soft black and navy gradient overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-black/30" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-t from-navy-900/90 via-navy-950/60 to-transparent transition-opacity duration-500" />
              </div>

              {/* Top rating badge */}
              <div className="absolute top-5 right-5 z-10 flex items-center gap-1 bg-black/40 border border-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full">
                <Star className="w-3.5 h-3.5 text-gold-accent fill-gold-accent" />
                <span className="text-xs font-semibold font-mono text-white">{dest.rating}</span>
              </div>

              {/* Luxury Badges / Tags */}
              <div className="absolute top-5 left-5 z-10 flex gap-2">
                <span className="text-[9px] font-mono uppercase tracking-wider bg-navy-950/80 border border-gold-accent/20 text-gold-accent px-2.5 py-1 rounded">
                  {dest.country}
                </span>
              </div>

              {/* Bottom Card Content Info */}
              <div className="relative z-10 p-6 md:p-8 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-2xl md:text-3xl font-serif font-bold text-white group-hover:text-gold-light transition-colors duration-300">
                    {dest.name}
                  </h3>
                  <p className="text-xs md:text-sm text-white/70 font-light line-clamp-2 leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity">
                    {dest.description}
                  </p>
                </div>

                {/* Sub features tags */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5 group-hover:border-white/10 transition-colors">
                  {dest.tags.map((tag, idx) => (
                    <span key={idx} className="text-[10px] font-mono text-white/50">
                      &bull; {tag}
                    </span>
                  ))}
                </div>

                {/* Interactive Action Curate */}
                <div className="pt-2 flex items-center justify-between">
                  <button
                    id={`btn-curate-${dest.id}`}
                    onClick={() => onSelectDestination(dest.name)}
                    className="text-xs font-semibold tracking-widest uppercase text-white group-hover:text-gold-accent flex items-center gap-2 group/btn transition-colors"
                  >
                    Curate Journey
                    <ArrowUpRight className="w-4 h-4 text-gold-accent group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </button>
                  <span className="text-[9px] font-mono text-white/30 group-hover:text-gold-accent/50 transition-colors">
                    BESPOKE ITINERARY
                  </span>
                </div>
              </div>

              {/* Subtle bottom border glow in gold */}
              <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-gold-dark via-gold-accent to-gold-light w-0 group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
