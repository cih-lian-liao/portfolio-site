import React, { useState } from "react";
import "./Projects.css";
import projects from "./projects.js";

export default function Projects() {
  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
    <section id="projects" className="bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-700 rounded-full mb-6 shadow-lg">
            <span className="text-white text-2xl">🚀</span>
          </div>
          <h2 className="text-4xl font-semibold text-gray-800 mb-4 tracking-wide">
            Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            A collection of my work showcasing full-stack development, data analysis, and creative problem-solving
          </p>
          <div className="w-40 h-0.5 bg-gray-400 mx-auto rounded-full mt-6"></div>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {projects.map((p) => (
            <article key={p.id} className="project-card group">
              {/* Card Header */}
              <div className="project-header">
                <div className="project-icon">
                  <span className="text-2xl">{p.emoji}</span>
                </div>
                <div className="project-title-section">
                  <h3 className="project-title">{p.title}</h3>
                </div>
              </div>

              {/* Project Summary */}
              <p className="project-summary">{p.summary}</p>

              {/* Tech Stack */}
              <div className="project-tech">
                {p.tech.map((t) => (
                  <span key={t} className="tech-tag">{t}</span>
                ))}
              </div>

              {/* Actions */}
              <div className="project-actions">
                <button
                  className="project-toggle-btn"
                  onClick={() => toggleExpand(p.id)}
                  aria-expanded={expanded === p.id}
                  aria-controls={`details-${p.id}`}
                >
                  <span>{expanded === p.id ? "Hide Details" : "View Details"}</span>
                  <svg
                    className={`chevron ${expanded === p.id ? 'rotated' : ''}`}
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

                <div className="project-links">
                  <a href={p.demo} target="_blank" rel="noreferrer" className="project-link">
                    Demo
                  </a>
                  <span className="link-separator">|</span>
                  <a href={p.repo} target="_blank" rel="noreferrer" className="project-link">
                    GitHub
                  </a>
                </div>
              </div>

              {/* Expandable Details */}
              {expanded === p.id && (
                <div id={`details-${p.id}`} className="project-details">
                  {p.details.map((d, i) => {
                    if (d === "Highlights:") {
                      return (
                        <h4 key={i} className="details-title">
                          {d}
                        </h4>
                      );
                    } else if (d.startsWith("-")) {
                      return (
                        <ul key={i} className="details-list">
                          <li>{d.replace("-", "").trim()}</li>
                        </ul>
                      );
                    } else {
                      return <p key={i} className="details-text">{d}</p>;
                    }
                  })}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
