import React, { useState } from "react";
import "./projects.css";
import projects from "./projects.js"; // 確認這個檔案 default export 了陣列

export default function Projects() {
  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
    <section className="projects">
      <h2 className="projects__title">Projects</h2>
      <div className="projects__grid">
        {projects.map((p) => (
          <article key={p.id} className="project-card">
            <div className="project-card__head">
              <span className="project-card__emoji">{p.emoji}</span>
              <h3>{p.title}</h3>
            </div>

            <p className="project-card__summary">{p.summary}</p>

            <ul className="project-card__tags">
              {p.tech.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>

            <div className="project-card__actions">
              {/* 帶箭頭的展開按鈕 */}
              <button
                className="project-card__toggle"
                onClick={() => toggleExpand(p.id)}
                aria-expanded={expanded === p.id}
                aria-controls={`details-${p.id}`}
              >
                <span>{expanded === p.id ? "Hide Details" : "View Details"}</span>
                <svg
                  className="chevron"
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                  aria-hidden="true"
                >
                  <path
                    d="M6 9l6 6 6-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <div>
                <a href={p.demo} target="_blank" rel="noreferrer">Demo</a>{" "}
                |{" "}
                <a href={p.repo} target="_blank" rel="noreferrer">GitHub</a>
              </div>
            </div>

            {expanded === p.id && (
              <div id={`details-${p.id}`} className="project-card__details">
                {p.details.map((d, i) => {
                  if (d === "Highlights:") {
                    return (
                      <h4 key={i} className="project-card__details-title">
                        {d}
                      </h4>
                    );
                  } else if (d.startsWith("-")) {
                    return (
                      <ul key={i} className="project-card__details-list">
                        <li>{d.replace("-", "").trim()}</li>
                      </ul>
                    );
                  } else {
                    return <p key={i}>{d}</p>;
                  }
                })}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
