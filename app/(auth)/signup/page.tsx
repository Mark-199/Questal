"use client";

import React, { useState } from "react";
import Link from "next/link";
import { UsernameInput } from "@/components/form/UsernameInput";
import { EmailInput } from "@/components/form/EmailInput";
import { PasswordInput } from "@/components/form/PasswordInput";
import { SubmitButton } from "@/components/form/SubmitButton";
import { handleSignup } from "./action";

export default function SignupPage() {
  const [username, setUsername] = useState("");
  const [usernameValid, setUsernameValid] = useState(false);
  const [email, setEmail] = useState("");
  const [emailValid, setEmailValid] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordValid, setPasswordValid] = useState(false);
  const [confirmValid, setConfirmValid] = useState(false);

  const formValid = usernameValid && emailValid && passwordValid && confirmValid;

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center px-4">
      <div className="flex w-full max-w-5xl shadow-xl rounded-xl overflow-hidden bg-base-100">
        
        {/* Form Section */}
        <div className="w-full lg:w-1/2 p-8 sm:p-10">
          <h1 className="text-3xl font-bold mb-6 text-center">
            Create an Account
          </h1>

          {/* Use server action directly */}
          <form className="space-y-4" action={handleSignup}>
            {/* Username */}
            <UsernameInput
              onChange={(val: string, valid: boolean) => {
                setUsername(val);
                setUsernameValid(valid);
              }}
            />

            {/* Email */}
            <EmailInput
              onChange={(val: string, valid: boolean) => {
                setEmail(val);
                setEmailValid(valid);
              }}
            />

            {/* Password */}
            <PasswordInput
              label="Password"
              placeholder="Create a password"
              onChange={(val: string, valid: boolean) => {
                setPassword(val);
                setPasswordValid(valid);
              }}
            />

            {/* Confirm Password */}
            <PasswordInput
              label="Confirm Password"
              placeholder="Re-enter password"
              checkWith={password}
              onChange={(_val: string, valid: boolean) => setConfirmValid(valid)}
            />

            {/* Submit button */}
            <SubmitButton
              formValid={formValid}
              label="Sign up"
              color="btn-success"
              inactiveColor="btn-neutral"
            />
          </form>

          {/* Login redirect */}
          <div className="mt-6 text-sm text-center">
            Already have an account?{" "}
            <Link href="/login" className="link link-hover font-bold underline">
              Log in
            </Link>
          </div>

          {/* Footer Links */}
          <div className="text-center mt-6 text-xs opacity-80">
            By signing up, you agree to our{" "}
            <Link
              href="/2025/privacy"
              className="link link-hover font-bold underline"
            >
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link
              href="/2025/terms"
              className="link link-hover font-bold underline"
            >
              Terms of Service
            </Link>
            .
          </div>
        </div>

        {/* Accent / Info Panel */}
        <div className="hidden lg:flex flex-col justify-center items-center bg-primary text-primary-content p-10 w-1/2 text-white">
          <h2 className="text-4xl font-bold mb-4">Join Questal</h2>
          <p className="text-lg opacity-90">
            Take on challenges, grow your skills, and make a difference in your
            community. Together, Filipinos can create positive change. 🌱
          </p>
        </div>
      </div>
    </div>
  );
}
