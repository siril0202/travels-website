export interface Destination {
  id: string;
  name: string;
  country: string;
  description: string;
  image: string;
  rating: number;
  tags: string[];
}

export interface Experience {
  id: string;
  title: string;
  description: string;
  image: string;
  iconName: string; // Dynamic icon name from Lucide
}

export interface Package {
  id: string;
  title: string;
  destinationName: string;
  price: string;
  duration: string;
  image: string;
  rating: number;
  inclusions: string[];
  description: string;
  highlightTag?: string;
  category: 'honeymoon' | 'family' | 'adventure' | 'corporate' | 'group';
}

export interface Testimonial {
  id: string;
  author: string;
  location: string;
  avatar: string;
  quote: string;
  rating: number;
  trip: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'booking' | 'experience' | 'custom' | 'concierge';
}

export interface GalleryItem {
  id: string;
  image: string;
  caption: string;
  location: string;
  category: 'island' | 'alpine' | 'metropolis' | 'heritage';
}
