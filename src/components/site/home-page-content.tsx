"use client";

import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useRef } from "react";
import { Button, ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { TextEffect } from "../motion-primitives/text-effect";

const methodPillars = [
  {
    step: "01",
    title: "Foundations",
    description:
      "Build biology, chemistry, logic, and scientific reasoning depth with guided weekly focus.",
  },
  {
    step: "02",
    title: "Mock Exams",
    description:
      "Simulate real IMAT conditions, then identify where points are won or lost.",
  },
  {
    step: "03",
    title: "Review",
    description:
      "Convert mistakes into score gains through structured review and revision loops.",
  },
  {
    step: "04",
    title: "Admissions Direction",
    description: "Keep preparation aligned optionally with our experts. ",
  },
];

const showcaseItems = [
  {
    label: "Global Reach",
    title: "36+ Countries",
    detail:
      "International applicants use the same high-trust system and pacing model.",
    metricA: "Europe",
    metricB: "MENA",
    metricC: "Asia",
  },
  {
    label: "Student Base",
    title: "600+ Active Users",
    detail:
      "A growing cohort preparing with structured reviews, mock cycles, and feedback loops.",
    metricA: "Weekly plans",
    metricB: "Mock reviews",
    metricC: "Progress tracking",
  },
  {
    label: "Experience",
    title: "Sent +15 italian universities",
    detail:
      "Our team has direct experience with the Italian admissions process and what it takes to succeed.",
    metricA: "",
    metricB: "",
    metricC: "",
  },
  {
    label: "Trust",
    title: "Backed by ItalyPrep",
    detail:
      "Built on real admissions guidance and practical IMAT execution standards.",
    metricA: "Mentor support",
    metricB: "Admissions fit",
    metricC: "Exam realism",
  },
];

const productItems = [
  "Adaptive IMAT question bank with topic and difficulty paths",
  "Exam-like mock schedule with report-grade score breakdowns",
  "Weekly preparation rhythm built around your current phase",
  "Performance tracking to prioritize highest-value improvements",
];

export function HomePageContent() {
  const horizontalSectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: horizontalSectionRef,
    offset: ["start start", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-56%"]);

  return (
    <>
      <div className="pointer-events-none absolute top-0 -right-24 h-56 w-56 rounded-full bg-accent/35 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 -left-16 h-full w-48 rounded-full bg-secondary/30 blur-3xl" />

      <Section
        id="home"
        className="relative overflow-hidden pb-12 pt-14 sm:pb-16 sm:pt-20"
      >
        <motion.div
          initial={{ opacity: 0, y: 18, filter: "blur(7px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="relative grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center"
        >
          <div>
            <TextEffect
              as="h1"
              preset="fade-in-blur"
              per="word"
              className="mt-4 max-w-3xl text-4xl leading-[0.96] tracking-tight sm:text-6xl lg:text-7xl"
            >
              IMAT-PREP,
            </TextEffect>
            <TextEffect
              as="h1"
              preset="fade-in-blur"
              per="word"
              className="mt-2 max-w-3xl text-4xl leading-[0.96] tracking-tight sm:text-6xl lg:text-7xl"
            >
              without the chaos.
            </TextEffect>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground sm:text-lg">
              A premium preparation system designed by experts for ambitious
              students heading toward medicine in Italy.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <ButtonLink href="#contact">Get Early Access</ButtonLink>
              <ButtonLink href="#method" variant="ghost">
                See the Method
              </ButtonLink>
            </div>

            <div className="mt-12 grid gap-2.5 border-6 rounded-2xl bg-white/60 backdrop-blur-md border-secondary p-4 sm:max-w-lg">
              <p className="text-sm text-muted-foreground">
                Backed by ItalyPrep
              </p>
              <p className="text-sm text-muted-foreground">
                Trusted by learners across 36+ countries
              </p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 10 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.08 }}
            className="relative overflow-hidden   "
          >
            <Image
              src="/computer.png"
              alt="Student preparing for IMAT exam"
              width={820}
              height={620}
              className="h-80 w-full rounded-2xl object-cover sm:h-95"
            />
          </motion.div>
        </motion.div>
      </Section>

      <Section className="py-10 sm:py-14">
        <div className="grid gap-6 border-y border-border/75 py-10 sm:grid-cols-3 sm:py-14">
          <p className="text-sm tracking-[0.12em] text-secondary uppercase">
            Reality
          </p>
          <p className="sm:col-span-2 text-2xl leading-tight tracking-tight sm:text-3xl lg:text-4xl">
            We value profound preparation, fair pricing and accessible guidance.
            We are building a product that reflects those values.
          </p>
        </div>
      </Section>

      <section
        id="mocks"
        ref={horizontalSectionRef}
        className="relative"
        style={{ height: "230vh" }}
      >
        <div className="sticky top-22 overflow-hidden py-10 sm:py-14">
          <Container>
            <div className="mb-8 flex items-end justify-between gap-5">
              <div>
                <p className="text-sm font-semibold tracking-[0.12em] text-secondary uppercase">
                  Product Experience
                </p>
                <h2 className="mt-3 text-3xl leading-tight tracking-tight sm:text-5xl">
                  Scroll down. The system moves right
                </h2>
              </div>
              <p className="hidden text-sm text-muted-foreground md:block">
                Keep scrolling ↓
              </p>
            </div>

            <div className="overflow-hidden">
              <motion.div style={{ x }} className="flex w-max gap-6 pr-10">
                {showcaseItems.map((item, index) => (
                  <motion.article
                    key={item.title}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.45, delay: index * 0.08 }}
                    className="imat-showcase-card group relative min-h-96 w-[90vw] max-w-96 rounded-3xl border border-transparent"
                  >
                    <div className="imat-showcase-noise absolute inset-0 rounded-3xl" />
                    <div className="relative z-10 flex h-full flex-col justify-between rounded-3xl p-6 sm:p-7">
                      <div>
                        <p className="text-sm font-semibold text-accent">
                          {item.label}
                        </p>
                        <h3 className="mt-1 text-3xl leading-tight tracking-tight text-primary-foreground">
                          {item.title}
                        </h3>
                        <p className="mt-3 text-sm text-primary-foreground/72 sm:text-base">
                          {item.detail}
                        </p>
                      </div>

                      <div className="relative mt-8 overflow-hidden rounded-2xl border border-white/12 bg-black/25 p-4 transition-transform duration-500 ease-out group-hover:-translate-y-1">
                        <div className="space-y-3 transition-opacity duration-500 group-hover:opacity-15">
                          <div className="h-2 w-2/3 rounded-full bg-accent/65" />
                          <div className="grid grid-cols-6 gap-1.5">
                            {[28, 40, 55, 62, 74, 86].map((height) => (
                              <span
                                key={`${item.title}-${height}`}
                                className="rounded-md bg-white/35"
                                style={{ height: `${height}px` }}
                              />
                            ))}
                          </div>
                        </div>

                        <div className="absolute inset-0 flex flex-col justify-between rounded-2xl p-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                          <p className="text-xs font-medium tracking-widest text-accent uppercase">
                            Verified Signal
                          </p>
                          <div className="space-y-2 text-sm text-primary-foreground/90">
                            <p>{item.metricA}</p>
                            <p>{item.metricB}</p>
                            <p>{item.metricC}</p>
                          </div>
                        </div>

                        <div className="pointer-events-none absolute -right-7 -bottom-7 h-28 w-28 rounded-full border border-accent/60" />
                        <div className="pointer-events-none absolute -right-2 -bottom-2 h-16 w-16 rounded-full border border-white/35" />
                      </div>
                    </div>
                  </motion.article>
                ))}
              </motion.div>
            </div>
          </Container>
        </div>
      </section>

      <Section id="method" className="pt-10">
        <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr]">
          <motion.div
            initial={{ opacity: 0, y: 14, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="lg:sticky lg:top-72 lg:self-start"
          >
            <p className="text-sm font-semibold tracking-[0.12em] text-secondary uppercase">
              Preparation Method
            </p>
            <h2 className="mt-4 text-4xl leading-[1.02] tracking-tight sm:text-5xl">
              Build mastery in four deliberate phases.
            </h2>
            <p className="mt-5 max-w-md text-base text-muted-foreground sm:text-lg">
              Scroll through the method as a sequence, not a feature list.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="space-y-8"
          >
            {methodPillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="grid gap-2 border-l-2 border-secondary/45 pl-5 sm:pl-7 py-4"
              >
                <p className="text-xs font-semibold tracking-[0.16em] text-secondary uppercase">
                  {pillar.step}
                </p>
                <h3 className="text-3xl leading-tight tracking-tight sm:text-[2rem]">
                  {pillar.title}
                </h3>
                <p className="max-w-xl text-base text-muted-foreground sm:text-md">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      <Section id="about-imat" className="my-24">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -16, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="space-y-5"
          >
            <p className="text-sm font-semibold tracking-[0.12em] text-secondary uppercase">
              Destination: Italy
            </p>
            <h2 className="text-4xl leading-tight tracking-tight sm:text-5xl">
              IMAT prep should keep your future visible, not just your next
              quiz.
            </h2>
            <p className="max-w-xl text-base text-muted-foreground sm:text-lg">
              You are preparing for a medical pathway, a cross-border
              transition, and a demanding academic environment. We keep all
              three in view.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 16, y: 8 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.08 }}
            className="relative overflow-hidden rounded-3xl border border-border/75 bg-primary p-8 text-primary-foreground sm:p-10"
          >
            <div className="pointer-events-none absolute -top-10 -right-8 h-32 w-32 rounded-full bg-accent/65 blur-2xl" />
            <p className="relative text-base leading-relaxed text-primary-foreground/90 sm:text-lg">
              Outcome focus: readiness for IMAT, confidence under pressure, and
              stronger admissions judgment.
            </p>
            <p className="relative mt-6 text-sm font-semibold tracking-[0.12em] text-accent uppercase">
              Serious preparation, human pace.
            </p>
          </motion.div>
        </div>
      </Section>

      <Section className="py-48!">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1fr]">
          <div className="rounded-3xl border border-border/80 bg-surface p-7 sm:p-9">
            <p className="text-sm font-semibold tracking-[0.12em] text-secondary uppercase">
              Upcoming
            </p>
            <h3 className="mt-4 text-3xl leading-tight tracking-tight sm:text-4xl">
              Guided mock exam sessions
            </h3>
            <p className="mt-4 text-base text-muted-foreground">
              Live testing windows and post-exam review formats are opening
              soon. Join the waitlist to receive launch access and scheduling
              details.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold tracking-[0.12em] text-secondary uppercase">
              Product Substance
            </p>
            <h2 className="mt-3 text-4xl leading-tight tracking-tight sm:text-5xl">
              Real tools. Real exam outcomes.
            </h2>
            <ul className="mt-8 grid gap-5 sm:grid-cols-2">
              {productItems.map((item) => (
                <li
                  key={item}
                  className="border-t border-border/70 pt-4 text-base text-muted-foreground"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section id="contact">
        <div className="space-y-7 rounded-4xl border border-border/80 bg-surface p-7 sm:p-10 lg:p-12">
          <div className="max-w-2xl space-y-4">
            <p className="text-sm font-semibold tracking-[0.12em] text-secondary uppercase">
              Join the Waitlist
            </p>
            <h2 className="text-4xl leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Start sharper. Stay calmer. Let's begin this chapter.
            </h2>
            <p className="text-base text-muted-foreground sm:text-lg">
              Join the early waitlist and receive launch updates, first mock
              exam access, and curated preparation guidance.
            </p>
          </div>

          <form
            className="flex flex-col gap-2 sm:flex-row"
            action="#"
            method="post"
          >
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="Enter your email"
              className="h-12 w-full rounded-2xl border border-border bg-background px-5 text-base outline-none transition focus:border-secondary focus:ring-2 focus:ring-ring/40"
            />
            <Button type="submit" className="h-12 shrink-0 rounded-2xl">
              Join Waitlist
            </Button>
          </form>
        </div>
      </Section>
    </>
  );
}
