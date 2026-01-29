'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface Question {
  id: number;
  question: string;
  options: string[];
}

interface CareAssessmentProps {
  className?: string;
}

const CareAssessment = ({ className = '' }: CareAssessmentProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);

  useState(() => {
    setIsHydrated(true);
  });

  const questions: Question[] = [
    {
      id: 1,
      question: 'What level of assistance is needed with daily activities?',
      options: [
        'Minimal - mostly independent',
        'Moderate - needs some help',
        'Significant - needs regular assistance',
        'Extensive - needs constant support',
      ],
    },
    {
      id: 2,
      question: 'Are there any specific medical conditions requiring specialized care?',
      options: [
        'No significant medical conditions',
        'Diabetes management',
        'Heart condition monitoring',
        'Memory care needs',
      ],
    },
    {
      id: 3,
      question: 'What is the mobility level?',
      options: [
        'Fully mobile without assistance',
        'Mobile with walker or cane',
        'Requires wheelchair',
        'Limited mobility, mostly bed-bound',
      ],
    },
    {
      id: 4,
      question: 'What are the dietary requirements?',
      options: [
        'Regular diet, no restrictions',
        'Low sodium or diabetic diet',
        'Texture-modified foods',
        'Feeding assistance required',
      ],
    },
    {
      id: 5,
      question: 'What level of social engagement is preferred?',
      options: [
        'Very social, enjoys group activities',
        'Moderately social, small groups',
        'Prefers one-on-one interactions',
        'Quiet environment preferred',
      ],
    },
  ];

  const handleAnswer = (questionId: number, answer: string) => {
    if (!isHydrated) return;
    setAnswers({ ...answers, [questionId]: answer });
  };

  const handleNext = () => {
    if (!isHydrated) return;
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (!isHydrated) return;
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleReset = () => {
    if (!isHydrated) return;
    setCurrentStep(0);
    setAnswers({});
    setShowResults(false);
  };

  const getRecommendation = () => {
    const answerCount = Object.keys(answers).length;
    if (answerCount < questions.length) {
      return 'Please complete all questions for a personalized recommendation.';
    }

    return `Based on your responses, Sample Assisted Living's personalized care approach is well-suited to meet these needs. Our 1:3 staff-to-resident ratio during the day ensures individualized attention, and our experienced team can accommodate various care levels. We recommend scheduling a tour to discuss specific care requirements and see our home-like environment firsthand.`;
  };

  if (!isHydrated) {
    return (
      <section id="care-assessment" className={`py-20 lg:py-28 bg-gradient-to-b from-secondary/5 via-background to-secondary/5 relative ${className}`}>
        {/* Subtle leaf pattern */}
        <div className="absolute inset-0 opacity-[0.015]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%237d8c75' fill-rule='evenodd'%3E%3Cpath d='M0 0h40v40H0V0zm40 40h40v40H40V40zm0-40h2l-2 2V0zm0 4l4-4h2l-6 6V4zm0 4l8-8h2L40 10V8zm0 4L52 0h2L40 14v-2zm0 4L56 0h2L40 18v-2zm0 4L60 0h2L40 22v-2zm0 4L64 0h2L40 26v-2zm0 4L68 0h2L40 30v-2zm0 4L72 0h2L40 34v-2zm0 4L76 0h2L40 38v-2zm0 4L80 0v2L42 40h-2zm4 0L80 4v2L46 40h-2zm4 0L80 8v2L50 40h-2zm4 0l28-28v2L54 40h-2zm4 0l24-24v2L58 40h-2zm4 0l20-20v2L62 40h-2zm4 0l16-16v2L66 40h-2zm4 0l12-12v2L70 40h-2zm4 0l8-8v2l-6 6h-2zm4 0l4-4v2l-2 2h-2z'/%3E%3C/g%3E%3C/svg%3E")`
        }} />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl lg:text-4xl text-foreground mb-4">
                Interactive Care Assessment
              </h2>
              <p className="font-body text-lg text-muted-foreground">
                Answer a few questions to receive personalized care recommendations.
              </p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-xl border border-secondary/10 p-8">
              <div className="animate-pulse space-y-6">
                <div className="h-8 bg-muted rounded w-3/4"></div>
                <div className="space-y-3">
                  <div className="h-12 bg-muted rounded"></div>
                  <div className="h-12 bg-muted rounded"></div>
                  <div className="h-12 bg-muted rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (showResults) {
    return (
      <section id="care-assessment" className={`py-20 lg:py-28 bg-gradient-to-b from-secondary/5 via-background to-secondary/5 relative ${className}`}>
        {/* Subtle leaf pattern */}
        <div className="absolute inset-0 opacity-[0.015]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%237d8c75' fill-rule='evenodd'%3E%3Cpath d='M0 0h40v40H0V0zm40 40h40v40H40V40zm0-40h2l-2 2V0zm0 4l4-4h2l-6 6V4zm0 4l8-8h2L40 10V8zm0 4L52 0h2L40 14v-2zm0 4L56 0h2L40 18v-2zm0 4L60 0h2L40 22v-2zm0 4L64 0h2L40 26v-2zm0 4L68 0h2L40 30v-2zm0 4L72 0h2L40 34v-2zm0 4L76 0h2L40 38v-2zm0 4L80 0v2L42 40h-2zm4 0L80 4v2L46 40h-2zm4 0L80 8v2L50 40h-2zm4 0l28-28v2L54 40h-2zm4 0l24-24v2L58 40h-2zm4 0l20-20v2L62 40h-2zm4 0l16-16v2L66 40h-2zm4 0l12-12v2L70 40h-2zm4 0l8-8v2l-6 6h-2zm4 0l4-4v2l-2 2h-2z'/%3E%3C/g%3E%3C/svg%3E")`
        }} />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-xl border border-secondary/10 p-8 lg:p-12">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="CheckCircleIcon" size={48} className="text-success" />
                </div>
                <h2 className="font-heading text-3xl text-foreground mb-4">
                  Your Personalized Care Recommendation
                </h2>
              </div>

              <div className="bg-muted/30 rounded-lg p-6 mb-8">
                <p className="font-body text-foreground leading-relaxed">{getRecommendation()}</p>
              </div>

              <div className="space-y-4">
                <h3 className="font-heading text-xl text-foreground mb-4">
                  Why Sample Assisted Living is Right for You:
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Icon name="CheckCircleIcon" size={20} className="text-success mr-3 mt-1 flex-shrink-0" />
                    <span className="font-body text-foreground">
                      Intimate 10-resident setting ensures personalized attention
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="CheckCircleIcon" size={20} className="text-success mr-3 mt-1 flex-shrink-0" />
                    <span className="font-body text-foreground">
                      24/7 trained staff with healthcare coordination
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="CheckCircleIcon" size={20} className="text-success mr-3 mt-1 flex-shrink-0" />
                    <span className="font-body text-foreground">
                      Home-cooked meals with dietary accommodations
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="CheckCircleIcon" size={20} className="text-success mr-3 mt-1 flex-shrink-0" />
                    <span className="font-body text-foreground">
                      Family-like atmosphere with dignity and respect
                    </span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <a
                  href="/contact"
                  className="flex-1 text-center px-8 py-4 bg-terracotta text-terracotta-foreground font-cta font-semibold text-base rounded-lg shadow-soft transition-all duration-300 ease-organic hover:bg-terracotta/90 hover:shadow-organic hover:scale-105"
                >
                  Schedule a Tour
                </a>
                <button
                  onClick={handleReset}
                  className="flex-1 px-8 py-4 bg-card text-foreground font-cta font-semibold text-base rounded-lg border-2 border-primary shadow-soft transition-all duration-300 ease-organic hover:bg-primary hover:text-primary-foreground"
                >
                  Retake Assessment
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const currentQuestion = questions[currentStep];
  const progress = ((currentStep + 1) / questions.length) * 100;

  return (
    <section id="care-assessment" className={`py-20 lg:py-28 bg-gradient-to-b from-secondary/5 via-background to-secondary/5 relative ${className}`}>
      {/* Subtle leaf pattern */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%237d8c75' fill-rule='evenodd'%3E%3Cpath d='M0 0h40v40H0V0zm40 40h40v40H40V40zm0-40h2l-2 2V0zm0 4l4-4h2l-6 6V4zm0 4l8-8h2L40 10V8zm0 4L52 0h2L40 14v-2zm0 4L56 0h2L40 18v-2zm0 4L60 0h2L40 22v-2zm0 4L64 0h2L40 26v-2zm0 4L68 0h2L40 30v-2zm0 4L72 0h2L40 34v-2zm0 4L76 0h2L40 38v-2zm0 4L80 0v2L42 40h-2zm4 0L80 4v2L46 40h-2zm4 0L80 8v2L50 40h-2zm4 0l28-28v2L54 40h-2zm4 0l24-24v2L58 40h-2zm4 0l20-20v2L62 40h-2zm4 0l16-16v2L66 40h-2zm4 0l12-12v2L70 40h-2zm4 0l8-8v2l-6 6h-2zm4 0l4-4v2l-2 2h-2z'/%3E%3C/g%3E%3C/svg%3E")`
      }} />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-secondary/15 text-secondary rounded-full text-sm font-body font-medium mb-4 tracking-wide">
              Find Your Care Plan
            </span>
            <h2 className="font-heading text-3xl lg:text-4xl text-foreground mb-4">
              Interactive Care Assessment
            </h2>
            <p className="font-body text-lg text-muted-foreground">
              Answer a few questions to receive personalized care recommendations.
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-xl border border-secondary/10 p-8 lg:p-12">
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <span className="font-body text-sm text-muted-foreground">
                  Question {currentStep + 1} of {questions.length}
                </span>
                <span className="font-body text-sm text-muted-foreground">{Math.round(progress)}%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div
                  className="bg-primary h-2 rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="font-heading text-xl text-foreground mb-6">{currentQuestion.question}</h3>
              <div className="space-y-3">
                {currentQuestion.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(currentQuestion.id, option)}
                    className={`w-full text-left px-6 py-4 rounded-lg border-2 transition-all duration-300 ${
                      answers[currentQuestion.id] === option
                        ? 'border-primary bg-primary/10 shadow-soft'
                        : 'border-border bg-background hover:border-primary/50 hover:bg-muted/30'
                    }`}
                  >
                    <div className="flex items-center">
                      <div
                        className={`w-5 h-5 rounded-full border-2 mr-4 flex items-center justify-center transition-all ${
                          answers[currentQuestion.id] === option
                            ? 'border-primary bg-primary' :'border-muted-foreground'
                        }`}
                      >
                        {answers[currentQuestion.id] === option && (
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        )}
                      </div>
                      <span className="font-body text-foreground">{option}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="flex justify-between">
              <button
                onClick={handlePrevious}
                disabled={currentStep === 0}
                className={`px-6 py-3 font-cta font-semibold text-base rounded-lg transition-all duration-300 ${
                  currentStep === 0
                    ? 'bg-muted text-muted-foreground cursor-not-allowed'
                    : 'bg-card text-foreground border-2 border-primary hover:bg-primary hover:text-primary-foreground'
                }`}
              >
                Previous
              </button>
              <button
                onClick={handleNext}
                disabled={!answers[currentQuestion.id]}
                className={`px-6 py-3 font-cta font-semibold text-base rounded-lg transition-all duration-300 ${
                  !answers[currentQuestion.id]
                    ? 'bg-muted text-muted-foreground cursor-not-allowed'
                    : 'bg-terracotta text-terracotta-foreground shadow-soft hover:bg-terracotta/90 hover:shadow-organic hover:scale-105'
                }`}
              >
                {currentStep === questions.length - 1 ? 'Get Recommendation' : 'Next'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareAssessment;