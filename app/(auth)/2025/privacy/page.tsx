"use client";

import React from "react";
import Link from "next/link";
import Privacy from '@/components/Privacy'
import { BackButton } from '@/components/ui/BackButton'

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-base-200 py-12 px-6">
    <BackButton />
      <Privacy/>
    </div>
  );
}
