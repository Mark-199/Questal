"use client";

import React from "react";
import { Terms } from '@/components/Terms';
import { BackButton } from '@/components/ui/BackButton'

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-base-200 py-12 px-6">
      <BackButton />
      <Terms/>
    </div>
  );
}
