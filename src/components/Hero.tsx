import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { Calendar, MapPin, Sparkles, PlaneTakeoff, ChevronRight, Play, Volume2, VolumeX } from 'lucide-react';
import { DESTINATIONS } from '../data';

interface HeroProps {
  onExplorePackages: () => void;
  onPlanJourney: (initialValues?: { destination: string; style: string }) => void;
}

export default function Hero({ onExplorePackages, onPlanJourney }: HeroProps) {
  const [selectedDest, setSelectedDest] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedStyle, setSelectedStyle] = useState('');
  const [isVideoMuted, setIsVideoMuted] = useState(true);

  const months = [
    'July 2026',
    'August 2026',
    'September 2026',
    'October 2026',
    'November 2026',
    'December 2026',
    'Spring 2027'
  ];

  const styles = [
    { value: 'honeymoon', label: 'Honeymoon Retreat' },
    { value: 'family', label: 'Family Vacation' },
    { value: 'adventure', label: 'Bespoke Adventure' },
    { value: 'corporate', label: 'Executive Retreat' },
    { value: 'group', label: 'Elite Group Tour' }
  ];

  const handleInquirySubmit = (e: FormEvent) => {
    e.preventDefault();
    onPlanJourney({
      destination: selectedDest,
      style: selectedStyle
    });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
      {/* Video Background Layer */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted={isVideoMuted}
          playsInline
          className="w-full h-full object-cover scale-[1.02] filter brightness-[0.55]"
          poster="https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=1920&auto=format&fit=crop"
        >
          <source
            src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27d2ab2d71d10212f4b1cd7721a221f1d13f9c6&profile_id=165&oauth2_token_id=57447761"
            type="video/mp4"
          />
        </video>
        {/* Soft elegant gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/70 via-transparent to-navy-950" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/60 via-transparent to-navy-950/30" />
      </div>

      {/* Video Audio Control Overlay */}
      <div className="absolute bottom-28 right-8 z-10 hidden md:flex items-center gap-2">
        <button
          id="toggle-video-audio"
          onClick={() => setIsVideoMuted(!isVideoMuted)}
          className="w-9 h-9 rounded-full bg-black/40 hover:bg-black/60 border border-white/10 flex items-center justify-center text-white backdrop-blur-md transition-all duration-300"
          title={isVideoMuted ? "Unmute Cinematic Sound" : "Mute Video"}
        >
          {isVideoMuted ? <VolumeX className="w-4 h-4 text-white/70" /> : <Volume2 className="w-4 h-4 text-gold-accent" />}
        </button>
        <span className="text-[10px] font-mono tracking-widest text-white/60 bg-black/30 px-3 py-1.5 rounded-full border border-white/5 backdrop-blur-md">
          {isVideoMuted ? "CINEMATIC SILENT MODE" : "SOUND: ON"}
        </span>
      </div>

      {/* Hero Content Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center pt-8 pb-16">
        {/* Text Area */}
        <div className="lg:col-span-7 text-left space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel-gold"
          >
            <Sparkles className="w-3.5 h-3.5 text-gold-accent animate-pulse" />
            <span className="text-[10px] md:text-xs tracking-[0.25em] font-mono text-gold-accent uppercase font-semibold">
              Bespoke Luxury Portal &bull; Madurai Office
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
            className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold tracking-tight text-white leading-[1.1]"
          >
            Discover <span className="italic font-normal gold-text-gradient">Extraordinary</span> Destinations Across The Globe
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-lg text-navy-100/80 max-w-xl font-light leading-relaxed"
          >
            Aurora Travels orchestrates ultra-private journeys, Michelin cuisine, five-star private estates, and dedicated 24/7 personal concierges departing from Madurai and South India's prime runways.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap gap-4 pt-2"
          >
            <button
              id="hero-explore-packages"
              onClick={onExplorePackages}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-gold-dark via-gold-accent to-gold-light text-navy-950 text-xs font-semibold tracking-widest uppercase hover:opacity-95 transition-all shadow-lg shadow-gold-accent/20 flex items-center gap-2 group"
            >
              Explore Packages
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              id="hero-plan-journey"
              onClick={() => onPlanJourney()}
              className="px-8 py-4 rounded-full glass-panel border border-white/10 hover:border-white/25 hover:bg-white/5 text-white text-xs font-semibold tracking-widest uppercase transition-all flex items-center gap-2"
            >
              Plan Your Journey
              <PlaneTakeoff className="w-4 h-4 text-gold-accent" />
            </button>
          </motion.div>
        </div>

        {/* Floating Travel Inquiry Widget */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease: 'easeOut' }}
          className="lg:col-span-5 w-full max-w-md mx-auto lg:mr-0 glass-panel border border-white/10 p-6 md:p-8 rounded-3xl shadow-2xl relative"
        >
          {/* Subtle gold flare at corner */}
          <div className="absolute top-0 right-12 w-24 h-24 bg-gold-accent/10 rounded-full blur-2xl pointer-events-none" />

          <div className="flex flex-col gap-2 mb-6">
            <h2 className="text-xl font-serif font-semibold text-white tracking-wide">
              Begin Your Bespoke Narrative
            </h2>
            <p className="text-xs text-white/50 font-light">
              Submit your ideal coordinates to lock in exclusive Virtuoso upgrades and flight feeder schedules.
            </p>
          </div>

          <form onSubmit={handleInquirySubmit} className="space-y-4">
            {/* Destination Selection */}
            <div className="space-y-1.5">
              <label className="text-[10px] font-mono tracking-wider text-gold-accent/80 uppercase block">
                Where to?
              </label>
              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gold-accent" />
                <select
                  id="widget-select-destination"
                  required
                  value={selectedDest}
                  onChange={(e) => setSelectedDest(e.target.value)}
                  className="w-full bg-navy-950/90 border border-white/10 rounded-xl py-3.5 pl-11 pr-4 text-xs tracking-wide text-white focus:outline-none focus:border-gold-accent focus:ring-1 focus:ring-gold-accent/20 appearance-none transition-all cursor-pointer"
                >
                  <option value="" className="bg-navy-950 text-white/40">Select Global Port</option>
                  {DESTINATIONS.map((dest) => (
                    <option key={dest.id} value={dest.name} className="bg-navy-950 text-white">
                      {dest.name} &bull; {dest.country}
                    </option>
                  ))}
                  <option value="Custom Bespoke" className="bg-navy-950 text-white">Other (Custom Itinerary)</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none border-l border-white/10 pl-2.5">
                  <div className="border-t-4 border-x-4 border-t-gold-accent border-x-transparent w-0 h-0" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {/* Departure Month Selection */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-mono tracking-wider text-gold-accent/80 uppercase block">
                  Departure Month
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gold-accent" />
                  <select
                    id="widget-select-month"
                    required
                    value={selectedMonth}
                    onChange={(e) => setSelectedMonth(e.target.value)}
                    className="w-full bg-navy-950/90 border border-white/10 rounded-xl py-3 pl-9 pr-3 text-xs tracking-wide text-white focus:outline-none focus:border-gold-accent appearance-none transition-all cursor-pointer"
                  >
                    <option value="" className="bg-navy-950 text-white/40">Anytime</option>
                    {months.map((m) => (
                      <option key={m} value={m} className="bg-navy-950 text-white">{m}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Style Selection */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-mono tracking-wider text-gold-accent/80 uppercase block">
                  Experience Style
                </label>
                <div className="relative">
                  <Sparkles className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gold-accent" />
                  <select
                    id="widget-select-style"
                    required
                    value={selectedStyle}
                    onChange={(e) => setSelectedStyle(e.target.value)}
                    className="w-full bg-navy-950/90 border border-white/10 rounded-xl py-3 pl-9 pr-3 text-xs tracking-wide text-white focus:outline-none focus:border-gold-accent appearance-none transition-all cursor-pointer"
                  >
                    <option value="" className="bg-navy-950 text-white/40">Any Style</option>
                    {styles.map((style) => (
                      <option key={style.value} value={style.value} className="bg-navy-950 text-white">
                        {style.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <button
              id="widget-submit-inquiry"
              type="submit"
              className="w-full mt-4 py-4 rounded-xl bg-gradient-to-r from-gold-dark to-gold-accent text-navy-950 text-xs font-semibold tracking-widest uppercase hover:brightness-105 transition-all shadow-md shadow-gold-accent/10 flex items-center justify-center gap-2 group"
            >
              <Sparkles className="w-4 h-4" />
              Check Luxury Availability
            </button>

            <div className="text-center pt-2">
              <span className="text-[10px] font-mono text-white/30 tracking-wider">
                Departures coordinated from IXM, MAA & BLR airports
              </span>
            </div>
          </form>
        </motion.div>
      </div>

      {/* Exquisite Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 opacity-60">
        <span className="text-[9px] font-mono tracking-[0.3em] uppercase text-white/60">
          Scroll
        </span>
        <div className="w-[1.5px] h-10 bg-gradient-to-b from-gold-accent/80 to-transparent relative overflow-hidden">
          <motion.div
            animate={{ y: [0, 40, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            className="absolute top-0 left-0 w-full h-3 bg-white"
          />
        </div>
      </div>
    </section>
  );
}
