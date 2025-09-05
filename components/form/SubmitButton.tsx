"use client";

import { useState } from "react";

type SubmitButtonProps = {
  formValid: boolean;
  onSubmit: () => Promise<void> | void;
  label: string;
  color?: string;
  inactiveColor?: string;
};

export function SubmitButton({
  formValid,
  onSubmit,
  label,
  color = "btn-primary",
  inactiveColor = "btn-neutral",
}: SubmitButtonProps) {
  const [submitting, setSubmitting] = useState(false);

  // const handleClick = async () => {
  //   if (submitting || !formValid) return;
  //   setSubmitting(true);
  //   try {
  //     await onSubmit();
  //   } finally {
  //     setSubmitting(false);
  //   }
  // };

  const handleClick = async () => {
  if (submitting || !formValid) return; // double-check
  setSubmitting(true);

  try {
    await onSubmit(); // must be async!
  } catch (err) {
    console.error(err);
  } finally {
    setSubmitting(false);
  }
};

  const buttonColor = submitting
    ? "btn-disabled"
    : formValid
    ? color
    : inactiveColor;

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={!formValid || submitting}
      className={`btn w-full mt-2 text-white ${buttonColor}`}
    >
      {submitting ? <span className="loading loading-spinner"></span> : label}
    </button>
  );
}
