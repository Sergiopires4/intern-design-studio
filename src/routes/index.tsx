import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav, SiteFooter } from "@/components/SiteNav";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aiden Khan — High Velocity Engineering" },
      {
        name: "description",
        content:
          "Portfolio of Aiden Khan, computer science student and full-stack intern engineering high-performance, low-latency digital systems.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="carbon-mesh min-h-dvh">
      <SiteNav />

      {/* HERO */}
      <section className="relative pt-24 md:pt-32 pb-20 px-6 md:px-8 overflow-hidden">
        <div
          aria-hidden
          className="absolute -top-24 -right-24 size-[600px] bg-mach/15 blur-[120px] rounded-full pointer-events-none"
        />
        <div className="max-w-7xl mx-auto flex flex-col gap-6 relative">
          <div className="inline-flex items-center gap-3 bg-secondary/60 border border-border py-2 px-4 w-fit skew-tilt">
            <span className="size-2 rounded-full bg-mach animate-pulse" />
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] unskew-tilt">
              Junior Systems Architect // Intern @ Vector Dynamics
            </span>
          </div>

          <h1 className="text-[64px] sm:text-[88px] md:text-[120px] leading-[0.85] font-bold italic tracking-tighter uppercase">
            High <span className="text-mach text-mach-glow">Velocity</span>
            <br />
            Engineering
          </h1>

          <p className="max-w-[55ch] text-base md:text-xl text-muted-foreground mt-4 leading-relaxed font-light">
            Hi, I'm Aiden — a computer science student building high-performance
            digital infrastructure. I specialize in low-latency systems,
            aggressive UI, and shipping fast.
          </p>

          <div className="flex flex-wrap gap-4 md:gap-6 mt-8">
            <Link
              to="/projects"
              className="px-8 md:px-10 py-4 md:py-5 bg-mach text-primary-foreground skew-tilt shadow-mach hover:shadow-[0_0_50px_oklch(0.92_0.22_122/0.5)] transition-all"
            >
              <span className="unskew-tilt inline-block text-base md:text-lg font-bold uppercase tracking-tighter">
                View Projects
              </span>
            </Link>
            <Link
              to="/services"
              className="px-8 md:px-10 py-4 md:py-5 border border-border skew-tilt hover:border-mach transition-colors"
            >
              <span className="unskew-tilt inline-block text-base md:text-lg font-bold uppercase tracking-tighter">
                The Stack
              </span>
            </Link>
          </div>

          {/* Stats strip */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-border border border-border">
            {[
              { k: "12+", v: "Shipped Projects" },
              { k: "3.94", v: "GPA / 4.00" },
              { k: "8", v: "Languages" },
              { k: "∞", v: "Caffeine Units" },
            ].map((s) => (
              <div key={s.v} className="bg-obsidian p-6 md:p-8">
                <div className="text-3xl md:text-5xl font-bold text-mach tracking-tighter">
                  {s.k}
                </div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mt-2">
                  {s.v}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About snapshot */}
      <section className="px-6 md:px-8 py-20 md:py-28 bg-carbon/40">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <p className="font-mono text-xs text-mach uppercase tracking-[0.3em] mb-3">
              [ ABOUT_ME ]
            </p>
            <h2 className="text-4xl md:text-5xl font-bold uppercase italic tracking-tighter">
              Engineered for <span className="text-mach">curiosity</span>
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-6 text-muted-foreground leading-relaxed">
            <p className="text-lg">
              I'm a final-year CS undergraduate at the National University of
              Sciences. Most of my time is spent breaking systems apart to see
              how they tick — then rebuilding them with fewer moving parts.
            </p>
            <p>
              Currently interning at Vector Dynamics on a real-time telemetry
              dashboard. Off the clock, I'm usually playing pickup football,
              brewing pour-over coffee, or losing at chess online.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/academics" className="text-mach text-sm font-bold uppercase tracking-widest hover:underline underline-offset-4">
                Academics →
              </Link>
              <Link to="/favourites" className="text-mach text-sm font-bold uppercase tracking-widest hover:underline underline-offset-4">
                Favourites →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
