export interface Education {
  id: string;
  degree: string;
  field: string;
  institution: string;
  location: string;
  status: "completed" | "in-progress" | "partial" | "future";
  expectedDate?: string;
  highlights?: string[];
  relevance: string;
}

export interface Certification {
  name: string;
  issuer: string;
  status: "active" | "in-progress";
  icon: string;
}

export interface Experience {
  id: string;
  role: string;
  organization: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  highlights: string[];
  relevance: string;
}

export const education: Education[] = [
  {
    id: "rrcc-integrative-health",
    degree: "Associate of Applied Science",
    field: "Integrative Health",
    institution: "Red Rocks Community College",
    location: "Lakewood, CO",
    status: "in-progress",
    expectedDate: "May 2026",
    highlights: [
      "Beginner and Advanced Wellness Coaching Training",
      "Lifestyle Medicine and Daily Habits",
      "Digestive Wellness",
      "Mind-Body Practices",
    ],
    relevance: "Core credential for integrative health practice and NBHWC certification.",
  },
  {
    id: "biomedical-science",
    degree: "Bachelor's Degree",
    field: "Biomedical Science",
    institution: "TBD",
    location: "Colorado",
    status: "future",
    expectedDate: "Fall 2026 Start",
    relevance: "Next step in the journey toward naturopathic medicine.",
  },
  {
    id: "bastyr-naturopathic",
    degree: "Doctorate",
    field: "Naturopathic Medicine",
    institution: "Bastyr University",
    location: "Washington",
    status: "future",
    relevance: "Long-term goal to become a licensed naturopathic doctor.",
  },
  {
    id: "uiowa-psychology",
    degree: "Coursework",
    field: "Psychology",
    institution: "University of Iowa",
    location: "Iowa City, IA",
    status: "partial",
    relevance: "Foundation in mental health, behavior, and the mind-body connection.",
  },
  {
    id: "hawkeye-ece",
    degree: "Coursework",
    field: "Early Childhood Education",
    institution: "Hawkeye Community College",
    location: "Iowa",
    status: "partial",
    relevance: "Background in developmental understanding and nurturing care.",
  },
];

export const certifications: Certification[] = [
  {
    name: "National Board Health & Wellness Coaching (NBHWC)",
    issuer: "National Board for Health & Wellness Coaching",
    status: "in-progress",
    icon: "certificate",
  },
  {
    name: "CPR Certification",
    issuer: "American Red Cross / AHA",
    status: "active",
    icon: "heart",
  },
  {
    name: "First Aid Certification",
    issuer: "American Red Cross / AHA",
    status: "active",
    icon: "medical",
  },
];

export const experiences: Experience[] = [
  {
    id: "greg-shimm-acupuncture",
    role: "Client Intake & Coordination",
    organization: "Greg Shimm Acupuncture",
    location: "Denver, CO",
    startDate: "2025",
    endDate: "Present",
    description: "Supporting client intake and scheduling at an integrative health practice.",
    highlights: [
      "Client intake and coordination",
      "Scheduling and practice support",
      "Integrative health environment",
    ],
    relevance: "Direct experience in integrative health practice operations.",
  },
  {
    id: "nanny",
    role: "Private Nanny",
    organization: "Private Family",
    location: "Denver, CO",
    startDate: "February 2025",
    endDate: "Present",
    description: "Providing comprehensive childcare while completing full-time studies.",
    highlights: [
      "Full-time childcare",
      "Meal preparation and nutrition",
      "Creating healthy routines",
    ],
    relevance: "Continued caregiving experience and real-world wellness application.",
  },
  {
    id: "rrcc-work-study",
    role: "Clerical Work Study II",
    organization: "Red Rocks Community College Financial Aid Office",
    location: "Lakewood, CO",
    startDate: "2024",
    endDate: "Present",
    description: "Supporting students with financial aid inquiries while pursuing degree.",
    highlights: [
      "Customer service and student support",
      "Organization and communication",
      "Multitasking in professional environment",
    ],
    relevance: "Developing client communication and organizational skills.",
  },
];

export const educationPath = {
  current: "Associate of Applied Science in Integrative Health",
  next: "Biomedical Science Degree (Fall 2026)",
  goal: "Doctorate in Naturopathic Medicine (Bastyr University)",
  vision: "To become a licensed naturopathic doctor helping clients achieve whole-person wellness.",
};
