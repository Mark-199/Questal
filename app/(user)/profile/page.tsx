"use client";

import { useState, useEffect } from "react";
import { supabaseBrowser } from "@/utils/supabase/client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [fullName, setFullName] = useState("");
  const router = useRouter();

  // Fetch auth user on mount
  useEffect(() => {
    const supabase = supabaseBrowser();
    supabase.auth.getUser().then(({ data }) => {
      if (data.user) {
        setUser(data.user);
        setFullName(data.user.user_metadata?.full_name || "");
      } else {
        // Redirect to login if not logged in
        router.push("/login");
      }
      setLoading(false);
    });
  }, [router]);

  if (loading) return <p>Loading...</p>;

  async function handleUpdateProfile() {
    const supabase = supabaseBrowser();

    const { error } = await supabase.auth.updateUser({
      data: { full_name: fullName },
    });

    if (error) {
      alert("Error updating profile: " + error.message);
    } else {
      alert("Profile updated!");
    }
  }

  async function handleSignOut() {
    const supabase = supabaseBrowser();
    await supabase.auth.signOut();
    router.push("/login");
  }

  return (
    <main className="min-h-screen p-6 md:p-12">
      <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8">
        My Profile
      </h1>

      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* Avatar */}
        <div className="flex-shrink-0">
          {user.user_metadata?.avatar_url ? (
            <Image
              src={user.user_metadata.avatar_url}
              alt="Avatar"
              width={120}
              height={120}
              className="rounded-full"
            />
          ) : (
            <div className="w-28 h-28 bg-gray-300 rounded-full flex items-center justify-center text-3xl font-bold">
              {user.email?.charAt(0).toUpperCase()}
            </div>
          )}
        </div>

        {/* Profile Info */}
        <div className="flex flex-col gap-4">
          <div>
            <label className="block font-semibold mb-1">Email:</label>
            <p>{user.email}</p>
          </div>

          <div>
            <label className="block font-semibold mb-1">Full Name:</label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="input input-bordered w-full max-w-xs"
            />
          </div>

          <button
            onClick={handleUpdateProfile}
            className="btn btn-primary text-white w-max px-6 py-2 rounded"
          >
            Update Profile
          </button>

          <button
            onClick={handleSignOut}
            className="btn btn-secondary text-white w-max px-6 py-2 rounded mt-4"
          >
            Sign Out
          </button>
        </div>
      </div>
    </main>
  );
}
