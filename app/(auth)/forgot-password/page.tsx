"use client";

import React from "react";
import Link from "next/link";
import { MdOutlineEmail } from "react-icons/md";

export default function ForgotPasswordPage() {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row w-full max-w-5xl">
        
        {/* Left Info */}
        <div className="text-center lg:text-left max-w-md">
          <h1 className="text-5xl font-bold">Forgot Password?</h1>
          <p className="py-6">
            Don’t worry - it happens! Enter your registered email address and we’ll
            send you instructions to reset your password.
          </p>
        </div>

        {/* Right Form */}
        <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
          <div className="card-body">
            <div className="form-control w-full">
              <label className="label flex items-center gap-2">
                <MdOutlineEmail />
                <span>Email</span>
              </label>
              <input
                type="email"
                className="input input-bordered"
                placeholder="Enter your email"
              />

              <button className="btn btn-neutral mt-4">Send Reset Link</button>
            </div>

            {/* Back to login */}
            <div className="mt-4 text-sm text-center">
              Remembered your password?{" "}
              <Link
                href="/login"
                className="link link-hover font-bold underline"
              >
                Back to Login
              </Link>
            </div>

            {/* Footer Links */}
            <div className="text-center mt-6 text-sm">
              By continuing, you agree to our{" "}
              <Link href="/2025/privacy" className="link link-hover font-bold underline">
                Privacy Policy
              </Link>{" "}
              and{" "}
              <Link href="/2025/terms" className="link link-hover font-bold underline">
                Terms of Service
              </Link>
              .
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
