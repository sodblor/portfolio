"use client";
import React, { useState } from "react";

export default function HomePage() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <main className="min-h-screen bg-gradient-to-b from-rose-50 via-rose-50/40 to-amber-50/40 text-slate-900 dark:from-slate-900 dark:via-slate-950 dark:to-slate-950">
      <header className="sticky top-0 z-30 border-b border-rose-100/60 bg-rose-50/70 dark:bg-slate-900/70 backdrop-blur supports-[backdrop-filter]:bg-rose-50/70">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative h-8 w-8">
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-rose-300 via-rose-400 to-rose-500 shadow-sm shadow-rose-300/60" />
                <div className="absolute inset-1 rounded-full bg-rose-50/60 dark:bg-slate-900/80" />
              </div>
              <span className="text-sm font-semibold tracking-tight uppercase text-rose-500">Portfolio</span>
            </div>
            <nav className="hidden md:flex items-center gap-8 text-xs font-medium tracking-wide text-slate-700 dark:text-slate-200">
              <a className="hover:text-rose-500 transition-colors" href="#about">About</a>
              <a className="hover:text-rose-500 transition-colors" href="#projects">Projects</a>
              <a className="hover:text-rose-500 transition-colors" href="#skills">Skills</a>
              <a className="hover:text-rose-500 transition-colors" href="#contact">Contact</a>
            </nav>
            <button
              className="md:hidden inline-flex items-center justify-center p-2 rounded-full border border-rose-100/80 bg-rose-50/80 text-slate-900 shadow-sm"
              aria-label="Toggle menu"
              onClick={() => setMobileOpen((v) => !v)}
            >
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {mobileOpen ? (
                  <path d="M18 6L6 18M6 6l12 12" />
                ) : (
                  <path d="M3 6h18M3 12h18M3 18h18" />
                )}
              </svg>
            </button>
          </div>
          {mobileOpen && (
            <div className="md:hidden pb-4">
              <nav className="flex flex-col gap-1 text-sm text-slate-800 dark:text-slate-100">
                <a
                  className="px-3 py-2 rounded-lg hover:bg-rose-100/80 dark:hover:bg-slate-800"
                  href="#about"
                  onClick={() => setMobileOpen(false)}
                >
                  About
                </a>
                <a
                  className="px-3 py-2 rounded-lg hover:bg-rose-100/80 dark:hover:bg-slate-800"
                  href="#projects"
                  onClick={() => setMobileOpen(false)}
                >
                  Projects
                </a>
                <a
                  className="px-3 py-2 rounded-lg hover:bg-rose-100/80 dark:hover:bg-slate-800"
                  href="#skills"
                  onClick={() => setMobileOpen(false)}
                >
                  Skills
                </a>
                <a
                  className="px-3 py-2 rounded-lg hover:bg-rose-100/80 dark:hover:bg-slate-800"
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                >
                  Contact
                </a>
              </nav>
            </div>
          )}
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-90">
          <div className="absolute -left-32 -top-24 h-64 w-64 rounded-full bg-rose-200/70 blur-3xl" />
          <div className="absolute right-[-4rem] top-40 h-72 w-72 rounded-full bg-pink-200/60 blur-3xl" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white/90 dark:from-slate-950/95" />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] items-center">
            <div>
              <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight text-slate-900 dark:text-slate-50">
                SODBOLOR.B
                <span className="block text-2xl sm:text-3xl font-normal text-rose-500 mt-2">
                  Designer &amp; Developer
                </span>
              </h1>
              <p className="mt-5 max-w-xl text-sm sm:text-base text-slate-600 dark:text-slate-300">
                Its all about building my skills and sharing what I can do on the web. From simple interfaces to full
                experiences, I like making things that feel modern, soft, and easy to use.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center rounded-full bg-rose-500 px-5 py-2.5 text-sm font-medium text-white shadow-sm shadow-rose-300/70 hover:bg-rose-600 transition"
                >
                  View projects
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full border border-rose-200 bg-rose-50/60 px-5 py-2.5 text-sm font-medium text-rose-600 hover:bg-rose-100/80 transition"
                >
                  Let's work together
                </a>
              </div>
              <div className="mt-8 flex flex-wrap gap-4 text-[11px] font-medium text-slate-500 dark:text-slate-300">
                <div className="inline-flex items-center gap-2">
                  <span className="h-5 w-5 rounded-full bg-rose-200/60 ring-1 ring-rose-300/80" />
                  Product design
                </div>
                <div className="inline-flex items-center gap-2">
                  <span className="h-5 w-5 rounded-full bg-pink-200/60 ring-1 ring-pink-300/80" />
                  Frontend development
                </div>
                <div className="inline-flex items-center gap-2">
                  <span className="h-5 w-5 rounded-full bg-rose-100/70 ring-1 ring-rose-200/80" />
                  Brand &amp; visuals
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="mx-auto h-64 w-64 sm:h-72 sm:w-72 rounded-[2rem] bg-rose-100/70 p-3 shadow-[0_18px_60px_rgba(244,114,182,0.35)]">
                <div className="relative flex h-full w-full overflow-hidden rounded-[1.6rem] bg-white/90 dark:bg-slate-900/90">
                  <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-rose-300 via-rose-400 to-pink-300 opacity-80" />
                  <div className="absolute right-[-3rem] bottom-[-3rem] h-40 w-40 rounded-full bg-gradient-to-tr from-amber-200 via-rose-200 to-pink-100 opacity-80" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-14 sm:py-18">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-[minmax(0,1.4fr)] items-start">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-50">
                About myself
              </h2>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300">
                I am a student at Amjilt Cyber School, currently in 12th grade, learning and growing in modern web
                development. I enjoy using JavaScript, HTML, CSS, React, and Next.js to build real projects and see my ideas
                live on the screen.
              </p>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300">
                Outside of coding, I like playing soccer and volleyball for fun, and I live for music. Daniel Caesar is one
                of my all-time favourites, along with many more artists that keep me inspired while I create.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-16 sm:py-20 bg-rose-50/80 dark:bg-slate-950/40">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-50">
                MY PROJECTS
              </h2>
              <p className="mt-2 max-w-md text-sm text-slate-600 dark:text-slate-300">
                My projects showcase my skills in frontend development with modern technologies.
              </p>
            </div>
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-rose-400">More upon request</p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Tourist Website",
                role: "Frontend Project",
                description:
                  "A travel-inspired website with smooth sections, soft colors, and clear information for visitors.",
                year: "2025",
              },
              {
                title: "Calculator",
                role: "JavaScript UI",
                description:
                  "A clean calculator interface built with HTML, CSS, and JavaScript focusing on simple interactions.",
                year: "2025",
              },
              {
                title: "Movie Web",
                role: "React Project",
                description:
                  "A movie browsing experience with cards, details, and a modern layout powered by React.",
                year: "2025",
              },
              {
                title: "Weather Web",
                role: "API & UI",
                description:
                  "A weather interface that shows current conditions in a soft, minimal card-based design.",
                year: "2025",
              },
              {
                title: "Game Site",
                role: "Interactive UI",
                description:
                  "A playful website for games with bold typography, buttons, and interactive elements.",
                year: "2025",
              },
              {
                title: "Ecommerce",
                role: "Next.js / Frontend",
                description:
                  "An ecommerce-style layout with product cards, soft pink accents, and a clean shopping flow.",
                year: "2025",
              },
            ].map((project) => (
              <article
                key={project.title}
                className="group flex flex-col rounded-2xl border border-rose-100 bg-white/80 p-4 pt-5 shadow-sm shadow-rose-100/60 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-rose-200/80 dark:border-slate-800 dark:bg-slate-900/80"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-50">{project.title}</h3>
                  <span className="rounded-full bg-rose-50 px-3 py-1 text-[10px] font-medium text-rose-500 ring-1 ring-rose-100 group-hover:bg-rose-500 group-hover:text-white group-hover:ring-rose-400">
                    {project.year}
                  </span>
                </div>
                <p className="mt-2 text-[11px] font-medium uppercase tracking-[0.16em] text-rose-400">{project.role}</p>
                <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {project.description}
                </p>
                <div className="mt-4 flex items-center justify-between text-[11px] text-slate-500">
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-50">
                Skills & tools
              </h2>
              <p className="mt-2 max-w-md text-sm text-slate-600 dark:text-slate-300">
                A mix of design and development skills to help ship polished experiences from concept to production.
              </p>
            </div>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-3 text-xs sm:text-sm">
            <div className="rounded-2xl border border-rose-100 bg-rose-50/80 p-4 dark:border-slate-800 dark:bg-slate-900/70">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-rose-400">Core skills</p>
              <ul className="mt-3 space-y-1.5 text-slate-700 dark:text-slate-200">
                <li>JavaScript</li>
                <li>HTML</li>
                <li>CSS</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-rose-100 bg-rose-50/60 p-4 dark:border-slate-800 dark:bg-slate-900/70">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-rose-400">Frontend</p>
              <ul className="mt-3 space-y-1.5 text-slate-700 dark:text-slate-200">
                <li>React</li>
                <li>Next.js</li>
                <li>Component-based UI</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-rose-100 bg-rose-50/40 p-4 dark:border-slate-800 dark:bg-slate-900/70">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-rose-400">Web basics</p>
              <ul className="mt-3 space-y-1.5 text-slate-700 dark:text-slate-200">
                <li>Responsive layouts</li>
                <li>Clean, modern styling</li>
                <li>Project-focused learning</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-rose-100 bg-rose-50/80 p-6 sm:p-8 shadow-sm shadow-rose-100/60 dark:border-slate-800 dark:bg-slate-900/80">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-50">
                  CONTACT ME!!!
                </h2>
              </div>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 text-xs sm:text-sm">
              <a
                href="mailto:sodooulzii21@gmail.com"
                className="flex items-center justify-between rounded-2xl border border-rose-100 bg-white/90 px-4 py-3 text-left font-medium text-slate-800 shadow-sm hover:border-rose-300 hover:shadow-md hover:shadow-rose-200/80 transition dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-100"
              >
                <span>Email</span>
                <span className="text-[11px] text-rose-500">sodooulzii21@gmail.com</span>
              </a>
              <a
                href="https://github.com/sodblor"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between rounded-2xl border border-rose-100 bg-white/90 px-4 py-3 text-left font-medium text-slate-800 shadow-sm hover:border-rose-300 hover:shadow-md hover:shadow-rose-200/80 transition dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-100"
              >
                <span>GitHub</span>
                <span className="text-[11px] text-rose-500">github.com/sodblor</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

