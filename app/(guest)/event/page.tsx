"use client";

import React from "react";
import Image from "next/image";

const events = [
  {
    title: "Questal Kickoff Meetup",
    date: "Sep 20, 2025",
    location: "Quezon City, PH",
    description: "Join our community as we kickstart Questal with fun activities, networking, and inspiration.",
    image: "/Example.jpg",
  },
  {
    title: "Creative Collaboration Workshop",
    date: "Oct 5, 2025",
    location: "Online",
    description: "A workshop for creators to learn, share, and collaborate on real-world projects.",
    image: "/Example.jpg",
  },
  {
    title: "Community Impact Challenge",
    date: "Nov 12, 2025",
    location: "Manila, PH",
    description: "Participate in challenges that make a real difference in our local communities.",
    image: "/Example.jpg",
  },
];

export default function EventPage() {
  return (
    <main className="min-h-screen py-16 md:py-20 lg:py-24 px-6 md:px-12">
      <section className="text-center max-w-4xl mx-auto mb-16 md:mb-20">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-primary mb-4">
        Upcoming Events
      </h1>
      <p className="text-lg md:text-xl lg:text-2xl text-base">
      Welcome to Questal&apos;s Upcoming Events! Whether you&apos;re a creator, a tech enthusiast, or someone looking to make a positive impact, our events are designed to bring people together, spark creativity, and foster meaningful connections. Here&apos;s what you can expect from each event.
      </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {events.map((event, idx) => (
          <div
            key={idx}
            className="bg-base-200 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <Image
              height={100}
              width={100}
              src={event.image}
              alt={event.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl md:text-3xl font-semibold mb-2">
                {event.title}
              </h2>
              <p className="text-sm md:text-base text-accent mb-1 bg-black/50 rounded p-1">
                {event.date} • {event.location}
              </p>
              <p className="text-md md:text-lg">{event.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="mt-16 text-center">
        <a
          href="/login"
          className="btn btn-primary text-white text-lg md:text-xl lg:text-2xl px-6 py-3 md:px-8 md:py-4 lg:px-10 lg:py-5 rounded-full"
        >
          Join the Questal Community
        </a>
      </div>
    </main>
  );
}
