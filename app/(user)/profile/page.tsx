"use client";

import Image from "next/image";
import { useSupabaseUser } from "@/utils/supabase/user";
import { LoadingOverlay } from "@/components/ui/LoadingOverlay";

export default function ProfilePage() {
  const { user, loading } = useSupabaseUser();

  return (
    <>
      <LoadingOverlay active={loading} />

      <main className="min-h-screen p-6 md:p-12">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8">
          My Profile
        </h1>

        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Avatar */}
          <div className="flex-shrink-0">
            {user?.user_metadata?.avatar_url ? (
              <Image
                src={user.user_metadata.avatar_url || '/Default.jpg'}
                alt="Avatar"
                width={120}
                height={120}
                className="rounded-full"
              />
            ) : (
              <div className="w-28 h-28 bg-gray-300 rounded-full flex items-center justify-center text-3xl font-bold">
                {user?.email?.charAt(0).toUpperCase()}
              </div>
            )}
          </div>

          {/* Profile Info */}
          <div className="flex flex-col gap-4">
            <div>
              <label className="block font-semibold mb-1">Email:</label>
              <p>{user?.email}</p>
            </div>

            <div>
              <label className="block font-semibold mb-1">Full Name:</label>
              <p>{user?.user_metadata?.full_name || "Not set yet"}</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
