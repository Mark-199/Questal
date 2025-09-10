import { useEffect } from "react";
import { supabaseBrowser } from "@/utils/supabase/client";

export function useCreateProfileOnLogin() {
  useEffect(() => {
    const supabase = supabaseBrowser();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (event === "SIGNED_IN" && session?.user) {
          const user = session.user;

          // Check if profile already exists
          const { data: profile, error } = await supabase
            .from("profiles")
            .select("*")
            .eq("id", user.id)
            .single();

          if (!profile) {
            // Insert new profile
            await supabase.from("profiles").insert({
              id: user.id,
              full_name: user.user_metadata?.full_name || null,
              avatar_url: user.user_metadata?.avatar_url || null,
            });
          }
        }
      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);
}
