import { useState } from "react";
import { FaRegUser } from "react-icons/fa";

interface UsernameInputProps {
  onChange?: (value: string, valid: boolean) => void; // optional prop to report value + validity
}

export function UsernameInput({ onChange }: UsernameInputProps) {
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  // Validator function
  const validateUsername = (value: string) => {
    const regex = /^(?!.*[._]{2})[a-z0-9._]{3,20}$/;

    if (/\s/.test(value)) return "Username cannot contain spaces.";
    if (!regex.test(value))
      return "Use lowercase letters, numbers, '.' or '_'. (3-20 chars, no '..' or '__')";
    return "";
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setUsername(value);

    const validationMessage = validateUsername(value);
    setError(validationMessage);

    // ✅ Report value and validity to parent
    if (onChange) onChange(value, validationMessage === "");
  };

  return (
    <div className="form-control w-full">
      <label className="label flex items-center gap-2">
        <FaRegUser />
        <span>Username</span>
      </label>
      <input
        type="text"
        value={username}
        onChange={handleChange}
        className={`input input-bordered w-full ${
          error ? "input-error" : username ? "input-success" : ""
        }`}
        placeholder="Enter your username"
      />
      {error && <p className="text-error text-sm mt-1">{error}</p>}
    </div>
  );
}
