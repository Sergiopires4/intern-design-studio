import { T as jsxRuntimeExports } from "./worker-entry-BF9zIABg.js";
import { S as SiteNav, a as SectionHeading, b as SiteFooter } from "./SiteNav-qmAMNcgt.js";
import { p as projects } from "./router-Bc5Ctjtu.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
function ProjectsPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "carbon-mesh min-h-dvh", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteNav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "px-6 md:px-8 pt-16 pb-20 max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: `[ 001 — ${String(projects.length).padStart(3, "0")} ] Build Cycle`, title: "Core_", accent: "Deployments" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground max-w-2xl mb-16 text-lg", children: "A selection of things I've built — class projects, hackathon entries, and side experiments." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: projects.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "group relative bg-card border border-border p-6 md:p-7 transition-all hover:border-mach/60 glass-stroke", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold uppercase tracking-tighter", children: p.id }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-mach text-xs", children: p.date })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed mb-6 min-h-[5rem]", children: p.blurb }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 mb-4", children: p.stack.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] px-2 py-1 bg-secondary border border-border font-mono", children: s }, s)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-mono text-[10px] uppercase tracking-widest text-muted-foreground border-t border-border pt-4 flex items-center justify-between gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            "ROLE: ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: p.role })
          ] }),
          "link" in p && p.link ? /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: p.link, target: "_blank", rel: "noreferrer", className: "text-mach hover:underline", children: "GITHUB →" }) : null
        ] })
      ] }, p.id)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
export {
  ProjectsPage as component
};
