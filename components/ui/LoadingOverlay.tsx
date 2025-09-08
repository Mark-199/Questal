"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

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
    // Trigger immediately when route changes
    setMessage(messages[Math.floor(Math.random() * messages.length)]);
    setLoading(true);
    document.body.classList.add("overflow-hidden");

    const timer = setTimeout(() => {
      setLoading(false);
      document.body.classList.remove("overflow-hidden");
    }, 600); // adjust duration

    return () => {
      clearTimeout(timer);
      document.body.classList.remove("overflow-hidden");
    };
  }, [pathname]);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-base-200/90 z-50">
      <span className="loading loading-infinity loading-lg text-primary"></span>
      <p className="mt-4 text-lg font-semibold animate-pulse text-center max-w-sm">
        {message}
      </p>
    </div>
  );
}
