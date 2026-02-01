export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface FocusArea {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const coachingProgram = {
  title: "Free 8-Session Wellness Coaching Program",
  subtitle: "Transform your health with personalized, client-centered support",
  description: `I am offering free integrative wellness coaching sessions as part of my capstone project. These sessions are for anyone who wants support improving areas of life such as stress, sleep, digestion, nutrition habits, routines, or overall wellbeing.

Coaching is not medical or nutrition therapy. It is a supportive conversation where you are in charge, and I help you clarify goals, explore motivation, and take small realistic steps that fit your life.`,
  includes: [
    "8 one-on-one coaching sessions via Zoom",
    "Personalized goal setting and action plans",
    "Evidence-based behavior change support",
    "Optional integrative tools (breathwork, grounding, meditation)",
    "Non-judgmental, client-centered approach",
    "Flexible scheduling to fit your life",
  ],
  notIncluded: [
    "This is not therapy or counseling",
    "This is not medical care or diagnosis",
    "This is not nutrition therapy or meal plans",
  ],
  commitment:
    "Participants agree to attend all 8 sessions, actively engage in the coaching process, and communicate openly and respectfully.",
};

export const focusAreas: FocusArea[] = [
  {
    id: "stress",
    title: "Stress Management",
    description:
      "Learn practical tools to regulate your nervous system and find calm in daily life.",
    icon: "brain",
  },
  {
    id: "sleep",
    title: "Sleep Improvement",
    description:
      "Develop routines and habits that support restful, restorative sleep.",
    icon: "moon",
  },
  {
    id: "digestion",
    title: "Digestive Wellness",
    description:
      "Understand how food and stress impact your body and gut health.",
    icon: "leaf",
  },
  {
    id: "nutrition",
    title: "Nutrition Habits",
    description:
      "Build sustainable eating patterns that nourish your body and fit your lifestyle.",
    icon: "apple",
  },
  {
    id: "routines",
    title: "Daily Routines",
    description:
      "Create structure and consistency that supports your wellbeing goals.",
    icon: "calendar",
  },
  {
    id: "wellbeing",
    title: "Overall Wellbeing",
    description:
      "Take a whole-person approach to feeling balanced and empowered.",
    icon: "sparkles",
  },
];

export const optionalModalities = [
  {
    title: "Breathwork & Grounding",
    description: "Simple practices to settle into presence and calm.",
  },
  {
    title: "Sound Bowl Meditation",
    description: "Optional grounding at the start of sessions.",
  },
  {
    title: "Lifestyle Medicine",
    description: "Sleep, movement, and stress regulation habits.",
  },
  {
    title: "Mind-Body Practices",
    description: "Connecting physical and mental wellbeing.",
  },
];

export const howItWorks = [
  {
    step: 1,
    title: "Book Your Free Session",
    description:
      "Schedule a time that works for you using the booking link below.",
  },
  {
    step: 2,
    title: "Initial Consultation",
    description:
      "We'll get to know each other, discuss your goals, and see if coaching is right for you.",
  },
  {
    step: 3,
    title: "8 Coaching Sessions",
    description:
      "Meet regularly to reflect, problem-solve, and take meaningful steps toward your goals.",
  },
  {
    step: 4,
    title: "Celebrate Progress",
    description:
      "Review your journey, acknowledge your growth, and plan your path forward.",
  },
];

export const idealClient = [
  "Adults ready to take ownership of their health",
  "Individuals feeling stuck, overwhelmed, or burnt out",
  "People seeking structure, clarity, and accountability",
  "Beginners who want support without judgment",
  "Anyone curious about integrative wellness approaches",
];
