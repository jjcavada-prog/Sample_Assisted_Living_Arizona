import Icon from '@/components/ui/AppIcon';

const VirtualTour = () => {
  const tourHighlights = [
    {
      id: 1,
      icon: "HomeIcon",
      title: "Private Rooms",
      description: "Comfortable, personalized spaces with natural light"
    },
    {
      id: 2,
      icon: "UserGroupIcon",
      title: "Common Areas",
      description: "Inviting spaces for socializing and activities"
    },
    {
      id: 3,
      icon: "SparklesIcon",
      title: "Garden & Patio",
      description: "Beautiful outdoor spaces for relaxation"
    },
    {
      id: 4,
      icon: "HomeModernIcon",
      title: "Dining Room",
      description: "Family-style dining with home-cooked meals"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
              <Icon name="VideoCameraIcon" size={40} className="text-primary" />
            </div>
            <h2 className="font-heading text-3xl lg:text-4xl text-foreground mb-4">
              Virtual Walkthrough
            </h2>
            <p className="font-body text-lg text-muted-foreground mb-8">
              Take a virtual tour of our home from the comfort of yours. See our welcoming spaces, meet our team, and get a feel for daily life at Sample Assisted Living.
            </p>
          </div>

          <div className="bg-background rounded-lg shadow-organic p-8 mb-8">
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-6">
              <div className="text-center">
                <Icon name="PlayCircleIcon" size={80} className="text-primary mx-auto mb-4" />
                <p className="font-body text-muted-foreground">
                  Virtual tour video coming soon
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {tourHighlights.map((highlight) => (
                <div
                  key={highlight.id}
                  className="p-4 bg-muted/30 rounded-lg text-center transition-all duration-300 ease-organic hover:bg-muted/50"
                >
                  <Icon
                    name={highlight.icon as any}
                    size={32}
                    className="text-primary mx-auto mb-3"
                  />
                  <h4 className="font-body font-semibold text-foreground mb-2">
                    {highlight.title}
                  </h4>
                  <p className="font-body text-sm text-muted-foreground">
                    {highlight.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-terracotta text-terracotta-foreground font-cta font-semibold text-base rounded-lg shadow-soft transition-all duration-300 ease-organic hover:bg-terracotta/90 hover:shadow-organic hover:scale-105"
            >
              <Icon name="CalendarIcon" size={20} className="mr-2" />
              Schedule In-Person Tour
            </a>
            <a
              href="tel:+14807657128"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-cta font-semibold text-base rounded-lg shadow-soft transition-all duration-300 ease-organic hover:bg-primary/90 hover:shadow-organic hover:scale-105"
            >
              <Icon name="PhoneIcon" size={20} className="mr-2" />
              Call for Live Tour
            </a>
          </div>

          <p className="font-body text-sm text-muted-foreground mt-6">
            We welcome unscheduled visits! Drop by anytime during business hours to see our home in action.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VirtualTour;