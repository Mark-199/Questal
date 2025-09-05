'use client';

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface HeroProps {
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  heroImageSrc?: string;
}

export const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  ctaText,
  ctaLink,
  heroImageSrc,
}) => {
  return (
    <section className="w-full py-20 px-14 flex flex-col md:flex-row items-center justify-center justify-between gap-10">
      
      {/* Text Content */}
      <div className="flex-1 flex flex-col gap-4">
        <h1 className="text-4xl md:text-6xl font-bold text-secondary">{title}</h1>
        {subtitle && (
          <p className="text-lg md:text-xl neutral-content">{subtitle}</p>
        )}
        {ctaText && ctaLink && (
          <Link href={ctaLink} className="btn btn-primary w-max mt-4 text-white">
            {ctaText}
          </Link>
        )}
      </div>

      {/* Hero Image */}
      {heroImageSrc && (
        <div className="flex-1">
          <Image
            src={heroImageSrc}
            alt="Hero Image"
            height={400}
            width={500}
            className="rounded-lg drop-shadow-sm object-cover w-full h-auto"
          />
        </div>
      )}

    </section>
  );
};
