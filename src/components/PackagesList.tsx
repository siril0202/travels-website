import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Clock, CheckCircle2, Sparkles, MapPin, ArrowRight } from 'lucide-react';
import { PACKAGES } from '../data';
import { Package } from '../types';

interface PackagesListProps {
  onReservePackage: (pkg: Package) => void;
  selectedCategory: string;
  setSelectedCategory: (cat: string) => void;
}

export default function PackagesList({ onReservePackage, selectedCategory, setSelectedCategory }: PackagesListProps) {
  
  const categories = [
    { value: 'all', label: 'All Packages' },
    { value: 'honeymoon', label: 'Honeymoons' },
    { value: 'family', label: 'Family Vacations' },
    { value: 'adventure', label: 'Bespoke Adventure' },
    { value: 'corporate', label: 'Executive Travel' },
    { value: 'group', label: 'Group Estates' }
  ];

  // Filter packages based on selected state
  const filteredPackages = selectedCategory === 'all'
    ? PACKAGES
    : PACKAGES.filter(p => p.category === selectedCategory);

  return (
    <section id="packages" className="py-24 md:py-32 relative bg-navy-950">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-gold-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-navy-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="h-[1px] w-8 bg-gold-accent" />
              <span className="text-xs font-mono tracking-[0.3em] text-gold-accent uppercase font-medium">
                Signature Collections
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white leading-tight">
              Bespoke <span className="italic font-normal gold-text-gradient">Signature Packages</span>
            </h2>
            <p className="text-sm md:text-base text-white/50 font-light leading-relaxed">
              Every detail is meticulously planned: from private airport fast-tracks to yacht charters, five-star resorts, and curated Michelin dining.
            </p>
          </div>

          <div className="hidden lg:flex items-center gap-1.5 text-xs font-mono text-white/40">
            <span>SHOWING:</span>
            <span className="text-gold-accent font-semibold uppercase">{selectedCategory} ITINERARIES</span>
          </div>
        </div>

        {/* Categories Tab Filter Menu */}
        <div className="flex flex-wrap items-center gap-2 pb-1 mb-12 border-b border-white/5 overflow-x-auto no-scrollbar">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.value;
            return (
              <button
                id={`tab-filter-${cat.value}`}
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`px-6 py-3 rounded-full text-xs font-semibold tracking-wider uppercase transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-gold-dark via-gold-accent to-gold-light text-navy-950 shadow-md shadow-gold-accent/10'
                    : 'bg-white/5 hover:bg-white/10 text-white/70 hover:text-white border border-white/5'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Dynamic Package Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredPackages.map((pkg: Package, index: number) => (
              <motion.div
                id={`package-card-${pkg.id}`}
                key={pkg.id}
                layout
                initial={{ opacity: 0, scale: 0.92, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group flex flex-col h-full rounded-2xl border border-white/10 overflow-hidden bg-navy-900/60 hover:border-gold-accent/30 hover:shadow-2xl hover:shadow-gold-accent/5 transition-all duration-500"
              >
                {/* Package Image section */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.2s] ease-out filter brightness-[0.85]"
                  />
                  {/* Subtle dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-black/20" />

                  {/* Highlights badge if any */}
                  {pkg.highlightTag && (
                    <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 bg-gradient-to-r from-gold-dark to-gold-accent text-navy-950 px-3.5 py-1.5 rounded-full text-[9px] font-mono uppercase tracking-widest font-semibold shadow-md">
                      <Sparkles className="w-3 h-3 text-navy-950 fill-navy-950 animate-pulse" />
                      {pkg.highlightTag}
                    </div>
                  )}

                  {/* Rating Badge */}
                  <div className="absolute bottom-4 right-4 z-10 flex items-center gap-1 bg-black/50 border border-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full">
                    <Star className="w-3 h-3 text-gold-accent fill-gold-accent" />
                    <span className="text-xs font-semibold font-mono text-white">{pkg.rating}</span>
                  </div>

                  {/* Destination pin badge */}
                  <div className="absolute bottom-4 left-4 z-10 flex items-center gap-1.5 text-xs text-white bg-navy-950/80 px-3.5 py-1.5 rounded-full border border-white/5 backdrop-blur-md">
                    <MapPin className="w-3.5 h-3.5 text-gold-accent" />
                    <span className="font-medium">{pkg.destinationName}</span>
                  </div>
                </div>

                {/* Card Main Body */}
                <div className="p-6 md:p-8 flex flex-col flex-grow justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5 text-white/50 text-xs font-mono">
                        <Clock className="w-3.5 h-3.5 text-gold-accent" />
                        <span>{pkg.duration}</span>
                      </div>
                      <span className="text-[10px] font-mono tracking-widest text-gold-accent uppercase">
                        DOOR-TO-DOOR VIP
                      </span>
                    </div>

                    <h3 className="text-xl md:text-2xl font-serif font-bold text-white tracking-wide group-hover:text-gold-light transition-colors duration-300">
                      {pkg.title}
                    </h3>

                    <p className="text-xs text-white/60 font-light leading-relaxed">
                      {pkg.description}
                    </p>

                    {/* Dynamic Inclusions */}
                    <div className="space-y-2 pt-4 border-t border-white/5">
                      <span className="text-[10px] font-mono tracking-widest text-gold-accent/80 uppercase block">
                        VIP Privileges Included:
                      </span>
                      <ul className="space-y-2">
                        {pkg.inclusions.map((inc, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-xs text-white/80 font-light leading-snug">
                            <CheckCircle2 className="w-4 h-4 text-gold-accent shrink-0 mt-0.5" />
                            <span>{inc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Footer & Pricing */}
                  <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                    <div>
                      <span className="text-[9px] font-mono text-white/40 block tracking-widest uppercase">
                        Premium Package from
                      </span>
                      <span className="text-xl md:text-2xl font-serif font-bold text-white tracking-tight">
                        {pkg.price}
                        <span className="text-xs text-white/40 font-sans font-light"> /person</span>
                      </span>
                    </div>

                    <button
                      id={`btn-reserve-${pkg.id}`}
                      onClick={() => onReservePackage(pkg)}
                      className="px-5 py-3 rounded-xl bg-navy-950 hover:bg-gold-accent hover:text-navy-950 text-gold-accent border border-gold-accent/20 hover:border-gold-accent text-xs font-semibold tracking-wider uppercase transition-all duration-300 flex items-center gap-1.5 group/btn"
                    >
                      Reserve
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
