'use client';

import { useEffect } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
  title: string;
}

interface ImageLightboxProps {
  image: GalleryImage | null;
  onClose: () => void;
}

const ImageLightbox = ({ image, onClose }: ImageLightboxProps) => {
  useEffect(() => {
    if (image) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [image]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (image) {
      window.addEventListener('keydown', handleEscape);
    }

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [image, onClose]);

  if (!image) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-deepBlueGray/95 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 w-12 h-12 bg-background/10 backdrop-blur-sm rounded-full flex items-center justify-center text-primary-foreground transition-all duration-300 ease-organic hover:bg-background/20 hover:scale-110"
        aria-label="Close lightbox"
      >
        <Icon name="XMarkIcon" size={28} />
      </button>

      <div
        className="max-w-5xl w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-organic mb-6">
          <AppImage
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-contain"
          />
        </div>

        <div className="text-center">
          <span className="inline-block px-4 py-2 bg-primary text-primary-foreground text-sm font-body font-medium rounded-full mb-3">
            {image.category}
          </span>
          <h3 className="font-heading text-2xl lg:text-3xl text-primary-foreground mb-2">
            {image.title}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ImageLightbox;