import React from "react";
import { createRoot } from "react-dom/client";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import {
  FiArrowUpRight,
  FiDownload,
  FiMail,
  FiMenu,
  FiX,
  FiExternalLink,
  FiCode
} from "react-icons/fi";
import { PiGraduationCap } from "react-icons/pi";
import { motion } from "framer-motion";
import "./index.css";

const skills = {
  Frontend: ["React.js", "Next.js", "Angular", "JavaScript", "TypeScript"],
  Styling: ["HTML", "CSS", "SCSS", "Tailwind CSS", "Bootstrap", "Mantine"],
  Backend: ["Node.js", "Nest.js", "REST APIs"],
  Mobile: ["React Native", "React Native Paper"],
  "State & Libraries": ["Redux Toolkit", "RxJS"],
  Tools: ["Git", "Figma"],
};

const experience = [
  {
    company: "Parth Hosting",
    role: "Frontend Developer",
    period: "Sep 2024 — Present",
    location: "Bardoli, India",
    points: [
      "Developed and maintained scalable web applications using React.js, Next.js, and Node.js.",
      "Built reusable and modular components using React.js and TypeScript.",
      "Designed and developed RESTful APIs using Node.js and Nest.js.",
      "Integrated frontend applications with backend services and APIs for efficient data handling.",
      "Designed high-fidelity prototypes in Figma and participated in code reviews.",
      "Debugged issues across frontend and backend layers and collaborated on system architecture.",
    ],
  },
  {
    company: "1Rivet LLP",
    role: "Frontend Developer",
    period: "Jan 2023 — Sep 2024",
    location: "Valsad, India",
    points: [
      "Reduced page load time using lazy loading, memoization, and API optimization.",
      "Collaborated with backend developers and designers to improve usability and design consistency.",
      "Created high-fidelity prototypes and mockups to visualize features.",
      "Integrated new features and enhancements to improve the overall user experience.",
      "Wrote clean, reusable, and scalable code and achieved cross-browser compatibility.",
    ],
  },
  {
    company: "1Rivet LLP",
    role: "Frontend Developer Intern",
    period: "Aug 2022 — Dec 2022",
    location: "Valsad, India",
    points: [
      "Developed user interfaces using clean, efficient, and modular code.",
      "Worked with UI/UX designers to translate wireframes and mockups into functional components.",
    ],
  },
  {
    company: "Uka Tarsadia University",
    role: "Assistant Professor",
    period: "Jul 2019 — Jun 2022",
    location: "Bardoli, India",
    points: [],
  },
];

const projects = [
  {
    title: "Stock Disha",
    type: "Web & Mobile App",
    tech: ["React.js", "Next.js", "Tailwind CSS", "React Native", "Nest.js"],
    description: "Full-stack stock research platform with web and mobile applications, subscriptions, KYC workflows, authentication, payments, and an admin panel.",
    featured: true,
  },
  {
    title: "Navdant Dental Clinic",
    type: "Mobile App",
    tech: ["React Native", "TypeScript", "JWT", "Axios", "React Hook Form", "Yup"],
    description: "Cross-platform clinic management application covering patient registration, appointments, digital records, authentication, QR smart IDs, documents, and expense tracking.",
    featured: true,
  },
  {
    title: "Ekatra",
    type: "Web Application",
    tech: ["React", "Mantine", "Redux"],
    description: "Organizational platform for internship programs, leave management, intern management, training processes, and roadmap tracking.",
    featured: true,
  },
  {
    title: "Erdos",
    type: "Full-stack Platform",
    tech: ["React", "HTML", "CSS", "Nest.js"],
    description: "Project management platform with projects, tasks, user roles, permissions, prompt libraries, REST APIs, and responsive UI.",
    featured: true,
  },
  {
    title: "Personal Finance Tracker",
    type: "Web Application",
    tech: ["React", "Mantine", "Redux"],
    description: "Dashboard for monitoring income, expenses, savings goals, budgets, spending patterns, and monthly financial reports.",
  },
  {
    title: "Gayatri Rolling Shutters",
    type: "Business Website",
    tech: ["React", "HTML", "CSS"],
    description: "Responsive company website featuring products, services, company information, and an inquiry flow.",
  },
  {
    title: "Aahra Designs",
    type: "Website UI",
    tech: ["HTML", "SCSS", "JavaScript"],
    description: "Responsive UI implementation using semantic HTML and modular SCSS with interactive navigation and accessibility-focused optimization.",
  },
  {
    title: "Kaushal Coaching Institute",
    type: "Web Application",
    tech: ["React.js", "Node.js"],
    description: "Full-stack application for courses, batches, institute information, and structured interfaces for students and administrators.",
  },
  {
    title: "Kaushal Kids Wonder Nest",
    type: "Preschool Website",
    tech: ["HTML", "Tailwind CSS"],
    description: "Responsive preschool website presenting programs, activities, admissions, and contact information.",
  },
];

const education = [
  { degree: "M.Tech. in Information Technology", institute: "Uka Tarsadia University", period: "2017 — 2019" },
  { degree: "B.E. in Computer Science and Engineering", institute: "Laxmi Institute of Technology", period: "2013 — 2017" },
];

function Reveal({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.55, delay }}
    >
      {children}
    </motion.div>
  );
}

function App() {
  const [open, setOpen] = React.useState(false);

  const nav = ["About", "Skills", "Experience", "Projects", "Education", "Contact"];

  return (
    <div className="min-h-screen overflow-x-hidden">
      <header className="fixed top-0 z-50 w-full">
        <div className="mx-auto mt-4 max-w-6xl px-4">
          <nav className="glass flex items-center justify-between rounded-2xl px-4 py-3 shadow-2xl shadow-black/10">
            <a href="#home" className="text-lg font-bold tracking-tight text-white">
              Vishwani<span className="text-cyan-300">.</span>
            </a>

            <div className="hidden items-center gap-6 md:flex">
              {nav.map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-sm text-slate-400 transition hover:text-white">
                  {item}
                </a>
              ))}
            </div>

            <a href="#contact" className="hidden rounded-xl bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100 md:block">
              Let's Talk
            </a>

            <button onClick={() => setOpen(!open)} className="rounded-lg p-2 text-slate-200 md:hidden" aria-label="Toggle navigation">
              {open ? <FiX size={20} /> : <FiMenu size={20} />}
            </button>
          </nav>

          {open && (
            <div className="glass mt-2 rounded-2xl p-3 md:hidden">
              {nav.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3 py-3 text-sm text-slate-300 hover:bg-white/5 hover:text-white"
                >
                  {item}
                </a>
              ))}
            </div>
          )}
        </div>
      </header>

      <main>
        <section id="home" className="grid-bg relative flex min-h-screen items-center px-4 pt-28">
          <div className="mx-auto grid w-full max-w-6xl items-center gap-14 py-20 lg:grid-cols-[1.25fr_.75fr]">
            <div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6 }}>
                <p className="section-label mb-5">Frontend Developer</p>
                <h1 className="max-w-5xl font-black leading-[.88] tracking-[-.055em] text-white">
                  <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
                    Vishwani
                  </span>
                  <span className="gradient-text block text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
                    Patel
                  </span>
                </h1>
                <h2 className="mt-7 max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                  Building digital experiences that work.
                </h2>
                <p className="mt-7 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
                  I’m Vishwani Patel, a frontend developer with 3+ years of experience building scalable web applications with React, Next.js and TypeScript, with hands-on full-stack and mobile development experience.
                </p>

                <div className="mt-9 flex flex-wrap gap-3">
                  <a href="#projects" className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-100">
                    View My Work <FiArrowUpRight size={17} />
                  </a>
                  <a href="/Vishwani_Patel_Frontend_Developer.pdf" download className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                    Download Resume <FiDownload size={17} />
                  </a>
                </div>

                <div className="mt-9 flex items-center gap-4">
                  <a href="https://github.com/VishwaniPatel" target="_blank" rel="noreferrer" className="rounded-xl border border-white/10 p-3 text-slate-400 transition hover:border-white/20 hover:text-white">
                    <FaGithub size={19} />
                  </a>
                  <a href="https://linkedin.com/in/vishwani-patel-915190a8" target="_blank" rel="noreferrer" className="rounded-xl border border-white/10 p-3 text-slate-400 transition hover:border-white/20 hover:text-white">
                    <FaLinkedinIn size={19} />
                  </a>
                  <a href="mailto:vishwanipatel494@gmail.com" className="rounded-xl border border-white/10 p-3 text-slate-400 transition hover:border-white/20 hover:text-white">
                    <FiMail size={19} />
                  </a>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: .92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: .7, delay: .15 }}
              className="relative mx-auto w-full max-w-sm"
            >
              <div className="absolute -inset-8 rounded-full bg-cyan-400/10 blur-3xl" />
              <div className="glass relative rounded-[2rem] p-5">
                <div className="rounded-[1.5rem] border border-white/10 bg-[#0d1117] p-7">
                  <div className="mb-12 flex items-center justify-between">
                    <FiCode className="text-cyan-300" size={34} />
                    <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs text-cyan-200">Available to connect</span>
                  </div>
                  <div className="space-y-3 font-mono text-sm">
                    <p><span className="text-purple-300">const</span> developer = {"{"}</p>
                    <p className="pl-5 text-slate-400">name: <span className="text-cyan-300">"Vishwani"</span>,</p>
                    <p className="pl-5 text-slate-400">focus: <span className="text-cyan-300">"Frontend"</span>,</p>
                    <p className="pl-5 text-slate-400">stack: <span className="text-cyan-300">"React"</span>,</p>
                    <p className="pl-5 text-slate-400">experience: <span className="text-cyan-300">"3+ years"</span></p>
                    <p>{"}"}</p>
                  </div>
                  <div className="mt-10 grid grid-cols-2 gap-3">
                    <div className="rounded-2xl border border-white/10 p-4">
                      <p className="text-2xl font-bold text-white">3+</p>
                      <p className="mt-1 text-xs text-slate-500">Years experience</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 p-4">
                      <p className="text-2xl font-bold text-white">9+</p>
                      <p className="mt-1 text-xs text-slate-500">Projects</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-6xl px-4 py-24">
          <Reveal>
            <p className="section-label">01 / About</p>
            <div className="mt-5 grid gap-8 lg:grid-cols-[.8fr_1.2fr]">
              <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">I turn ideas into usable interfaces.</h2>
              <div className="text-slate-400">
                <p className="text-lg leading-8">
                  Frontend Developer with 3+ years of experience building scalable, high-performance web applications using React, Next.js, and Angular.
                </p>
                <p className="mt-5 leading-7">
                  My experience spans fintech, SaaS, full-stack applications and cross-platform mobile products. I enjoy building reusable components, integrating APIs, improving performance and translating designs into polished experiences.
                </p>
              </div>
            </div>
          </Reveal>
        </section>

        <section id="skills" className="border-y border-white/5 bg-white/[.015] px-4 py-24">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <p className="section-label">02 / Skills</p>
              <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">My toolkit</h2>
            </Reveal>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {Object.entries(skills).map(([category, items], index) => (
                <Reveal key={category} delay={index * .05}>
                  <div className="glass h-full rounded-2xl p-6">
                    <h3 className="font-semibold text-white">{category}</h3>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {items.map((skill) => (
                        <span key={skill} className="rounded-lg border border-white/10 bg-white/[.035] px-3 py-2 text-xs text-slate-300">{skill}</span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="mx-auto max-w-6xl px-4 py-24">
          <Reveal>
            <p className="section-label">03 / Experience</p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">Where I’ve worked</h2>
          </Reveal>

          <div className="mt-12">
            {experience.map((job, index) => (
              <Reveal key={`${job.company}-${job.period}`} delay={index * .05}>
                <div className="relative grid gap-5 border-l border-white/10 pb-12 pl-8 last:pb-0 md:grid-cols-[.7fr_1.3fr] md:gap-12">
                  <span className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full bg-cyan-300 ring-8 ring-[#0b0d10]" />
                  <div>
                    <p className="text-sm text-cyan-300">{job.period}</p>
                    <h3 className="mt-2 text-xl font-bold text-white">{job.company}</h3>
                    <p className="mt-1 text-sm text-slate-500">{job.location}</p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white">{job.role}</h4>
                    {job.points.length > 0 && (
                      <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-400">
                        {job.points.map((point) => <li key={point} className="relative pl-5 before:absolute before:left-0 before:top-3 before:h-1 before:w-1 before:rounded-full before:bg-cyan-300">{point}</li>)}
                      </ul>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="projects" className="border-y border-white/5 bg-white/[.015] px-4 py-24">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <p className="section-label">04 / Selected Work</p>
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">Things I’ve built</h2>
                <p className="max-w-md text-sm leading-6 text-slate-500">A selection of web, mobile and full-stack work from my professional and personal projects.</p>
              </div>
            </Reveal>

            <div className="mt-10 grid gap-5 lg:grid-cols-2">
              {projects.map((project, index) => (
                <Reveal key={project.title} delay={(index % 2) * .06}>
                  <article className={`group h-full rounded-3xl border border-white/10 bg-[#101419] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/25 ${project.featured ? "lg:p-7" : ""}`}>
                    <div className="flex items-start justify-between gap-5">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[.14em] text-cyan-300">{project.type}</p>
                        <h3 className="mt-2 text-2xl font-bold text-white">{project.title}</h3>
                      </div>
                      <FiExternalLink className="shrink-0 text-slate-600 transition group-hover:text-cyan-300" size={20} />
                    </div>
                    <p className="mt-5 max-w-xl text-sm leading-7 text-slate-400">{project.description}</p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.tech.map((tech) => <span key={tech} className="rounded-full bg-white/5 px-3 py-1.5 text-xs text-slate-400">{tech}</span>)}
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="education" className="mx-auto max-w-6xl px-4 py-24">
          <Reveal>
            <p className="section-label">05 / Education</p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">Academic background</h2>
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {education.map((item, index) => (
              <Reveal key={item.degree} delay={index * .06}>
                <div className="glass rounded-2xl p-6">
                  <PiGraduationCap className="text-cyan-300" size={26} />
                  <p className="mt-7 text-xs font-semibold uppercase tracking-[.14em] text-slate-500">{item.period}</p>
                  <h3 className="mt-2 text-xl font-bold text-white">{item.degree}</h3>
                  <p className="mt-2 text-sm text-slate-400">{item.institute}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="contact" className="px-4 pb-24 pt-10">
          <Reveal>
            <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-cyan-300/10 bg-gradient-to-br from-cyan-300/10 via-white/[.03] to-purple-400/10 p-8 sm:p-12 lg:p-16">
              <p className="section-label">06 / Contact</p>
              <div className="mt-5 grid gap-10 lg:grid-cols-[1.1fr_.9fr] lg:items-end">
                <div>
                  <h2 className="text-4xl font-black tracking-tight text-white sm:text-6xl">Let’s build something useful.</h2>
                  <p className="mt-5 max-w-xl leading-7 text-slate-400">
                    Have a project, opportunity or idea? I’d love to hear about it.
                  </p>
                </div>
                <div className="space-y-3">
                  <a href="mailto:vishwanipatel494@gmail.com" className="flex items-center gap-4 rounded-2xl border border-white/10 bg-black/10 p-4 text-sm text-slate-300 transition hover:border-white/20 hover:text-white">
                    <FiMail size={19} className="text-cyan-300" />
                    vishwanipatel494@gmail.com
                  </a>
                  <a href="https://linkedin.com/in/vishwani-patel-915190a8" target="_blank" rel="noreferrer" className="flex items-center gap-4 rounded-2xl border border-white/10 bg-black/10 p-4 text-sm text-slate-300 transition hover:border-white/20 hover:text-white">
                    <FaLinkedinIn size={19} className="text-cyan-300" />
                    LinkedIn
                  </a>
                  <a href="https://github.com/VishwaniPatel" target="_blank" rel="noreferrer" className="flex items-center gap-4 rounded-2xl border border-white/10 bg-black/10 p-4 text-sm text-slate-300 transition hover:border-white/20 hover:text-white">
                    <FaGithub size={19} className="text-cyan-300" />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="border-t border-white/5 px-4 py-7">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-3 text-xs text-slate-600 sm:flex-row">
          <span>© {new Date().getFullYear()} Vishwani Patel</span>
          <span>Designed & built with React</span>
        </div>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
