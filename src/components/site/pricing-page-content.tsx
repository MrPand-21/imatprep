"use client";

import { motion } from "motion/react";
import { ButtonLink } from "@/components/ui/button";
import { Section } from "@/components/ui/section";

const plans = [
  {
    name: "Foundation",
    price: "€79",
    period: "/month",
    note: "For independent students starting IMAT preparation.",
    features: [
      "Core syllabus roadmap",
      "Weekly structured tasks",
      "Timed drill library",
      "Progress dashboard",
    ],
    cta: "Start Foundation",
    featured: false,
  },
  {
    name: "Structured",
    price: "€149",
    period: "/month",
    note: "Most chosen plan for serious score progression.",
    features: [
      "Everything in Foundation",
      "Full mock exam sequence",
      "Performance review notes",
      "Priority support",
      "Admissions strategy guidance",
    ],
    cta: "Choose Structured",
    featured: true,
  },
  {
    name: "Mentored",
    price: "€249",
    period: "/month",
    note: "High-touch preparation with mentor oversight.",
    features: [
      "Everything in Structured",
      "1:1 progress checkpoints",
      "Custom remediation plans",
      "High-priority admissions alignment",
    ],
    cta: "Apply for Mentored",
    featured: false,
  },
];

const faqs = [
  {
    q: "Can I switch plans during preparation?",
    a: "Yes. Students can upgrade or downgrade based on prep phase and intensity needs.",
  },
  {
    q: "Are mock exams included?",
    a: "Mock coverage starts in Structured and above, including post-mock analysis workflows.",
  },
  {
    q: "Is this suitable for international applicants?",
    a: "Yes. The curriculum is designed for international students targeting medicine in Italy.",
  },
];

export function PricingPageContent() {
  return (
    <>
      <Section className="relative overflow-hidden pb-10 pt-14 sm:pt-18">
        <div className="premium-stage absolute inset-x-5 top-0 h-195 rounded-4xl sm:inset-x-8 lg:inset-x-12" />
        <div className="premium-grid-lines absolute inset-x-5 top-0 h-195 rounded-4xl sm:inset-x-8 lg:inset-x-12" />
        <div className="premium-noise absolute inset-x-5 top-0 h-195 rounded-4xl sm:inset-x-8 lg:inset-x-12" />

        <div className="relative z-10 mx-auto max-w-5xl px-2 text-primary-foreground">
          <motion.div
            initial={{ opacity: 0, y: 12, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="pt-16"
          >
            <p className="text-sm font-semibold tracking-[0.13em] text-accent uppercase">
              Pricing
            </p>
            <h1 className="mt-4 max-w-4xl text-4xl leading-[0.96] tracking-tight sm:text-6xl">
              Professional pricing, elevated with clarity and confidence.
            </h1>
            <p className="mt-6 max-w-2xl text-base text-primary-foreground/78 sm:text-lg">
              Structured plans for different preparation intensities, designed
              to scale with your ambition and timeline.
            </p>
          </motion.div>

          <div className="premium-chip mt-8 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm">
            Compare plans → choose intensity → start immediately
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {plans.map((plan, index) => (
              <motion.article
                key={plan.name}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className={`premium-elevated-panel rounded-3xl p-6 sm:p-7 ${
                  plan.featured ? "ring-1 ring-accent/45" : ""
                }`}
              >
                <p className="text-sm font-semibold tracking-[0.12em] text-accent uppercase">
                  {plan.name}
                </p>
                <p className="mt-4 text-5xl tracking-tight text-primary-foreground">
                  {plan.price}
                </p>
                <p className="text-sm text-primary-foreground/72">
                  {plan.period}
                </p>
                <p className="mt-4 text-sm text-primary-foreground/72">
                  {plan.note}
                </p>

                <ul className="mt-6 space-y-2.5">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex gap-2 text-sm text-primary-foreground/75"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-[0.45rem] h-1.5 w-1.5 rounded-full bg-accent"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <ButtonLink
                  href="/#contact"
                  className="mt-7 w-full justify-center border-white/30 bg-white/92 text-primary hover:bg-white"
                >
                  {plan.cta}
                </ButtonLink>
              </motion.article>
            ))}
          </div>
        </div>
      </Section>

      <Section className="py-12">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45 }}
            className="rounded-3xl border border-border/80 bg-surface p-7 sm:p-8"
          >
            <p className="text-sm font-semibold tracking-[0.12em] text-secondary uppercase">
              Included In Every Plan
            </p>
            <h2 className="mt-3 text-4xl leading-tight tracking-tight sm:text-5xl">
              Professional standards, not upsell tricks.
            </h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                "Structured content sequencing",
                "High-yield revision loops",
                "Calm UI + progress clarity",
                "International applicant orientation",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-border bg-background p-4 text-sm text-muted-foreground"
                >
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: 0.06 }}
            className="relative overflow-hidden rounded-3xl border border-border/80 bg-primary p-7 text-primary-foreground sm:p-8"
          >
            <div className="pointer-events-none absolute -bottom-12 -left-10 h-40 w-40 rounded-full bg-accent/40 blur-3xl" />
            <p className="text-sm font-semibold tracking-[0.12em] text-accent uppercase">
              Financial Clarity
            </p>
            <p className="mt-4 text-base text-primary-foreground/90">
              No hidden fees. No locked bundles. You choose intensity based on
              current phase and ambition.
            </p>
            <div className="mt-8 space-y-3">
              {[
                ["Average weekly time", "8-14h"],
                ["Recommended prep window", "12+ weeks"],
                ["Plan switch flexibility", "Anytime"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="flex items-center justify-between border-b border-white/15 pb-2.5 text-sm"
                >
                  <span className="text-primary-foreground/72">{label}</span>
                  <span className="font-medium">{value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Section>

      <Section className="pt-8">
        <div className="space-y-3 border-t border-border/70 pt-9">
          <p className="text-sm font-semibold tracking-[0.12em] text-secondary uppercase">
            FAQs
          </p>
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <motion.details
                key={faq.q}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                className="rounded-2xl border border-border/80 bg-surface px-5 py-4"
              >
                <summary className="cursor-pointer text-base font-medium">
                  {faq.q}
                </summary>
                <p className="mt-2 text-sm text-muted-foreground">{faq.a}</p>
              </motion.details>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
