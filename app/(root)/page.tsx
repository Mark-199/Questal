'use client';

import React from "react";
import { Hero } from '@/components/Hero';
import { AboutQuestal } from '@/components/AboutQuestal';
import { PathQuestal } from '@/components/PathQuestal';

export default function LandingPage() {
  return (
    <>
      <Hero
        title="Welcome to Questal"
        subtitle="Discover the power of collaborative learning and community."
        ctaText="Get Started"
        ctaLink="/login"
        heroImageSrc="/Hero.png"
      />

      <AboutQuestal/>

      <PathQuestal/>

    </>
  );
}
