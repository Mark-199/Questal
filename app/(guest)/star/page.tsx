"use client";

import React from "react";

const subscriptionPlans = [
  {
    name: "Free",
    price: 0,
    period: "month",
    benefits: [
      "Access to 2 quests per month",
      "Join community groups",
      "Basic support",
      "Access to some learning resources",
    ],
  },
    {
    name: "Starter",
    price: 299,
    period: "month",
    benefits: [
      "Access to 5 quests per month",
      "Join community groups",
      "Basic support",
      "Access to learning resources",
    ],
  },
  {
    name: "Pro",
    price: 699,
    period: "month",
    benefits: [
      "Unlimited quests",
      "Priority community access",
      "Advanced skill workshops",
      "Exclusive industry insights",
      "Personal growth tracking",
    ],
  },
  {
    name: "Enterprise",
    price: 1499,
    period: "month",
    benefits: [
      "All Pro benefits",
      "Team collaboration tools",
      "Mentorship sessions",
      "Project showcases & recognition",
      "Early access to new features",
    ],
  },
];

export default function StarPage() {
  return (
    <main className="min-h-screen py-16 md:py-20 lg:py-24 px-6 md:px-12">
      {/* Hero Section */}
      <section className="text-center max-w-4xl mx-auto mb-16 md:mb-20">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4">
          Unlock the Star Subscription
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-base">
          Get exclusive access to quests, workshops, mentorship, and tools designed to boost your skills, productivity, and impact.
        </p>
      </section>

      {/* Pricing Cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16 md:mb-20">
        {subscriptionPlans.map((plan, idx) => (
          <div
            key={idx}
            className="bg-base-200 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col"
          >
            <div className="p-6">
              <h2 className="text-2xl md:text-3xl font-semibold mb-2">{plan.name}</h2>
              <p className="text-3xl md:text-4xl font-bold text-primary mb-4">
                ₱{plan.price} <span className="text-base font-medium">/ {plan.period}</span>
              </p>
              <ul className="text-md md:text-lg text-base space-y-2 mb-6">
                {plan.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-green-500 font-bold">✓</span> {benefit}
                  </li>
                ))}
              </ul>
              <a
                href="/login"
                className="btn btn-primary text-white text-lg md:text-xl px-6 py-3 md:px-8 md:py-4 rounded-full"
              >
                Subscribe
              </a>
            </div>
          </div>
        ))}
      </section>

      {/* Industrial/Professional Benefits Section */}
      <section className="text-center justify-center max-w-3xl mx-auto space-y-6 md:space-y-8 lg:space-y-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
          Why Star is Perfect for You
        </h2>
        <p className="text-lg md:text-xl lg:text-2xl text-base">
          Whether you are a student, professional, or creator, Star gives you the tools and community to accelerate growth:
        </p>
        <ul className="text-start min-w-xl text-lg md:text-xl lg:text-2xl text-base space-y-2 md:space-y-3">
          <li>• Enhance your skills with industry-aligned workshops</li>
          <li>• Get mentorship from experienced creators and leaders</li>
          <li>• Showcase projects to gain recognition and opportunities</li>
          <li>• Collaborate with peers on high-impact quests</li>
          <li>• Access exclusive insights to stay ahead in your field</li>
        </ul>
      </section>
    </main>
  );
}
