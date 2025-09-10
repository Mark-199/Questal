"use client";

import { useEffect, useState } from "react";

const messages = [
  "Gathering your community...",
  "Sharpening the tools...",
  "Preparing the journey...",
  "Growing connections...",
  "Lighting the path ahead...",
  "Unlocking new possibilities...",
  "Strengthening your resolve...",
  "Exploring new horizons...",
  "Building your legacy...",
  "Crafting the path forward...",
  "Awakening your potential..."
];

export function LoadingOverlay({ active }: { active: boolean }) {
  // Start with a fixed value to avoid hydration mismatch
  const [message, setMessage] = useState(messages[0]);

  useEffect(() => {
    if (!active) return;

    // Pick random once right after hydration
    setMessage(messages[Math.floor(Math.random() * messages.length)]);

    const interval = setInterval(() => {
      const random = messages[Math.floor(Math.random() * messages.length)];
      setMessage(random);
    }, 2000);

    return () => clearInterval(interval);
  }, [active]);

  if (!active) return null;

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-base-200 z-50">
      <span className="loading loading-infinity loading-lg text-primary"></span>
      <p className="mt-4 text-lg md:text-xl lg:text-2xl text-base font-semibold animate-pulse text-center max-w-sm">
        {message}
      </p>
    </div>
  );
}
