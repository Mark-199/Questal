"use client";

import React from "react";

type Step = {
  title: string;
  description: string;
};

type PathQuestalProps = {
  maxSteps?: number; // optional prop, defaults to all
};

export function PathQuestal({ maxSteps }: PathQuestalProps) {
  const steps: Step[] = [
    {
      title: "Step 1: Building the Community",
      description:
        "Start small, connect students and hobbyists, and grow a supportive local network.",
    },
    {
      title: "Step 2: Launching Quests",
      description:
        "Introduce challenges and projects that empower members to learn and make real-world impact.",
    },
    {
      title: "Step 3: Knowledge Sharing",
      description:
        "Provide tutorials, guides, and shared resources to make learning fun and accessible to everyone.",
    },
    {
      title: "Step 4: Expanding Reach",
      description:
        "Make Questal available anywhere - so more communities can join the movement for good.",
    },
    {
      title: "Step 5: Future Vision",
      description:
        "Evolve into a platform where change-makers collaborate globally while staying rooted locally.",
    },
  ];

  // Apply maxSteps limit (default = all)
  const visibleSteps = maxSteps ? steps.slice(0, maxSteps) : steps;

  return (
    <section className="questal-path py-16 px-6 md:px-12 text-base-content rounded-xl">
      <div className="max-w-5xl mx-auto text-center space-y-8">
        <h2 className="text-4xl md:text-5xl font-bold text-primary">
          The Questal Path
        </h2>
        <p className="text-lg md:text-xl">
          Here’s our journey ahead - one step at a time, together with you.
        </p>

        {/* Steps Timeline */}
        <ul className="steps steps-vertical lg:steps-horizontal w-full mt-10">
          {visibleSteps.map((step, i) => (
            <li
              key={i}
              className="step step-primary text-base-content"
              data-content={i + 1}
              aria-label={step.title}
            >
              <div className="p-4 max-w-xs mx-auto">
                <h3 className="font-bold">{step.title}</h3>
                <p className="text-sm opacity-80 mt-2">{step.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
