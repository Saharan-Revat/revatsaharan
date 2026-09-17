"use client";

import Link from "next/link";

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--border)] bg-[color:var(--background)]/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-14 max-w-[var(--content-width)] items-center justify-between px-6">
        <Link
          href="/"
          className="text-sm font-semibold tracking-[-0.01em]"
        >
          Revat Saharan
        </Link>

        <div className="flex items-center gap-7 text-sm text-[var(--muted)]">
          <Link
            href="/blog"
            className="transition-colors hover:text-[var(--foreground)]"
          >
            Writing
          </Link>

          <Link
            href="/projects"
            className="transition-colors hover:text-[var(--foreground)]"
          >
            Projects
          </Link>

          <button
            type="button"
            className="transition-colors hover:text-[var(--foreground)]"
            onClick={() =>
              document
                .getElementById("about")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            About
          </button>

          <a
            href="https://github.com/Saharan-Revat/"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-[var(--foreground)]"
          >
            GitHub ↗
          </a>
        </div>
      </nav>
    </header>
  );
}
