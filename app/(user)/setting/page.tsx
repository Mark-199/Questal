"use client";

import { useState, useEffect } from "react";
import { useSupabaseUser } from "@/utils/supabase/user";
import { supabaseBrowser } from "@/utils/supabase/client";
import { LoadingOverlay } from "@/components/ui/LoadingOverlay";

// Icons
import { User, Palette, Moon, Bell, Lock, Edit3 } from "lucide-react";

export default function SettingsPage() {
  const { user, loading } = useSupabaseUser();
  const supabase = supabaseBrowser();

  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [fullName, setFullName] = useState("");

  // Set fullName once user data is loaded
  useEffect(() => {
    if (user?.user_metadata?.full_name) {
      setFullName(user.user_metadata.full_name);
    }
  }, [user]);

  // Profile update handler
  const handleUpdateProfile = async () => {
    const { error } = await supabase.auth.updateUser({
      data: { full_name: fullName },
    });
    if (error) {
      console.error(error.message);
    } else {
      alert("Profile updated!");
    }
  };

  return (
    <>
      <LoadingOverlay active={loading} />
      <main className="min-h-screen p-4 bg-base-200">
        <h1 className="text-xl font-bold mb-6 flex items-center gap-2">
          <Lock className="w-5 h-5" /> Settings
        </h1>

        {/* Profile info */}
        <div className="card bg-base-100 shadow-md mb-6">
          <div className="card-body">
            <h2 className="card-title flex items-center gap-2">
              <User className="w-5 h-5" /> Profile
            </h2>
            <p>Email: <span className="text-base font-bold">{user?.email}</span></p>
            <label className="form-control w-full mt-2">
              <p className="label-text">Full Name:</p>
              <input
                type="text"
                className="input input-bordered w-full"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </label>
            <button
              onClick={handleUpdateProfile}
              className="btn btn-sm btn-primary text-white mt-3 flex items-center gap-2"
            >
              <Edit3 className="w-4 h-4" /> Save Profile
            </button>
          </div>
        </div>

        {/* Preferences */}
        <div className="card bg-base-100 shadow-md mb-6">
          <div className="card-body">
            <h2 className="card-title flex items-center gap-2">
              <Palette className="w-5 h-5" /> Preferences
            </h2>
            <label className="label cursor-pointer justify-between">
              <span className="label-text flex items-center gap-2">
                <Moon className="w-4 h-4" /> Dark Mode
              </span>
              <input
                type="checkbox"
                className="toggle toggle-primary"
                checked={darkMode}
                onChange={() => setDarkMode(!darkMode)}
              />
            </label>
            <label className="label cursor-pointer justify-between">
              <span className="label-text flex items-center gap-2">
                <Bell className="w-4 h-4" /> Notifications
              </span>
              <input
                type="checkbox"
                className="toggle toggle-primary"
                checked={notifications}
                onChange={() => setNotifications(!notifications)}
              />
            </label>
          </div>
        </div>
      </main>
    </>
  );
}
