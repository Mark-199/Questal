import { useEffect } from "react";

export function useScrollLock(isLocked: boolean) {
  useEffect(() => {
    const html = document.documentElement;

    if (isLocked) {
      html.classList.add("scroll-lock");
    } else {
      html.classList.remove("scroll-lock");
    }

    // Clean up on unmount
    return () => {
      html.classList.remove("scroll-lock");
    };
  }, [isLocked]);
}
