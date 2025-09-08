import React from "react";

export function AboutQuestal() {
  return (
    <section className="bg-primary relative py-16 md:py-20 lg:py-28 xl:py-32 px-6 md:px-12 rounded-t-lg overflow-hidden">
      {/* Content */}
      <div className="text-white max-w-5xl mx-auto text-center space-y-6 md:space-y-8 lg:space-y-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold">
          Discover Questal
        </h2>
        <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl">
          Questal is your launchpad for bold growth and epic adventures. Whether you&apos;re a student, creator, or community builder, every quest you take sparks real change for you and those around you.
        </p>
        <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl">
          Level up your skills, connect with passionate doers, and transform ambition into action. Join Questal and be part of a movement where every quest brings learning, growth, and impact one adventure at a time.
        </p>
      </div>
    </section>
  );
}
