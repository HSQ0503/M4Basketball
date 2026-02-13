"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const LanguageToggle = () => {
  const router = useRouter();
  const [currentLocale, setCurrentLocale] = useState("en");

  useEffect(() => {
    const match = document.cookie.match(/(?:^|; )locale=([^;]*)/);
    if (match) setCurrentLocale(match[1]);
  }, []);

  const toggleLocale = () => {
    const next = currentLocale === "en" ? "pt" : "en";
    document.cookie = `locale=${next};path=/;max-age=${60 * 60 * 24 * 365};SameSite=Lax`;
    setCurrentLocale(next);
    router.refresh();
  };

  return (
    <button
      onClick={toggleLocale}
      className="text-sm font-semibold px-3 py-1.5 rounded border border-border hover:bg-primary hover:text-white transition-colors cursor-pointer"
      aria-label={currentLocale === "en" ? "Switch to Portuguese" : "Switch to English"}
    >
      {currentLocale === "en" ? "PT" : "EN"}
    </button>
  );
};

export default LanguageToggle;
