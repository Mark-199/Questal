"use client";

import { useEffect, useState } from "react";
import { supabaseBrowser } from "@/utils/supabase/client";

export default function DashboardPage() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const supabase = supabaseBrowser();
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <main className="min-h-screen p-6 md:p-12 flex items-center justify-center">
        <span className="loading loading-spinner loading-lg"></span>
      </main>
    );
  }

  if (!user) {
    return (
      <main className="min-h-screen p-6 md:p-12 flex items-center justify-center">
        <p className="text-lg">
          You are not logged in. <a href="/login" className="text-blue-500">Sign in</a>
        </p>
      </main>
    );
  }

  return (
    <main className="min-h-screen p-6 md:p-12">
      <h1 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-base mb-8">
        Welcome, {user.user_metadata?.full_name || user.email}!
      </h1>
      {/* Dashboard content goes here */}
    </main>
  );
}
