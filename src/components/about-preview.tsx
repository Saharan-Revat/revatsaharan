import Link from "next/link";

export function AboutPreview() {
  return (
    <section id="about" className="px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-[var(--content-width)] border-t border-[var(--border)] pt-16 sm:pt-20">
        <p className="text-sm font-medium tracking-[0.16em] text-[var(--muted)]">
          ABOUT
        </p>

        <div className="mt-5 max-w-4xl">
          <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.035em] sm:text-5xl">
            I&apos;m Revat, an AI Software Engineer focused on building AI
            systems for production.
          </h2>

          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-[var(--muted)] sm:text-xl">
            My work sits at the intersection of software engineering and
            applied AI — with a focus on reliability, evaluation, retrieval,
            observability, and the infrastructure required to move AI
            applications beyond prototypes.
          </p>

          <Link
            href="/about"
            className="mt-10 inline-block text-sm font-medium transition-opacity hover:opacity-60"
          >
            More about me →
          </Link>
        </div>
      </div>
    </section>
  );
}
