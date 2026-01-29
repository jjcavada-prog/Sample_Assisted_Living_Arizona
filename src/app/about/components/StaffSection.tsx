import StaffCard from './StaffCard';

interface StaffMember {
  name: string;
  role: string;
  credentials: string;
  image: string;
  alt: string;
  bio: string;
  philosophy: string;
}

interface StaffSectionProps {
  className?: string;
}

const StaffSection = ({ className = '' }: StaffSectionProps) => {
  const staffMembers: StaffMember[] = [
    {
      name: 'Your Name Here',
      role: 'Owner',
      credentials: 'Licensed Administrator',
      image: '/team-linda.png',
      alt: 'Professional owner of God\'s Grace Assisted Living',
      bio: 'Founded God\'s Grace Assisted Living with a vision of providing compassionate, faith-centered care for seniors in the community. Their dedication to quality and personal touch sets the standard for everything we do.',
      philosophy: 'I started this home because I believe every senior deserves a place where they feel loved, respected, and truly at home. This isn\'t just a business—it\'s a calling guided by God\'s grace.'
    },
    {
      name: 'Staff Member',
      role: 'Manager',
      credentials: 'RN, BSN, Certified Senior Care Manager',
      image: '/team-rebecca.png',
      alt: 'Professional manager at God\'s Grace Assisted Living',
      bio: 'Oversees daily operations at God\'s Grace Assisted Living, ensuring our residents receive consistent, high-quality care. Their nursing background and management expertise keep everything running smoothly.',
      philosophy: 'Great care starts with great organization. My job is to make sure our caregivers have everything they need so they can focus on what matters most—our residents\' well-being and happiness.'
    },
    {
      name: 'Staff Member',
      role: 'Caregiver',
      credentials: 'CNA, Certified Dementia Care Specialist',
      image: '/team-james.png',
      alt: 'Healthcare worker at God\'s Grace Assisted Living',
      bio: 'Specializes in dementia care and has a remarkable ability to connect with residents on a personal level. Their patience, empathy, and expertise make them an invaluable member of our team.',
      philosophy: 'The key to great care is listening—truly listening—to what residents need, both spoken and unspoken. Building trust and understanding transforms care from a task into a meaningful relationship.'
    },
    {
      name: 'Staff Member',
      role: 'Caregiver',
      credentials: 'CNA, First Aid & CPR Certified',
      image: '/team-maria.png',
      alt: 'Caregiver at God\'s Grace Assisted Living',
      bio: 'Brings warmth and attentiveness to every interaction with our residents. Their gentle nature and keen eye for detail ensure each person in their care feels safe, comfortable, and valued every day.',
      philosophy: 'Every resident has their own story and their own needs. I take the time to understand each person so I can provide care that truly makes a difference in their day.'
    }
  ];

  return (
    <section className={`py-20 bg-card ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-4xl lg:text-5xl font-semibold text-foreground mb-6">
            Meet Our Dedicated Team
          </h2>
          <p className="font-body text-xl text-foreground/70 leading-relaxed">
            Our staff combines professional expertise with genuine compassion, creating a care environment where residents feel valued, safe, and truly at home.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {staffMembers.map((staff, index) => (
            <StaffCard key={index} staff={staff} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StaffSection;