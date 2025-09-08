import React from "react";

type SubmitButtonProps = {
  formValid: boolean;
  label: string;
  color: string;
  inactiveColor: string;
};

export function SubmitButton({
  formValid,
  label,
  color,
  inactiveColor,
}: SubmitButtonProps) {
  return (
    <button
      type="submit"
      disabled={!formValid}
      className={`btn w-full ${formValid ? color : inactiveColor}`}
    >
      {label}
    </button>
  );
}
