"use client";

import { useState, useEffect } from "react";
import { MdOutlinePassword } from "react-icons/md";

export function PasswordInput({ label = "Password", placeholder = "Enter your password", checkWith, onChange }: PasswordInputProps) {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const validate = (password: string) => {
    
    if (checkWith !== undefined) {
    if (password !== checkWith) return "Passwords do not match";
    return ""; // valid if it matches
  }

    const rules = [
      { test: password.length >= 8, msg: "Must be at least 8 characters" },
      { test: /[a-z]/.test(password), msg: "Must include a lowercase letter" },
      { test: /[0-9]/.test(password), msg: "Must include a number" },
    ];

    const failed = rules.find(r => !r.test);
    return failed ? failed.msg : "";
  };

  const runValidation = (val: string) => {
    const validationMessage = validate(val);
    setError(validationMessage);
    if (onChange) onChange(val, validationMessage === "");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setValue(val);
    runValidation(val);
  };

  // ✅ Re-validate if checkWith changes (main password changed)
  useEffect(() => {
    if (checkWith !== undefined) {
      runValidation(value);
    }
  }, [checkWith]);

  return (
    <div className="form-control w-full">
      <label className="label flex items-center gap-2">
        <MdOutlinePassword />
        <span>{label}</span>
      </label>
      <input
        type="password"
        value={value}
        onChange={handleChange}
        className={`input input-bordered w-full ${
          error ? "input-error" : value ? "input-success" : ""
        }`}
        placeholder={placeholder}
      />
      {error && <p className="text-error text-sm mt-1">{error}</p>}
    </div>
  );
}
