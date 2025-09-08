"use client";

import React from "react";

export default function AboutQuestal() {
  return (
    <main className="bg-primary min-h-screen relative py-16 md:py-20 lg:py-24 px-6 md:px-12">
      {/* Hero Section */}
      <section className="py-16 md:py-20 lg:py-28 xl:py-32 px-6 md:px-12 text-center text-white">
        <div className="max-w-5xl mx-auto space-y-6 md:space-y-8 lg:space-y-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold">
            Discover Questal
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl">
            Questal is your launchpad for bold growth and epic adventures. Whether you&apos;re a student, creator, or community builder, every quest you take sparks real change for you and those around you.
          </p>
          <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl">
            Level up your skills, connect with passionate doers, and transform ambition into action. Join Questal and be part of a movement where every quest brings learning, growth, and impact one adventure at a time.
          </p>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="mt-16 md:mt-20 lg:mt-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-base-200 bg-opacity-20 rounded-lg p-6 text-center backdrop-blur-sm">
            <h3 className="text-2xl md:text-3xl font-semibold mb-2">Adventure Quests</h3>
            <p className="text-md md:text-lg">
              Take on quests that challenge your skills, expand your horizons, and make a difference in your community.
            </p>
          </div>
          <div className="bg-base-200 bg-opacity-20 rounded-lg p-6 text-center backdrop-blur-sm">
            <h3 className="text-2xl md:text-3xl font-semibold mb-2">Collaborative Growth</h3>
            <p className="text-md md:text-lg">
              Work with a vibrant community of creators, students, and changemakers to grow together and achieve more.
            </p>
          </div>
          <div className="bg-base-200 bg-opacity-20 rounded-lg p-6 text-center backdrop-blur-sm">
            <h3 className="text-2xl md:text-3xl font-semibold mb-2">Real Impact</h3>
            <p className="text-md md:text-lg">
              Every quest you complete contributes to real change—whether it&apos;s learning, helping others, or building something meaningful.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="mt-16 md:mt-20 lg:mt-24 text-center px-6 md:px-12">
        <a
          href="/login"
          className="btn btn-secondary text-white text-lg md:text-xl lg:text-2xl px-6 py-3 md:px-8 md:py-4 lg:px-10 lg:py-5 rounded-full"
        >
          Start Your First Quest
        </a>
      </section>
    </main>
  );
}
