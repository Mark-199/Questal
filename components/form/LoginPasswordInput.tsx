"use client";

import { useState } from "react";
import { MdOutlinePassword } from "react-icons/md";

type LoginPasswordInputProps = {
  onChange?: (value: string, valid: boolean) => void;
};

export function LoginPasswordInput({ onChange }: LoginPasswordInputProps) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const validatePassword = (value: string) => {
    setPassword(value);

    let valid = false;
    let errorMsg = "";

    if (!value) {
      errorMsg = "Password is required";
    } else if (value.length < 8) {
      errorMsg = "Password must be at least 8 characters";
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
        <MdOutlinePassword />
        <span>Password</span>
      </label>
      <input
        type="password"
        value={password}
        onChange={(e) => validatePassword(e.target.value)}
        className={`input input-bordered w-full ${
          error ? "input-error" : password ? "input-success" : ""
        }`}
        placeholder="Enter your password"
      />
      {error && <p className="mt-1 text-sm text-error">{error}</p>}
    </div>
  );
}
