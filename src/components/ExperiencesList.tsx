import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import { EXPERIENCES } from '../data';
import { Experience } from '../types';

interface ExperiencesListProps {
  onSelectExperience: (categoryKey: 'honeymoon' | 'family' | 'adventure' | 'corporate' | 'group') => void;
}

export default function ExperiencesList({ onSelectExperience }: ExperiencesListProps) {
  // Safe icon lookup component
  const DynamicIcon = ({ name, className }: { name: string; className: string }) => {
    // Lookup icon from Lucide
    const IconComponent = (Icons as any)[name];
    if (!IconComponent) return <Icons.Compass className={className} />;
    return <IconComponent className={className} />;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  return (
    <section id="experiences" className="py-24 relative bg-navy-900 overflow-hidden">
      {/* Curved Border Accent between sections */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg className="relative block w-full h-8 text-navy-950" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M1200 120L0 16.48V0h1200v120z" fill="currentColor"></path>
        </svg>
      </div>

      {/* Decorative luxury vector lines */}
      <div className="absolute inset-y-0 right-0 w-1/3 opacity-5 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="40" stroke="#c5a85c" strokeWidth="0.5" />
          <circle cx="50" cy="50" r="30" stroke="#c5a85c" strokeWidth="0.3" />
          <line x1="10" y1="50" x2="90" y2="50" stroke="#c5a85c" strokeWidth="0.2" />
          <line x1="50" y1="10" x2="50" y2="90" stroke="#c5a85c" strokeWidth="0.2" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 justify-center">
            <span className="h-[1px] w-6 bg-gold-accent" />
            <span className="text-xs font-mono tracking-[0.3em] text-gold-accent uppercase font-medium">
              Bespoke Genres
            </span>
            <span className="h-[1px] w-6 bg-gold-accent" />
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white leading-tight">
            Luxury Travel <span className="italic font-normal gold-text-gradient">Experiences</span>
          </h2>
          <p className="text-sm md:text-base text-white/50 font-light max-w-xl mx-auto leading-relaxed">
            Every traveler holds a distinct vision of prestige. We handcraft bespoke narratives aligned precisely to your lifestyle goals.
          </p>
        </div>

        {/* Experience Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6"
        >
          {EXPERIENCES.map((exp: Experience, index: number) => {
            const isLarge = index === 0 || index === 2; // Create an organic rhythm
            return (
              <motion.div
                id={`experience-card-${exp.id}`}
                key={exp.id}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -4, transition: { duration: 0.3 } }}
                onClick={() => onSelectExperience(exp.id as any)}
                className={`group cursor-pointer relative h-[360px] rounded-2xl overflow-hidden border border-white/5 flex flex-col justify-between p-6 transition-all duration-300 shadow-lg ${
                  isLarge ? 'md:col-span-2 lg:col-span-1.5' : 'md:col-span-1'
                } bg-navy-950/60 hover:border-gold-accent/25 hover:shadow-gold-accent/5`}
              >
                {/* Backdrop Image */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={exp.image}
                    alt={exp.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover filter brightness-[0.4] group-hover:brightness-[0.55] group-hover:scale-105 transition-all duration-700 ease-out"
                  />
                  {/* Subtle dark gradient mask */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent" />
                </div>

                {/* Top Icon Badge */}
                <div className="relative z-10 w-11 h-11 rounded-xl bg-navy-950/80 border border-white/10 flex items-center justify-center text-gold-accent group-hover:text-white group-hover:bg-gold-accent/90 transition-all duration-300">
                  <DynamicIcon name={exp.iconName} className="w-5 h-5" />
                </div>

                {/* Content details */}
                <div className="relative z-10 space-y-2 mt-auto">
                  <h3 className="text-lg md:text-xl font-serif font-semibold text-white tracking-wide group-hover:text-gold-light transition-colors">
                    {exp.title}
                  </h3>
                  <p className="text-xs text-white/60 font-light leading-relaxed line-clamp-3 group-hover:text-white/80 transition-colors">
                    {exp.description}
                  </p>

                  <div className="pt-2 flex items-center gap-1.5 text-[10px] font-mono tracking-wider text-gold-accent uppercase group-hover:translate-x-1 transition-transform duration-300">
                    <span>Explore Genre</span>
                    <Icons.ChevronRight className="w-3 h-3" />
                  </div>
                </div>

                {/* Top Corner gold accent */}
                <div className="absolute top-0 right-0 w-0 h-0 border-t-8 border-r-8 border-t-transparent border-r-transparent group-hover:border-t-gold-accent group-hover:border-r-gold-accent transition-all duration-500" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
