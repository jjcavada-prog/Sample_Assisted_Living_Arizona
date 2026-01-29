'use client';

import { useState, useEffect } from 'react';
import TestimonialCard from './TestimonialCard';
import VideoTestimonialCard from './VideoTestimonialCard';
import FilterBar from './FilterBar';
import StatsSection from './StatsSection';
import SubmitTestimonialCTA from './SubmitTestimonialCTA';
import BeforeAfterStory from './BeforeAfterStory';

interface Testimonial {
  id: number;
  name: string;
  relationship: string;
  image: string;
  alt: string;
  testimonial: string;
  rating: number;
  date: string;
  careType: string;
  category: string;
}

interface VideoTestimonial {
  id: number;
  name: string;
  relationship: string;
  thumbnail: string;
  thumbnailAlt: string;
  videoUrl: string;
  duration: string;
  title: string;
  category: string;
}

interface BeforeAfter {
  id: number;
  name: string;
  story: string;
  beforeImage: string;
  beforeAlt: string;
  afterImage: string;
  afterAlt: string;
  improvements: string[];
}

export default function TestimonialsInteractive() {
  const [isHydrated, setIsHydrated] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('all');

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Mitchell",
      relationship: "Daughter of Resident",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
      alt: "Middle-aged woman with brown hair smiling warmly in natural lighting",
      testimonial: "Moving my mother to Sample Assisted Living was the best decision we ever made. The staff treats her like family, and I can see the joy in her eyes every time I visit. She's more engaged, happier, and healthier than she's been in years. The small, intimate setting makes all the difference.",
      rating: 5,
      date: "December 2025",
      careType: "Memory Care",
      category: "family"
    },
    {
      id: 2,
      name: "Robert Chen",
      relationship: "Son of Resident",
      image: "https://images.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg",
      alt: "Asian man in his fifties with glasses and professional attire smiling confidently",
      testimonial: "The personalized care my father receives at Sample Assisted Living is exceptional. With only ten residents, the staff knows his preferences, his routines, and his needs intimately. It's not just assisted living—it's truly a home where he's valued and respected.",
      rating: 5,
      date: "November 2025",
      careType: "Assisted Living",
      category: "family"
    },
    {
      id: 3,
      name: "Margaret Thompson",
      relationship: "Resident",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
      alt: "Elderly woman with white hair and warm smile wearing purple cardigan",
      testimonial: "I was nervous about moving to assisted living, but Sample Assisted Living feels like the home I've always wanted. The meals are delicious, the activities are engaging, and most importantly, I've made genuine friendships here. I'm not just a resident—I'm part of a family.",
      rating: 5,
      date: "October 2025",
      careType: "Assisted Living",
      category: "resident"
    },
    {
      id: 4,
      name: "Jennifer Rodriguez",
      relationship: "Daughter of Resident",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
      alt: "Hispanic woman with long dark hair smiling brightly outdoors",
      testimonial: "My mother has dementia, and finding the right care was overwhelming. Sample Assisted Living's memory care program is outstanding. The staff is trained, patient, and genuinely caring. Mom is safe, comfortable, and receives the specialized attention she needs.",
      rating: 5,
      date: "September 2025",
      careType: "Memory Care",
      category: "family"
    },
    {
      id: 5,
      name: "David Patterson",
      relationship: "Son of Resident",
      image: "https://images.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358_1280.jpg",
      alt: "Professional man in his forties with short brown hair in business casual attire",
      testimonial: "The transparency and communication from Sample Assisted Living is remarkable. I receive regular updates, can visit anytime, and the staff always makes time to discuss my dad's care. The peace of mind this provides is invaluable.",
      rating: 5,
      date: "August 2025",
      careType: "Assisted Living",
      category: "family"
    },
    {
      id: 6,
      name: "Eleanor Williams",
      relationship: "Resident",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
      alt: "Senior woman with silver hair and gentle smile wearing floral blouse",
      testimonial: "After my husband passed, I felt lost and alone. Sample Assisted Living gave me a new lease on life. The companionship, the activities, and the caring staff have helped me rediscover joy. I look forward to each day here.",
      rating: 5,
      date: "July 2025",
      careType: "Assisted Living",
      category: "resident"
    },
    {
      id: 7,
      name: "Michael Anderson",
      relationship: "Son of Resident",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
      alt: "Man in his fifties with gray hair and beard smiling warmly",
      testimonial: "The quality of care at Sample Assisted Living far exceeds any facility we toured. The staff-to-resident ratio means my mother gets immediate attention when needed. The home-cooked meals, personalized activities, and genuine relationships make this place special.",
      rating: 5,
      date: "June 2025",
      careType: "Memory Care",
      category: "family"
    },
    {
      id: 8,
      name: "Patricia Johnson",
      relationship: "Daughter of Resident",
      image: "https://images.pixabay.com/photo/2017/08/01/08/29/woman-2563491_1280.jpg",
      alt: "African American woman with natural curly hair smiling confidently",
      testimonial: "Choosing Sample Assisted Living was choosing dignity and respect for my father. He's treated as an individual, not a number. The staff celebrates his achievements, respects his independence, and provides support exactly when he needs it.",
      rating: 5,
      date: "May 2025",
      careType: "Assisted Living",
      category: "family"
    }
  ];

  const videoTestimonials: VideoTestimonial[] = [
    {
      id: 1,
      name: "Linda Martinez",
      relationship: "Daughter of Resident",
      thumbnail: "https://images.pexels.com/photos/3768894/pexels-photo-3768894.jpeg",
      thumbnailAlt: "Woman speaking emotionally about her mother's care experience",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      duration: "3:45",
      title: "A Daughter's Gratitude: Finding Peace of Mind",
      category: "family"
    },
    {
      id: 2,
      name: "James Wilson",
      relationship: "Son of Resident",
      thumbnail: "https://images.unsplash.com/photo-1560250097-0b93528c311a",
      thumbnailAlt: "Man in professional setting discussing his father's improved quality of life",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      duration: "4:12",
      title: "From Isolation to Community: Dad's Transformation",
      category: "family"
    },
    {
      id: 3,
      name: "Dorothy Baker",
      relationship: "Resident",
      thumbnail: "https://images.pexels.com/photos/3768146/pexels-photo-3768146.jpeg",
      thumbnailAlt: "Elderly woman with bright smile sharing her daily life experiences",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      duration: "2:58",
      title: "Living My Best Life at Sample Assisted Living",
      category: "resident"
    }
  ];

  const beforeAfterStories: BeforeAfter[] = [
    {
      id: 1,
      name: "George Harrison",
      story: "When George first arrived at Sample Assisted Living, he was withdrawn, rarely spoke, and showed little interest in activities. The memory care team worked patiently with him, discovering his love for music and gardening. Six months later, George leads our weekly sing-alongs and tends to our herb garden daily.",
      beforeImage: "https://images.pixabay.com/photo/2016/11/18/23/38/child-1837375_1280.jpg",
      beforeAlt: "Elderly man sitting alone looking withdrawn and disengaged",
      afterImage: "https://images.pexels.com/photos/3768131/pexels-photo-3768131.jpeg",
      afterAlt: "Same elderly man smiling brightly while tending to garden plants",
      improvements: [
        "Increased social engagement and daily conversation",
        "Improved appetite and participation in group meals",
        "Reduced anxiety and better sleep patterns",
        "Rediscovered passion for music and gardening",
        "Formed meaningful friendships with other residents"
      ]
    }
  ];

  const filteredTestimonials = isHydrated 
    ? testimonials.filter(t => selectedFilter === 'all' || t.category === selectedFilter || t.careType.toLowerCase().replace(' ', '-') === selectedFilter)
    : testimonials;

  const filteredVideos = isHydrated
    ? videoTestimonials.filter(v => selectedFilter === 'all' || v.category === selectedFilter)
    : videoTestimonials;

  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-24">
          <div className="text-center mb-12">
            <h1 className="font-heading text-4xl md:text-5xl font-semibold text-foreground mb-4">
              Loading Testimonials...
            </h1>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-16">
      <section>
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4">
            What Our Families Say
          </h2>
          <p className="text-muted-foreground font-body text-lg max-w-3xl mx-auto">
            Real stories from real families who have experienced the Sample Assisted Living difference
          </p>
        </div>
        
        <StatsSection />
      </section>

      <section>
        <FilterBar selectedFilter={selectedFilter} onFilterChange={setSelectedFilter} />
      </section>

      {filteredVideos.length > 0 && (
        <section>
          <h2 className="font-heading text-3xl font-semibold text-foreground mb-8 text-center">
            Video Testimonials
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredVideos.map((video) => (
              <VideoTestimonialCard key={video.id} {...video} />
            ))}
          </div>
        </section>
      )}

      <section>
        <h2 className="font-heading text-3xl font-semibold text-foreground mb-8 text-center">
          Written Testimonials
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTestimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} {...testimonial} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="font-heading text-3xl font-semibold text-foreground mb-8 text-center">
          Transformation Stories
        </h2>
        <div className="grid gap-8">
          {beforeAfterStories.map((story) => (
            <BeforeAfterStory key={story.id} {...story} />
          ))}
        </div>
      </section>

      <section>
        <SubmitTestimonialCTA />
      </section>
    </div>
  );
}