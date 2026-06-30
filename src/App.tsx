import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import DestinationsList from './components/DestinationsList';
import ExperiencesList from './components/ExperiencesList';
import PackagesList from './components/PackagesList';
import WhyChooseUs from './components/WhyChooseUs';
import TestimonialsCarousel from './components/TestimonialsCarousel';
import TravelGallery from './components/TravelGallery';
import FaqAccordion from './components/FaqAccordion';
import InquiryForm from './components/InquiryForm';
import BookingModal from './components/BookingModal';
import Footer from './components/Footer';
import { Package } from './types';

export default function App() {
  // Modal booking state triggers
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedPackageForModal, setSelectedPackageForModal] = useState<Package | null>(null);
  const [prefilledDestinationName, setPrefilledDestinationName] = useState<string | null>(null);

  // Cross-component pre-fill trigger for the lead generation form
  const [inquiryFormPrefill, setInquiryFormPrefill] = useState<{ destination: string; style: string } | null>(null);

  // Active category select key for the package list
  const [selectedPackageCategory, setSelectedPackageCategory] = useState('all');

  // Smooth scroll handler to any selector ID
  const scrollToId = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Triggered when clicking "Plan Journey" from header/hero
  const handlePlanJourneyClick = (initialValues?: { destination: string; style: string }) => {
    if (initialValues) {
      setInquiryFormPrefill(initialValues);
    } else {
      setInquiryFormPrefill(null);
    }
    scrollToId('#contact');
  };

  // Triggered when clicking "Curate Journey" on featured destinations
  const handleSelectDestinationForBespoke = (destinationName: string) => {
    setSelectedPackageForModal(null);
    setPrefilledDestinationName(destinationName);
    setIsBookingModalOpen(true);
  };

  // Triggered when clicking an experience category card
  const handleSelectExperienceCategory = (categoryKey: 'honeymoon' | 'family' | 'adventure' | 'corporate' | 'group') => {
    setSelectedPackageCategory(categoryKey);
    scrollToId('#packages');
  };

  // Triggered when clicking "Reserve" on package cards
  const handleReservePackage = (pkg: Package) => {
    setPrefilledDestinationName(null);
    setSelectedPackageForModal(pkg);
    setIsBookingModalOpen(true);
  };

  return (
    <div className="relative bg-navy-950 min-h-screen text-white select-none">
      
      {/* Dynamic Header */}
      <Header onPlanJourneyClick={() => handlePlanJourneyClick()} />

      {/* Hero Section with Cinematic Loop and Inquiry widget */}
      <Hero
        onExplorePackages={() => scrollToId('#packages')}
        onPlanJourney={handlePlanJourneyClick}
      />

      {/* Featured Destinations List */}
      <DestinationsList onSelectDestination={handleSelectDestinationForBespoke} />

      {/* Luxury Travel Experiences Grid */}
      <ExperiencesList onSelectExperience={handleSelectExperienceCategory} />

      {/* Interactive Package Cards with category tabs */}
      <PackagesList
        onReservePackage={handleReservePackage}
        selectedCategory={selectedPackageCategory}
        setSelectedCategory={setSelectedPackageCategory}
      />

      {/* Why Choose Us features list */}
      <WhyChooseUs />

      {/* Testimonials Review Carousel */}
      <TestimonialsCarousel />

      {/* Curated Travel Image Masonry Gallery */}
      <TravelGallery />

      {/* Accordion FAQs */}
      <FaqAccordion />

      {/* Lead Generation Form + Local Coordinates & Map */}
      <InquiryForm initialValues={inquiryFormPrefill} />

      {/* Global Footer */}
      <Footer />

      {/* Bespoke Booking Modal Portal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        selectedPackage={selectedPackageForModal}
        prefilledDestinationName={prefilledDestinationName}
      />

    </div>
  );
}
