import Icon from '@/components/ui/AppIcon';

interface Activity {
  id: number;
  time: string;
  title: string;
  description: string;
  icon: string;
  category: string;
}

interface DaySchedule {
  day: string;
  date: string;
  activities: Activity[];
}

const ActivityCalendar = () => {
  const weekSchedule: DaySchedule[] = [
    {
      day: "Monday",
      date: "Jan 20",
      activities: [
        {
          id: 1,
          time: "9:00 AM",
          title: "Morning Exercise",
          description: "Gentle chair yoga and stretching",
          icon: "HeartIcon",
          category: "Wellness"
        },
        {
          id: 2,
          time: "11:00 AM",
          title: "Art Class",
          description: "Watercolor painting session",
          icon: "PaintBrushIcon",
          category: "Creative"
        },
        {
          id: 3,
          time: "2:00 PM",
          title: "Music Hour",
          description: "Sing-along with live piano",
          icon: "MusicalNoteIcon",
          category: "Entertainment"
        }
      ]
    },
    {
      day: "Tuesday",
      date: "Jan 21",
      activities: [
        {
          id: 4,
          time: "10:00 AM",
          title: "Garden Club",
          description: "Tending to our raised garden beds",
          icon: "SparklesIcon",
          category: "Outdoor"
        },
        {
          id: 5,
          time: "1:00 PM",
          title: "Book Club",
          description: "Discussion of this month's selection",
          icon: "BookOpenIcon",
          category: "Social"
        },
        {
          id: 6,
          time: "3:00 PM",
          title: "Baking Time",
          description: "Making fresh cookies together",
          icon: "CakeIcon",
          category: "Activities"
        }
      ]
    },
    {
      day: "Wednesday",
      date: "Jan 22",
      activities: [
        {
          id: 7,
          time: "9:30 AM",
          title: "Walking Group",
          description: "Neighborhood stroll with friends",
          icon: "UserGroupIcon",
          category: "Wellness"
        },
        {
          id: 8,
          time: "11:30 AM",
          title: "Craft Workshop",
          description: "Seasonal decorations project",
          icon: "SparklesIcon",
          category: "Creative"
        },
        {
          id: 9,
          time: "2:30 PM",
          title: "Movie Matinee",
          description: "Classic film screening",
          icon: "FilmIcon",
          category: "Entertainment"
        }
      ]
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl lg:text-4xl text-foreground mb-4">
            Weekly Activity Calendar
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Every week is filled with engaging activities designed to promote wellness, creativity, and social connection. Join us for activities that bring joy and meaning to each day.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {weekSchedule.map((daySchedule) => (
            <div
              key={daySchedule.day}
              className="bg-background rounded-lg shadow-soft p-6 transition-all duration-300 ease-organic hover:shadow-organic"
            >
              <div className="mb-6">
                <h3 className="font-heading text-2xl text-foreground mb-1">
                  {daySchedule.day}
                </h3>
                <p className="font-body text-sm text-muted-foreground">
                  {daySchedule.date}
                </p>
              </div>

              <div className="space-y-4">
                {daySchedule.activities.map((activity) => (
                  <div
                    key={activity.id}
                    className="flex gap-4 p-4 bg-muted/30 rounded-lg transition-all duration-300 ease-organic hover:bg-muted/50"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <Icon
                          name={activity.icon as any}
                          size={24}
                          className="text-primary"
                        />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-body font-semibold text-foreground">
                          {activity.title}
                        </h4>
                        <span className="text-xs font-body text-muted-foreground">
                          {activity.time}
                        </span>
                      </div>
                      <p className="font-body text-sm text-muted-foreground mb-2">
                        {activity.description}
                      </p>
                      <span className="inline-block px-2 py-1 bg-secondary/20 text-secondary-foreground text-xs font-body rounded">
                        {activity.category}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="font-body text-muted-foreground mb-6">
            Activities are flexible and tailored to resident preferences. We welcome suggestions and special requests!
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-terracotta text-terracotta-foreground font-cta font-semibold text-base rounded-lg shadow-soft transition-all duration-300 ease-organic hover:bg-terracotta/90 hover:shadow-organic hover:scale-105"
          >
            <Icon name="CalendarIcon" size={20} className="mr-2" />
            Request Full Calendar
          </a>
        </div>
      </div>
    </section>
  );
};

export default ActivityCalendar;