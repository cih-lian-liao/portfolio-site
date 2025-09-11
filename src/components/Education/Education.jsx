import React from "react";

/**
 * Education.jsx – Simple, single‑column cards
 *
 * - One card per row, black/white/gray aesthetic
 * - Native <details>/<summary> accordions
 * - Course lists always single column
 * - Arrow indicator only, no extra show/hide text
 */

export default function Education() {
  return (
    <section id="education" className="mx-auto max-w-3xl px-4 py-20 text-neutral-800">
      <header className="mb-10 text-center">
        <h2 className="font-serif text-3xl text-neutral-900">Education</h2>
        <p className="mt-2 text-sm text-neutral-500">A clear snapshot of my academic background.</p>
      </header>

      <div className="flex flex-col gap-6">
        {/* Northeastern */}
        <article className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
          <div className="flex items-baseline justify-between gap-3">
            <h3 className="font-serif text-xl text-neutral-900">Northeastern University</h3>
            <span className="text-xs text-neutral-500">2024 – 2026 · Expected Graduation Dec 2026</span>
          </div>
          <p className="mt-1 text-sm text-neutral-600">M.S. Information Systems</p>

          <details className="mt-4 group">
            <summary className="cursor-pointer select-none text-sm text-neutral-800 hover:text-neutral-900 flex items-center justify-between">
              <span>Selected Coursework</span>
              <span className="transition-transform group-open:rotate-180">▾</span>
            </summary>
            <ul className="mt-2 list-disc ps-5 text-sm text-neutral-700 space-y-1">
              <li>Application Modeling & Design (Java)</li>
              <li>Intro to Python for Information Systems</li>
              <li>Application Engineering & Development (Java)</li>
              <li>Web Design & UX (HTML, CSS, JavaScript, React, Vite)</li>
              <li>Data Management & Database Design (MySQL)</li>
              <li>Program Structure & Algorithms (Java)</li>
              <li>User Experience in the Era of Gen AI</li>
            </ul>
          </details>
        </article>

        {/* UC Santa Cruz */}
        <article className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
          <div className="flex items-baseline justify-between gap-3">
            <h3 className="font-serif text-xl text-neutral-900">UC Santa Cruz</h3>
            <span className="text-xs text-neutral-500">2023 – 2024</span>
          </div>
          <p className="mt-1 text-sm text-neutral-600">Full‑time Certificate Programs</p>

          {/* Programming */}
          <details className="mt-4 group">
            <summary className="cursor-pointer select-none text-sm font-medium text-neutral-800 hover:text-neutral-900 flex items-center justify-between">
              <span>Computer Programming Certification</span>
              <span className="transition-transform group-open:rotate-180">▾</span>
            </summary>
            <ul className="mt-2 list-disc ps-5 text-sm text-neutral-700 space-y-1">
              <li>Java Programming I</li>
              <li>Python Programming for Beginners</li>
              <li>Python for Programmers</li>
              <li>Python: Object‑Oriented Programming</li>
              <li>Mobile Application Development – Android & iOS (Intro)</li>
              <li>Object‑Oriented Analysis and Design</li>
              <li>Java Programming II</li>
              <li>Data Structures and Algorithms Using Python</li>
            </ul>
          </details>

          {/* Data Science */}
          <details className="mt-4 group">
            <summary className="cursor-pointer select-none text-sm font-medium text-neutral-800 hover:text-neutral-900 flex items-center justify-between">
              <span>Data Science Certification</span>
              <span className="transition-transform group-open:rotate-180">▾</span>
            </summary>
            <ul className="mt-2 list-disc ps-5 text-sm text-neutral-700 space-y-1">
              <li>Relational Database Design and SQL Programming</li>
              <li>NoSQL Databases (Intro)</li>
              <li>Big Data (Intro)</li>
              <li>Python for Data Analysis</li>
              <li>Data Engineering with Hadoop</li>
              <li>Data Analysis (Intro)</li>
            </ul>
          </details>
        </article>

        {/* NCCU */}
        <article className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
          <div className="flex items-baseline justify-between gap-3">
            <h3 className="font-serif text-xl text-neutral-900">National Cheng‑Chi University</h3>
            <span className="text-xs text-neutral-500">2013 – 2019</span>
          </div>
          <p className="mt-1 text-sm text-neutral-600">B.A. Korean Culture & Literature</p>
        </article>
      </div>
    </section>
  );
}
