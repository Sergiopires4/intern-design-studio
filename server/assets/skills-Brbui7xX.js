import { T as jsxRuntimeExports } from "./worker-entry-DH21p3qm.js";
import { S as SiteNav, a as SectionHeading, b as SiteFooter } from "./SiteNav-B3XZMn3X.js";
import { s as skills } from "./router-Ag84TuKJ.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
function SkillsPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "carbon-mesh min-h-dvh", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteNav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "px-6 md:px-8 pt-16 pb-20 max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "[ CAPABILITY_MATRIX ]", title: "The", accent: "Toolkit" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground max-w-2xl mb-16 text-lg", children: "Stack snapshot — the technologies and disciplines I use to build clean, functional, and responsive web experiences." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: skills.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border p-8 hover:border-mach/60 hover:-translate-y-1 transition-all duration-300 glass-stroke relative overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-0 right-0 font-mono text-[10px] text-muted-foreground/40 px-3 py-2", children: [
          "0",
          i + 1
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-10 bg-mach flex items-center justify-center skew-tilt shadow-mach-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary-foreground font-bold text-[10px] font-mono unskew-tilt", children: s.tag }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl md:text-2xl font-bold uppercase italic tracking-tighter", children: s.category })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-px bg-border border border-border", children: s.items.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "bg-obsidian px-4 py-3 font-mono text-xs md:text-sm uppercase tracking-widest flex items-center gap-3 hover:bg-secondary/50 transition-colors", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-mach", children: "▸" }),
          item
        ] }, item)) })
      ] }, s.category)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
export {
  SkillsPage as component
};
