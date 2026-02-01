"use client";

import { motion } from "framer-motion";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import { siteConfig, sessionTimes } from "./data/siteConfig";
import {
  coachingProgram,
  focusAreas,
  howItWorks,
  idealClient,
} from "./data/services";
import { education, certifications, educationPath } from "./data/education";
import {
  philosophyStatement,
  philosophyPillars,
  uniqueBackground,
} from "./data/philosophy";
import { faqs } from "./data/faq";
import { useState } from "react";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

// Icon components
const focusIcons: { [key: string]: JSX.Element } = {
  brain: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  ),
  moon: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>
  ),
  leaf: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  ),
  apple: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  ),
  calendar: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  ),
  sparkles: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  ),
};

// FAQ Accordion Component
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-tan-light">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-5 flex items-center justify-between text-left hover:text-forest transition-colors"
      >
        <span className="font-medium text-forest-dark pr-4">{question}</span>
        <svg
          className={`w-5 h-5 text-forest transition-transform flex-shrink-0 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="pb-5 text-brown leading-relaxed">{answer}</p>
      </motion.div>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />

      {/* About Section */}
      <section id="about" className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image Placeholder */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="relative"
            >
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-tan-light to-cream overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-3 rounded-full bg-forest/10 flex items-center justify-center">
                      <span className="font-heading text-4xl text-forest">D</span>
                    </div>
                    <p className="text-sm text-brown">Photo coming soon</p>
                  </div>
                </div>
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-sage/20 rounded-2xl -z-10" />
            </motion.div>

            {/* Content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.p
                variants={fadeInUp}
                className="text-forest font-medium mb-3"
              >
                Hi, I&apos;m Destiny
              </motion.p>
              <motion.h2
                variants={fadeInUp}
                className="font-heading text-3xl md:text-4xl text-forest-dark mb-6"
              >
                My Path to Wellness Coaching
              </motion.h2>
              <motion.div variants={fadeInUp} className="space-y-4 text-brown leading-relaxed">
                <p>
                  My journey to integrative health has been shaped by over 15 years of caring for
                  others — from early childhood education to hospitality, and now to wellness coaching.
                </p>
                <p>
                  I&apos;m currently completing my Associate of Applied Science in Integrative Health
                  at Red Rocks Community College, with plans to continue toward a Biomedical Science
                  degree and ultimately a Doctorate in Naturopathic Medicine at Bastyr University.
                </p>
                <p>
                  This coaching program is part of my capstone project, allowing me to complete my
                  final hours toward National Board Certification while offering accessible wellness
                  support to the community.
                </p>
              </motion.div>

              {/* Education Path */}
              <motion.div variants={fadeInUp} className="mt-8 p-5 bg-cream rounded-xl">
                <p className="font-medium text-forest-dark mb-3">My Education Path</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-forest rounded-full" />
                    <span className="text-brown">
                      <strong>Current:</strong> {educationPath.current}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-sage rounded-full" />
                    <span className="text-brown">
                      <strong>Next:</strong> {educationPath.next}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-terracotta rounded-full" />
                    <span className="text-brown">
                      <strong>Goal:</strong> {educationPath.goal}
                    </span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Coaching Program Section */}
      <section id="coaching" className="py-20 md:py-28 bg-gradient-to-b from-cream to-tan-light">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <motion.p variants={fadeInUp} className="text-forest font-medium mb-3">
              Free Coaching Program
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="font-heading text-3xl md:text-4xl text-forest-dark mb-6"
            >
              {coachingProgram.title}
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-brown text-lg leading-relaxed">
              {coachingProgram.description}
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {/* What's Included */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-white p-8 rounded-2xl shadow-md"
            >
              <h3 className="font-heading text-xl text-forest-dark mb-6 flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-forest/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-forest" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                What&apos;s Included
              </h3>
              <ul className="space-y-3">
                {coachingProgram.includes.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-forest mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                    </svg>
                    <span className="text-brown">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Important Notes */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-white p-8 rounded-2xl shadow-md"
            >
              <h3 className="font-heading text-xl text-forest-dark mb-6 flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-terracotta/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-terracotta" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                Important to Know
              </h3>
              <ul className="space-y-3 mb-6">
                {coachingProgram.notIncluded.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-terracotta mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <span className="text-brown">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="p-4 bg-tan-light/50 rounded-xl">
                <p className="text-sm text-brown">
                  <strong>Commitment:</strong> {coachingProgram.commitment}
                </p>
              </div>
            </motion.div>
          </div>

          {/* Who This Is For */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-forest text-cream p-8 md:p-12 rounded-2xl"
          >
            <h3 className="font-heading text-2xl mb-6 text-center">
              Is This Program Right for You?
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {idealClient.map((item, index) => (
                <div key={index} className="flex items-center gap-3 bg-white/10 p-4 rounded-xl">
                  <svg className="w-5 h-5 text-sage flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Focus Areas Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <motion.p variants={fadeInUp} className="text-forest font-medium mb-3">
              What We Can Work On
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="font-heading text-3xl md:text-4xl text-forest-dark mb-6"
            >
              Focus Areas for Your Wellness Journey
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-brown text-lg">
              You choose what matters most to you. Coaching is always client-led.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {focusAreas.map((area) => (
              <motion.div
                key={area.id}
                variants={fadeInUp}
                className="card p-6 text-center group"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-forest/10 flex items-center justify-center text-forest group-hover:bg-forest group-hover:text-white transition-colors">
                  {focusIcons[area.icon]}
                </div>
                <h3 className="font-heading text-xl text-forest-dark mb-3">{area.title}</h3>
                <p className="text-brown text-sm">{area.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Approach Section */}
      <section id="approach" className="py-20 md:py-28 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <motion.p variants={fadeInUp} className="text-forest font-medium mb-3">
              My Approach
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="font-heading text-3xl md:text-4xl text-forest-dark mb-8"
            >
              How I Support Your Journey
            </motion.h2>

            {/* Philosophy Quote */}
            <motion.blockquote
              variants={fadeInUp}
              className="font-accent text-2xl md:text-3xl text-forest-dark italic leading-relaxed"
            >
              &ldquo;{philosophyStatement}&rdquo;
            </motion.blockquote>
          </motion.div>

          {/* Philosophy Pillars */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8 mb-16"
          >
            {philosophyPillars.map((pillar) => (
              <motion.div
                key={pillar.id}
                variants={fadeInUp}
                className="bg-white p-8 rounded-2xl shadow-md"
              >
                <h3 className="font-heading text-xl text-forest-dark mb-3">{pillar.title}</h3>
                <p className="text-brown mb-4">{pillar.description}</p>
                <ul className="space-y-2">
                  {pillar.details.map((detail, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-brown">
                      <span className="w-1.5 h-1.5 bg-forest rounded-full mt-2 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          {/* What Makes Me Different */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-white p-8 md:p-12 rounded-2xl shadow-md"
          >
            <h3 className="font-heading text-2xl text-forest-dark mb-8 text-center">
              {uniqueBackground.title}
            </h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {uniqueBackground.points.map((point, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-forest/10 flex items-center justify-center text-forest font-bold flex-shrink-0">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="font-semibold text-forest-dark mb-1">{point.title}</h4>
                    <p className="text-sm text-brown">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <motion.p variants={fadeInUp} className="text-forest font-medium mb-3">
              Getting Started
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="font-heading text-3xl md:text-4xl text-forest-dark"
            >
              How It Works
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {howItWorks.map((step) => (
              <motion.div key={step.step} variants={fadeInUp} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-forest text-white flex items-center justify-center font-heading text-2xl">
                  {step.step}
                </div>
                <h3 className="font-heading text-lg text-forest-dark mb-2">{step.title}</h3>
                <p className="text-sm text-brown">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Session Availability */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mt-16 bg-tan-light p-8 rounded-2xl max-w-2xl mx-auto"
          >
            <h3 className="font-heading text-xl text-forest-dark mb-6 text-center">
              Available Session Times
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {sessionTimes.map((slot, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-white p-4 rounded-xl"
                >
                  <svg className="w-5 h-5 text-forest" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="font-medium text-forest-dark">{slot.day}</p>
                    <p className="text-sm text-brown">{slot.time}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-sm text-brown mt-4">
              All sessions via Zoom
            </p>
          </motion.div>
        </div>
      </section>

      {/* Education & Credentials */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <motion.p variants={fadeInUp} className="text-forest font-medium mb-3">
              Credentials
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="font-heading text-3xl md:text-4xl text-forest-dark"
            >
              Education & Training
            </motion.h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Current Education */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-white p-8 rounded-2xl shadow-md"
            >
              <h3 className="font-heading text-xl text-forest-dark mb-6">Education</h3>
              <div className="space-y-6">
                {education.slice(0, 3).map((edu) => (
                  <div
                    key={edu.id}
                    className={`p-4 rounded-xl ${
                      edu.status === "in-progress"
                        ? "bg-forest/5 border-2 border-forest/20"
                        : "bg-tan-light/50"
                    }`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <p className="font-semibold text-forest-dark">{edu.degree}</p>
                        <p className="text-brown">{edu.field}</p>
                      </div>
                      {edu.status === "in-progress" && (
                        <span className="px-3 py-1 bg-forest/10 text-forest text-xs font-medium rounded-full">
                          Current
                        </span>
                      )}
                      {edu.status === "future" && (
                        <span className="px-3 py-1 bg-sage/20 text-forest text-xs font-medium rounded-full">
                          Future
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-brown">{edu.institution}</p>
                    {edu.expectedDate && (
                      <p className="text-sm text-forest font-medium mt-1">
                        Expected: {edu.expectedDate}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-white p-8 rounded-2xl shadow-md"
            >
              <h3 className="font-heading text-xl text-forest-dark mb-6">Certifications</h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 bg-tan-light/50 rounded-xl"
                  >
                    <div className="w-12 h-12 rounded-full bg-forest/10 flex items-center justify-center text-forest">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    </div>
                    <div className="flex-grow">
                      <p className="font-medium text-forest-dark">{cert.name}</p>
                      <p className="text-sm text-brown">{cert.issuer}</p>
                    </div>
                    <span
                      className={`px-3 py-1 text-xs font-medium rounded-full ${
                        cert.status === "active"
                          ? "bg-sage/20 text-forest"
                          : "bg-terracotta/10 text-terracotta"
                      }`}
                    >
                      {cert.status === "active" ? "Active" : "In Progress"}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 md:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-12"
          >
            <motion.p variants={fadeInUp} className="text-forest font-medium mb-3">
              Questions?
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="font-heading text-3xl md:text-4xl text-forest-dark"
            >
              Frequently Asked Questions
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact / CTA Section */}
      <section id="contact" className="py-20 md:py-28 bg-gradient-to-br from-forest to-forest-dark text-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeInUp}
              className="font-heading text-3xl md:text-4xl mb-6"
            >
              Ready to Start Your Wellness Journey?
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-cream/90 mb-8 max-w-2xl mx-auto"
            >
              Book your free session today. No pressure, just a friendly conversation about
              your wellness goals and how I can support you.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            >
              <a
                href={siteConfig.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-cream text-forest px-8 py-4 rounded-xl font-semibold hover:bg-white transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Schedule on Calendly
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-cream/50 text-cream px-8 py-4 rounded-xl font-semibold hover:bg-cream/10 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email Me
              </a>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row items-center justify-center gap-6 text-cream/80"
            >
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>{siteConfig.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
                <span>{siteConfig.location}</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
