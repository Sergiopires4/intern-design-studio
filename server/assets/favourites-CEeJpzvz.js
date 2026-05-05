import { T as jsxRuntimeExports } from "./worker-entry-DH21p3qm.js";
import { S as SiteNav, a as SectionHeading, b as SiteFooter } from "./SiteNav-B3XZMn3X.js";
import { a as stash, b as philosophy } from "./router-Ag84TuKJ.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
function FavouritesPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "carbon-mesh min-h-dvh", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteNav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "px-6 md:px-8 pt-16 pb-20 max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "[ ENGINE_FUEL ]", title: "The", accent: "Stash" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground max-w-2xl mb-16 text-lg", children: "Curated gear, food, and habits that keep my internal clock speed high. Off-the-clock is where the ideas come from." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4 mb-24", children: stash.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border p-6 hover:border-mach/60 hover:-translate-y-1 transition-all duration-300 glass-stroke", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-mach font-mono mb-3 tracking-widest", children: [
          "[ ",
          s.tag,
          " ]"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "font-bold uppercase tracking-tight text-base md:text-lg leading-tight", children: s.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-xs mt-3 leading-relaxed", children: s.note })
      ] }, s.title)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-12 items-start", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-4xl md:text-5xl font-bold uppercase italic tracking-tighter", children: [
            "Operating ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-mach", children: "Principles" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-4", children: "The words I check myself against every week." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-7 space-y-px bg-border border border-border", children: philosophy.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-obsidian p-6 md:p-8 grid grid-cols-12 gap-6 items-baseline", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-3 text-3xl md:text-4xl font-bold text-mach uppercase italic tracking-tighter", children: [
            p.k,
            "."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-9 text-muted-foreground leading-relaxed", children: p.v })
        ] }, p.k)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
export {
  FavouritesPage as component
};
