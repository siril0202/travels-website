import { Destination, Experience, Package, Testimonial, FaqItem, GalleryItem } from './types';

export const DESTINATIONS: Destination[] = [
  {
    id: 'maldives',
    name: 'Maldives',
    country: 'Indian Ocean',
    description: 'Immerse in turquoise lagoons, pristine coral reefs, and ultra-private overwater sanctuaries that define global island luxury.',
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=1200&auto=format&fit=crop',
    rating: 4.9,
    tags: ['Private Island', 'Overwater Villas', 'All-Inclusive']
  },
  {
    id: 'switzerland',
    name: 'Switzerland',
    country: 'Europe',
    description: 'Bespoke alpine chalets, grand high-speed glacier express journeys, and private mountain ski guides across pure snow-capped peaks.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1200&auto=format&fit=crop',
    rating: 4.85,
    tags: ['Alpine Chalet', 'Glacier Express', 'Ski Estates']
  },
  {
    id: 'dubai',
    name: 'Dubai',
    country: 'United Arab Emirates',
    description: 'Experience futuristic royal suites, private desert dunes glamping, helicopter skylines, and world-class luxury shopping.',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop',
    rating: 4.92,
    tags: ['Skyline Penthouses', 'Desert Oasis', 'Yacht Cruises']
  },
  {
    id: 'bali',
    name: 'Bali',
    country: 'Indonesia',
    description: 'Private Ubud infinity pool sanctuaries, holistic spiritual healing escapes, and secret ocean cliffs overlooking pristine reefs.',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1200&auto=format&fit=crop',
    rating: 4.78,
    tags: ['Jungle Sanctuary', 'Wellness Spa', 'Cliffside Villas']
  },
  {
    id: 'japan',
    name: 'Japan',
    country: 'East Asia',
    description: 'Historical imperial gardens, five-star private thermal Ryokans, luxury bullet trains, and private bespoke sake culinary guides.',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1200&auto=format&fit=crop',
    rating: 4.95,
    tags: ['Ryokan Onsens', 'Sakura Tours', 'Michelin Dining']
  },
  {
    id: 'paris',
    name: 'Paris',
    country: 'France',
    description: 'Eiffel-facing imperial penthouses, private behind-the-scenes art viewings, luxury cruises on the Seine, and Michelin stargazing.',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1200&auto=format&fit=crop',
    rating: 4.88,
    tags: ['Haute Couture', 'Louvre VIP', 'Champagne Cruises']
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'honeymoon',
    title: 'Honeymoon Packages',
    description: 'Celebrate your union in ultimate luxury with secluded beaches, private butler service, and candlelight dinners under the stars.',
    image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=800&auto=format&fit=crop',
    iconName: 'Heart'
  },
  {
    id: 'family',
    title: 'Family Vacations',
    description: 'Curated multi-generational itineraries featuring grand villa estates, interactive cultural excursions, and private family chefs.',
    image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=1200&auto=format&fit=crop',
    iconName: 'Users'
  },
  {
    id: 'adventure',
    title: 'Adventure Tours',
    description: 'High-octane expeditions from deep-sea marine encounters on private yachts to heli-skiing untouched snow peaks.',
    image: 'https://images.unsplash.com/photo-1527631746610-bca00a040d60?q=80&w=800&auto=format&fit=crop',
    iconName: 'Compass'
  },
  {
    id: 'corporate',
    title: 'Corporate Travel',
    description: 'Flawless corporate retreats, executive summits, first-class flights, and luxury hotel business suites globally.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop',
    iconName: 'Briefcase'
  },
  {
    id: 'group',
    title: 'Group Tours',
    description: 'Vibrant, customized elite itineraries for friend groups or social circles, offering exclusive estate buyouts and chartered tours.',
    image: 'https://images.unsplash.com/photo-1539635278303-d4002c07eae3?q=80&w=800&auto=format&fit=crop',
    iconName: 'Sparkles'
  }
];

export const PACKAGES: Package[] = [
  {
    id: 'maldives-overwater',
    title: 'Soneva Jani Presidential Retreat',
    destinationName: 'Maldives',
    price: '₹3,45,000',
    duration: '5 Days / 4 Nights',
    image: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?q=80&w=800&auto=format&fit=crop',
    rating: 4.95,
    inclusions: [
      'Overwater Villa with Water Slide',
      'Dedicated 24/7 Island Butler',
      'Roundtrip Seaplane Transfers',
      'Private Underwater Restaurant Dining',
      'Complimentary Sunset Dolphin Cruise'
    ],
    description: 'The absolute pinnacle of Indian Ocean luxury. Enjoy a multi-room floating paradise with retractable roof over your master bed.',
    highlightTag: 'Ultra Luxury Favorite',
    category: 'honeymoon'
  },
  {
    id: 'swiss-splendor',
    title: 'St. Moritz Alpine Estate & Express',
    destinationName: 'Switzerland',
    price: '₹4,90,000',
    duration: '7 Days / 6 Nights',
    image: 'https://images.unsplash.com/photo-1482862549707-f63cb32c5fd9?q=80&w=800&auto=format&fit=crop',
    rating: 4.89,
    inclusions: [
      'Five-Star Alpine Ski Chalet Suite',
      'Glacier Express Excellence Class Pass',
      'Private Heli-Tour of the Matterhorn',
      'Thermal Bath & Spa Membership',
      'Private Sommelier Tasting Session'
    ],
    description: 'Immerse yourself in legendary Swiss luxury. Board the ultra-exclusive Excellence Class train and sleep under the shadow of dramatic peaks.',
    highlightTag: 'Best Selling Alpine',
    category: 'adventure'
  },
  {
    id: 'dubai-royal',
    title: 'Burj Al Arab Imperial Stay',
    destinationName: 'Dubai',
    price: '₹3,10,000',
    duration: '4 Days / 3 Nights',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop',
    rating: 4.93,
    inclusions: [
      'Burj Al Arab Royal Duplex Suite',
      'Private Chauffeur Roll-Royce service',
      'Exclusive Sunset Mega-Yacht Charter',
      'Royal Majlis Sand Desert Safari',
      'Priority VIP Heli-transfer to Atlantis'
    ],
    description: 'Sleep in the iconic sail-shaped emblem of Arabian majesty. Experience royal-level luxury service, gold leaf interiors, and private spa decks.',
    highlightTag: 'Royal Oasis Package',
    category: 'corporate'
  },
  {
    id: 'bali-healing',
    title: 'Ubud Hanging Gardens Sanctuary',
    destinationName: 'Bali',
    price: '₹2,15,000',
    duration: '6 Days / 5 Nights',
    image: 'https://images.unsplash.com/photo-1573790387438-4da905039392?q=80&w=800&auto=format&fit=crop',
    rating: 4.82,
    inclusions: [
      'Private Pool Split-Level Jungle Villa',
      'Holistic Sound Healing Ceremony',
      'Personal Mercedes Concierge Coach',
      'Private Chef Sunset Dining at Temple',
      'Elite Sacred Monkey Forest Fast-Pass'
    ],
    description: 'Rejuvenate your soul amidst legendary terraced infinity pools and sacred river gorges. Crafted for physical, mental, and spiritual harmony.',
    highlightTag: 'Wellness Champion',
    category: 'family'
  },
  {
    id: 'japan-cherry',
    title: 'Kyoto Imperial Sakura & Tokyo High-End',
    destinationName: 'Japan',
    price: '₹5,80,000',
    duration: '8 Days / 7 Nights',
    image: 'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?q=80&w=800&auto=format&fit=crop',
    rating: 4.98,
    inclusions: [
      'Ultra-exclusive Kyoto Ryokan Onsen Stay',
      'Shinkansen (Bullet Train) Gran Class Pass',
      'Private Geisha Tea & Performance Ticket',
      'Bespoke Tsukiji Tuna Carving & Dining',
      'Personal bilingual premium guide'
    ],
    description: 'A gorgeous collision of ancient heritage and modern metropolis luxury. Witness the cherry blossoms of Kyoto and neon skyscrapers of Ginza.',
    highlightTag: 'Top-Rated Cultural',
    category: 'group'
  },
  {
    id: 'paris-champs',
    title: 'Eiffel Penthouse & Versailles Exclusive',
    destinationName: 'Paris',
    price: '₹3,95,000',
    duration: '5 Days / 4 Nights',
    image: 'https://images.unsplash.com/photo-1549144511-f099e773c147?q=80&w=1200&auto=format&fit=crop',
    rating: 4.91,
    inclusions: [
      'Penthouse Suite with Eiffel View Terrace',
      'Behind-closed-doors Louvre Museum Tour',
      'Private Champagne Yacht Cruise on Seine',
      'Michelin Three-Star Dinner Reservation',
      'Chauffeur driven vintage Citroën DS'
    ],
    description: 'The ultimate Parisian dream designed for connoisseurs of fine art, couture, and gastronomy. Live like nobility in the City of Lights.',
    highlightTag: 'Romantic Showcase',
    category: 'honeymoon'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    author: 'Vignesh Ramakrishnan',
    location: 'Anna Nagar, Madurai',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
    quote: 'Aurora Travels turned our Swiss and Paris honeymoon into an absolute fairy tale. Booking from Madurai, the door-to-door VIP assistance, direct transit support, and booking the private chalet was completely flawless! Unmatched elegance.',
    rating: 5,
    trip: 'Swiss Alpine & Paris Romance'
  },
  {
    id: '2',
    author: 'Dr. Meenakshi Sundaram',
    location: 'KK Nagar, Madurai',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop',
    quote: 'We booked the Maldives Presidential retreat for our silver jubilee. Aurora Travels handled every detail beautifully, coordinating seaplanes, yacht arrivals, and private chefs. Highly recommended for premium families in South India.',
    rating: 5,
    trip: 'Maldives Overwater Bliss'
  },
  {
    id: '3',
    author: 'Siddharth Alagappan',
    location: 'Race Course, Coimbatore',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop',
    quote: 'My business partners and I wanted an exclusive cultural tour of Japan. Aurora Travels customized a magnificent itinerary. The Gran Class Shinkansen and private Geisha tea experience were otherworldly. Absolute class!',
    rating: 5,
    trip: 'Japan Kyoto & Tokyo Sakura Tour'
  },
  {
    id: '4',
    author: 'Priya Rajendran',
    location: 'Ecr Road, Chennai',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop',
    quote: 'The Bali sound healing and Ubud Hanging Gardens stay was exactly the soul-restorative trip I needed. The level of personalization, the premium luxury vehicles provided, and the concierge support was superior to anything I have booked in India.',
    rating: 5,
    trip: 'Bali Zen & Spa Sanctuary'
  }
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'How does Aurora Travels coordinate global departures from Madurai?',
    answer: 'We craft complete door-to-door luxury itineraries starting from your residence in Madurai. We secure first-class domestic feeder transfers or premium chauffeur transit to Chennai, Bangalore, or Mumbai for your direct intercontinental flights. All seaplanes, helicopters, and VIP yachts at your destination are perfectly synchronized with your flight schedules.',
    category: 'booking'
  },
  {
    id: 'faq-2',
    question: 'Can you completely customize an itinerary according to specific preferences?',
    answer: 'Yes, bespoke luxury is our absolute signature. Every package shown is fully customisable. Our travel curators in Madurai will sit down with you—in person or virtually—to handcraft every aspect, from chartering private jets to reserving specific villas and coordinating dietary/lifestyle requirements with hotels.',
    category: 'custom'
  },
  {
    id: 'faq-3',
    question: 'What does your "24/7 Global Personal Concierge" service entail?',
    answer: 'From the moment you step out of your home in Madurai until you return, you have a direct secure line to your dedicated Travel Curator. Whether you need a last-minute luxury spa change, a Michelin restaurant table upgraded, or have sudden schedule adjustments, we handle everything instantly in real time, regardless of timezone.',
    category: 'concierge'
  },
  {
    id: 'faq-4',
    question: 'Are visa procedures, insurance, and local lounge access included?',
    answer: 'Absolutely. We handle all global visa documentations, high-tier travel insurances, and premium airport VIP Fast-Track lounge access across every airport, ensuring a frictionless transit experience for you and your family.',
    category: 'booking'
  },
  {
    id: 'faq-5',
    question: 'How do you guarantee the best rates for high-end luxury hotels?',
    answer: 'We are active elite members of exclusive networks like Virtuoso and Rosewood Elite. This grants our guests complimentary room upgrades, late checkouts, dining/spa credits ($100+ per stay), and guarantees prices and privileges that cannot be matched by standard online travel platforms.',
    category: 'experience'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g-1',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop',
    caption: 'Sunset Beachfront Dinner Setup',
    location: 'Soneva Jani, Maldives',
    category: 'island'
  },
  {
    id: 'g-2',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800&auto=format&fit=crop',
    caption: 'Majestic Peaks of the Swiss Alps',
    location: 'St. Moritz, Switzerland',
    category: 'alpine'
  },
  {
    id: 'g-3',
    image: 'https://images.unsplash.com/photo-1549692520-acc6669e2f0c?q=80&w=800&auto=format&fit=crop',
    caption: 'Shibuya Skyline at Dusk',
    location: 'Tokyo, Japan',
    category: 'metropolis'
  },
  {
    id: 'g-4',
    image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=800&auto=format&fit=crop',
    caption: 'Taj Mahal view from Luxury Suite Balcony',
    location: 'Oberoi Amarvilas, Agra',
    category: 'heritage'
  },
  {
    id: 'g-5',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=800&auto=format&fit=crop',
    caption: 'Overwater Infinity Pool Sanctuary',
    location: 'Bora Bora',
    category: 'island'
  },
  {
    id: 'g-6',
    image: 'https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?q=80&w=800&auto=format&fit=crop',
    caption: 'Luxury Private Yacht Sailing',
    location: 'Amalfi Coast, Italy',
    category: 'alpine'
  }
];
