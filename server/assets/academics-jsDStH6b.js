import { T as jsxRuntimeExports } from "./worker-entry-DH21p3qm.js";
import { S as SiteNav, a as SectionHeading, b as SiteFooter } from "./SiteNav-B3XZMn3X.js";
import { t as timeline, c as courses } from "./router-Ag84TuKJ.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
function AcademicsPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "carbon-mesh min-h-dvh", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteNav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "px-6 md:px-8 pt-16 pb-20 max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "[ ACADEMIC_LOG ]", title: "The", accent: "Curriculum" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3 mb-24", children: timeline.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `p-6 md:p-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-start border-l-4 ${i === 0 ? "border-mach bg-secondary/40" : "border-border bg-card/40"}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] uppercase tracking-widest text-muted-foreground block", children: t.period }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `mt-2 inline-block font-mono text-[10px] tracking-widest px-2 py-0.5 ${i === 0 ? "bg-mach text-primary-foreground" : "bg-secondary text-foreground"}`, children: t.badge })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-9", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl md:text-2xl font-bold uppercase tracking-tight", children: t.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-mach font-mono text-xs mt-1", children: t.org }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-3 leading-relaxed", children: t.detail })
        ] })
      ] }, t.title + i)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-3xl font-bold uppercase italic tracking-tighter mb-4", children: [
            "Selected ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-mach", children: "Coursework" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "The classes that shaped how I think." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-8 grid grid-cols-2 gap-px bg-border border border-border", children: courses.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-obsidian p-5 font-mono text-xs md:text-sm uppercase tracking-widest hover:bg-secondary/50 transition-colors", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-mach mr-2", children: "/" }),
          c
        ] }, c)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
export {
  AcademicsPage as component
};
