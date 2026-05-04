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
  fullName: "Sergio Matveiev",
  initials: "SM",
  role: "Web Developer",
  tagline: {
    line1: "Building Modern",
    accent: "& Functional",
    line2: "Web Experiences",
  },
  bio: "A dedicated web developer passionate about learning, solving problems, and building clean, functional digital experiences.",
  location: "Debrecen, Hungary",
};

// ----- 2. CONTACT & SOCIAL ----------------------------------------
export const contact = {
  email: "{{YOUR_EMAIL}}",                   // e.g. "you@example.com"
  github: "https://github.com/{{YOUR_GITHUB}}",
  linkedin: "https://linkedin.com/in/{{YOUR_HANDLE}}",
};

// ----- 3. HOMEPAGE STATS (4 items) --------------------------------
export const stats = [
  { k: "5+", v: "Projects Completed" },
  { k: "3.7", v: "GPA / 4.0" },
  { k: "4+", v: "Technologies" },
  { k: "∞", v: "Cups of Chai" },
];

// ----- 4. ABOUT (homepage snapshot) -------------------------------
export const about = {
  headline: "Engineered for {{clarity}}", // wrap one word in {{ }} to highlight
  paragraphs: [
    "I'm Sergio Matveiev, a web developer and student at the University of Debrecen, focused on building clean, functional, and user-friendly applications. I have a strong interest in modern web development and enjoy turning ideas into practical digital solutions.",
    "I'm currently working on personal projects to improve my development skills and deepen my understanding of real-world web applications. Outside of coding, I enjoy exploring new technologies, refining my workflow, and staying consistent with my goals.",
  ],
};

// ----- 5. PROJECTS (Portfolio section) ----------------------------
export const projects = [
  {
    id: "Flip Cards UI",
    date: "03/22",
    blurb:
      "An interactive card UI with flip animations, showcasing front-end skills in animations and responsive design.",
    stack: ["HTML", "CSS", "JavaScript"],
    role: "Solo build",
    link: "https://github.com/Sergiopires4/flip-cards.github.io.git",
  },
  {
    id: "Parallax Scrolling Website",
    date: "04/19",
    blurb:
      "A visually engaging website using parallax scrolling effects to create depth and smooth user experience.",
    stack: ["HTML", "CSS", "JavaScript"],
    role: "Solo build",
    link: "https://github.com/Sergiopires4/parallaxscrolling.git",
  },
];

// ----- 6. ACADEMICS (timeline + coursework) -----------------------
export const timeline = [
  {
    period: "2022 — Present",
    title: "B.S. in Computer Science",
    org: "University of Debrecen",
    detail:
      "GPA: 3.7 / 4.0. Focused on web development and software engineering.",
    badge: "ACTIVE",
  },
  {
    period: "Ongoing",
    title: "Seeking Internship",
    org: "Open to opportunities",
    detail:
      "Currently seeking internship opportunities in web development.",
    badge: "AVAILABLE",
  },
  {
    period: "Pre-2022",
    title: "High School / Pre-University Education",
    org: "Previous School",
    detail:
      "Completed pre-university education with focus on science and mathematics.",
    badge: "FOUNDATION",
  },
];

export const courses = [
  "Programming",
  "Object-Oriented Programming",
  "Data Structures and Algorithms",
  "Web Development",
  "Database Systems",
  "Software Engineering",
  "Computer Networks",
  "Operating Systems",
];

// ----- 7. SKILLS --------------------------------------------------
export const skills = [
  {
    category: "Frontend",
    tag: "FE",
    items: ["HTML", "CSS", "JavaScript"],
  },
  {
    category: "Backend",
    tag: "BE",
    items: ["Basic backend knowledge"],
  },
  {
    category: "Data Analysis",
    tag: "DA",
    items: ["Basic data analysis skills"],
  },
  {
    category: "Web Design",
    tag: "WD",
    items: ["Responsive design", "UI/UX fundamentals"],
  },
];

// ----- 8. FAVOURITES + PHILOSOPHY ---------------------------------
export const stash = [
  { tag: "GEAR",  title: "Laptop",              note: "My main tool for coding, learning, and building projects every day." },
  { tag: "IDE",   title: "VS Code",             note: "Lightweight, powerful, and perfect for modern web development." },
  { tag: "BEAT",  title: "Lo-fi / Chill beats", note: "Helps me stay focused and consistent while coding." },
  { tag: "READ",  title: "Atomic Habits",       note: "A great book about building discipline and improving daily routines." },
  { tag: "FOOD",  title: "Simple home meals",   note: "Keeps me energized without overcomplicating things." },
  { tag: "DRINK", title: "Fruit Juice",         note: "Refreshing and keeps me energized throughout the day." },
  { tag: "SPORT", title: "Gym / Basketball",    note: "Helps me stay disciplined, active, and maintain a strong mindset." },
  { tag: "GAME",  title: "Batman: Arkham Knight", note: "I enjoy immersive games with strong storytelling and gameplay mechanics." },
];

export const philosophy = [
  { k: "Consistency", v: "Consistency over motivation." },
];
