"use client";

import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { siteConfig, sessionTimes, heroContent, trustIndicators } from "../data/siteConfig";
import {
  coachingProgram,
  focusAreas,
  howItWorks,
  idealClient,
} from "../data/services";
import { education, certifications } from "../data/education";
import {
  philosophyStatement,
  philosophyPillars,
} from "../data/philosophy";
import { faqs } from "../data/faq";
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

// FAQ Accordion Component
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-5 flex items-center justify-between text-left hover:bg-cream/50 transition-colors"
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
        <p className="px-5 pb-5 text-brown leading-relaxed">{answer}</p>
      </motion.div>
    </div>
  );
}

export default function V2Page() {
  return (
    <main>
      <Header />

      {/* Hero Section - Card Style */}
      <section className="relative min-h-screen flex items-center pt-20 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Hero Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-3xl shadow-xl p-8 md:p-12"
            >
              <div className="inline-flex items-center gap-2 bg-forest/10 text-forest px-4 py-2 rounded-full text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-forest rounded-full animate-pulse" />
                Free 8-Session Program
              </div>
              <h1 className="font-heading text-4xl sm:text-5xl text-forest-dark leading-tight mb-8">
                {heroContent.headline}
              </h1>
              <p className="text-lg text-brown leading-relaxed mb-8">
                {heroContent.subheadline}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="btn-primary text-center justify-center">
                  {heroContent.primaryCta}
                </a>
                <a href="#coaching" className="btn-secondary text-center">
                  {heroContent.secondaryCta}
                </a>
              </div>
            </motion.div>

            {/* Profile Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gradient-to-br from-forest to-forest-light rounded-3xl shadow-xl p-8 text-white"
            >
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-white/20 flex items-center justify-center">
                  <span className="font-heading text-5xl">D</span>
                </div>
                <h2 className="font-heading text-2xl mb-2">{siteConfig.name}</h2>
                <p className="text-white/80 mb-6">{siteConfig.title}</p>

                {/* Trust Indicators as Cards */}
                <div className="grid grid-cols-2 gap-3 text-left">
                  {trustIndicators.map((indicator, index) => (
                    <div key={index} className="bg-white/10 rounded-xl p-3">
                      <p className="text-xs text-white/70">{indicator.text}</p>
                      <p className="font-semibold text-sm">{indicator.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Coaching Program - Grid Cards */}
      <section id="coaching" className="py-20 md:py-28 bg-tan-light">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-20"
          >
            <motion.h2
              variants={fadeInUp}
              className="font-heading text-3xl md:text-4xl text-forest-dark mb-4"
            >
              {coachingProgram.title}
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-brown text-lg max-w-2xl mx-auto">
              {coachingProgram.description}
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* What's Included Card */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-white rounded-2xl shadow-lg p-6 md:col-span-2"
            >
              <h3 className="font-heading text-xl text-forest-dark mb-4">What&apos;s Included</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {coachingProgram.includes.map((item, index) => (
                  <div key={index} className="flex items-start gap-2 bg-cream/50 p-3 rounded-lg">
                    <svg className="w-5 h-5 text-forest mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-brown text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Important Notes Card */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-terracotta/10 rounded-2xl shadow-lg p-6"
            >
              <h3 className="font-heading text-xl text-forest-dark mb-4">Important to Know</h3>
              <ul className="space-y-3">
                {coachingProgram.notIncluded.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-terracotta mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01" />
                    </svg>
                    <span className="text-brown text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Ideal Client Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            <div className="lg:col-span-3 text-center mb-2">
              <h3 className="font-heading text-xl text-forest-dark">Perfect For You If...</h3>
            </div>
            {idealClient.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-4 shadow-md flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-forest/10 flex items-center justify-center text-forest flex-shrink-0">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-brown text-sm">{item}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Focus Areas - Card Grid */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-20"
          >
            <motion.h2
              variants={fadeInUp}
              className="font-heading text-3xl md:text-4xl text-forest-dark mb-4"
            >
              Focus Areas
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-brown text-lg">
              Choose what matters most to you
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-3 gap-4"
          >
            {focusAreas.map((area) => (
              <motion.div
                key={area.id}
                variants={fadeInUp}
                className="bg-gradient-to-br from-cream to-tan-light rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow"
              >
                <h3 className="font-heading text-lg text-forest-dark mb-2">{area.title}</h3>
                <p className="text-brown text-sm">{area.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Approach - Philosophy Cards */}
      <section id="approach" className="py-20 md:py-28 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-20"
          >
            <motion.h2
              variants={fadeInUp}
              className="font-heading text-3xl md:text-4xl text-forest-dark mb-8"
            >
              My Approach
            </motion.h2>
            <motion.blockquote
              variants={fadeInUp}
              className="font-accent text-xl md:text-2xl text-forest-dark italic max-w-2xl mx-auto"
            >
              &ldquo;{philosophyStatement}&rdquo;
            </motion.blockquote>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-6"
          >
            {philosophyPillars.map((pillar, index) => (
              <motion.div
                key={pillar.id}
                variants={fadeInUp}
                className="bg-white rounded-2xl shadow-lg p-6 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-forest/5 rounded-bl-full" />
                <span className="text-5xl font-heading text-forest/20 absolute top-4 right-4">
                  {index + 1}
                </span>
                <h3 className="font-heading text-xl text-forest-dark mb-3 relative">{pillar.title}</h3>
                <p className="text-brown mb-4 relative">{pillar.description}</p>
                <ul className="space-y-2 relative">
                  {pillar.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-brown">
                      <span className="w-1.5 h-1.5 bg-sage rounded-full mt-2 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works - Steps Cards */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="font-heading text-3xl md:text-4xl text-forest-dark text-center mb-20"
          >
            How It Works
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {howItWorks.map((step) => (
              <motion.div
                key={step.step}
                variants={fadeInUp}
                className="bg-gradient-to-br from-forest to-forest-light rounded-2xl p-6 text-white text-center shadow-lg"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center font-heading text-xl">
                  {step.step}
                </div>
                <h3 className="font-heading text-lg mb-2">{step.title}</h3>
                <p className="text-sm text-white/80">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Availability Card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mt-12 bg-tan-light rounded-2xl p-8 max-w-2xl mx-auto"
          >
            <h3 className="font-heading text-xl text-forest-dark mb-6 text-center">
              Available Session Times
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {sessionTimes.map((slot, index) => (
                <div key={index} className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-forest/10 flex items-center justify-center text-forest">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-forest-dark">{slot.day}</p>
                    <p className="text-sm text-brown">{slot.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education - Timeline Cards */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="font-heading text-3xl md:text-4xl text-forest-dark text-center mb-20"
          >
            Education & Credentials
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Education Cards */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="space-y-4"
            >
              {education.slice(0, 3).map((edu) => (
                <motion.div
                  key={edu.id}
                  variants={fadeInUp}
                  className={`bg-white rounded-xl shadow-md p-5 border-l-4 ${
                    edu.status === "in-progress" ? "border-forest" : "border-sage"
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="font-semibold text-forest-dark">{edu.degree}</p>
                      <p className="text-brown">{edu.field}</p>
                      <p className="text-sm text-brown/70">{edu.institution}</p>
                    </div>
                    {edu.status === "in-progress" && (
                      <span className="px-3 py-1 bg-forest/10 text-forest text-xs font-medium rounded-full">
                        Current
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Certifications Cards */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="space-y-4"
            >
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-white rounded-xl shadow-md p-5 flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-full bg-sage/20 flex items-center justify-center text-forest flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="flex-grow">
                    <p className="font-medium text-forest-dark">{cert.name}</p>
                    <p className="text-sm text-brown">{cert.issuer}</p>
                  </div>
                  <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                    cert.status === "active" ? "bg-sage/20 text-forest" : "bg-terracotta/10 text-terracotta"
                  }`}>
                    {cert.status === "active" ? "Active" : "In Progress"}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ - Card Grid */}
      <section id="faq" className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="font-heading text-3xl md:text-4xl text-forest-dark text-center mb-12"
          >
            Frequently Asked Questions
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-4"
          >
            {faqs.map((faq, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <FAQItem question={faq.question} answer={faq.answer} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="py-20 md:py-28 bg-forest text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeInUp}
              className="font-heading text-3xl md:text-4xl mb-8 text-white"
            >
              Ready to Start?
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-white/90 mb-8 max-w-2xl mx-auto"
            >
              Book your free session today. No pressure, just a friendly conversation.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href={siteConfig.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-forest px-8 py-4 rounded-xl font-semibold hover:bg-cream transition-colors shadow-lg"
              >
                Schedule on Calendly
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center justify-center gap-2 bg-white/10 border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-colors"
              >
                Email Me
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />

      {/* Version Badge */}
      <div className="fixed bottom-4 right-4 bg-forest text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
        v2 - Card Grid
      </div>
    </main>
  );
}
