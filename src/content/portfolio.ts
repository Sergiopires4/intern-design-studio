/**
 * ============================================================
 *  PORTFOLIO TEMPLATE — EDIT THIS FILE TO MAKE IT YOURS
 * ============================================================
 *  Every value below feeds the website. Replace the {{PLACEHOLDER}}
 *  strings (and any sample data) with your own information.
 *  Save the file — the site updates automatically.
 * ============================================================
 */

// ----- 1. IDENTITY -------------------------------------------------
export const identity = {
  fullName: "{{YOUR_FULL_NAME}}",            // e.g. "Ayesha Khan"
  initials: "{{IN}}",                        // 2 letters for the logo, e.g. "AK"
  role: "{{YOUR_ROLE}}",                     // e.g. "Junior Web Developer // Intern @ LimeLight"
  tagline: {
    line1: "{{TAGLINE_LINE_1}}",             // e.g. "High Velocity"
    accent: "{{TAGLINE_ACCENT}}",            // colored word, e.g. "Engineering"
    line2: "{{TAGLINE_LINE_2}}",             // e.g. "Web Developer"
  },
  bio: "{{SHORT_BIO}} — one or two sentences about who you are and what you build.",
  location: "{{CITY, COUNTRY}}",
};

// ----- 2. CONTACT & SOCIAL ----------------------------------------
export const contact = {
  email: "{{YOUR_EMAIL}}",                   // e.g. "you@example.com"
  github: "https://github.com/{{YOUR_GITHUB}}",
  linkedin: "https://linkedin.com/in/{{YOUR_HANDLE}}",
};

// ----- 3. HOMEPAGE STATS (4 items) --------------------------------
export const stats = [
  { k: "{{12+}}", v: "{{Shipped Projects}}" },
  { k: "{{3.9}}", v: "{{GPA / 4.0}}" },
  { k: "{{5}}",   v: "{{Languages}}" },
  { k: "{{∞}}",   v: "{{Cups of Chai}}" },
];

// ----- 4. ABOUT (homepage snapshot) -------------------------------
export const about = {
  headline: "Engineered for {{curiosity}}", // wrap one word in {{ }} to highlight
  paragraphs: [
    "{{Paragraph 1 — who you are, where you study, what you focus on.}}",
    "{{Paragraph 2 — what you're working on right now and what you do off the clock.}}",
  ],
};

// ----- 5. PROJECTS (Portfolio section) ----------------------------
export const projects = [
  {
    id: "{{PROJECT_ONE}}",
    date: "{{MM/YY}}",
    blurb: "{{One sentence describing what the project does and why it's cool.}}",
    stack: ["{{TECH_1}}", "{{TECH_2}}", "{{TECH_3}}"],
    role: "{{Solo build / Team of N / Open source}}",
  },
  {
    id: "{{PROJECT_TWO}}",
    date: "{{MM/YY}}",
    blurb: "{{One sentence describing the project.}}",
    stack: ["{{TECH_1}}", "{{TECH_2}}"],
    role: "{{Your role}}",
  },
  {
    id: "{{PROJECT_THREE}}",
    date: "{{MM/YY}}",
    blurb: "{{One sentence describing the project.}}",
    stack: ["{{TECH_1}}", "{{TECH_2}}"],
    role: "{{Your role}}",
  },
  // Add or remove cards as needed.
];

// ----- 6. ACADEMICS (timeline + coursework) -----------------------
export const timeline = [
  {
    period: "{{2022 — Present}}",
    title: "{{Degree e.g. B.S. Computer Science}}",
    org: "{{University Name}}",
    detail: "{{Specialisation, GPA, honors, anything notable.}}",
    badge: "ACTIVE",
  },
  {
    period: "{{Summer 2025}}",
    title: "{{Internship / Position}}",
    org: "{{Company / Lab}}",
    detail: "{{What you built or learned.}}",
    badge: "INTERNSHIP",
  },
  {
    period: "{{2020 — 2022}}",
    title: "{{Pre-degree e.g. FSc Pre-Engineering}}",
    org: "{{College Name}}",
    detail: "{{Grades, achievements, clubs.}}",
    badge: "FOUNDATION",
  },
  // Add or remove rows as needed.
];

export const courses = [
  "{{Course 1}}",
  "{{Course 2}}",
  "{{Course 3}}",
  "{{Course 4}}",
  "{{Course 5}}",
  "{{Course 6}}",
  "{{Course 7}}",
  "{{Course 8}}",
];

// ----- 7. SERVICES + SKILLS ---------------------------------------
export const services = [
  {
    n: "01",
    title: "{{Service Title 1}}",
    body: "{{Short description of what you offer.}}",
    tags: ["{{Tool}}", "{{Tool}}", "{{Tool}}"],
  },
  {
    n: "02",
    title: "{{Service Title 2}}",
    body: "{{Short description.}}",
    tags: ["{{Tool}}", "{{Tool}}"],
  },
  {
    n: "03",
    title: "{{Service Title 3}}",
    body: "{{Short description.}}",
    tags: ["{{Tool}}", "{{Tool}}"],
  },
  {
    n: "04",
    title: "{{Service Title 4}}",
    body: "{{Short description.}}",
    tags: ["{{Tool}}", "{{Tool}}"],
  },
];

export const skills = [
  { name: "{{Skill_One}}",   value: 90 },
  { name: "{{Skill_Two}}",   value: 80 },
  { name: "{{Skill_Three}}", value: 75 },
  { name: "{{Skill_Four}}",  value: 70 },
  { name: "{{Skill_Five}}",  value: 65 },
];

// ----- 8. FAVOURITES + PHILOSOPHY ---------------------------------
export const stash = [
  { tag: "GEAR",  title: "{{Favourite gear / device}}", note: "{{Why you love it.}}" },
  { tag: "IDE",   title: "{{Favourite editor}}",        note: "{{Why.}}" },
  { tag: "BEAT",  title: "{{Favourite music}}",         note: "{{Why.}}" },
  { tag: "READ",  title: "{{Favourite book}}",          note: "{{Why.}}" },
  { tag: "FOOD",  title: "{{Favourite food}}",          note: "{{Why.}}" },
  { tag: "DRINK", title: "{{Favourite drink}}",         note: "{{Why.}}" },
  { tag: "SPORT", title: "{{Favourite sport}}",         note: "{{Why.}}" },
  { tag: "GAME",  title: "{{Favourite game}}",          note: "{{Why.}}" },
];

export const philosophy = [
  { k: "{{Word1}}", v: "{{One-line principle you live by.}}" },
  { k: "{{Word2}}", v: "{{One-line principle.}}" },
  { k: "{{Word3}}", v: "{{One-line principle.}}" },
  { k: "{{Word4}}", v: "{{One-line principle.}}" },
];
