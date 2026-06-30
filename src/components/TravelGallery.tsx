import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Camera, MapPin, ZoomIn } from 'lucide-react';
import { GALLERY_ITEMS } from '../data';
import { GalleryItem } from '../types';

export default function TravelGallery() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'island' | 'alpine' | 'metropolis' | 'heritage'>('all');
  const [activeZoomImage, setActiveZoomImage] = useState<GalleryItem | null>(null);

  const filters = [
    { value: 'all', label: 'All Frames' },
    { value: 'island', label: 'Island Bliss' },
    { value: 'alpine', label: 'Alpine & Valleys' },
    { value: 'metropolis', label: 'Modern Metropolis' },
    { value: 'heritage', label: 'Imperial Heritage' }
  ];

  const filteredItems = selectedCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === selectedCategory);

  return (
    <section id="gallery" className="py-24 md:py-32 relative bg-navy-900">
      
      {/* Curved Background Mask top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg className="relative block w-full h-8 text-navy-950" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M1200 120L0 16.48V0h1200v120z" fill="currentColor"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="space-y-4 max-w-xl">
            <div className="flex items-center gap-2">
              <span className="h-[1px] w-8 bg-gold-accent" />
              <span className="text-xs font-mono tracking-[0.3em] text-gold-accent uppercase font-medium">
                Visual Chronicles
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white leading-tight">
              Our Curated <span className="italic font-normal gold-text-gradient">Travel Gallery</span>
            </h2>
            <p className="text-sm text-white/50 font-light leading-relaxed">
              Vlimpses into luxury moments, serene horizons, and prestigious stays archived by our travelers across the globe.
            </p>
          </div>

          {/* Filter sub menu */}
          <div className="flex flex-wrap gap-2 overflow-x-auto no-scrollbar pb-1">
            {filters.map((filter) => {
              const isActive = selectedCategory === filter.value;
              return (
                <button
                  id={`gallery-filter-${filter.value}`}
                  key={filter.value}
                  onClick={() => setSelectedCategory(filter.value as any)}
                  className={`px-5 py-2.5 rounded-full text-[10px] font-semibold tracking-wider uppercase transition-all whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-gold-accent text-navy-950 font-bold'
                      : 'bg-navy-950/60 text-white/60 hover:text-white hover:bg-navy-950 border border-white/5'
                  }`}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Masonry Columns Layout */}
        <motion.div
          layout
          className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6 [column-fill:_balance] box-border"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item: GalleryItem) => (
              <motion.div
                id={`gallery-frame-${item.id}`}
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="break-inside-avoid relative rounded-2xl overflow-hidden border border-white/10 group bg-navy-950 cursor-pointer shadow-lg inline-block w-full"
                onClick={() => setActiveZoomImage(item)}
              >
                {/* Image Component */}
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.caption}
                    referrerPolicy="no-referrer"
                    className="w-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out filter brightness-[0.8]"
                  />
                  {/* Hover Mask overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/20 to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Info Text Overlay */}
                <div className="absolute bottom-0 left-0 w-full p-6 space-y-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="flex items-center gap-1 text-[9px] font-mono tracking-widest text-gold-accent uppercase">
                    <MapPin className="w-3 h-3" />
                    <span>{item.location}</span>
                  </div>
                  <h3 className="text-lg font-serif font-bold text-white leading-snug">
                    {item.caption}
                  </h3>
                  <div className="pt-2 flex items-center gap-1.5 text-[9px] font-mono text-white/40 tracking-wider uppercase border-t border-white/5">
                    <Camera className="w-3.5 h-3.5 text-gold-accent" />
                    <span>Exclusive Archive</span>
                  </div>
                </div>

                {/* Zoom corner icon */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-navy-950/80 border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <ZoomIn className="w-4 h-4 text-gold-accent" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Zoom Lightbox Modal */}
      <AnimatePresence>
        {activeZoomImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-navy-950/95 backdrop-blur-2xl flex items-center justify-center p-4"
            onClick={() => setActiveZoomImage(null)}
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="relative max-w-4xl w-full rounded-2xl overflow-hidden border border-white/10 bg-navy-900 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={activeZoomImage.image}
                alt={activeZoomImage.caption}
                referrerPolicy="no-referrer"
                className="w-full max-h-[75vh] object-cover"
              />
              <div className="p-6 md:p-8 bg-navy-950 border-t border-white/5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <div className="flex items-center gap-1 text-xs font-mono tracking-wider text-gold-accent uppercase mb-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{activeZoomImage.location}</span>
                  </div>
                  <h4 className="text-xl font-serif font-bold text-white">
                    {activeZoomImage.caption}
                  </h4>
                </div>
                <button
                  id="btn-close-lightbox"
                  onClick={() => setActiveZoomImage(null)}
                  className="px-6 py-2.5 rounded-full bg-white/5 border border-white/10 text-white hover:text-gold-accent hover:border-gold-accent text-xs font-semibold tracking-wider uppercase transition-colors cursor-pointer"
                >
                  Close View
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
