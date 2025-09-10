"use client";

import { useState, useEffect } from "react";

interface EmailInputProps {
  value: string;
  onChange: (email: string) => void;
  onValid: (valid: boolean) => void;
}

export function EmailInput({ value, onChange, onValid }: EmailInputProps) {
  const [status, setStatus] = useState<"idle" | "validating" | "valid" | "invalid">("idle");
  const [message, setMessage] = useState("");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  useEffect(() => {
    if (!value) {
      setStatus("idle");
      setMessage("");
      onValid(false);
      return;
    }

    if (!emailRegex.test(value)) {
      setStatus("invalid");
      setMessage("Invalid email format");
      onValid(false);
      return;
    }

    const timeout = setTimeout(async () => {
      setStatus("validating");
      setMessage("Checking email...");
      try {
        const res = await fetch("/api/validate-email", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: value }),
        });
        const data = await res.json();
        if (data.ok) {
          setStatus("valid");
          setMessage("Email looks good!");
          onValid(true);
        } else {
          setStatus("invalid");
          setMessage(data.message || "Email is invalid");
          onValid(false);
        }
      } catch {
        setStatus("invalid");
        setMessage("Server error");
        onValid(false);
      }
    }, 500);

    return () => clearTimeout(timeout);
  }, [value, onValid]);

  return (
    <div className="flex flex-col w-full">
      <input
        type="email"
        placeholder="john@gmail.com"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`input input-bordered w-full ${
          status === "invalid" ? "border-error" : ""
        }`}
        required
      />
      <p className={`mt-1 text-sm ${status === "valid" ? "text-green-600" : "text-red-600"}`}>
        {message}
      </p>
    </div>
  );
}
