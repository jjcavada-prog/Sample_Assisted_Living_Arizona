'use client';

import { useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface VideoTestimonialCardProps {
  name: string;
  relationship: string;
  thumbnail: string;
  thumbnailAlt: string;
  videoUrl: string;
  duration: string;
  title: string;
}

export default function VideoTestimonialCard({
  name,
  relationship,
  thumbnail,
  thumbnailAlt,
  videoUrl,
  duration,
  title
}: VideoTestimonialCardProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  return (
    <div className="bg-card rounded-lg shadow-soft overflow-hidden transition-all duration-300 ease-organic hover:shadow-organic">
      <div className="relative aspect-video bg-muted">
        {!isPlaying ? (
          <>
            <AppImage
              src={thumbnail}
              alt={thumbnailAlt}
              className="w-full h-full object-cover"
            />
            <button
              onClick={handlePlayClick}
              className="absolute inset-0 flex items-center justify-center bg-deepBlueGray/40 transition-all duration-300 ease-organic hover:bg-deepBlueGray/50 group"
              aria-label={`Play video testimonial from ${name}`}
            >
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-organic transition-transform duration-300 ease-organic group-hover:scale-110">
                <Icon name="PlayIcon" variant="solid" size={28} className="text-primary-foreground ml-1" />
              </div>
            </button>
            <span className="absolute bottom-3 right-3 px-2 py-1 bg-deepBlueGray/80 text-white text-xs rounded">
              {duration}
            </span>
          </>
        ) : (
          <iframe
            src={videoUrl}
            title={`Video testimonial from ${name}`}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}
      </div>
      
      <div className="p-4">
        <h3 className="font-heading text-lg font-semibold text-foreground mb-1">{title}</h3>
        <p className="text-sm text-muted-foreground">
          <span className="font-medium text-foreground">{name}</span> - {relationship}
        </p>
      </div>
    </div>
  );
}