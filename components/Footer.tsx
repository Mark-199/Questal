"use client";

import React from "react";

export function Footer() {
  return (
<footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
  <aside>
    <p>Copyright © {new Date().getFullYear()} - Made by M.O | Questal - Small steps, big change for every Filipino.</p>
  </aside>
</footer>
  );
};