import { Link } from "react-router-dom";
import { SiteNav, SiteFooter } from "@/components/SiteNav";
import { identity, stats, about } from "@/content/portfolio";

function renderAccented(text: string) {
  const parts = text.split(/(\{\{[^}]+\}\})/g);
  return parts.map((p, i) =>
    p.startsWith("{{") && p.endsWith("}}") ? (
      <span key={i} className="text-mach">{p.slice(2, -2)}</span>
    ) : (
      <span key={i}>{p}</span>
    ),
  );
}

export default function Home() {
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
              {identity.role}
            </span>
          </div>

          <h1 className="text-[64px] sm:text-[88px] md:text-[120px] leading-[0.85] font-bold italic tracking-tighter uppercase">
            {identity.tagline.line1}{" "}
            <span className="text-mach text-mach-glow">{identity.tagline.accent}</span>
            <br />
            {identity.tagline.line2}
          </h1>

          <p className="max-w-[55ch] text-base md:text-xl text-muted-foreground mt-4 leading-relaxed font-light">
            Hi, I'm {identity.fullName}. {identity.bio}
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
              to="/academics"
              className="px-8 md:px-10 py-4 md:py-5 border border-border skew-tilt hover:border-mach transition-colors"
            >
              <span className="unskew-tilt inline-block text-base md:text-lg font-bold uppercase tracking-tighter">
                Academics
              </span>
            </Link>
          </div>

          {/* Stats strip */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-border border border-border">
            {stats.map((s) => (
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
              {renderAccented(about.headline)}
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-6 text-muted-foreground leading-relaxed">
            {about.paragraphs.map((p, i) => (
              <p key={i} className={i === 0 ? "text-lg" : ""}>{p}</p>
            ))}
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
