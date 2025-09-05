"use client";

import { useState } from "react";
import Link from "next/link";
import { LoginEmailInput } from "@/components/form/LoginEmailInput";
import { LoginPasswordInput } from "@/components/form/LoginPasswordInput";
import { SubmitButton } from "@/components/form/SubmitButton";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [emailValid, setEmailValid] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordValid, setPasswordValid] = useState(false);

  const formValid = emailValid && passwordValid;

  const handleLogin = async () => {
    console.log("Logging in with:", email, password);
    // ✅ Call your API here
  };

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center px-4">
      <div className="flex w-full max-w-5xl shadow-xl rounded-xl overflow-hidden bg-base-100">
        
        {/* Accent / Info Panel */}
        <div className="hidden lg:flex flex-col justify-center items-center bg-neutral text-neutral-content p-10 w-1/2">
          <h2 className="text-4xl font-bold mb-4">Welcome back!</h2>
          <p className="text-lg opacity-90">
            Continue your Questal journey - log in to grow your skills and connect
            with the Filipino community.
          </p>
        </div>

        {/* Form Section */}
        <div className="w-full lg:w-1/2 p-8 sm:p-10">
          <h1 className="text-3xl font-bold mb-6 text-center">Login</h1>
          
          <form className="space-y-4">
            <LoginEmailInput
              onChange={(value, valid) => {
                setEmail(value);
                setEmailValid(valid);
              }}
            />

            <LoginPasswordInput
              onChange={(value, valid) => {
                setPassword(value);
                setPasswordValid(valid);
              }}
            />

            <div className="text-right text-sm">
              <Link href="/forgot-password" className="link link-hover font-bold">
                Forgot password?
              </Link>
            </div>

            <SubmitButton
              formValid={formValid}
              onSubmit={handleLogin}
              label="Login"
              color="btn-success"
              inactiveColor="btn-neutral"
            />
          </form>

          {/* Signup redirect */}
          <div className="mt-6 text-sm text-center">
            Don’t have an account?{" "}
            <Link href="/signup" className="link link-hover font-bold underline">
              Sign up
            </Link>
          </div>

          {/* Footer Links */}
          <div className="text-center mt-6 text-xs opacity-80">
            By continuing, you agree to our{" "}
            <Link href="/2025/privacy" className="link link-hover underline font-bold">Privacy Policy</Link>{" "}
            and{" "}
            <Link href="/2025/terms" className="link link-hover underline font-bold">Terms of Service</Link>.
          </div>
        </div>
      </div>
    </div>
  );
}
