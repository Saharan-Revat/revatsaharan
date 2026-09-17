import { AboutPreview } from "@/components/about-preview";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { SelectedWriting } from "@/components/selected-writing";
import { SelectedWork } from "@/components/selected-work";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <section className="flex min-h-[78vh] items-center justify-center px-6 pt-20">
          <div className="mx-auto w-full max-w-5xl text-center">

            <h1 className="text-5xl font-semibold leading-[0.95] tracking-[-0.05em] sm:text-7xl lg:text-[88px]">
              Building AI
              <br />
              beyond the demo.
            </h1>

            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-[var(--muted)] sm:text-xl">
              I&apos;m Revat Saharan. I build production-grade AI systems and
              write about the engineering decisions behind making them reliable.
            </p>

            <div className="mt-10 flex items-center justify-center gap-8 text-base font-medium">
              <a href="/blog" className="transition-opacity hover:opacity-60">
                Read my writing →
              </a>

              <a
                href="https://github.com/Saharan-Revat/"
                className="transition-opacity hover:opacity-60"
              >
                GitHub ↗
              </a>
            </div>
          </div>
        </section>

        <SelectedWriting />
        <SelectedWork />
        <AboutPreview />
      </main>
      <Footer />
    </>
  );
}
