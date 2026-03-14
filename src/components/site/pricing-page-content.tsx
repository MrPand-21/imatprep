"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
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
    const parallaxRef = useRef<HTMLElement | null>(null);

    const { scrollYProgress } = useScroll({
        target: parallaxRef,
        offset: ["start start", "end end"],
    });

    const leftCardY = useTransform(scrollYProgress, [0, 1], [28, -88]);
    const centerCardY = useTransform(scrollYProgress, [0, 1], [14, -54]);
    const rightCardY = useTransform(scrollYProgress, [0, 1], [36, -108]);

    return (
        <>
            <Section className="relative overflow-hidden pt-14 sm:pt-18">
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
                            Your need, your choice.
                        </h1>
                        <p className="mt-6 max-w-2xl text-base text-primary-foreground/78 sm:text-lg">
                            Choose intensity with full transparency. Our structure is designed
                            to support outcomes, not upsells.
                        </p>
                    </motion.div>

                    <div className="premium-chip mt-8 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm">
                        The center plan is our highest-value recommendation for most
                        students
                    </div>
                </div>
            </Section>
            <section
                ref={parallaxRef}
                className="relative"
                style={{ height: "120vh" }}
            >
                <div className="sticky top-24">
                    <Section className="py-2">
                        <div className="grid gap-4 lg:grid-cols-3 lg:items-start">
                            {plans.map((plan, index) => {
                                const y =
                                    index === 0
                                        ? leftCardY
                                        : index === 1
                                            ? centerCardY
                                            : rightCardY;
                                const isCenter = index === 1;

                                return (
                                    <motion.article
                                        key={plan.name}
                                        initial={{ opacity: 0, y: 14 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, amount: 0.3 }}
                                        transition={{ duration: 0.45, delay: index * 0.05 }}
                                        style={{ y }}
                                        className={`premium-elevated-panel rounded-3xl p-6 sm:p-7 ${isCenter
                                            ? "z-20 ring-2 ring-accent/70 shadow-[0_40px_90px_-60px_rgba(0,0,0,0.75)]"
                                            : "z-10"
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
                                );
                            })}
                        </div>
                    </Section>
                </div>
            </section>
            <Section className="pt-16">
                <div className="grid gap-8 lg:grid-cols-1 lg:items-start">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.45 }}
                        className="rounded-xl border border-border/85 bg-surface px-7 py-8 sm:px-8 sm:py-9"
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
                                    className="rounded-[0.35rem] border border-border bg-background px-4 py-4 text-sm text-muted-foreground"
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
                        className="relative overflow-hidden rounded-[0.35rem] border border-border/85 bg-primary px-7 py-8 text-primary-foreground sm:px-8 sm:py-9"
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
            <Section className="">
                <div className="space-y-4 border-y border-border/75 py-10">
                    <p className="text-sm font-semibold tracking-[0.12em] text-secondary uppercase">
                        Our Values
                    </p>
                    <div className="grid gap-4 md:grid-cols-3">
                        {[
                            {
                                title: "Academic Honesty",
                                detail:
                                    "No shortcuts, no inflated promises. We prioritize real learning and exam readiness.",
                            },
                            {
                                title: "Accessible Excellence",
                                detail:
                                    "Premium standards delivered with fair pricing logic for international students.",
                            },
                            {
                                title: "Human-Guided Direction",
                                detail:
                                    "Data-led systems with mentor judgment wherever strategic decisions matter.",
                            },
                        ].map((value, index) => (
                            <motion.article
                                key={value.title}
                                initial={{ opacity: 0, y: 8 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                className="rounded-[0.35rem] border border-border/85 bg-surface px-6 py-7"
                            >
                                <h3 className="text-2xl tracking-tight">{value.title}</h3>
                                <p className="mt-3 text-sm text-muted-foreground">
                                    {value.detail}
                                </p>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </Section>

            <Section className="">
                <div className="space-y-3 pb-8">
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
                                className="rounded-[0.35rem] border border-border/85 bg-surface px-5 py-4"
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
