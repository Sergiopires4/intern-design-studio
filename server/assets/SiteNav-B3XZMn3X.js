import { T as jsxRuntimeExports } from "./worker-entry-DH21p3qm.js";
import { L as Link, i as identity, f as contact } from "./router-Ag84TuKJ.js";
const links = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/academics", label: "Academics" },
  { to: "/skills", label: "Skills" },
  { to: "/favourites", label: "Favourites" }
];
function SiteNav() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "sticky top-0 z-50 px-6 md:px-8 py-4 flex justify-between items-center backdrop-blur-xl border-b border-border bg-obsidian/80", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-3 group", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-9 bg-mach flex items-center justify-center skew-tilt shadow-mach-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary-foreground font-bold text-lg unskew-tilt", children: identity.initials }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono font-bold tracking-tighter text-xs hidden sm:inline", children: [
        "SYSTEM_STATUS: ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-mach", children: "ACTIVE" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:flex gap-8 lg:gap-10 text-xs font-medium tracking-widest uppercase", children: links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: l.to,
        className: "text-foreground/80 hover:text-mach transition-colors",
        activeProps: { className: "text-mach" },
        activeOptions: { exact: true },
        children: l.label
      },
      l.to
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "a",
      {
        href: `mailto:${contact.email}`,
        className: "hidden sm:inline-block bg-secondary border border-border px-5 py-2 text-[10px] font-bold uppercase tracking-widest skew-tilt hover:bg-mach hover:text-primary-foreground transition-all",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "unskew-tilt inline-block", children: "Execute_Contact" })
      }
    )
  ] });
}
function SiteFooter() {
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "px-6 md:px-8 py-10 border-t border-border mt-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-mono text-[10px] text-muted-foreground uppercase tracking-widest text-center md:text-left", children: [
      "© ",
      year,
      " ",
      identity.fullName,
      " // PROTOCOL_V3.0 // BUILT_FOR_SPEED"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-6 md:gap-8 text-[10px] font-bold uppercase tracking-widest", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: contact.github, target: "_blank", rel: "noreferrer", className: "hover:text-mach transition-colors", children: "Github" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: contact.linkedin, target: "_blank", rel: "noreferrer", className: "hover:text-mach transition-colors", children: "LinkedIn" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `mailto:${contact.email}`, className: "hover:text-mach transition-colors", children: "Email" })
    ] })
  ] }) });
}
function SectionHeading({
  eyebrow,
  title,
  accent
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-xs text-mach uppercase tracking-[0.3em] mb-3", children: eyebrow }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-4xl md:text-6xl font-bold uppercase italic tracking-tighter", children: [
      title,
      " ",
      accent && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-mach", children: accent })
    ] })
  ] });
}
export {
  SiteNav as S,
  SectionHeading as a,
  SiteFooter as b
};
