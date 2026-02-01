export interface SiteConfig {
  name: string;
  title: string;
  tagline: string;
  location: string;
  email: string;
  phone: string;
  calendlyUrl: string;
}

export interface Availability {
  status: "available" | "limited" | "unavailable";
  message: string;
  sessions: string;
}

export const siteConfig: SiteConfig = {
  name: "Destiny Blazek",
  title: "Integrative Wellness Coach",
  tagline: "Where wellness meets real life",
  location: "Denver, CO",
  email: "destinyblazek@gmail.com",
  phone: "(720) 878-9178",
  calendlyUrl: "https://calendly.com/destinyblazek", // Update with actual Calendly link
};

export const availability: Availability = {
  status: "available",
  message: "Currently accepting clients for free coaching program",
  sessions: "Via Zoom",
};

export const heroContent = {
  headline: "Wellness Transformation Starts Here",
  subheadline:
    "Free 8-session integrative wellness coaching to help you feel more empowered in your health and daily life.",
  primaryCta: "Book Free Session",
  secondaryCta: "Learn More",
};

export const trustIndicators = [
  {
    icon: "certificate",
    text: "NBHWC Certification Path",
    detail: "In Progress",
  },
  {
    icon: "graduation",
    text: "AAS Integrative Health",
    detail: "May 2026",
  },
  {
    icon: "heart",
    text: "Caregiving Experience",
    detail: "15+ Years",
  },
  {
    icon: "location",
    text: "Based In",
    detail: "Denver, CO",
  },
];

export const sessionTimes = [
  { day: "Tuesday", time: "Mornings until 1pm" },
  { day: "Thursday", time: "Mornings until 1pm" },
  { day: "Friday", time: "Afternoons after 1pm" },
  { day: "Saturday", time: "Open availability" },
];

export const socialLinks = {
  // Add social media links when available
  instagram: "",
  linkedin: "",
};
