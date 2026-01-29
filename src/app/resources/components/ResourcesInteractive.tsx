'use client';

import { useState, useEffect } from 'react';
import ResourceCard from './ResourceCard';
import FAQItem from './FAQItem';
import PaymentInfoCard from './PaymentInfoCard';
import VisitingGuidelineCard from './VisitingGuidelineCard';
import ComplianceCard from './ComplianceCard';
import NewsletterSignup from './NewsletterSignup';
import Icon from '@/components/ui/AppIcon';

interface Resource {
  id: number;
  title: string;
  description: string;
  icon: string;
  downloadUrl?: string;
  linkUrl?: string;
  type: 'download' | 'link' | 'tool';
  category: string;
}

interface FAQ {
  id: number;
  question: string;
  answer: string;
  category: string;
}

interface PaymentInfo {
  id: number;
  title: string;
  description: string;
  icon: string;
  details: string[];
}

interface VisitingGuideline {
  id: number;
  title: string;
  guidelines: string[];
  icon: string;
}

interface Compliance {
  id: number;
  title: string;
  description: string;
  certifications: string[];
  icon: string;
}

const ResourcesInteractive = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeFAQCategory, setActiveFAQCategory] = useState('general');

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const resources: Resource[] = [
    {
      id: 1,
      title: "Assisted Living Transition Guide",
      description: "Comprehensive guide covering every step of transitioning to assisted living, from initial conversations to move-in day.",
      icon: "DocumentTextIcon",
      downloadUrl: "#",
      type: "download",
      category: "guides"
    },
    {
      id: 2,
      title: "Financial Planning Worksheet",
      description: "Detailed worksheet to help families understand costs, insurance coverage, and payment options for assisted living care.",
      icon: "CurrencyDollarIcon",
      downloadUrl: "#",
      type: "download",
      category: "financial"
    },
    {
      id: 3,
      title: "Family Meeting Template",
      description: "Structured template for family discussions about care decisions, ensuring all concerns are addressed.",
      icon: "UserGroupIcon",
      downloadUrl: "#",
      type: "download",
      category: "guides"
    },
    {
      id: 4,
      title: "Care Needs Assessment Tool",
      description: "Interactive tool to evaluate your loved one's care requirements and determine the right level of support.",
      icon: "ClipboardDocumentCheckIcon",
      linkUrl: "#",
      type: "tool",
      category: "tools"
    },
    {
      id: 5,
      title: "Cost Calculator",
      description: "Calculate estimated monthly costs based on care needs, services required, and payment options available.",
      icon: "CalculatorIcon",
      linkUrl: "#",
      type: "tool",
      category: "tools"
    },
    {
      id: 6,
      title: "Move-In Preparation Checklist",
      description: "Complete checklist covering everything needed for a smooth transition, from paperwork to personal items.",
      icon: "CheckCircleIcon",
      downloadUrl: "#",
      type: "download",
      category: "guides"
    },
    {
      id: 7,
      title: "Regulatory Compliance Documentation",
      description: "Access our complete licensing, inspection reports, and regulatory compliance documentation.",
      icon: "ShieldCheckIcon",
      downloadUrl: "#",
      type: "download",
      category: "compliance"
    },
    {
      id: 8,
      title: "Medication Management Guide",
      description: "Understand our medication administration protocols and how we ensure safe medication management.",
      icon: "BeakerIcon",
      downloadUrl: "#",
      type: "download",
      category: "guides"
    }
  ];

  const faqs: FAQ[] = [
    {
      id: 1,
      question: "What is the difference between assisted living and nursing home care?",
      answer: "Assisted living provides support with daily activities while promoting independence in a home-like setting. Residents at Sample Assisted Living maintain their autonomy while receiving personalized care. Nursing homes provide 24/7 medical care for individuals with complex health needs. Our assisted living model focuses on dignity, choice, and quality of life in a family-sized community.",
      category: "general"
    },
    {
      id: 2,
      question: "How do I know if my loved one is ready for assisted living?",
      answer: "Signs include difficulty with daily tasks (bathing, dressing, medication management), social isolation, safety concerns at home, or caregiver burnout. Our care assessment tool can help evaluate needs. We recommend scheduling a tour and consultation to discuss your specific situation with our care team.",
      category: "general"
    },
    {
      id: 3,
      question: "What is included in the monthly cost?",
      answer: "Our monthly rate includes private or semi-private room, three nutritious meals daily, 24/7 care and supervision, medication management, housekeeping and laundry services, social activities and outings, and all utilities. Additional services like specialized care or therapy may have separate fees. We provide transparent pricing with no hidden costs.",
      category: "financial"
    },
    {
      id: 4,
      question: "Do you accept Medicaid or Medicare?",
      answer: "Yes, we are certified to accept Arizona Medicaid (ALTCS) for eligible residents. Medicare does not typically cover assisted living costs, but may cover certain medical services. We work with families to explore all payment options including long-term care insurance, veterans benefits, and private pay arrangements.",
      category: "financial"
    },
    {
      id: 5,
      question: "Can residents bring their own furniture and belongings?",
      answer: "Absolutely! We encourage residents to personalize their rooms with favorite furniture, photos, and cherished items. This helps create a true home environment. We provide guidance on room dimensions and safety considerations. Our goal is for each resident to feel at home from day one.",
      category: "general"
    },
    {
      id: 6,
      question: "What are your visiting hours?",
      answer: "We maintain an open-door policy with no restricted visiting hours. Family and friends are welcome anytime, and we encourage regular visits. We only ask that visitors respect quiet hours (10 PM - 7 AM) and notify us of large group visits. Families can join residents for meals, activities, or simply spend quality time together.",
      category: "visiting"
    },
    {
      id: 7,
      question: "How do you handle medical emergencies?",
      answer: "Our staff is trained in emergency response and CPR. We have established protocols for medical emergencies and maintain relationships with local hospitals and emergency services. Families are notified immediately of any health concerns or incidents. We coordinate with residents' physicians and healthcare providers to ensure continuity of care.",
      category: "care"
    },
    {
      id: 8,
      question: "What happens if care needs increase over time?",
      answer: "We conduct regular care assessments and adjust support as needs change. Our small size allows us to provide increasingly personalized care. If medical needs exceed our capabilities, we work closely with families to find appropriate next-level care and ensure a smooth transition. Our priority is always the resident's wellbeing and dignity.",
      category: "care"
    },
    {
      id: 9,
      question: "How do you ensure resident safety and security?",
      answer: "We maintain 24/7 staffing, secure entry systems, regular safety checks, and emergency call systems in every room. Our small resident-to-staff ratio ensures constant supervision. We conduct regular safety drills and maintain all required safety equipment. Our home-like setting allows for personalized security measures based on individual needs.",
      category: "care"
    },
    {
      id: 10,
      question: "What activities and social programs do you offer?",
      answer: "We provide daily activities including exercise classes, arts and crafts, music therapy, gardening, games, and social gatherings. We organize regular outings to local attractions, restaurants, and community events. Activities are tailored to residents' interests and abilities. Our small size allows for meaningful participation and genuine social connections.",
      category: "general"
    }
  ];

  const paymentInfo: PaymentInfo[] = [
    {
      id: 1,
      title: "Private Pay Options",
      description: "Flexible payment arrangements for families choosing private pay",
      icon: "CreditCardIcon",
      details: [
        "Monthly billing with transparent itemized statements",
        "Multiple payment methods accepted (check, ACH, credit card)",
        "Flexible payment schedules available",
        "No long-term contracts required",
        "30-day notice for rate changes"
      ]
    },
    {
      id: 2,
      title: "Medicaid (ALTCS) Acceptance",
      description: "We are certified to accept Arizona Long Term Care System",
      icon: "DocumentCheckIcon",
      details: [
        "Full ALTCS certification and compliance",
        "Assistance with application process",
        "No discrimination based on payment source",
        "Same quality care for all residents",
        "Ongoing eligibility support"
      ]
    },
    {
      id: 3,
      title: "Veterans Benefits",
      description: "Support for veterans and their spouses",
      icon: "ShieldCheckIcon",
      details: [
        "Aid and Attendance benefit assistance",
        "VA pension program guidance",
        "Help with benefit applications",
        "Coordination with VA healthcare",
        "Honor and respect for veteran residents"
      ]
    },
    {
      id: 4,
      title: "Long-Term Care Insurance",
      description: "We work with most major insurance providers",
      icon: "DocumentTextIcon",
      details: [
        "Direct billing to insurance companies",
        "Assistance with claims processing",
        "Detailed documentation for reimbursement",
        "Coordination with insurance representatives",
        "Transparent reporting of services provided"
      ]
    }
  ];

  const visitingGuidelines: VisitingGuideline[] = [
    {
      id: 1,
      title: "General Visiting Guidelines",
      guidelines: [
        "Open-door policy - visit anytime during reasonable hours",
        "Please sign in at the front desk upon arrival",
        "Respect quiet hours between 10 PM and 7 AM",
        "Notify staff of large group visits in advance",
        "Feel free to join residents for meals (advance notice appreciated)",
        "Visitors are welcome to participate in activities and outings"
      ],
      icon: "ClockIcon"
    },
    {
      id: 2,
      title: "Health & Safety Protocols",
      guidelines: [
        "Please stay home if you are feeling unwell",
        "Hand sanitizer available at all entrances",
        "Follow any posted health guidelines",
        "Notify staff of any contagious illnesses",
        "Children are welcome with adult supervision",
        "Service animals welcome, pets with prior approval"
      ],
      icon: "ShieldCheckIcon"
    },
    {
      id: 3,
      title: "Meal & Activity Participation",
      guidelines: [
        "Family members may join residents for meals ($10 guest fee)",
        "Please RSVP for meals 24 hours in advance",
        "Participate in activities and outings with residents",
        "Special family events and celebrations welcome",
        "Private dining area available for family gatherings",
        "Kitchen staff can accommodate dietary restrictions with notice"
      ],
      icon: "CakeIcon"
    },
    {
      id: 4,
      title: "Communication & Updates",
      guidelines: [
        "Care team available to discuss resident wellbeing",
        "Schedule care conferences as needed",
        "Regular updates provided on health changes",
        "Family portal access for care notes and updates",
        "Emergency contact procedures in place",
        "Open communication encouraged at all times"
      ],
      icon: "ChatBubbleLeftRightIcon"
    }
  ];

  const compliance: Compliance[] = [
    {
      id: 1,
      title: "Arizona State Licensing",
      description: "Fully licensed and regulated by Arizona Department of Health Services",
      certifications: [
        "Arizona Assisted Living Facility License #AL-12345",
        "Annual state inspections with full compliance",
        "Regular health and safety audits",
        "Staff background checks and training requirements met",
        "Medication management certification"
      ],
      icon: "BuildingOffice2Icon"
    },
    {
      id: 2,
      title: "Healthcare Partnerships",
      description: "Established relationships with trusted local healthcare providers",
      certifications: [
        "Banner Health preferred partner facility",
        "Hospice of the Valley partnership",
        "Local pharmacy coordination for medication management",
        "Physical therapy and occupational therapy providers",
        "Dental and vision care service arrangements"
      ],
      icon: "HeartIcon"
    },
    {
      id: 3,
      title: "Safety & Emergency Protocols",
      description: "Comprehensive safety systems and emergency preparedness",
      certifications: [
        "Fire safety systems inspected and certified",
        "Emergency evacuation plans and regular drills",
        "24/7 staff trained in CPR and first aid",
        "Emergency call systems in all resident rooms",
        "Backup power and emergency supplies maintained"
      ],
      icon: "FireIcon"
    },
    {
      id: 4,
      title: "Quality Assurance",
      description: "Ongoing commitment to excellence in care and service",
      certifications: [
        "Regular resident and family satisfaction surveys",
        "Continuous staff training and development",
        "Quality improvement initiatives",
        "Infection control protocols",
        "Resident rights and dignity standards"
      ],
      icon: "StarIcon"
    }
  ];

  const categories = [
    { id: 'all', label: 'All Resources' },
    { id: 'guides', label: 'Guides & Checklists' },
    { id: 'financial', label: 'Financial Planning' },
    { id: 'tools', label: 'Interactive Tools' },
    { id: 'compliance', label: 'Compliance & Safety' }
  ];

  const faqCategories = [
    { id: 'general', label: 'General Questions' },
    { id: 'financial', label: 'Financial & Payment' },
    { id: 'care', label: 'Care & Services' },
    { id: 'visiting', label: 'Visiting & Family' }
  ];

  const filteredResources = activeCategory === 'all' 
    ? resources 
    : resources.filter(r => r.category === activeCategory);

  const filteredFAQs = faqs.filter(f => f.category === activeFAQCategory);

  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h1 className="font-heading text-4xl md:text-5xl font-semibold text-foreground mb-4">
              Family Resources & Support
            </h1>
            <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive resources to support your family through every step of the assisted living journey
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6">
              Family Resources & Support
            </h1>
            <p className="font-body text-lg md:text-xl text-muted-foreground mb-8">
              Comprehensive resources, guides, and tools to support your family through every step of the assisted living journey. We're here to help you make informed decisions with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#resources"
                className="px-8 py-4 bg-primary text-primary-foreground font-cta font-semibold text-base rounded-lg shadow-soft transition-all duration-300 ease-organic hover:bg-primary/90 hover:shadow-organic hover:scale-105 flex items-center justify-center"
              >
                Browse Resources
                <Icon name="ArrowDownIcon" size={20} className="ml-2" />
              </a>
              <a
                href="#faq"
                className="px-8 py-4 bg-card text-foreground font-cta font-semibold text-base rounded-lg shadow-soft border border-border transition-all duration-300 ease-organic hover:bg-muted hover:shadow-organic hover:scale-105 flex items-center justify-center"
              >
                View FAQs
                <Icon name="QuestionMarkCircleIcon" size={20} className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Downloadable Resources Section */}
      <section id="resources" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Downloadable Resources & Tools
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto">
              Access our comprehensive library of guides, worksheets, and interactive tools designed to support your family's decision-making process.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-body font-medium text-base transition-all duration-300 ease-organic ${
                  activeCategory === category.id
                    ? 'bg-primary text-primary-foreground shadow-soft'
                    : 'bg-card text-foreground border border-border hover:bg-muted'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Resources Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map((resource) => (
              <ResourceCard
                key={resource.id}
                title={resource.title}
                description={resource.description}
                icon={resource.icon}
                downloadUrl={resource.downloadUrl}
                linkUrl={resource.linkUrl}
                type={resource.type}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Payment Information Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Payment Options & Financial Information
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto">
              We offer flexible payment options and work with families to find the best financial solution for quality care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {paymentInfo.map((info) => (
              <PaymentInfoCard
                key={info.id}
                title={info.title}
                description={info.description}
                icon={info.icon}
                details={info.details}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Visiting Guidelines Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Visiting Guidelines & Family Engagement
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto">
              We maintain an open-door policy and encourage family involvement. Here's what you need to know about visiting your loved one.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {visitingGuidelines.map((guideline) => (
              <VisitingGuidelineCard
                key={guideline.id}
                title={guideline.title}
                guidelines={guideline.guidelines}
                icon={guideline.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Compliance & Safety Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Licensing, Compliance & Safety Standards
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto">
              Transparency and regulatory compliance are fundamental to our commitment to excellence in care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {compliance.map((comp) => (
              <ComplianceCard
                key={comp.id}
                title={comp.title}
                description={comp.description}
                certifications={comp.certifications}
                icon={comp.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto">
              Find answers to common questions about assisted living, our services, and what to expect at Sample Assisted Living.
            </p>
          </div>

          {/* FAQ Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {faqCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFAQCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-body font-medium text-base transition-all duration-300 ease-organic ${
                  activeFAQCategory === category.id
                    ? 'bg-secondary text-secondary-foreground shadow-soft'
                    : 'bg-card text-foreground border border-border hover:bg-muted'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* FAQ List */}
          <div className="max-w-4xl mx-auto space-y-4">
            {filteredFAQs.map((faq) => (
              <FAQItem key={faq.id} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <NewsletterSignup />
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-br from-terracotta/10 to-accent/10 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Still Have Questions?
            </h2>
            <p className="font-body text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our care team is here to help. Schedule a personal consultation or tour to discuss your family's specific needs and see Sample Assisted Living in person.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+14807657128"
                className="px-8 py-4 bg-primary text-primary-foreground font-cta font-semibold text-base rounded-lg shadow-soft transition-all duration-300 ease-organic hover:bg-primary/90 hover:shadow-organic hover:scale-105 flex items-center justify-center"
              >
                <Icon name="PhoneIcon" size={20} className="mr-2" />
                Call (480) 765-7128
              </a>
              <a
                href="/contact"
                className="px-8 py-4 bg-terracotta text-terracotta-foreground font-cta font-semibold text-base rounded-lg shadow-soft transition-all duration-300 ease-organic hover:bg-terracotta/90 hover:shadow-organic hover:scale-105 flex items-center justify-center"
              >
                Schedule a Tour
                <Icon name="ArrowRightIcon" size={20} className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResourcesInteractive;