import Link from "next/link";

const articles = [
  {
    number: "01",
    category: "Production AI",
    title: "Why Your RAG System Works in a Demo but Fails in Production",
    description:
      "A retrieval pipeline can look reliable in development and behave very differently under production conditions.",
    readingTime: "8 min read",
    href: "/blog/rag-production",
  },
  {
    number: "02",
    category: "LLM Engineering",
    title: "Structured Outputs Still Need Validation",
    description:
      "Getting valid JSON from an LLM doesn't mean your application received valid data.",
    readingTime: "6 min read",
    href: "/blog/structured-output-validation",
  },
  {
    number: "03",
    category: "AI Evaluation",
    title: "Evaluation Starts Before You Pick a Metric",
    description:
      "What exactly are you measuring—and what failure are you actually trying to catch?",
    readingTime: "7 min read",
    href: "/blog/evaluation-before-metrics",
  },
];

export function SelectedWriting() {
  return (
    <section className="bg-[var(--surface)] px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-[var(--content-width)]">
        <div className="mb-16 sm:mb-20">
          <p className="text-sm font-medium tracking-[0.16em] text-[var(--muted)]">
            SELECTED WRITING
          </p>

          <h2 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-0.035em] sm:text-5xl">
            Engineering notes from building AI systems that have to work.
          </h2>
        </div>

        <div className="border-t border-[var(--border)]">
          {articles.map((article) => (
            <Link
              key={article.href}
              href={article.href}
              className="group block border-b border-[var(--border)]"
            >
              <article className="-mx-4 rounded-[var(--radius-sm)] px-4 py-10 transition-colors duration-200 group-hover:bg-[var(--surface-hover)] sm:py-12">
                <div className="grid gap-6 md:grid-cols-[180px_1fr_60px]">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.14em] text-[var(--muted)]">
                      {article.category}
                    </p>
                  </div>

                  <div className="max-w-3xl">
                    <h3 className="text-2xl font-semibold leading-tight tracking-[-0.025em] sm:text-3xl">
                      {article.title}
                    </h3>

                    <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--muted)] sm:text-lg">
                      {article.description}
                    </p>

                    <p className="mt-6 text-sm text-[var(--subtle)]">
                      {article.readingTime}
                    </p>
                  </div>

                  <div className="flex items-start justify-between md:flex-col md:items-end">
                    <span className="font-mono text-xs text-[var(--subtle)]">
                      {article.number}
                    </span>

                    <span
                      aria-hidden="true"
                      className="hidden text-xl transition-transform duration-200 group-hover:translate-x-1 md:block"
                    >
                      →
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        <div className="mt-10 flex justify-end">
          <Link
            href="/blog"
            className="text-sm font-medium transition-opacity hover:opacity-60"
          >
            View all writing →
          </Link>
        </div>
      </div>
    </section>
  );
}