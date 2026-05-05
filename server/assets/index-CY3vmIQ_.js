import { T as jsxRuntimeExports } from "./worker-entry-DH21p3qm.js";
import { i as identity, L as Link, d as stats, e as about } from "./router-Ag84TuKJ.js";
import { S as SiteNav, b as SiteFooter } from "./SiteNav-B3XZMn3X.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
function renderAccented(text) {
  const parts = text.split(/(\{\{[^}]+\}\})/g);
  return parts.map((p, i) => p.startsWith("{{") && p.endsWith("}}") ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-mach", children: p.slice(2, -2) }, i) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: p }, i));
}
function Home() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "carbon-mesh min-h-dvh", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteNav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative pt-24 md:pt-32 pb-20 px-6 md:px-8 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": true, className: "absolute -top-24 -right-24 size-[600px] bg-mach/15 blur-[120px] rounded-full pointer-events-none" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto flex flex-col gap-6 relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-3 bg-secondary/60 border border-border py-2 px-4 w-fit skew-tilt", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "size-2 rounded-full bg-mach animate-pulse" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-mono uppercase tracking-[0.3em] unskew-tilt", children: identity.role })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-[64px] sm:text-[88px] md:text-[120px] leading-[0.85] font-bold italic tracking-tighter uppercase", children: [
          identity.tagline.line1,
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-mach text-mach-glow", children: identity.tagline.accent }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          identity.tagline.line2
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "max-w-[55ch] text-base md:text-xl text-muted-foreground mt-4 leading-relaxed font-light", children: [
          "Hi, I'm ",
          identity.fullName,
          ". ",
          identity.bio
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-4 md:gap-6 mt-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/projects", className: "px-8 md:px-10 py-4 md:py-5 bg-mach text-primary-foreground skew-tilt shadow-mach hover:shadow-[0_0_50px_oklch(0.92_0.22_122/0.5)] transition-all", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "unskew-tilt inline-block text-base md:text-lg font-bold uppercase tracking-tighter", children: "View Projects" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/academics", className: "px-8 md:px-10 py-4 md:py-5 border border-border skew-tilt hover:border-mach transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "unskew-tilt inline-block text-base md:text-lg font-bold uppercase tracking-tighter", children: "Academics" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-border border border-border", children: stats.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-obsidian p-6 md:p-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl md:text-5xl font-bold text-mach tracking-tighter", children: s.k }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[10px] uppercase tracking-widest text-muted-foreground mt-2", children: s.v })
        ] }, s.v)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "px-6 md:px-8 py-20 md:py-28 bg-carbon/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-xs text-mach uppercase tracking-[0.3em] mb-3", children: "[ ABOUT_ME ]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl md:text-5xl font-bold uppercase italic tracking-tighter", children: renderAccented(about.headline) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-7 space-y-6 text-muted-foreground leading-relaxed", children: [
        about.paragraphs.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: i === 0 ? "text-lg" : "", children: p }, i)),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-4 pt-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/academics", className: "text-mach text-sm font-bold uppercase tracking-widest hover:underline underline-offset-4", children: "Academics →" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/favourites", className: "text-mach text-sm font-bold uppercase tracking-widest hover:underline underline-offset-4", children: "Favourites →" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
export {
  Home as component
};
