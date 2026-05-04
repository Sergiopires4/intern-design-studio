import { createFileRoute } from "@tanstack/react-router";
import { SiteNav, SiteFooter, SectionHeading } from "@/components/SiteNav";
import { skills, identity } from "@/content/portfolio";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: `Skills — ${identity.fullName}` },
      {
        name: "description",
        content: `Technical skills and capabilities of ${identity.fullName}: frontend, backend, data analysis, and web design.`,
      },
      { property: "og:title", content: `Skills — ${identity.fullName}` },
      {
        property: "og:description",
        content: "Frontend, backend, data analysis, and web design capabilities.",
      },
    ],
  }),
  component: SkillsPage,
});

function SkillsPage() {
  return (
    <div className="carbon-mesh min-h-dvh">
      <SiteNav />
      <main className="px-6 md:px-8 pt-16 pb-20 max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="[ CAPABILITY_MATRIX ]"
          title="The"
          accent="Toolkit"
        />
        <p className="text-muted-foreground max-w-2xl mb-16 text-lg">
          Stack snapshot — the technologies and disciplines I use to build
          clean, functional, and responsive web experiences.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {skills.map((s, i) => (
            <div
              key={s.category}
              className="bg-card border border-border p-8 hover:border-mach/60 hover:-translate-y-1 transition-all duration-300 glass-stroke relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 font-mono text-[10px] text-muted-foreground/40 px-3 py-2">
                0{i + 1}
              </div>
              <div className="flex items-center gap-3 mb-6">
                <div className="size-10 bg-mach flex items-center justify-center skew-tilt shadow-mach-sm">
                  <span className="text-primary-foreground font-bold text-[10px] font-mono unskew-tilt">
                    {s.tag}
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold uppercase italic tracking-tighter">
                  {s.category}
                </h3>
              </div>

              <ul className="space-y-px bg-border border border-border">
                {s.items.map((item) => (
                  <li
                    key={item}
                    className="bg-obsidian px-4 py-3 font-mono text-xs md:text-sm uppercase tracking-widest flex items-center gap-3 hover:bg-secondary/50 transition-colors"
                  >
                    <span className="text-mach">▸</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
