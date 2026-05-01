import { createFileRoute } from "@tanstack/react-router";
import { SiteNav, SiteFooter, SectionHeading } from "@/components/SiteNav";

export const Route = createFileRoute("/academics")({
  head: () => ({
    meta: [
      { title: "Academics — Aiden Khan" },
      {
        name: "description",
        content:
          "Academic background, coursework, awards, and research at NUST and beyond.",
      },
      { property: "og:title", content: "Academics — Aiden Khan" },
      {
        property: "og:description",
        content: "Academic background, coursework, and research.",
      },
    ],
  }),
  component: AcademicsPage,
});

const timeline = [
  {
    period: "2022 — Present",
    title: "B.S. Computer Science",
    org: "National University of Sciences & Technology",
    detail:
      "Specialization in Distributed Systems. GPA 3.94 / 4.00. Dean's Honor List 2023, 2024.",
    badge: "ACTIVE",
  },
  {
    period: "Summer 2025",
    title: "Software Engineering Intern",
    org: "Vector Dynamics — Real-Time Systems",
    detail:
      "Shipped a telemetry dashboard processing 12k events/sec. Cut p99 render latency by 38%.",
    badge: "INTERNSHIP",
  },
  {
    period: "2024",
    title: "Undergraduate Research Assistant",
    org: "HCI Lab, NUST",
    detail:
      "Co-author on a paper studying gesture-based input for accessibility-first interfaces.",
    badge: "RESEARCH",
  },
  {
    period: "2020 — 2022",
    title: "Pre-Engineering, FSc.",
    org: "Punjab College",
    detail: "Top 3% nationally in board examinations. Programming club lead.",
    badge: "FOUNDATION",
  },
];

const courses = [
  "Distributed Systems",
  "Operating Systems",
  "Compilers & Languages",
  "Computer Networks",
  "Database Systems",
  "Algorithms (Adv.)",
  "Machine Learning",
  "Computer Graphics",
];

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
              key={t.title}
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
              The classes that bent my brain in interesting ways.
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
