"use client";

import React from "react";

export function Footer() {
  return (
    <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content py-4 md:py-6 lg:py-8 px-4 md:px-8">
      <aside className="text-center md:text-left max-w-5xl mx-auto space-y-2 md:space-y-0">
        <p className="text-sm md:text-base lg:text-lg">
          © {new Date().getFullYear()} - Made by M.O | Questal
        </p>
        <p className="text-sm md:text-base lg:text-lg">
          Small steps, big change for every Filipino.
        </p>
      </aside>
    </footer>
  );
}
