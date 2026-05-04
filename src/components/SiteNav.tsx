import { Link } from "@tanstack/react-router";
import { identity, contact } from "@/content/portfolio";

const links = [
  { to: "/" as const, label: "Home" },
  { to: "/projects" as const, label: "Projects" },
  { to: "/academics" as const, label: "Academics" },
  { to: "/skills" as const, label: "Skills" },
  { to: "/favourites" as const, label: "Favourites" },
];

export function SiteNav() {
  return (
    <nav className="sticky top-0 z-50 px-6 md:px-8 py-4 flex justify-between items-center backdrop-blur-xl border-b border-border bg-obsidian/80">
      <Link to="/" className="flex items-center gap-3 group">
        <div className="size-9 bg-mach flex items-center justify-center skew-tilt shadow-mach-sm">
          <span className="text-primary-foreground font-bold text-lg unskew-tilt">{identity.initials}</span>
        </div>
        <span className="font-mono font-bold tracking-tighter text-xs hidden sm:inline">
          SYSTEM_STATUS:&nbsp;<span className="text-mach">ACTIVE</span>
        </span>
      </Link>
      <div className="hidden md:flex gap-8 lg:gap-10 text-xs font-medium tracking-widest uppercase">
        {links.map((l) => (
          <Link
            key={l.to}
            to={l.to}
            className="text-foreground/80 hover:text-mach transition-colors"
            activeProps={{ className: "text-mach" }}
            activeOptions={{ exact: true }}
          >
            {l.label}
          </Link>
        ))}
      </div>
      <a
        href={`mailto:${contact.email}`}
        className="hidden sm:inline-block bg-secondary border border-border px-5 py-2 text-[10px] font-bold uppercase tracking-widest skew-tilt hover:bg-mach hover:text-primary-foreground transition-all"
      >
        <span className="unskew-tilt inline-block">Execute_Contact</span>
      </a>
    </nav>
  );
}

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="px-6 md:px-8 py-10 border-t border-border mt-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest text-center md:text-left">
          © {year} {identity.fullName} // PROTOCOL_V3.0 // BUILT_FOR_SPEED
        </div>
        <div className="flex gap-6 md:gap-8 text-[10px] font-bold uppercase tracking-widest">
          <a href={contact.github} target="_blank" rel="noreferrer" className="hover:text-mach transition-colors">
            Github
          </a>
          <a href={contact.linkedin} target="_blank" rel="noreferrer" className="hover:text-mach transition-colors">
            LinkedIn
          </a>
          <a href={`mailto:${contact.email}`} className="hover:text-mach transition-colors">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  accent,
}: {
  eyebrow: string;
  title: string;
  accent?: string;
}) {
  return (
    <div className="mb-12">
      <p className="font-mono text-xs text-mach uppercase tracking-[0.3em] mb-3">{eyebrow}</p>
      <h1 className="text-4xl md:text-6xl font-bold uppercase italic tracking-tighter">
        {title} {accent && <span className="text-mach">{accent}</span>}
      </h1>
    </div>
  );
}
