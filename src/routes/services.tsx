import { createFileRoute } from "@tanstack/react-router";
import { SiteNav, SiteFooter, SectionHeading } from "@/components/SiteNav";
import { services, skills, identity } from "@/content/portfolio";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: `Services & Skills — ${identity.fullName}` },
      {
        name: "description",
        content: `What ${identity.fullName} builds, and the stack behind it.`,
      },
      { property: "og:title", content: `Services & Skills — ${identity.fullName}` },
      {
        property: "og:description",
        content: "What I build and the stack I run.",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <div className="carbon-mesh min-h-dvh">
      <SiteNav />
      <main className="px-6 md:px-8 pt-16 pb-20 max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="[ OPERATIONS ]"
          title="What I"
          accent="Build"
        />

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
          {services.map((s) => (
            <article
              key={s.n}
              className="bg-card border border-border p-8 group hover:border-mach/60 transition-colors glass-stroke"
            >
              <div className="flex justify-between items-start mb-6">
                <span className="font-mono text-mach text-xs">{`[ ${s.n} ]`}</span>
                <div className="size-10 border border-border group-hover:border-mach group-hover:bg-mach/10 transition-all flex items-center justify-center">
                  <span className="text-mach text-xl">↗</span>
                </div>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tighter mb-4">
                {s.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {s.body}
              </p>
              <div className="flex flex-wrap gap-2 border-t border-border pt-5">
                {s.tags.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground"
                  >
                    /{t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* Skill telemetry */}
        <h2 className="text-3xl md:text-4xl font-bold uppercase italic tracking-tighter mb-10">
          Skill_<span className="text-mach">Telemetry</span>
        </h2>
        <div className="space-y-7 max-w-3xl">
          {skills.map((s) => (
            <div key={s.name}>
              <div className="flex justify-between items-center mb-2 font-mono text-xs uppercase tracking-widest">
                <span>{s.name}</span>
                <span className="text-mach">{s.value}%</span>
              </div>
              <div className="h-1 bg-secondary">
                <div
                  className="h-full bg-mach shadow-mach-sm transition-all"
                  style={{ width: `${s.value}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
