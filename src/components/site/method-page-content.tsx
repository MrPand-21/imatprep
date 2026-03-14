"use client";

import { motion } from "motion/react";
import { ButtonLink } from "@/components/ui/button";
import { Section } from "@/components/ui/section";

const principles = [
  {
    title: "Clarity Before Intensity",
    text: "Students perform better when execution is clear, not when workload is noisy.",
  },
  {
    title: "Deliberate Repetition",
    text: "Progress compounds through repeated high-yield patterns and disciplined review loops.",
  },
  {
    title: "Diagnostics Over Guesswork",
    text: "Every mock result must produce direct tactical changes for the next cycle.",
  },
  {
    title: "Admissions-Aware Preparation",
    text: "Exam prep and admissions positioning are treated as one integrated journey.",
  },
];

const processSteps = [
  {
    title: "Baseline Mapping",
    detail:
      "Measure your current profile with diagnostics in science, logic, and timing.",
  },
  {
    title: "Weekly Architecture",
    detail:
      "Assign clear objectives per week: concept load, timed blocks, and review targets.",
  },
  {
    title: "Timed Execution",
    detail:
      "Train under exam rhythm to reduce decision friction and improve scoring decisions.",
  },
  {
    title: "Error Intelligence",
    detail:
      "Convert mistakes into categorized insights: concept, timing, and strategy errors.",
  },
  {
    title: "Mock Conditioning",
    detail:
      "Use full simulations to stabilize performance across varying question distributions.",
  },
  {
    title: "Final Precision",
    detail:
      "Narrow to high-impact deltas and lock consistency before exam day.",
  },
];

export function MethodPageContent() {
  return (
    <>
      <Section className="relative overflow-hidden pb-12 pt-14 sm:pt-18">
        <div className="premium-stage absolute inset-x-5 top-0 h-195 rounded-4xl sm:inset-x-8 lg:inset-x-12" />
        <div className="premium-grid-lines absolute inset-x-5 top-0 h-195 rounded-4xl sm:inset-x-8 lg:inset-x-12" />
        <div className="premium-noise absolute inset-x-5 top-0 h-195 rounded-4xl sm:inset-x-8 lg:inset-x-12" />

        <div className="relative z-10 mx-auto max-w-5xl px-2 text-primary-foreground">
          <motion.div
            initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="grid gap-8 pt-16 lg:grid-cols-[1fr_1fr] lg:items-end"
          >
            <div>
              <p className="text-sm font-semibold tracking-[0.12em] text-accent uppercase">
                Preparation Method
              </p>
              <h1 className="mt-4 max-w-3xl text-4xl leading-[0.96] tracking-tight sm:text-6xl">
                A disciplined method with years of proven results.
              </h1>
              <p className="mt-6 max-w-2xl text-base text-primary-foreground/80 sm:text-lg">
                We do not rely on random practice volume. We use structured
                phases, measurable diagnostics, and continuous tactical
                refinement.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink
                  href="/syllabus"
                  className="border-white/25 bg-white/90 text-primary hover:bg-white"
                >
                  See Full Syllabus
                </ButtonLink>
                <ButtonLink
                  href="/pricing"
                  variant="ghost"
                  className="border-white/20 bg-white/8 text-primary-foreground hover:bg-white/16"
                >
                  Compare Plans
                </ButtonLink>
              </div>
            </div>

            <div className="premium-elevated-panel rounded-3xl p-6 sm:p-7">
              <p className="text-sm font-semibold tracking-[0.12em] text-accent uppercase">
                Method Snapshot
              </p>
              <div className="mt-5 space-y-3">
                {[
                  ["Framework", "6-step operational cycle"],
                  ["Cadence", "Weekly objective architecture"],
                  ["Core Engine", "Mock + review + recalibration"],
                  ["Orientation", "Exam + admissions alignment"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="flex items-center justify-between rounded-xl border border-white/14 bg-black/15 px-4 py-2.5 text-sm"
                  >
                    <span className="text-primary-foreground/72">{label}</span>
                    <span className="font-medium text-primary-foreground">
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      <Section className="py-10 sm:py-12">
        <div className="space-y-4">
          <p className="text-sm font-semibold tracking-[0.12em] text-secondary uppercase">
            Principles
          </p>
          <div className="grid gap-2 md:grid-cols-2">
            {principles.map((principle, index) => (
              <motion.article
                key={principle.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: index % 2 === 0 ? -5 : 50 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                style={{
                  aspectRatio: "1.618 / 1",
                  borderRadius: index * 1.618,
                }}
                className="rounded-[0.35rem] border border-border/85 bg-surface px-7 py-8 sm:px-9 sm:py-10"
              >
                <h3 className="text-2xl tracking-tight sm:text-[2rem]">
                  {principle.title}
                </h3>
                <p className="mt-3 max-w-md text-sm text-muted-foreground sm:text-base">
                  {principle.text}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </Section>

      <Section className="pt-8">
        <div className="grid gap-9 lg:grid-cols-[0.72fr_1.28fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-sm font-semibold tracking-[0.12em] text-secondary uppercase">
              Execution Flow
            </p>
            <h2 className="mt-3 text-4xl leading-tight tracking-tight sm:text-5xl">
              From baseline to final precision.
            </h2>
            <p className="mt-4 max-w-md text-base text-muted-foreground sm:text-lg">
              Each step changes your actions immediately. No abstract theory, no
              dead documentation.
            </p>
          </div>

          <div className="space-y-4">
            {processSteps.map((step, index) => (
              <motion.article
                key={step.title}
                initial={{ opacity: 0, x: 14 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: index * 0.04 }}
                className="rounded-3xl border border-border/80 bg-surface px-6 py-5 shadow-[0_24px_50px_-44px_rgba(15,34,24,0.4)] sm:px-7"
              >
                <h3 className="text-3xl tracking-tight">{step.title}</h3>
                <p className="mt-2 text-base text-muted-foreground">
                  {step.detail}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
