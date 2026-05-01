import { createFileRoute } from "@tanstack/react-router";
import { SiteNav, SiteFooter, SectionHeading } from "@/components/SiteNav";

export const Route = createFileRoute("/favourites")({
  head: () => ({
    meta: [
      { title: "Favourites — Aiden Khan" },
      {
        name: "description",
        content:
          "Off-the-clock essentials: gear, food, sport, music, and the books that reset my brain.",
      },
      { property: "og:title", content: "Favourites — Aiden Khan" },
      {
        property: "og:description",
        content: "Gear, food, sport, music — what fuels the engine.",
      },
    ],
  }),
  component: FavouritesPage,
});

const stash = [
  { tag: "GEAR", title: "HHKB Pro Hybrid", note: "Topre switches, no compromise." },
  { tag: "IDE", title: "Neovim + Lua", note: "Modal editing for life." },
  { tag: "BEAT", title: "Lo-fi & Drum'n'Bass", note: "Focus tempo: 170 BPM." },
  { tag: "READ", title: "The Pragmatic Programmer", note: "Re-read once a year." },
  { tag: "FOOD", title: "Karachi Biryani", note: "Spicy, no shortcuts." },
  { tag: "DRINK", title: "V60 Pour-Over", note: "Ethiopian, light roast." },
  { tag: "SPORT", title: "Pickup Football", note: "Left wing, never striker." },
  { tag: "GAME", title: "Online Chess (1700)", note: "Aggressive openings only." },
];

const philosophy = [
  { k: "Ship", v: "Done > perfect. Iterate in production." },
  { k: "Read", v: "One book, one paper, one repo per month." },
  { k: "Move", v: "If I haven't sweat today, I haven't lived today." },
  { k: "Build", v: "Side projects keep curiosity sharp." },
];

function FavouritesPage() {
  return (
    <div className="carbon-mesh min-h-dvh">
      <SiteNav />
      <main className="px-6 md:px-8 pt-16 pb-20 max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="[ ENGINE_FUEL ]"
          title="The"
          accent="Stash"
        />
        <p className="text-muted-foreground max-w-2xl mb-16 text-lg">
          Curated gear, food, and habits that keep the internal clock speed
          high. Off-the-clock is where ideas come from.
        </p>

        {/* Stash grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24">
          {stash.map((s) => (
            <div
              key={s.title}
              className="bg-card border border-border p-6 hover:border-mach/60 hover:-translate-y-1 transition-all duration-300 glass-stroke"
            >
              <p className="text-[10px] text-mach font-mono mb-3 tracking-widest">
                [ {s.tag} ]
              </p>
              <h5 className="font-bold uppercase tracking-tight text-base md:text-lg leading-tight">
                {s.title}
              </h5>
              <p className="text-muted-foreground text-xs mt-3 leading-relaxed">
                {s.note}
              </p>
            </div>
          ))}
        </div>

        {/* Philosophy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <h3 className="text-4xl md:text-5xl font-bold uppercase italic tracking-tighter">
              Operating <span className="text-mach">Principles</span>
            </h3>
            <p className="text-muted-foreground mt-4">
              The four words I check myself against every week.
            </p>
          </div>
          <div className="lg:col-span-7 space-y-px bg-border border border-border">
            {philosophy.map((p) => (
              <div
                key={p.k}
                className="bg-obsidian p-6 md:p-8 grid grid-cols-12 gap-6 items-baseline"
              >
                <div className="col-span-3 text-3xl md:text-4xl font-bold text-mach uppercase italic tracking-tighter">
                  {p.k}.
                </div>
                <div className="col-span-9 text-muted-foreground leading-relaxed">
                  {p.v}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
