'use client';

import { useState } from "react";
import { supabaseBrowser } from "@/utils/supabase/client";
import { Mail } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { useCreateProfileOnLogin } from "@/components/hooks/CreateProfile";
import { EmailInput } from "./EmailInput";

export default function LoginPage() {
  useCreateProfileOnLogin();
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [emailValid, setEmailValid] = useState(false);

  async function signInWithMagicLink(e: React.FormEvent) {
    e.preventDefault();
    if (!emailValid) return; 
    setError(null);
    const supabase = supabaseBrowser();
    const origin = process.env.NEXT_PUBLIC_SITE_URL;
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: { emailRedirectTo: `${origin}/auth/callback` },
    });
    if (error) {
      setError(error.message);
      return;
    }
    setSent(true);
  }

  async function signInWithGoogle() {
    const supabase = supabaseBrowser();
    const origin = process.env.NEXT_PUBLIC_SITE_URL;
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: `${origin}/auth/callback` },
    });
    if (error) setError(error.message);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="card w-full max-w-md bg-base-100 shadow-2xl">
        <div className="card-body space-y-4">
          <h2 className="card-title text-3xl font-bold justify-center">
            Welcome to Questal
          </h2>
          <p className="text-center text-sm text-gray-500">
            Sign in with your email or Google
          </p>

          <button onClick={signInWithGoogle} className="btn btn-outline w-full gap-2">
            <FcGoogle size={20} /> Continue with Google
          </button>

          <div className="divider">OR</div>

          {sent ? (
            <div className="alert alert-success">
              <Mail className="w-5 h-5" />
              <span>
                Check your inbox — we sent a magic link to <b>{email}</b>.
              </span>
            </div>
          ) : (
            <>
              {error && <div className="alert alert-error">{error}</div>}

              <form onSubmit={signInWithMagicLink} className="space-y-3">
                <label className="form-control w-full">
                  <span className="label-text">Email address</span>
                  <EmailInput
                    value={email}
                    onChange={setEmail}
                    onValid={setEmailValid}
                  />
                </label>

                <button
                  type="submit"
                  className="btn btn-primary text-white w-full mt-3 gap-2"
                  disabled={!emailValid}
                >
                  <Mail className="w-4 h-4" /> Enter
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
