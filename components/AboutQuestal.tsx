import React from "react";

export function AboutQuestal() {
  return (
    <section className="bg-primary relative py-16 px-6 md:px-12 rounded-t-lg overflow-hidden">
      {/* Content */}
      <div className="text-white max-w-4xl mx-auto text-center space-y-8">
        <h2 className="text-4xl md:text-5xl font-bold">Discover Questal</h2>
        <p className="text-lg md:text-xl">
          Questal is a vibrant community built for purpose-driven growth. Whether you're a student, creative, or community builder, Questal empowers you to embark on meaningful quests — personal or collective — that spark real change.
        </p>
        <p className="text-lg md:text-xl">
          From honing new skills to collaborating with passionate individuals who share your vision, Questal is the place where ambition transforms into action. Join us and be part of a movement dedicated to learning, growing, and making an impact — one quest at a time.
        </p>
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
