import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Story {
  id: number;
  name: string;
  age: number;
  image: string;
  imageAlt: string;
  quote: string;
  story: string;
  hobbies: string[];
}

const ResidentStories = () => {
  const stories: Story[] = [
    {
      id: 1,
      name: "Margaret Thompson",
      age: 82,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80",
      imageAlt: "Smiling elderly woman with short gray hair and glasses wearing lavender cardigan",
      quote: "I've found a second family here. Every day brings something to look forward to.",
      story: "Margaret joined us two years ago and has become the heart of our book club. She loves gardening and can often be found tending to our raised beds, sharing her knowledge with other residents and staff.",
      hobbies: ["Reading", "Gardening", "Knitting"]
    },
    {
      id: 2,
      name: "Robert Chen",
      age: 78,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
      imageAlt: "Elderly Asian man with warm smile wearing blue button-up shirt",
      quote: "The care here is exceptional, but it's the friendships that make it home.",
      story: "A retired music teacher, Robert brings joy to our home with his piano playing. He leads our weekly sing-alongs and has taught several residents to play simple melodies.",
      hobbies: ["Piano", "Chess", "Cooking"]
    },
    {
      id: 3,
      name: "Dorothy Williams",
      age: 85,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
      imageAlt: "Cheerful elderly woman with white curly hair wearing pearl necklace and pink blouse",
      quote: "I was worried about losing my independence, but here I've gained so much more.",
      story: "Dorothy is our resident artist and leads our weekly painting classes. Her watercolors decorate the common areas, and she's always eager to help others discover their creative side.",
      hobbies: ["Painting", "Baking", "Bird Watching"]
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl lg:text-4xl text-foreground mb-4">
            Resident Stories
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from the people who call Sample Assisted Living their home. These are real stories from our residents about their experiences, friendships, and daily joys.
          </p>
        </div>

        <div className="space-y-12">
          {stories.map((story, index) => (
            <div
              key={story.id}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-8 items-center bg-background rounded-lg shadow-soft p-8 transition-all duration-300 ease-organic hover:shadow-organic`}
            >
              <div className="w-full lg:w-1/3">
                <div className="relative aspect-square rounded-lg overflow-hidden shadow-soft">
                  <AppImage
                    src={story.image}
                    alt={story.imageAlt}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="w-full lg:w-2/3 space-y-4">
                <div>
                  <h3 className="font-heading text-2xl text-foreground mb-1">
                    {story.name}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground">
                    Age {story.age}
                  </p>
                </div>

                <div className="relative pl-6 border-l-4 border-primary">
                  <Icon
                    name="ChatBubbleLeftIcon"
                    size={24}
                    className="absolute -left-3 top-0 text-primary bg-background"
                  />
                  <p className="font-body text-lg italic text-foreground">
                    &ldquo;{story.quote}&rdquo;
                  </p>
                </div>

                <p className="font-body text-muted-foreground leading-relaxed">
                  {story.story}
                </p>

                <div>
                  <h4 className="font-body font-semibold text-foreground mb-3">
                    Favorite Activities:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {story.hobbies.map((hobby, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 bg-secondary/20 text-secondary-foreground font-body text-sm rounded-full"
                      >
                        {hobby}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="font-body text-muted-foreground mb-6">
            Every resident has a unique story. We'd love to share more with you during your visit.
          </p>
          <a
            href="/testimonials"
            className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground font-cta font-semibold text-base rounded-lg shadow-soft transition-all duration-300 ease-organic hover:bg-primary/90 hover:shadow-organic hover:scale-105"
          >
            Read More Testimonials
            <Icon name="ArrowRightIcon" size={20} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ResidentStories;