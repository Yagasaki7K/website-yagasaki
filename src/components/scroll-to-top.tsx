"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0 })}
      className="fixed z-10 flex items-center gap-2 rounded bg-zinc-50 py-2 pl-4 pr-3 ring-1 ring-zinc-400 transition-all sm:hover:bg-zinc-100 max-sm:bottom-8 max-sm:right-8 sm:right-8 sm:top-8 dark:bg-zinc-900 dark:ring-zinc-500 sm:hover:dark:bg-zinc-800"
    >
      Back to top
      <ArrowUp className="size-4" />
    </button>
  );
};
