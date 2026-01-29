'use client';

import { useState } from 'react';
import HeroSection from './HeroSection';
import DailyLifeGallery from './DailyLifeGallery';
import ActivityCalendar from './ActivityCalendar';
import MealShowcase from './MealShowcase';
import ResidentStories from './ResidentStories';
import ImageLightbox from './ImageLightbox';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
  title: string;
}

const LifeHereInteractive = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const handleImageClick = (image: GalleryImage) => {
    setSelectedImage(image);
  };

  const handleCloseLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <HeroSection />
      <DailyLifeGallery onImageClick={handleImageClick} />
      <ActivityCalendar />
      <MealShowcase />
      <ResidentStories />
      <ImageLightbox image={selectedImage} onClose={handleCloseLightbox} />
    </>
  );
};

export default LifeHereInteractive;