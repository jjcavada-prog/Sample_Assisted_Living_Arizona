import AppImage from '@/components/ui/AppImage';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
  title: string;
}

interface DailyLifeGalleryProps {
  onImageClick: (image: GalleryImage) => void;
}

const DailyLifeGallery = ({ onImageClick }: DailyLifeGalleryProps) => {
  const galleryImages: GalleryImage[] = [
    {
      id: 1,
      src: "/daily-dining-family.png",
      alt: "Residents enjoying a warm, family-style lunch together in the sunny dining room",
      category: "Meals",
      title: "Family-Style Dining"
    },
    {
      id: 2,
      src: "/daily-creative-arts.png",
      alt: "Ladies painting watercolors together by a sunny window, sharing smiles and creativity",
      category: "Activities",
      title: "Creative Arts"
    },
    {
      id: 3,
      src: "/daily-game-time.png",
      alt: "Joyful group of seniors playing cards and laughing in the living room",
      category: "Social",
      title: "Game Time"
    },
    {
      id: 4,
      src: "/daily-garden-therapy.png",
      alt: "Couple smiling while tending to colorful flowers in the raised garden beds",
      category: "Outdoor",
      title: "Garden Therapy"
    },
    {
      id: 5,
      src: "/daily-gentle-exercise.png",
      alt: "Residents practicing gentle chair yoga and stretching in a bright, calm room",
      category: "Wellness",
      title: "Gentle Exercise"
    },
    {
      id: 6,
      src: "/daily-book-reading.png",
      alt: "Quiet afternoon reading time in the comfortable home library",
      category: "Activities",
      title: "Book Club"
    },
    {
      id: 7,
      src: "/daily-tea-social.png",
      alt: "Friends chatting and enjoying tea together in the cozy lounge",
      category: "Social",
      title: "Tea & Conversation"
    },
    {
      id: 8,
      src: "/daily-music-therapy.png",
      alt: "Live music in the living room with piano playing and singing",
      category: "Activities",
      title: "Music Therapy"
    },
    {
      id: 9,
      src: "/daily-baking-together.png",
      alt: "Decorating cupcakes and baking together in the home kitchen",
      category: "Meals",
      title: "Baking Together"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl lg:text-4xl text-foreground mb-4">
            Daily Life at Sample Assisted Living
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the warmth and joy of everyday moments in our home. Every day brings new opportunities for connection, creativity, and celebration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              onClick={() => onImageClick(image)}
              className="group relative overflow-hidden rounded-lg shadow-soft cursor-pointer transition-all duration-300 ease-organic hover:shadow-organic hover:scale-105"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <AppImage
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 ease-organic group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-deep-blue-gray/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-organic">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-sm font-body font-medium rounded-full mb-2">
                    {image.category}
                  </span>
                  <h3 className="font-heading text-xl text-primary-foreground">
                    {image.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DailyLifeGallery;