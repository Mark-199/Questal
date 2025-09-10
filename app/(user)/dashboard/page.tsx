"use client";

import { useSupabaseUser } from "@/utils/supabase/user";
import { LoadingOverlay } from "@/components/ui/LoadingOverlay";
import { useState } from "react";
import { NavBar } from '@/components/NavBar'

export default function DashboardPage() {
  const { user, loading } = useSupabaseUser();

  const [stats] = useState({
    totalQuests: 12,
    completedQuests: 5,
    coins: 120,
  });

  return (
    <>
      <LoadingOverlay active={loading} />

      <div className="flex flex-col md:flex-row min-h-screen bg-base-200">
        <NavBar />

        {/* Main Content */}
        <main className="flex-1 p-6 flex flex-col gap-6">
          {/* Welcome */}
          <div className="card bg-base-100 shadow-md p-4">
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold">
              👋 Welcome, {user?.user_metadata?.full_name || user?.email}!
            </h1>
          </div>

          {/* Stats Layout */}
          <div className="grid grid-cols-2 gap-4">
            {/* Left Column: Coins */}
            <div className="card bg-base-100 shadow-md p-6 flex flex-col items-center justify-center">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">Coins</h3>
              <p className="text-4xl sm:text-5xl md:text-6xl text-accent font-bold">{stats.coins}</p>
            </div>

            {/* Right Column: Quests */}
            <div className="flex flex-col gap-4">
              <div className="card bg-base-100 shadow-md p-4 text-center">
                <h3 className="text-sm sm:text-base md:text-lg font-semibold mb-1">Total Quests</h3>
                <p className="text-2xl sm:text-3xl md:text-4xl text-accent font-bold">{stats.totalQuests}</p>
              </div>
              <div className="card bg-base-100 shadow-md p-4 text-center">
                <h3 className="text-sm sm:text-base md:text-lg font-semibold mb-1">Completed</h3>
                <p className="text-2xl sm:text-3xl md:text-4xl text-accent font-bold">{stats.completedQuests}</p>
              </div>
            </div>
          </div>

          {/* Farm Progress */}
          <div className="card bg-base-100 shadow-md p-4">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">Your Farm Progress</h2>
            <p className="text-sm sm:text-base md:text-lg">
              Track your quests, achievements, and rewards here. Add charts, progress bars,
              or interactive elements to gamify your dashboard.
            </p>
          </div>
        </main>
      </div>
    </>
  );
}
