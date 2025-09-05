"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const messages = [
  "Embarking on your quest...",
  "Gathering your community...",
  "Sharpening the tools...",
  "Preparing the journey...",
  "Growing connections...",
  "Lighting the path ahead..."
];

export function LoadingOverlay() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(messages[0]);

  useEffect(() => {
    // When path changes -> show loader briefly
    setMessage(messages[Math.floor(Math.random() * messages.length)]);
    setLoading(true);

    // Disable scrolling
    document.body.classList.add("overflow-hidden");

    // Remove loader after render finishes
    const timer = setTimeout(() => {
      setLoading(false);
      document.body.classList.remove("overflow-hidden"); // re-enable scroll
    }, 600);

    return () => {
      clearTimeout(timer);
      document.body.classList.remove("overflow-hidden");
    };
  }, [pathname]);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-base-200/90 z-50">
      {/* DaisyUI spinner */}
      <span className="loading loading-infinity loading-lg text-primary"></span>

      {/* Animated random message */}
      <p className="mt-4 text-lg font-semibold animate-pulse text-center max-w-sm">
        {message}
      </p>
    </div>
  );
}
