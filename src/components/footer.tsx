import Link from "next/link";

const githubUrl = "https://github.com/Saharan-Revat/";

export function Footer() {
  return (
    <footer className="px-6 pb-8 pt-16 sm:pb-10 sm:pt-20">
      <div className="mx-auto max-w-[var(--content-width)] border-t border-[var(--border)] pt-8 sm:pt-10">
        <div className="flex flex-col justify-between gap-10 sm:flex-row sm:items-start">
          <div>
            <p className="text-sm font-semibold tracking-[-0.01em]">
              Revat Saharan
            </p>
            <p className="mt-2 text-sm text-[var(--muted)]">
              AI Software Engineer
            </p>
          </div>

          <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-[var(--muted)]">
            <Link href="/blog" className="transition-colors hover:text-[var(--foreground)]">
              Writing
            </Link>
            <Link href="/projects" className="transition-colors hover:text-[var(--foreground)]">
              Projects
            </Link>
            <a href={githubUrl} target="_blank" rel="noreferrer" className="transition-colors hover:text-[var(--foreground)]">
              GitHub
            </a>
            <a href="#" className="transition-colors hover:text-[var(--foreground)]">
              LinkedIn
            </a>
          </nav>
        </div>

        <p className="mt-14 text-xs text-[var(--subtle)]">© 2026 Revat Saharan</p>
      </div>
    </footer>
  );
}
