import React from "react";

type Step = {
  title: string;
  description: string;
};

type PathQuestalProps = {
  maxSteps?: number; // optional, defaults to showing all steps
};

export function PathQuestal({ maxSteps }: PathQuestalProps) {
  const steps: Step[] = [
    {
      title: "Building the Community",
      description:
        "Start by connecting students and hobbyists to grow a supportive, local network.",
    },
    {
      title: "Launching Quests",
      description:
        "Introduce meaningful challenges and projects that empower members to learn and create real-world impact.",
    },
    {
      title: "Knowledge Sharing",
      description:
        "Offer tutorials, guides, and shared resources to make learning accessible and enjoyable for everyone.",
    },
    {
      title: "Expanding Reach",
      description:
        "Bring Questal to more communities worldwide, uniting people in the movement for positive change.",
    },
    {
      title: "Future Vision",
      description:
        "Evolve into a global platform where change-makers collaborate, while staying grounded in their local communities.",
    },
  ];

  // Limit visible steps if maxSteps is provided
  const visibleSteps = maxSteps ? steps.slice(0, maxSteps) : steps;

  return (
    <section
      className="questal-path py-16 px-6 md:px-12 rounded-xl text-base-content"
      aria-labelledby="path-questal-title"
    >
      <div className="max-w-5xl mx-auto text-center space-y-6">
        <h2
          id="path-questal-title"
          className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-primary"
        >
          The Questal Path
        </h2>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Our journey forward — one meaningful step at a time, together with you.
        </p>

        {/* Steps Timeline */}
        <ol className="steps steps-vertical lg:steps-horizontal w-full mt-12">
          {visibleSteps.map((step, index) => (
            <li
              key={index}
              className="step step-primary text-base-content"
              aria-label={`Step ${index + 1}: ${step.title}`}
              data-content={index + 1}
            >
              <div className="p-5 max-w-xs mx-auto text-left">
                <h3 className="font-semibold text-lg md:text-xl mb-2">
                  {step.title}
                </h3>
                <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 opacity-90">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
