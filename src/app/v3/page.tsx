"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { siteConfig, sessionTimes, heroContent, trustIndicators } from "../data/siteConfig";
import {
  coachingProgram,
  focusAreas,
  howItWorks,
  idealClient,
} from "../data/services";
import { education } from "../data/education";
import {
  philosophyStatement,
  philosophyPillars,
} from "../data/philosophy";
import { faqs } from "../data/faq";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

// Parallax Image Component
function ParallaxBanner({ imageUrl, height = "h-96" }: { imageUrl: string; height?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <div ref={ref} className={`relative ${height} overflow-hidden`}>
      <motion.div style={{ y }} className="absolute inset-0 w-full h-[130%] -top-[15%]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
      </motion.div>
      <div className="absolute inset-0 bg-forest/30" />
    </div>
  );
}

// FAQ Component
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b-2 border-tan-light">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left"
      >
        <span className="font-heading text-xl text-forest-dark pr-4">{question}</span>
        <div className={`w-10 h-10 rounded-full bg-forest/10 flex items-center justify-center transition-transform ${isOpen ? "rotate-45" : ""}`}>
          <svg className="w-5 h-5 text-forest" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </div>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="pb-6 text-brown text-lg leading-relaxed">{answer}</p>
      </motion.div>
    </div>
  );
}

export default function V3Page() {
  return (
    <main>
      <Header variant="dark" />

      {/* Hero - Full Screen Immersive */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-forest-dark via-forest to-forest-light text-white overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-1/4 right-1/4 w-96 h-96 bg-sage rounded-full blur-3xl"
          />
          <motion.div
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.15, 0.1, 0.15] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-terracotta rounded-full blur-3xl"
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-medium mb-8">
              <span className="w-2 h-2 bg-sage rounded-full animate-pulse" />
              Free 8-Session Program Available
            </div>

            <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl leading-tight mb-8">
              {heroContent.headline}
            </h1>

            <p className="text-xl sm:text-2xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
              {heroContent.subheadline}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 bg-white text-forest px-10 py-5 rounded-full font-bold text-lg hover:bg-cream transition-colors shadow-2xl"
              >
                {heroContent.primaryCta}
              </motion.a>
              <motion.a
                href="#coaching"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border-2 border-white/30 px-10 py-5 rounded-full font-bold text-lg hover:bg-white/20 transition-colors"
              >
                {heroContent.secondaryCta}
              </motion.a>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2"
            >
              <div className="w-1 h-2 bg-white/50 rounded-full" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Trust Indicators - Full Width */}
      <section className="bg-white py-8 border-b border-tan-light">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustIndicators.map((indicator, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl font-heading text-forest-dark">{indicator.detail}</p>
                <p className="text-sm text-brown">{indicator.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coaching Program - Full Bleed */}
      <section id="coaching" className="py-24 md:py-32 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-20"
          >
            <motion.span
              variants={fadeInUp}
              className="text-forest font-medium text-lg mb-4 block"
            >
              Free Coaching Program
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="font-heading text-4xl md:text-5xl lg:text-6xl text-forest-dark mb-8"
            >
              {coachingProgram.title}
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-brown text-xl max-w-3xl mx-auto">
              {coachingProgram.description}
            </motion.p>
          </motion.div>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h3 className="font-heading text-2xl text-forest-dark mb-8">What&apos;s Included</h3>
              <div className="space-y-4">
                {coachingProgram.includes.map((item, index) => (
                  <div key={index} className="flex items-start gap-4 bg-white p-5 rounded-xl shadow-sm">
                    <div className="w-8 h-8 rounded-full bg-forest flex items-center justify-center text-white flex-shrink-0">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-brown text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h3 className="font-heading text-2xl text-forest-dark mb-8">Perfect For You If...</h3>
              <div className="space-y-4">
                {idealClient.map((item, index) => (
                  <div key={index} className="flex items-start gap-4 bg-white p-5 rounded-xl shadow-sm">
                    <div className="w-8 h-8 rounded-full bg-sage flex items-center justify-center text-white flex-shrink-0">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <span className="text-brown text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Parallax Break */}
      <ParallaxBanner imageUrl="/images/parallax-leaves.jpg" height="h-80" />

      {/* Focus Areas - Full Width Grid */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="font-heading text-4xl md:text-5xl text-forest-dark text-center mb-16"
          >
            Focus Areas
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {focusAreas.map((area) => (
              <motion.div
                key={area.id}
                variants={fadeInUp}
                className="group relative bg-gradient-to-br from-cream to-white p-8 rounded-2xl border-2 border-tan-light hover:border-forest transition-colors"
              >
                <div className="w-16 h-16 mb-6 rounded-2xl bg-forest/10 flex items-center justify-center text-forest group-hover:bg-forest group-hover:text-white transition-colors">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="font-heading text-2xl text-forest-dark mb-3">{area.title}</h3>
                <p className="text-brown">{area.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Approach - Quote Section */}
      <section id="approach" className="py-24 md:py-32 bg-forest text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <span className="text-sage text-lg font-medium mb-6 block">My Philosophy</span>
            <blockquote className="font-accent text-3xl md:text-4xl lg:text-5xl leading-relaxed mb-12 text-white">
              &ldquo;{philosophyStatement}&rdquo;
            </blockquote>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8 text-left"
          >
            {philosophyPillars.map((pillar) => (
              <motion.div
                key={pillar.id}
                variants={fadeInUp}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6"
              >
                <h3 className="font-heading text-xl mb-3 text-white">{pillar.title}</h3>
                <p className="text-white/80">{pillar.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Parallax Break */}
      <ParallaxBanner imageUrl="/images/parallax-nature.jpg" height="h-72" />

      {/* How It Works - Horizontal Timeline */}
      <section className="py-24 md:py-32 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="font-heading text-4xl md:text-5xl text-forest-dark text-center mb-16"
          >
            Your Journey
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="relative"
          >
            {/* Timeline Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-tan-light -translate-y-1/2" />

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {howItWorks.map((step) => (
                <motion.div
                  key={step.step}
                  variants={fadeInUp}
                  className="relative text-center"
                >
                  <div className="relative z-10 w-20 h-20 mx-auto mb-6 rounded-full bg-forest text-white flex items-center justify-center font-heading text-3xl shadow-lg">
                    {step.step}
                  </div>
                  <h3 className="font-heading text-xl text-forest-dark mb-2">{step.title}</h3>
                  <p className="text-brown">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Availability */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mt-20 text-center"
          >
            <h3 className="font-heading text-2xl text-forest-dark mb-8">Available Times</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {sessionTimes.map((slot, index) => (
                <div key={index} className="bg-white px-6 py-4 rounded-full shadow-md">
                  <span className="font-semibold text-forest-dark">{slot.day}</span>
                  <span className="text-brown ml-2">{slot.time}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education - Minimal */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="font-heading text-4xl md:text-5xl text-forest-dark text-center mb-16"
          >
            Credentials
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-6"
          >
            {education.slice(0, 3).map((edu) => (
              <motion.div
                key={edu.id}
                variants={fadeInUp}
                className="flex items-center gap-6 p-6 border-b-2 border-tan-light last:border-0"
              >
                <div className={`w-4 h-4 rounded-full ${edu.status === "in-progress" ? "bg-forest" : "bg-sage"}`} />
                <div className="flex-grow">
                  <p className="font-heading text-xl text-forest-dark">{edu.degree}</p>
                  <p className="text-brown">{edu.field} - {edu.institution}</p>
                </div>
                {edu.status === "in-progress" && (
                  <span className="px-4 py-2 bg-forest/10 text-forest text-sm font-medium rounded-full">
                    Current
                  </span>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Parallax Break with Quote */}
      <section className="relative h-96 overflow-hidden">
        <ParallaxBanner imageUrl="/images/parallax-wellness.jpg" height="h-full" />
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="font-accent text-3xl md:text-4xl text-white text-center italic px-4 max-w-3xl">
            &ldquo;Your journey to wellness begins with a single step&rdquo;
          </p>
        </div>
      </section>

      {/* FAQ - Clean */}
      <section id="faq" className="py-24 md:py-32 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="font-heading text-4xl md:text-5xl text-forest-dark text-center mb-16"
          >
            Questions?
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {faqs.map((faq, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <FAQItem question={faq.question} answer={faq.answer} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA - Immersive */}
      <section id="contact" className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-forest-dark via-forest to-forest-light" />

        {/* Animated Background */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-10"
        >
          <div className="absolute inset-0 border-2 border-white rounded-full" />
          <div className="absolute inset-20 border-2 border-white rounded-full" />
          <div className="absolute inset-40 border-2 border-white rounded-full" />
        </motion.div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center text-white">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeInUp}
              className="font-heading text-4xl md:text-5xl lg:text-6xl mb-8 text-white"
            >
              Ready to Transform?
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-white/80 mb-12 max-w-2xl mx-auto"
            >
              Your wellness journey starts with a single conversation.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <a
                href={siteConfig.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-white text-forest px-12 py-5 rounded-full font-bold text-lg hover:bg-cream transition-colors shadow-2xl"
              >
                Book Your Free Session
              </a>
            </motion.div>

            <motion.div variants={fadeInUp} className="mt-12 text-white/70">
              <p>{siteConfig.email}</p>
              <p>{siteConfig.location}</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />

      {/* Version Badge */}
      <div className="fixed bottom-4 right-4 bg-forest text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
        v3 - Immersive
      </div>
    </main>
  );
}
