"use client";

import React from "react";
import Image from "next/image";

const communityHighlights = [
  {
    title: "Passionate Creators",
    description: "Connect with like-minded creators, share your projects, and get feedback from the community.",
    image: "/Example.jpg",
  },
  {
    title: "Collaborative Projects",
    description: "Work together on quests and challenges that make a real impact in the community.",
    image: "/Example.jpg",
  },
  {
    title: "Skill Growth",
    description: "Learn new skills, attend workshops, and level up your personal and professional growth.",
    image: "/Example.jpg",
  },
];

export default function CommunityPage() {
  return (
    <main className=" min-h-screen py-16 md:py-20 lg:py-24 px-6 md:px-12">
      {/* Hero Section */}
      <section className="text-center max-w-4xl mx-auto mb-16 md:mb-20">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4">
          Join the Questal Community
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-base">
          Questal is a thriving hub for students, creators, and changemakers. Connect, collaborate, and grow alongside passionate people making a real difference.
        </p>
      </section>

      {/* Community Highlights */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16 md:mb-20">
        {communityHighlights.map((item, idx) => (
          <div
            key={idx}
            className="bg-base-200 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <Image
              height={100}
              width={100}
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 text-center">
              <h2 className="text-2xl md:text-3xl font-semibold mb-2">
                {item.title}
              </h2>
              <p className="text-md md:text-lg text-base">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* Call to Action */}
      <section className="text-center">
        <a
          href="/login"
          className="btn btn-primary text-white text-lg md:text-xl lg:text-2xl px-6 py-3 md:px-8 md:py-4 lg:px-10 lg:py-5 rounded-full"
        >
          Become Part of the Community
        </a>
      </section>
    </main>
  );
}
