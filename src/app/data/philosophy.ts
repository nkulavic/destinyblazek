export interface PhilosophyPillar {
  id: string;
  title: string;
  description: string;
  icon: string;
  details: string[];
}

export const philosophyStatement =
  "Wellness isn't about perfection. It's about nourishing yourself — body, mind, and spirit — in ways that work for your real life.";

export const philosophyPillars: PhilosophyPillar[] = [
  {
    id: "client-centered",
    title: "Client-Centered Approach",
    description:
      "You are the expert on your own life. I'm here to support, not prescribe.",
    icon: "user",
    details: [
      "You set the agenda and choose your goals",
      "I ask questions and hold space",
      "Your autonomy is always respected",
      "No judgment, only support",
    ],
  },
  {
    id: "whole-person",
    title: "Whole-Person Care",
    description:
      "True wellness addresses mind, body, and spirit together.",
    icon: "sparkles",
    details: [
      "Integrating psychological well-being with physical health",
      "Recognizing the mind-body connection",
      "Supporting all aspects of your wellness",
      "Honoring your unique journey",
    ],
  },
  {
    id: "practical-steps",
    title: "Small, Realistic Steps",
    description:
      "Sustainable change happens through consistent, manageable actions.",
    icon: "steps",
    details: [
      "No extreme changes or quick fixes",
      "Building on what's already working",
      "Celebrating small wins",
      "Progress over perfection",
    ],
  },
];

export const coachingCompetencies = [
  "Ethical, client-centered practice",
  "Motivational interviewing techniques",
  "Behavior change science",
  "Strengths-based coaching",
  "Empowerment and self-efficacy",
];

export const whatCoachingIs = [
  "A supportive conversation where you're in charge",
  "Clarifying your goals and exploring motivation",
  "Taking small, realistic steps that fit your life",
  "Building intrinsic motivation and accountability",
  "Whole-person wellness support",
];

export const whatCoachingIsNot = [
  "Therapy or counseling",
  "Medical care or diagnosis",
  "Nutrition therapy or prescribed meal plans",
  "Being told what to do",
  "Quick fixes or extreme approaches",
];

export const uniqueBackground = {
  title: "What Makes My Approach Different",
  points: [
    {
      title: "15+ Years of Caregiving",
      description:
        "From childcare to hospitality, I've spent my life nurturing others. This experience shapes my compassionate, patient approach.",
    },
    {
      title: "Psychology Foundation",
      description:
        "Coursework in psychology gives me understanding of behavior, motivation, and the mind-body connection.",
    },
    {
      title: "Integrative Health Training",
      description:
        "Advanced wellness coaching education following NBHWC competencies and evidence-based practices.",
    },
    {
      title: "Real-World Wellness",
      description:
        "I practice what I teach — using grounding, breathwork, and healthy routines in my own life.",
    },
  ],
};
