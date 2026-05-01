import { createFileRoute } from "@tanstack/react-router";
import { SiteNav, SiteFooter, SectionHeading } from "@/components/SiteNav";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Aiden Khan" },
      {
        name: "description",
        content:
          "Selected coding projects: real-time data engines, distributed auth protocols, and high-performance UI components.",
      },
      { property: "og:title", content: "Projects — Aiden Khan" },
      {
        property: "og:description",
        content:
          "Selected coding projects: real-time data engines, distributed auth protocols, and high-performance UI components.",
      },
    ],
  }),
  component: ProjectsPage,
});

const projects = [
  {
    id: "AERO_FLUX",
    date: "01/26",
    blurb:
      "Real-time data visualization engine for high-frequency telemetry assets. Sub-10ms render budget per frame.",
    stack: ["RUST", "WASM", "WEBGL"],
    role: "Solo build",
  },
  {
    id: "NOVA_CORE",
    date: "11/25",
    blurb:
      "Distributed auth protocol using zero-knowledge proofs for decentralized identity verification across micro-services.",
    stack: ["GOLANG", "ZK-SNARKS", "REDIS"],
    role: "Team of 3",
  },
  {
    id: "KINETIC_UI",
    date: "09/25",
    blurb:
      "Component library tuned for 120fps physics-based animations. Used in two production dashboards.",
    stack: ["TYPESCRIPT", "REACT", "FRAMER"],
    role: "Open source",
  },
  {
    id: "SYNAPSE_DB",
    date: "06/25",
    blurb:
      "University capstone: a relational database manager for academic research labs. Bulk import, audit log, RBAC.",
    stack: ["NEXT.JS", "POSTGRES", "PRISMA"],
    role: "Team of 4",
  },
  {
    id: "FLUX_TERMINAL",
    date: "02/25",
    blurb:
      "Custom shell emulator and workspace orchestrator. Sub-millisecond escape-sequence handling.",
    stack: ["GOLANG", "XTERM.JS"],
    role: "Solo build",
  },
  {
    id: "PIXEL_SORT",
    date: "11/24",
    blurb:
      "Generative art pipeline that sorts pixels along contour lines. Featured in the campus design showcase.",
    stack: ["PYTHON", "NUMPY", "PIL"],
    role: "Solo build",
  },
];

function ProjectsPage() {
  return (
    <div className="carbon-mesh min-h-dvh">
      <SiteNav />
      <main className="px-6 md:px-8 pt-16 pb-20 max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="[ 001 — 006 ] Build Cycle"
          title="Core_"
          accent="Deployments"
        />
        <p className="text-muted-foreground max-w-2xl mb-16 text-lg">
          A selection of things I've built — class projects, hackathon wins,
          and side experiments. All open source unless marked otherwise.
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
              <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground border-t border-border pt-4">
                ROLE: <span className="text-foreground">{p.role}</span>
              </div>
            </article>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
