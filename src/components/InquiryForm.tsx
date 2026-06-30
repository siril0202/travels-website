import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Sparkles, Send, CheckCircle2, Clock, Calendar, Users, Globe } from 'lucide-react';
import { DESTINATIONS } from '../data';

interface InquiryFormProps {
  initialValues?: {
    destination: string;
    style: string;
  } | null;
}

export default function InquiryForm({ initialValues }: InquiryFormProps) {
  // Form State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [dest, setDest] = useState(initialValues?.destination || '');
  const [month, setMonth] = useState('');
  const [style, setStyle] = useState(initialValues?.style || '');
  const [guests, setGuests] = useState('2');
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [inquiryCode, setInquiryCode] = useState('');

  // Handle preset values if initialValues change
  useState(() => {
    if (initialValues) {
      if (initialValues.destination) setDest(initialValues.destination);
      if (initialValues.style) setStyle(initialValues.style);
    }
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate luxury API call
    setTimeout(() => {
      // Generate a realistic inquiry code
      const code = `AUR-2026-${Math.floor(1000 + Math.random() * 9000)}`;
      setInquiryCode(code);
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1800);
  };

  const handleResetForm = () => {
    setName('');
    setEmail('');
    setPhone('');
    setDest('');
    setMonth('');
    setStyle('');
    setGuests('2');
    setNotes('');
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative bg-navy-900 overflow-hidden">
      {/* Decorative Vectors */}
      <div className="absolute top-1/4 -right-24 w-96 h-96 bg-gold-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -left-24 w-96 h-96 bg-navy-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 justify-center">
            <span className="h-[1px] w-6 bg-gold-accent" />
            <span className="text-xs font-mono tracking-[0.3em] text-gold-accent uppercase font-medium">
              Bespoke Registration
            </span>
            <span className="h-[1px] w-6 bg-gold-accent" />
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white leading-tight">
            Plan Your <span className="italic font-normal gold-text-gradient">Extraordinary Journey</span>
          </h2>
          <p className="text-sm text-white/50 font-light">
            Fill in your preferred travel details. Our elite destination coordinators will curate a custom portfolio and reach out within 24 hours.
          </p>
        </div>

        {/* Master Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Panel: Contact Coordinates & Maps */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-serif font-bold text-white tracking-wide">
                Aurora Travels Office
              </h3>
              <p className="text-xs md:text-sm text-white/60 font-light leading-relaxed">
                Nestled on Race Course Road, our private travel lounge welcomes South India's elite families and executives. We provide exclusive, personal, face-to-face consultations in a secure environment.
              </p>
            </div>

            {/* Coordinates Cards */}
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-5 rounded-2xl border border-white/5 bg-navy-950/40 hover:border-gold-accent/20 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-navy-900 border border-white/5 flex items-center justify-center text-gold-accent shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-mono tracking-wider text-white/40 uppercase">Address</span>
                  <p className="text-xs md:text-sm text-white font-medium">
                    Suite 404, Royal Crown Estates, Race Course Road, Madurai, Tamil Nadu 625002, India
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-4 p-5 rounded-2xl border border-white/5 bg-navy-950/40 hover:border-gold-accent/20 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-navy-900 border border-white/5 flex items-center justify-center text-gold-accent shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono tracking-wider text-white/40 uppercase">Concierge Line</span>
                    <p className="text-xs md:text-sm text-white font-semibold">+91 XXXXX XXXXX</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-2xl border border-white/5 bg-navy-950/40 hover:border-gold-accent/20 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-navy-900 border border-white/5 flex items-center justify-center text-gold-accent shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono tracking-wider text-white/40 uppercase">Email</span>
                    <p className="text-xs md:text-sm text-white font-semibold">hello@auroratravels.demo</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Container */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-gold-accent animate-pulse" />
                <span className="text-[10px] font-mono tracking-wider text-gold-accent uppercase">
                  Local Coordinates
                </span>
              </div>
              <div className="relative rounded-2xl overflow-hidden border border-white/10 h-64 shadow-2xl bg-navy-950">
                <iframe
                  title="Aurora Travels Madurai Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.147814815124!2d78.1365116!3d9.9252007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c5bf1a3cae31%3A0xe13cf4a400a40237!2sRace%20Course%20Rd%2C%20Madurai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1719273600000!5m2!1sen!2sin"
                  className="absolute inset-0 w-full h-full filter invert grayscale contrast-[1.1] brightness-[0.75] border-none"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-3 left-3 bg-navy-950/90 border border-gold-accent/30 backdrop-blur-md px-3.5 py-1.5 rounded-lg text-[9px] font-mono text-gold-accent">
                  MADURAI CENTER &bull; ACCREDITED
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel: Interactive Form */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.div
                  key="inquiry-form"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="glass-panel border border-white/10 p-6 md:p-10 rounded-3xl shadow-2xl relative"
                >
                  <div className="absolute top-0 right-10 w-20 h-20 bg-gold-accent/5 rounded-full blur-2xl pointer-events-none" />

                  <h3 className="text-xl md:text-2xl font-serif font-bold text-white mb-6">
                    Bespoke Consultation Questionnaire
                  </h3>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      {/* Name input */}
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-mono tracking-wider text-gold-accent uppercase block">
                          Full Name
                        </label>
                        <input
                          id="inquiry-input-name"
                          type="text"
                          required
                          placeholder="Lord/Lady Vignesh Ram"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full bg-navy-950 border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-gold-accent focus:ring-1 focus:ring-gold-accent/20 transition-all"
                        />
                      </div>

                      {/* Email Input */}
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-mono tracking-wider text-gold-accent uppercase block">
                          Private Email
                        </label>
                        <input
                          id="inquiry-input-email"
                          type="email"
                          required
                          placeholder="client@exclusive.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full bg-navy-950 border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-gold-accent focus:ring-1 focus:ring-gold-accent/20 transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      {/* Phone Input */}
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-mono tracking-wider text-gold-accent uppercase block">
                          Secure Phone
                        </label>
                        <input
                          id="inquiry-input-phone"
                          type="tel"
                          required
                          placeholder="+91 XXXXX XXXXX"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full bg-navy-950 border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-gold-accent focus:ring-1 focus:ring-gold-accent/20 transition-all"
                        />
                      </div>

                      {/* Destination Selection */}
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-mono tracking-wider text-gold-accent uppercase block">
                          Preferred Destination
                        </label>
                        <select
                          id="inquiry-select-destination"
                          required
                          value={dest}
                          onChange={(e) => setDest(e.target.value)}
                          className="w-full bg-navy-950 border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-gold-accent cursor-pointer transition-all"
                        >
                          <option value="" className="text-white/40">Select Target Horizon</option>
                          {DESTINATIONS.map((d) => (
                            <option key={d.id} value={d.name}>{d.name} &bull; {d.country}</option>
                          ))}
                          <option value="Custom Bespoke Route">Custom Bespoke Itinerary</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                      {/* Month Selection */}
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-mono tracking-wider text-gold-accent uppercase block">
                          Travel Month
                        </label>
                        <select
                          id="inquiry-select-month"
                          required
                          value={month}
                          onChange={(e) => setMonth(e.target.value)}
                          className="w-full bg-navy-950 border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-gold-accent cursor-pointer transition-all"
                        >
                          <option value="">Choose Month</option>
                          <option value="July 2026">July 2026</option>
                          <option value="August 2026">August 2026</option>
                          <option value="September 2026">September 2026</option>
                          <option value="October 2026">October 2026</option>
                          <option value="November 2026">November 2026</option>
                          <option value="December 2026">December 2026</option>
                          <option value="Spring 2027">Spring 2027</option>
                        </select>
                      </div>

                      {/* Experience Style */}
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-mono tracking-wider text-gold-accent uppercase block">
                          Travel Genre
                        </label>
                        <select
                          id="inquiry-select-style"
                          required
                          value={style}
                          onChange={(e) => setStyle(e.target.value)}
                          className="w-full bg-navy-950 border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-gold-accent cursor-pointer transition-all"
                        >
                          <option value="">Choose Genre</option>
                          <option value="honeymoon">Honeymoon Packages</option>
                          <option value="family">Family Vacations</option>
                          <option value="adventure">Adventure Tours</option>
                          <option value="corporate">Corporate Travel</option>
                          <option value="group">Group Tours</option>
                        </select>
                      </div>

                      {/* Guest Count */}
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-mono tracking-wider text-gold-accent uppercase block">
                          Advisors/Guests
                        </label>
                        <input
                          id="inquiry-input-guests"
                          type="number"
                          min="1"
                          max="20"
                          required
                          value={guests}
                          onChange={(e) => setGuests(e.target.value)}
                          className="w-full bg-navy-950 border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-gold-accent transition-all"
                        />
                      </div>
                    </div>

                    {/* Bespoke Requests Text Area */}
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono tracking-wider text-gold-accent uppercase block">
                        Bespoke Directives & Private Notes
                      </label>
                      <textarea
                        id="inquiry-textarea-notes"
                        rows={4}
                        placeholder="Detail any private requirements (e.g. wheelchair fast-track, kosher/vegan Michelin dining reservations, private jet connection from Chennai, room configuration preference)..."
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        className="w-full bg-navy-950 border border-white/10 rounded-xl p-4 text-xs text-white focus:outline-none focus:border-gold-accent focus:ring-1 focus:ring-gold-accent/20 transition-all resize-none"
                      />
                    </div>

                    {/* Disclaimer */}
                    <p className="text-[10px] text-white/30 font-light leading-relaxed">
                      *By submitting, you authorize Aurora Travels to draft a secure confidential itinerary. All inquiries are strictly UI-only demo requests for portfolio demonstration purposes.
                    </p>

                    {/* Submit Button */}
                    <button
                      id="inquiry-submit-btn"
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-xl bg-gradient-to-r from-gold-dark via-gold-accent to-gold-light text-navy-950 text-xs font-semibold tracking-widest uppercase hover:brightness-105 active:scale-[0.99] disabled:opacity-50 transition-all flex items-center justify-center gap-2 group cursor-pointer shadow-lg shadow-gold-accent/10"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 rounded-full border-2 border-navy-950 border-t-transparent animate-spin" />
                          <span>Curating Itinerary...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          <span>Secure Bespoke Reservation Request</span>
                        </>
                      )}
                    </button>
                  </form>
                </motion.div>
              ) : (
                /* Success Receipt Frame */
                <motion.div
                  key="inquiry-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="glass-panel border-2 border-gold-accent/30 p-8 md:p-12 rounded-3xl text-center space-y-6 shadow-2xl relative"
                >
                  <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-gold-accent text-navy-950 rounded-full flex items-center justify-center shadow-lg shadow-gold-accent/20">
                    <CheckCircle2 className="w-6 h-6 stroke-[2.5]" />
                  </div>

                  <div className="pt-4 space-y-2">
                    <span className="text-[10px] font-mono tracking-[0.3em] text-gold-accent uppercase">
                      Reservation Acknowledged
                    </span>
                    <h3 className="text-2xl md:text-4xl font-serif font-bold text-white">
                      Confidential Code: {inquiryCode}
                    </h3>
                    <p className="text-xs md:text-sm text-white/70 max-w-lg mx-auto font-light leading-relaxed">
                      Greetings, <strong>{name}</strong>. Your bespoke request for {dest} has been securely captured in our Madurai database registry.
                    </p>
                  </div>

                  {/* Elegant voucher details */}
                  <div className="max-w-md mx-auto bg-navy-950/80 border border-white/5 p-6 rounded-2xl text-left space-y-4 font-mono text-xs">
                    <div className="border-b border-white/5 pb-3 flex justify-between items-center text-white/40 text-[10px]">
                      <span>AURORA PRIVÉ TICKET</span>
                      <span>DATE: 2026-06-25</span>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <span className="text-white/30 text-[9px] block">CLIENT</span>
                        <span className="text-white font-medium break-all">{name}</span>
                      </div>
                      <div>
                        <span className="text-white/30 text-[9px] block">TARGET COORDS</span>
                        <span className="text-gold-accent font-semibold">{dest}</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <span className="text-white/30 text-[9px] block">TRAVEL MONTH</span>
                        <span className="text-white">{month || 'Flexible'}</span>
                      </div>
                      <div>
                        <span className="text-white/30 text-[9px] block">VIP GUESTS</span>
                        <span className="text-white">{guests} Persons</span>
                      </div>
                    </div>

                    {notes && (
                      <div className="border-t border-white/5 pt-3">
                        <span className="text-white/30 text-[9px] block mb-1">BESPOKE DIRECTIVES</span>
                        <p className="text-[10px] text-white/60 line-clamp-3 leading-relaxed font-sans font-light">
                          {notes}
                        </p>
                      </div>
                    )}

                    <div className="border-t border-white/5 pt-3 flex items-center gap-2 text-gold-accent text-[10px]">
                      <Clock className="w-3.5 h-3.5" />
                      <span>Dedicated Senior Curator assigns within 2 hours</span>
                    </div>
                  </div>

                  <div className="pt-4 space-y-4">
                    <p className="text-[11px] text-white/40 max-w-sm mx-auto leading-relaxed">
                      A designated luxury travel architect will text or call you shortly on <strong>{phone}</strong> to schedule a secure custom itinerary mapping session.
                    </p>

                    <button
                      id="btn-inquiry-new"
                      onClick={handleResetForm}
                      className="px-6 py-2.5 rounded-full border border-gold-accent/20 hover:border-gold-accent text-gold-accent text-xs font-semibold tracking-wider uppercase transition-all hover:bg-gold-accent/5 cursor-pointer"
                    >
                      Draft Another Journey
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
