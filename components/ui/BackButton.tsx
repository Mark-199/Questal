"use client";

import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";

export function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="btn btn-circle btn-lg btn-neutral sticky top-6 left-6 shadow-lg z-50"
    >
      <FaArrowLeft className="text-xl" />
    </button>
  );
}
