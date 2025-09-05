"use client";

import React from "react";

export function AboutQuestal() {
  return (
    <section className="bg-primary relative py-16 px-6 md:px-12 rounded-t-lg overflow-hidden">
      {/* Content */}
      <div className="text-white max-w-4xl mx-auto text-center space-y-8">
        <h2 className="text-4xl md:text-5xl font-bold">What is Questal</h2>
        <p className="text-lg md:text-xl">
          Take on quests to grow yourself and your community. Students, hobbyists,
          and change-makers - this is your space to make a difference.
        </p>

        {/* Interactive Questions */}
        <div className="questions flex flex-col gap-6 mt-8">
          <label className="flex flex-col text-left">
            <span className="mb-2 font-semibold">What challenge would you like to take on in your community?</span>
            <input
              type="text"
              placeholder="Type your quest here..."
              className="text-black dark:text-white input input-bordered w-full"
            />
          </label>

          <label className="flex flex-col text-left">
            <span className="mb-2 font-semibold">Which skills do you want to grow through Questal?</span>
            <input
              type="text"
              placeholder="Your skills..."
              className="text-black dark:text-white input input-bordered w-full"
            />
          </label>

          <label className="flex flex-col text-left">
            <span className="mb-2 font-semibold">Who would you like to collaborate with?</span>
            <input
              type="text"
              placeholder="Community members..."
              className="text-black dark:text-white input input-bordered w-full"
            />
          </label>

          <button className="btn btn-secondary mt-4 self-center text-base-content">Submit</button>
        </div>
      </div>

      {/* Floating Visual Elements */}
      <div className="visual-elements absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="w-20 h-20 bg-green-500 rounded-full opacity-30 absolute top-10 left-10 animate-bounce-slow"></div>
        <div className="w-16 h-16 bg-green-400 rounded-lg opacity-25 absolute bottom-20 right-20 animate-bounce-slow"></div>
        <div className="w-24 h-24 bg-green-600 rounded-full opacity-20 absolute top-1/2 left-1/3 animate-bounce-slow"></div>
      </div>
    </section>
  );
}
