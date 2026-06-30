import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Users, ShieldCheck, CheckCircle2, DollarSign, Sparkles, AlertCircle } from 'lucide-react';
import { Package } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPackage: Package | null;
  prefilledDestinationName: string | null;
}

export default function BookingModal({ isOpen, onClose, selectedPackage, prefilledDestinationName }: BookingModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [guestCount, setGuestCount] = useState(2);
  const [selectedDate, setSelectedDate] = useState('');
  const [cabinClass, setCabinClass] = useState('first');
  const [specialDemands, setSpecialDemands] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [reservationCode, setReservationCode] = useState('');

  // Handle resets
  useEffect(() => {
    if (isOpen) {
      setName('');
      setEmail('');
      setPhone('');
      setGuestCount(2);
      setSelectedDate('');
      setCabinClass('first');
      setSpecialDemands('');
      setIsSuccess(false);
    }
  }, [isOpen, selectedPackage]);

  // Calculate price dynamically if a package is selected
  const getCalculatedPrice = () => {
    if (!selectedPackage) return '';
    
    // Parse price string (e.g. "₹3,45,000" -> 345000)
    const numericStr = selectedPackage.price.replace(/[^\d]/g, '');
    const numericPrice = parseInt(numericStr, 10);
    
    if (isNaN(numericPrice)) return selectedPackage.price;
    
    // Calculate total
    const total = numericPrice * guestCount;
    
    // Format back to Indian currency representation
    return '₹' + total.toLocaleString('en-IN');
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const code = `AUR-RES-${Math.floor(10000 + Math.random() * 90000)}`;
      setReservationCode(code);
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-navy-950/85 backdrop-blur-xl"
        />

        {/* Modal Center Wrapper */}
        <div className="flex min-h-screen items-center justify-center p-4">
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 30 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            className="relative w-full max-w-2xl rounded-3xl border border-white/10 bg-navy-900 shadow-2xl overflow-hidden text-left"
          >
            {/* Header Visual Bar */}
            <div className="h-1.5 bg-gradient-to-r from-gold-dark via-gold-accent to-gold-light" />

            {/* Close Toggle Button */}
            <button
              id="btn-close-modal"
              onClick={onClose}
              className="absolute top-5 right-5 w-9 h-9 rounded-full border border-white/5 hover:border-gold-accent/30 bg-navy-950/50 hover:bg-navy-950 text-white hover:text-gold-accent flex items-center justify-center transition-colors cursor-pointer z-10"
              aria-label="Close booking modal"
            >
              <X className="w-4 h-4" />
            </button>

            {!isSuccess ? (
              <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-6">
                <div>
                  <span className="text-[10px] font-mono tracking-[0.25em] text-gold-accent uppercase block mb-1">
                    Confidential Reservation
                  </span>
                  <h3 className="text-2xl font-serif font-bold text-white">
                    {selectedPackage 
                      ? `Secure Spot: ${selectedPackage.title}` 
                      : `Bespoke Itinerary: ${prefilledDestinationName || 'Global Journey'}`
                    }
                  </h3>
                  <p className="text-xs text-white/50 font-light mt-1">
                    Verify guest count and custom parameters below to generate your direct agency lock.
                  </p>
                </div>

                {/* Package Quick Summary Panel */}
                {selectedPackage && (
                  <div className="p-4 rounded-xl border border-white/5 bg-navy-950 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <span className="text-[9px] font-mono text-white/40 uppercase">Selected Destination</span>
                      <p className="text-sm font-semibold text-white">{selectedPackage.destinationName}</p>
                      <span className="text-[10px] text-gold-accent font-mono block mt-0.5">{selectedPackage.duration}</span>
                    </div>

                    <div className="text-right self-start md:self-auto">
                      <span className="text-[9px] font-mono text-white/40 uppercase block">Dynamic Custom Value</span>
                      <p className="text-xl font-serif font-bold text-gold-accent leading-none mt-1">
                        {getCalculatedPrice()}
                      </p>
                      <span className="text-[9px] font-mono text-white/30">Total for {guestCount} Guests</span>
                    </div>
                  </div>
                )}

                {/* Form fields */}
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono tracking-wider text-gold-accent uppercase block">
                        Your Full Name
                      </label>
                      <input
                        id="modal-input-name"
                        type="text"
                        required
                        placeholder="Vignesh Ramakrishnan"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-navy-950 border border-white/5 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-gold-accent"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono tracking-wider text-gold-accent uppercase block">
                        Secure Contact Number
                      </label>
                      <input
                        id="modal-input-phone"
                        type="tel"
                        required
                        placeholder="+91 XXXXX XXXXX"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-navy-950 border border-white/5 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-gold-accent"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono tracking-wider text-gold-accent uppercase block">
                        Primary Email Address
                      </label>
                      <input
                        id="modal-input-email"
                        type="email"
                        required
                        placeholder="vignesh@auroraprive.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-navy-950 border border-white/5 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-gold-accent"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono tracking-wider text-gold-accent uppercase block">
                        Travel Departure Date
                      </label>
                      <div className="relative">
                        <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gold-accent" />
                        <input
                          id="modal-input-date"
                          type="date"
                          required
                          value={selectedDate}
                          onChange={(e) => setSelectedDate(e.target.value)}
                          className="w-full bg-navy-950 border border-white/5 rounded-xl py-3 pl-10 pr-4 text-xs text-white focus:outline-none focus:border-gold-accent cursor-pointer"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Guest Count Slider */}
                    <div className="space-y-2 p-3.5 rounded-xl border border-white/5 bg-navy-950/80">
                      <div className="flex justify-between items-center text-[10px] font-mono text-gold-accent uppercase">
                        <span>Passenger Count</span>
                        <span>{guestCount} Guests</span>
                      </div>
                      <input
                        id="modal-input-guest-count"
                        type="range"
                        min="1"
                        max="10"
                        value={guestCount}
                        onChange={(e) => setGuestCount(parseInt(e.target.value, 10))}
                        className="w-full accent-gold-accent cursor-pointer bg-white/10 rounded-lg h-1.5"
                      />
                      <div className="flex justify-between text-[8px] font-mono text-white/30">
                        <span>1 Passenger</span>
                        <span>10 Max</span>
                      </div>
                    </div>

                    {/* Cabin Class Selection */}
                    <div className="space-y-2 p-3.5 rounded-xl border border-white/5 bg-navy-950/80">
                      <span className="text-[10px] font-mono tracking-wider text-gold-accent uppercase block">
                        Aviation Cabin preference
                      </span>
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          id="cabin-first-class"
                          type="button"
                          onClick={() => setCabinClass('first')}
                          className={`py-2 rounded-lg text-center text-[10px] font-mono uppercase tracking-wider transition-all cursor-pointer ${
                            cabinClass === 'first'
                              ? 'bg-gold-accent text-navy-950 font-semibold'
                              : 'bg-navy-900 border border-white/5 text-white/70'
                          }`}
                        >
                          First Class
                        </button>
                        <button
                          id="cabin-business-class"
                          type="button"
                          onClick={() => setCabinClass('business')}
                          className={`py-2 rounded-lg text-center text-[10px] font-mono uppercase tracking-wider transition-all cursor-pointer ${
                            cabinClass === 'business'
                              ? 'bg-gold-accent text-navy-950 font-semibold'
                              : 'bg-navy-900 border border-white/5 text-white/70'
                          }`}
                        >
                          Business VIP
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Private demands */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono tracking-wider text-gold-accent uppercase block">
                      Specific VIP Directives
                    </label>
                    <textarea
                      id="modal-textarea-demands"
                      rows={2}
                      placeholder="e.g. Private jet connections, yacht upgrade options, special anniversary dietary requirements..."
                      value={specialDemands}
                      onChange={(e) => setSpecialDemands(e.target.value)}
                      className="w-full bg-navy-950 border border-white/5 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-gold-accent resize-none"
                    />
                  </div>
                </div>

                <div className="pt-4 flex items-center justify-between gap-6 border-t border-white/5">
                  <div className="flex items-center gap-2 text-[10px] text-white/40 max-w-xs font-light">
                    <ShieldCheck className="w-5 h-5 text-gold-accent shrink-0" />
                    <span>Direct direct security locking is active. Your credentials are fully protected.</span>
                  </div>

                  <button
                    id="modal-submit-btn"
                    type="submit"
                    disabled={isSubmitting}
                    className="px-8 py-3.5 rounded-full bg-gradient-to-r from-gold-dark via-gold-accent to-gold-light text-navy-950 text-xs font-semibold tracking-widest uppercase hover:brightness-105 transition-all shadow-md shadow-gold-accent/10 flex items-center gap-2 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 rounded-full border-2 border-navy-950 border-t-transparent animate-spin" />
                        <span>Locking Spot...</span>
                      </>
                    ) : (
                      <>
                        <span>Confirm Lock</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            ) : (
              /* Success confirmation voucher screen */
              <div className="p-8 md:p-12 text-center space-y-6">
                <div className="w-16 h-16 rounded-full bg-gold-accent text-navy-950 flex items-center justify-center mx-auto shadow-lg shadow-gold-accent/20">
                  <CheckCircle2 className="w-8 h-8 stroke-[2.5]" />
                </div>

                <div className="space-y-2">
                  <span className="text-[10px] font-mono tracking-[0.3em] text-gold-accent uppercase">
                    Bespoke Lock Success
                  </span>
                  <h3 className="text-2xl md:text-3xl font-serif font-bold text-white">
                    Reservation Captured
                  </h3>
                  <p className="text-xs text-white/60 max-w-md mx-auto leading-relaxed">
                    Greetings, <strong>{name}</strong>. Your luxury draft reservation has been successfully allocated at our Madurai headquarters.
                  </p>
                </div>

                {/* Printable receipt */}
                <div className="max-w-md mx-auto bg-navy-950 border border-white/5 p-6 rounded-2xl text-left space-y-4 font-mono text-xs shadow-inner">
                  <div className="flex justify-between items-center text-white/30 text-[9px] pb-3 border-b border-white/5">
                    <span>AURORA GLOBAL PRIVÉ</span>
                    <span>TICKET ID: {reservationCode}</span>
                  </div>

                  <div>
                    <span className="text-white/30 text-[8px] block">CLIENT REFERENCE</span>
                    <span className="text-white font-medium">{name}</span>
                  </div>

                  {selectedPackage ? (
                    <div>
                      <span className="text-white/30 text-[8px] block">LOCKED PACKAGE</span>
                      <span className="text-white">{selectedPackage.title} ({selectedPackage.destinationName})</span>
                    </div>
                  ) : (
                    <div>
                      <span className="text-white/30 text-[8px] block">DESTINATION SPECIFIED</span>
                      <span className="text-white">{prefilledDestinationName || 'Bespoke Custom'}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="text-white/30 text-[8px] block">DEPARTURE DATE</span>
                      <span className="text-white">{selectedDate}</span>
                    </div>
                    <div>
                      <span className="text-white/30 text-[8px] block">CABIN PREFERENCE</span>
                      <span className="text-gold-accent uppercase font-semibold">{cabinClass} Class</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="text-white/30 text-[8px] block">GUESTS COUNTER</span>
                      <span className="text-white">{guestCount} Passengers</span>
                    </div>
                    <div>
                      <span className="text-white/30 text-[8px] block">ESTIMATED VALUATION</span>
                      <span className="text-gold-accent font-bold">
                        {selectedPackage ? getCalculatedPrice() : 'Bespoke Quote'}
                      </span>
                    </div>
                  </div>

                  <div className="border-t border-white/5 pt-3 flex items-center gap-1.5 text-gold-accent text-[9px]">
                    <Sparkles className="w-3.5 h-3.5 text-gold-accent" />
                    <span>Your Dedicated Madurai Advisor will call within 2 hours</span>
                  </div>
                </div>

                <div className="pt-4 space-y-3">
                  <p className="text-[10px] text-white/40 max-w-xs mx-auto leading-normal">
                    We will correspond shortly on <strong>{phone}</strong> to verify passport names, lounge schedules, and finalize secure deposit processing.
                  </p>
                  
                  <button
                    id="btn-close-modal-success"
                    onClick={onClose}
                    className="px-6 py-2.5 rounded-full bg-gold-accent text-navy-950 text-xs font-semibold tracking-wider uppercase hover:bg-gold-light transition-all cursor-pointer"
                  >
                    Return to Portfolio
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
}
