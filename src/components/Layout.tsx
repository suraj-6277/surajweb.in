"use client";
import Image from "next/image";
import { Icon } from "./Icon";
import Link from "next/link";
import { tw } from "@/utils/tw";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type Theme = "light" | "dark";

const footerList = [
  { text: "surajjadhav071204@gmail.com", href: "mailto:surajjadhav071204@gmail.com" },
  { text: "GitHub", href: "https://github.com/suraj-6277" },
  { text: "LinkedIn", href: "https://in.linkedin.com/in/surajjadhav7" },
  { text: "X", href: "https://x.com/surajjadhav_07" },
];

export const Footer = () => (
  <footer>
    <div className="d-border-b">
      <div className="flex items-center gap-8 py-3 px-7 justify-center">
        {footerList.map(({ text, href }) => (
          <a
            key={text}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-subtle flex items-center gap-1 hover:underline"
          >
            <p>{text}</p>
            <Icon name="social-link" className="w-2 h-2" />
          </a>
        ))}
      </div>
    </div>
    <div className="h-10" />
  </footer>
);

export const Header = () => {
  const path = usePathname();
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("theme") as Theme | null;
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    const initialTheme = storedTheme === "dark" || storedTheme === "light" ? storedTheme : systemTheme;

    setTheme(initialTheme);
    setMounted(true);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    root.classList.toggle("light", theme === "light");
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  };

  return (
    <header className="sticky top-0 z-10 h-full bg-background">
      <div className="flex items-center justify-between h-full d-border-b">
        <div className="px-5 py-2">
          <Link href="/">
            <Image
              src="/logo.png"
              width={36}
              height={36}
              alt="logo"
              className="w-6 h-6 rounded-lg"
            />
          </Link>
        </div>
        <div className="flex items-center gap-3">
          <nav suppressHydrationWarning className="flex items-center h-full text-subtle">
            {NAV_ITEMS.map(({ href, label }) => {
              const isActive = mounted && path === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={tw(
                    "relative py-2.5 px-7 h-full text-sm d-border-l",
                    isActive && "text-foreground font-medium"
                  )}
                >
                  {label}
                  {isActive && (
                    <span
                      className="absolute inset-0 -bottom-[1px] border-b-2"
                      style={{ borderColor: theme === "dark" ? "white" : "black" }}
                    />
                  )}
                </Link>
              );
            })}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to night mode"}
              className="theme-toggle"
            >
              <Icon name={theme === "dark" ? "sun" : "moon"} className="w-4 h-4" />
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
];
