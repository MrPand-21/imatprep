"use client";

import { motion } from "motion/react";
import { ButtonLink } from "@/components/ui/button";
import { Section } from "@/components/ui/section";

const modules = [
    {
        title: "Biology",
        weeks: "Weeks 1-5",
        focus:
            "Cell biology, genetics, physiology, and systems reasoning with IMAT-style stem interpretation.",
        outcomes: [
            "Concept accuracy",
            "Diagram reading",
            "Time-efficient elimination",
        ],
    },
    {
        title: "Chemistry",
        weeks: "Weeks 2-7",
        focus:
            "General chemistry, stoichiometry, acid-base and organic fundamentals mapped to recurring exam patterns.",
        outcomes: [
            "Calculation fluency",
            "Reaction logic",
            "Error-resistant solving",
        ],
    },
    {
        title: "Physics + Math",
        weeks: "Weeks 4-8",
        focus:
            "Mechanics, units, proportional reasoning, and high-yield formulas under strict time windows.",
        outcomes: [
            "Rapid setup",
            "Approximation strategy",
            "Confidence under pressure",
        ],
    },
    {
        title: "Logic + Critical Thinking",
        weeks: "Weeks 1-10",
        focus:
            "Verbal logic, argument structure, assumptions, and inference training with progressive difficulty.",
        outcomes: ["Pattern recognition", "Decision speed", "Consistent accuracy"],
    },
];

const timeline = [
    {
        phase: "Phase 01",
        title: "Foundation Calibration",
        period: "Weeks 1-3",
        detail: "Diagnose level, establish baseline, and lock core concept map.",
    },
    {
        phase: "Phase 02",
        title: "Structured Build",
        period: "Weeks 4-8",
        detail: "Daily topic cycles, timed drills, and error catalog discipline.",
    },
    {
        phase: "Phase 03",
        title: "Mock Integration",
        period: "Weeks 9-11",
        detail: "Full simulations with post-mock diagnostics and score shaping.",
    },
    {
        phase: "Phase 04",
        title: "Final Refinement",
        period: "Weeks 12+",
        detail: "Precision review of weak zones and timing optimization rituals.",
    },
];

export function SyllabusPageContent() {
    return (
        <>
            <Section className="relative overflow-hidden pb-12 pt-16 sm:pb-16 sm:pt-20">
                <div className="pointer-events-none absolute top-0 -right-20 h-52 w-52 rounded-full bg-accent/30 blur-3xl" />
                <motion.div
                    initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end"
                >
                    <div>
                        <p className="text-sm font-semibold tracking-[0.13em] text-secondary uppercase">
                            Syllabus
                        </p>
                        <h1 className="mt-4 max-w-3xl text-4xl leading-[0.96] tracking-tight sm:text-6xl">
                            A complete IMAT curriculum with week-by-week direction.
                        </h1>
                        <p className="mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
                            Built for serious applicants who want academic rigor, pacing
                            clarity, and measurable score growth.
                        </p>
                        <div className="mt-8 flex flex-wrap gap-3">
                            <ButtonLink href="/pricing">View Pricing</ButtonLink>
                            <ButtonLink href="/#contact" variant="ghost">
                                Join Waitlist
                            </ButtonLink>
                        </div>
                    </div>

                    <div className="rounded-3xl border border-border/75 bg-surface p-6 sm:p-8">
                        <p className="text-sm font-semibold tracking-[0.12em] text-secondary uppercase">
                            Total Program Scope
                        </p>
                        <div className="mt-5 grid grid-cols-2 gap-4">
                            {[
                                ["12+", "Guided Weeks"],
                                ["4", "Core Domains"],
                                ["60+", "Timed Drills"],
                                ["12", "Mock Reviews"],
                            ].map(([value, label]) => (
                                <div
                                    key={label}
                                    className="rounded-2xl border border-border/80 bg-background p-4"
                                >
                                    <p className="text-3xl tracking-tight">{value}</p>
                                    <p className="mt-1 text-sm text-muted-foreground">{label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </Section>

            <Section className="py-8 sm:py-12">
                <div className="space-y-5 border-y border-border/70 py-10">
                    <p className="text-sm font-semibold tracking-[0.12em] text-secondary uppercase">
                        Program Timeline
                    </p>
                    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                        {timeline.map((item, index) => (
                            <motion.article
                                key={item.title}
                                initial={{ opacity: 0, y: 12 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                className="rounded-2xl border border-border/75 bg-surface p-5"
                            >
                                <p className="text-xs font-semibold tracking-[0.14em] text-secondary uppercase">
                                    {item.phase}
                                </p>
                                <h3 className="mt-2 text-2xl leading-tight tracking-tight">
                                    {item.title}
                                </h3>
                                <p className="mt-2 text-sm text-muted-foreground">
                                    {item.period}
                                </p>
                                <p className="mt-3 text-sm text-muted-foreground">
                                    {item.detail}
                                </p>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </Section>

            <Section className="pt-8">
                <div className="space-y-5">
                    <p className="text-sm font-semibold tracking-[0.12em] text-secondary uppercase">
                        Detailed Modules
                    </p>
                    <div className="space-y-4">
                        {modules.map((module, index) => (
                            <motion.div
                                key={module.title}
                                initial={{ opacity: 0, y: 14, filter: "blur(4px)" }}
                                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.45, delay: index * 0.04 }}
                                className="rounded-3xl border border-border/80 bg-surface p-6 sm:p-7"
                            >
                                <div className="grid gap-5 lg:grid-cols-[0.55fr_1fr] lg:items-start">
                                    <div>
                                        <h3 className="text-3xl tracking-tight">{module.title}</h3>
                                        <p className="mt-2 text-sm text-muted-foreground">
                                            {module.weeks}
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-base text-muted-foreground">
                                            {module.focus}
                                        </p>
                                        <div className="mt-4 flex flex-wrap gap-2">
                                            {module.outcomes.map((outcome) => (
                                                <span
                                                    key={outcome}
                                                    className="rounded-full border border-border bg-background px-3 py-1.5 text-sm text-muted-foreground"
                                                >
                                                    {outcome}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Section>
        </>
    );
}
