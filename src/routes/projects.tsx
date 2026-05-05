import { SiteNav, SiteFooter, SectionHeading } from "@/components/SiteNav";
import { projects } from "@/content/portfolio";

export default function ProjectsPage() {
  return (
    <div className="carbon-mesh min-h-dvh">
      <SiteNav />
      <main className="px-6 md:px-8 pt-16 pb-20 max-w-7xl mx-auto">
        <SectionHeading
          eyebrow={`[ 001 — ${String(projects.length).padStart(3, "0")} ] Build Cycle`}
          title="Core_"
          accent="Deployments"
        />
        <p className="text-muted-foreground max-w-2xl mb-16 text-lg">
          A selection of things I've built — class projects, hackathon entries,
          and side experiments.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article
              key={p.id}
              className="group relative bg-card border border-border p-6 md:p-7 transition-all hover:border-mach/60 glass-stroke"
            >
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold uppercase tracking-tighter">
                  {p.id}
                </h3>
                <span className="font-mono text-mach text-xs">{p.date}</span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 min-h-[5rem]">
                {p.blurb}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="text-[10px] px-2 py-1 bg-secondary border border-border font-mono"
                  >
                    {s}
                  </span>
                ))}
              </div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground border-t border-border pt-4 flex items-center justify-between gap-4">
                <span>
                  ROLE: <span className="text-foreground">{p.role}</span>
                </span>
                {"link" in p && p.link ? (
                  <a
                    href={p.link as string}
                    target="_blank"
                    rel="noreferrer"
                    className="text-mach hover:underline"
                  >
                    GITHUB →
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
