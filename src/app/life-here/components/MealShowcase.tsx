import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface MealItem {
  id: number;
  name: string;
  description: string;
  dietary: string[];
}

interface DayMenu {
  day: string;
  breakfast: MealItem;
  lunch: MealItem;
  dinner: MealItem;
}

const MealShowcase = () => {
  const sampleMenu: DayMenu[] = [
    {
      day: "Monday",
      breakfast: {
        id: 1,
        name: "Fluffy Pancakes",
        description: "With fresh berries, maple syrup, and turkey sausage",
        dietary: ["Vegetarian Option"]
      },
      lunch: {
        id: 2,
        name: "Chicken Caesar Salad",
        description: "Grilled chicken, romaine, parmesan, homemade dressing",
        dietary: ["Gluten-Free Option"]
      },
      dinner: {
        id: 3,
        name: "Pot Roast",
        description: "Tender beef with roasted vegetables and mashed potatoes",
        dietary: ["Low-Sodium Option"]
      }
    },
    {
      day: "Tuesday",
      breakfast: {
        id: 4,
        name: "Veggie Omelet",
        description: "Three-egg omelet with peppers, onions, cheese, and toast",
        dietary: ["Vegetarian", "Gluten-Free Option"]
      },
      lunch: {
        id: 5,
        name: "Turkey Club Sandwich",
        description: "Triple-decker with bacon, lettuce, tomato, and fries",
        dietary: ["Dairy-Free Option"]
      },
      dinner: {
        id: 6,
        name: "Baked Salmon",
        description: "Herb-crusted salmon with rice pilaf and steamed broccoli",
        dietary: ["Heart-Healthy", "Gluten-Free"]
      }
    }
  ];

  const mealImages = [
    {
      src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
      alt: "Beautifully plated homemade meal with roasted chicken, colorful vegetables, and fresh herbs on white ceramic plate"
    },
    {
      src: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?w=800&q=80",
      alt: "Fresh garden salad with mixed greens, cherry tomatoes, cucumbers, and grilled chicken in wooden bowl"
    },
    {
      src: "/life-dining-meal.png",
      alt: "Delicious top-down view of a home-cooked roast chicken dinner with pasta and fresh salad"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl lg:text-4xl text-foreground mb-4">
            Home-Cooked Meals
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Every meal is prepared fresh daily in our kitchen with love and attention to dietary needs. We accommodate special requests and preferences to ensure everyone enjoys their dining experience.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {mealImages.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-soft aspect-[4/3]"
            >
              <AppImage
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        <div className="bg-card rounded-lg shadow-soft p-8 mb-12">
          <h3 className="font-heading text-2xl text-foreground mb-6 text-center">
            Sample Weekly Menu
          </h3>

          <div className="space-y-8">
            {sampleMenu.map((dayMenu) => (
              <div key={dayMenu.day} className="border-b border-border pb-6 last:border-0">
                <h4 className="font-heading text-xl text-primary mb-4">
                  {dayMenu.day}
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon name="SunIcon" size={20} className="text-accent" />
                      <span className="font-body font-semibold text-foreground">
                        Breakfast
                      </span>
                    </div>
                    <h5 className="font-body font-medium text-foreground">
                      {dayMenu.breakfast.name}
                    </h5>
                    <p className="font-body text-sm text-muted-foreground">
                      {dayMenu.breakfast.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {dayMenu.breakfast.dietary.map((diet, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-success/10 text-success text-xs font-body rounded"
                        >
                          {diet}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon name="ClockIcon" size={20} className="text-accent" />
                      <span className="font-body font-semibold text-foreground">
                        Lunch
                      </span>
                    </div>
                    <h5 className="font-body font-medium text-foreground">
                      {dayMenu.lunch.name}
                    </h5>
                    <p className="font-body text-sm text-muted-foreground">
                      {dayMenu.lunch.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {dayMenu.lunch.dietary.map((diet, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-success/10 text-success text-xs font-body rounded"
                        >
                          {diet}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon name="MoonIcon" size={20} className="text-accent" />
                      <span className="font-body font-semibold text-foreground">
                        Dinner
                      </span>
                    </div>
                    <h5 className="font-body font-medium text-foreground">
                      {dayMenu.dinner.name}
                    </h5>
                    <p className="font-body text-sm text-muted-foreground">
                      {dayMenu.dinner.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {dayMenu.dinner.dietary.map((diet, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-success/10 text-success text-xs font-body rounded"
                        >
                          {diet}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-muted/30 rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <Icon name="CheckCircleIcon" size={32} className="text-success mx-auto mb-3" />
              <h4 className="font-body font-semibold text-foreground mb-2">
                Fresh Ingredients
              </h4>
              <p className="font-body text-sm text-muted-foreground">
                Locally sourced when possible
              </p>
            </div>
            <div className="text-center">
              <Icon name="HeartIcon" size={32} className="text-success mx-auto mb-3" />
              <h4 className="font-body font-semibold text-foreground mb-2">
                Dietary Accommodations
              </h4>
              <p className="font-body text-sm text-muted-foreground">
                Special diets and allergies respected
              </p>
            </div>
            <div className="text-center">
              <Icon name="UserGroupIcon" size={32} className="text-success mx-auto mb-3" />
              <h4 className="font-body font-semibold text-foreground mb-2">
                Family-Style Dining
              </h4>
              <p className="font-body text-sm text-muted-foreground">
                Shared meals build community
              </p>
            </div>
            <div className="text-center">
              <Icon name="SparklesIcon" size={32} className="text-success mx-auto mb-3" />
              <h4 className="font-body font-semibold text-foreground mb-2">
                Special Occasions
              </h4>
              <p className="font-body text-sm text-muted-foreground">
                Birthday celebrations and holidays
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MealShowcase;