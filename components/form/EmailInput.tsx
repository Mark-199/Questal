"use client";

import { useState } from "react";
import { MdOutlineEmail } from "react-icons/md";

interface EmailInputProps {
  onChange?: (value: string, valid: boolean) => void; // Report email + validity
}

const tempDomains = [
  "tempmail.com",
  "10minutemail.com",
  "guerrillamail.com",
  "mailinator.com",
  "yopmail.com",
];

export function EmailInput({ onChange }: EmailInputProps) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (value: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regex.test(value)) return "Please enter a valid email address.";

    const domain = value.split("@")[1]?.toLowerCase();

    if (tempDomains.includes(domain)) return "Temporary email addresses are not allowed.";

    if (domain !== "gmail.com") return "Only Gmail accounts are supported.";

    return "";
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);

    const validationMessage = validateEmail(value);
    setError(validationMessage);

    // ✅ Report to parent if prop exists
    if (onChange) onChange(value, validationMessage === "");
  };

  return (
    <div className="form-control w-full">
      <label className="label flex items-center gap-2">
        <MdOutlineEmail />
        <span>Email</span>
      </label>
      <input
        type="email"
        value={email}
        onChange={handleChange}
        className={`input input-bordered w-full ${
          error ? "input-error" : email ? "input-success" : ""
        }`}
        placeholder="Enter your email"
      />
      {error && <p className="text-error text-sm mt-1">{error}</p>}
    </div>
  );
}
