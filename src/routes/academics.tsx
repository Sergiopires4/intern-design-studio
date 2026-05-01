import { createFileRoute } from "@tanstack/react-router";
import { SiteNav, SiteFooter, SectionHeading } from "@/components/SiteNav";
import { timeline, courses, identity } from "@/content/portfolio";

export const Route = createFileRoute("/academics")({
  head: () => ({
    meta: [
      { title: `Academics — ${identity.fullName}` },
      {
        name: "description",
        content: `Academic background, coursework, and experience of ${identity.fullName}.`,
      },
      { property: "og:title", content: `Academics — ${identity.fullName}` },
      {
        property: "og:description",
        content: "Academic background, coursework, and experience.",
      },
    ],
  }),
  component: AcademicsPage,
});

function AcademicsPage() {
  return (
    <div className="carbon-mesh min-h-dvh">
      <SiteNav />
      <main className="px-6 md:px-8 pt-16 pb-20 max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="[ ACADEMIC_LOG ]"
          title="The"
          accent="Curriculum"
        />

        {/* Timeline */}
        <div className="space-y-3 mb-24">
          {timeline.map((t, i) => (
            <div
              key={t.title + i}
              className={`p-6 md:p-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-start border-l-4 ${
                i === 0 ? "border-mach bg-secondary/40" : "border-border bg-card/40"
              }`}
            >
              <div className="md:col-span-3">
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground block">
                  {t.period}
                </span>
                <span
                  className={`mt-2 inline-block font-mono text-[10px] tracking-widest px-2 py-0.5 ${
                    i === 0
                      ? "bg-mach text-primary-foreground"
                      : "bg-secondary text-foreground"
                  }`}
                >
                  {t.badge}
                </span>
              </div>
              <div className="md:col-span-9">
                <h3 className="text-xl md:text-2xl font-bold uppercase tracking-tight">
                  {t.title}
                </h3>
                <p className="text-mach font-mono text-xs mt-1">{t.org}</p>
                <p className="text-muted-foreground mt-3 leading-relaxed">
                  {t.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Coursework */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <h3 className="text-3xl font-bold uppercase italic tracking-tighter mb-4">
              Selected <span className="text-mach">Coursework</span>
            </h3>
            <p className="text-muted-foreground">
              The classes that shaped how I think.
            </p>
          </div>
          <div className="lg:col-span-8 grid grid-cols-2 gap-px bg-border border border-border">
            {courses.map((c) => (
              <div
                key={c}
                className="bg-obsidian p-5 font-mono text-xs md:text-sm uppercase tracking-widest hover:bg-secondary/50 transition-colors"
              >
                <span className="text-mach mr-2">/</span>
                {c}
              </div>
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
