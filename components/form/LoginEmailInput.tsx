"use client";

import { useState } from "react";
import { MdOutlineEmail } from "react-icons/md";

type LoginEmailInputProps = {
  onChange?: (value: string, valid: boolean) => void;
};

export function LoginEmailInput({ onChange }: LoginEmailInputProps) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (value: string) => {
    setEmail(value);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let valid = false;
    let errorMsg = "";

    if (!value) {
      errorMsg = "Email is required";
    } else if (!emailRegex.test(value)) {
      errorMsg = "Enter a valid email address";
    } else {
      valid = true;
    }

    setError(errorMsg);

    if (onChange) {
      onChange(value, valid);
    }
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
        onChange={(e) => validateEmail(e.target.value)}
        className={`input input-bordered w-full ${
          error ? "input-error" : email ? "input-success" : ""
        }`}
        placeholder="Enter your email"
      />
      {error && <p className="mt-1 text-sm text-error">{error}</p>}
    </div>
  );
}
