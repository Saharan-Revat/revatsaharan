const githubUrl = "https://github.com/Saharan-Revat/";

const projects = [
  {
    number: "01",
    category: "RAG Evaluation System",
    title: "Evaluating RAG Beyond a Single Score",
    description:
      "An evaluation system that separates retrieval and generation failures, making it easier to understand where a RAG pipeline is actually breaking.",
    technologies: "Python · RAG · Evaluation",
    visual: "evaluation",
  },
  {
    number: "02",
    category: "LLM Reliability",
    title: "Failure-Tolerant LLM Pipelines",
    description:
      "A production-oriented LLM pipeline implementing validation, retries, fallbacks, timeouts and observability for more predictable application behavior.",
    technologies: "LLM · Reliability · Observability",
    visual: "pipeline",
  },
  {
    number: "03",
    category: "AI Systems",
    title: "Production AI Reference Architecture",
    description:
      "A reference implementation combining retrieval, evaluation, tracing, caching and deployment patterns for production AI applications.",
    technologies: "Architecture · Infrastructure · AI Engineering",
    visual: "architecture",
  },
] as const;

function TechnicalVisual({
  visual,
  wide = false,
}: {
  visual: (typeof projects)[number]["visual"];
  wide?: boolean;
}) {
  const height = wide ? "min-h-[22rem] lg:min-h-[28rem]" : "min-h-72";

  if (visual === "evaluation") {
    return (
      <div className={`relative h-full ${height} overflow-hidden rounded-[var(--radius-sm)] border border-[var(--border)] bg-[var(--background)] p-6 sm:p-8`}>
        <div className="flex items-center justify-between text-[10px] font-medium uppercase tracking-[0.16em] text-[var(--subtle)]">
          <span>Evaluation trace</span>
          <span>12 runs</span>
        </div>
        <div className="absolute inset-x-6 bottom-8 top-20 sm:inset-x-8">
          <div className="absolute inset-0 grid grid-rows-4 border-b border-l border-[var(--border)]">
            {["", "", "", ""].map((line, index) => (
              <div key={index} className="border-t border-[var(--border)]" />
            ))}
          </div>
          <svg
            aria-hidden="true"
            className="absolute inset-0 h-full w-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 100 100"
          >
            <path d="M0 73 L12 58 L24 65 L37 28 L49 44 L61 37 L74 54 L87 18 L100 27" stroke="currentColor" strokeWidth="1.25" vectorEffect="non-scaling-stroke" />
            <path d="M0 82 L12 75 L24 79 L37 65 L49 70 L61 58 L74 67 L87 47 L100 52" className="text-[var(--subtle)]" stroke="currentColor" strokeDasharray="3 4" strokeWidth="1" vectorEffect="non-scaling-stroke" />
          </svg>
          <div className="absolute right-[13%] top-[14%] h-2.5 w-2.5 rounded-full bg-[var(--foreground)] ring-4 ring-[var(--background)]" />
        </div>
        <div className="absolute bottom-6 left-6 flex gap-5 text-[10px] text-[var(--subtle)] sm:bottom-8 sm:left-8">
          <span className="flex items-center gap-2"><i className="h-1.5 w-1.5 rounded-full bg-[var(--foreground)]" /> Retrieval</span>
          <span className="flex items-center gap-2"><i className="h-px w-3 border-t border-dashed border-[var(--subtle)]" /> Generation</span>
        </div>
      </div>
    );
  }

  if (visual === "pipeline") {
    return (
      <div className={`relative flex ${height} items-center overflow-hidden rounded-[var(--radius-sm)] border border-[var(--border)] bg-[var(--background)] p-6 sm:p-8`}>
        <div className="w-full overflow-hidden rounded-[var(--radius-sm)] border border-[var(--border)]">
          <div className="flex items-center gap-1.5 border-b border-[var(--border)] px-4 py-3">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--subtle)]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--subtle)]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--subtle)]" />
            <span className="ml-3 font-mono text-[10px] text-[var(--subtle)]">pipeline.run</span>
          </div>
          <div className="space-y-3 px-4 py-5 font-mono text-[11px] leading-relaxed text-[var(--muted)] sm:px-6 sm:py-6">
            <p><span className="text-[var(--foreground)]">✓</span> validate input</p>
            <p className="pl-4">↳ schema valid</p>
            <p><span className="text-[var(--foreground)]">✓</span> model request <span className="text-[var(--subtle)]">attempt 02</span></p>
            <p className="pl-4">↳ fallback resolved in 482ms</p>
            <p><span className="text-[var(--foreground)]">✓</span> trace complete</p>
          </div>
        </div>
        <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full border border-[var(--border)]" />
        <div className="absolute -bottom-20 -left-14 h-40 w-40 rounded-full border border-[var(--border)]" />
      </div>
    );
  }

  return (
    <div className={`relative ${height} overflow-hidden rounded-[var(--radius-sm)] border border-[var(--border)] bg-[var(--background)] p-6 sm:p-8`}>
      <p className="font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-[var(--subtle)]">System map</p>
      <div className="absolute inset-x-7 bottom-10 top-16 sm:inset-x-12 sm:bottom-12">
        <div className="absolute left-1/2 top-[22%] h-[56%] border-l border-[var(--border)]" />
        <div className="absolute left-[16%] right-[16%] top-1/2 border-t border-[var(--border)]" />
        <div className="absolute left-[16%] top-[22%] h-[28%] border-l border-[var(--border)]" />
        <div className="absolute right-[16%] top-1/2 h-[28%] border-l border-[var(--border)]" />
        {["Input", "Retrieval", "Tracing", "Deploy"].map((label, index) => {
          const positions = ["left-0 top-[13%]", "left-1/2 top-0 -translate-x-1/2", "left-1/2 bottom-0 -translate-x-1/2", "right-0 bottom-[13%]"];
          return (
            <div key={label} className={`absolute ${positions[index]} rounded-full border border-[var(--border)] bg-[var(--background)] px-3 py-2 font-mono text-[10px] text-[var(--muted)]`}>
              {label}
            </div>
          );
        })}
        <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--foreground)] ring-4 ring-[var(--background)]" />
      </div>
    </div>
  );
}

function ProjectDetails({ project }: { project: (typeof projects)[number] }) {
  return (
    <div className="px-1 pb-2 sm:px-2 lg:py-8">
      <p className="text-xs font-medium uppercase tracking-[0.14em] text-[var(--muted)]">
        {project.number} <span aria-hidden="true">—</span> {project.category}
      </p>
      <h3 className="mt-5 max-w-xl text-3xl font-semibold leading-[1.04] tracking-[-0.035em] sm:text-4xl">
        {project.title}
      </h3>
      <p className="mt-5 max-w-xl text-base leading-relaxed text-[var(--muted)] sm:text-lg">
        {project.description}
      </p>
      <p className="mt-7 font-mono text-xs text-[var(--muted)]">{project.technologies}</p>
      <div className="mt-9 flex flex-wrap gap-x-7 gap-y-3 text-sm font-medium">
        <a href="/projects" className="transition-opacity hover:opacity-60">View project →</a>
        <a href={githubUrl} target="_blank" rel="noreferrer" className="transition-opacity hover:opacity-60">GitHub ↗</a>
      </div>
    </div>
  );
}

export function SelectedWork() {
  return (
    <section className="px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-[var(--content-width)]">
        <div className="mb-16 sm:mb-20">
          <p className="text-sm font-medium tracking-[0.16em] text-[var(--muted)]">SELECTED WORK</p>
          <h2 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-0.035em] sm:text-5xl">
            Systems built to solve real AI engineering problems.
          </h2>
        </div>

        <div className="space-y-8 sm:space-y-12">
          {projects.map((project) => {
            const surfaceClassName = "overflow-hidden rounded-[var(--radius-md)] border border-[var(--border)] bg-[color:var(--surface)]/60 p-4 sm:p-6 lg:p-8";

            if (project.number === "02") {
              return (
                <article key={project.number} className={surfaceClassName}>
                  <div className="grid gap-8 lg:grid-cols-[minmax(360px,0.9fr)_minmax(0,1.1fr)] lg:items-center lg:gap-12">
                    <div className="order-2 lg:order-1"><ProjectDetails project={project} /></div>
                    <div className="order-1 lg:order-2"><TechnicalVisual visual={project.visual} /></div>
                  </div>
                </article>
              );
            }

            if (project.number === "03") {
              return (
                <article key={project.number} className={surfaceClassName}>
                  <TechnicalVisual visual={project.visual} wide />
                  <div className="mt-8 border-t border-[var(--border)] pt-2 sm:mt-10 sm:pt-3">
                    <ProjectDetails project={project} />
                  </div>
                </article>
              );
            }

            return (
              <article key={project.number} className={surfaceClassName}>
                <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(360px,0.9fr)] lg:items-center lg:gap-12">
                  <TechnicalVisual visual={project.visual} />
                  <ProjectDetails project={project} />
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-12 flex justify-end">
          <a href={githubUrl} target="_blank" rel="noreferrer" className="text-sm font-medium transition-opacity hover:opacity-60">
            View GitHub →
          </a>
        </div>
      </div>
    </section>
  );
}
