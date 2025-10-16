import React from "react";
import "./Experience.css";

export default function Experience() {
  const experiences = [
    {
      title: "Software Engineer Intern – Frontend Development",
      company: "WeWave",
      location: "Fremont, CA",
      date: "Jun 2025 – Aug 2025",
      icon: "💻",
      paragraph:
        "At WeWave, I contributed to the development of a financial analytics dashboard used by enterprise clients to visualize large-scale transaction data. The main challenge was improving rendering efficiency and responsiveness when dealing with significantly larger datasets.",
      details: [
        "I optimized the React architecture by restructuring component hierarchies, implementing lazy loading, and fine-tuning Recharts rendering logic to support 10× more data without sacrificing interactivity.",
        "Additionally, I enhanced product analytics by integrating Google Analytics 4 (GA4) and setting up A/B usability experiments, which led to a 10% reduction in user drop-offs through data-driven UI improvements.",
        "To ensure a seamless checkout experience, I implemented and tested Stripe Checkout flows using the React-Stripe.js library and added reCAPTCHA for advanced validation and bot prevention."
      ],
      techStack: "React, MUI, Recharts, React-Stripe.js, GA4, reCAPTCHA, JavaScript (ES6+)",
      highlight:
        "These optimizations improved payment reliability and cross-browser consistency across the platform.",
    },
    {
      title: "Software Engineer Intern – Forum & E-Commerce Platform",
      company: "Racing Pigeon Alliance",
      location: "Taiwan",
      date: "Jun 2024 – Aug 2024",
      icon: "🌐",
      paragraph:
        "During my internship at Racing Pigeon Alliance, I worked on transforming a legacy PHP/jQuery web application into a modern React-based architecture. The goal was to improve performance, maintainability, and user experience for an active online community.",
      details: [
        "I migrated the platform to React (ES6+), modularized UI components for better reusability, and integrated Facebook and LINE APIs to support social login and content sharing.",
        "These changes modernized the codebase, simplified future maintenance, and increased user registrations by 20%.",
        "To better serve the platform's primarily senior audience, I redesigned the interface with accessibility and readability in mind."
      ],
      techStack: "React (ES6+), HTML5, CSS3, JavaScript, Facebook & LINE APIs",
      highlight:
        "This included optimizing contrast ratios, enlarging interactive elements, and ensuring proper semantic structure for screen readers—raising post-launch satisfaction scores by approximately 15%.",
    },
    {
      title: "Product & Project Manager – Interpretation Talent Platform",
      company: "Taiwan Chingu",
      location: "Taiwan",
      date: "Full-time, 2019 – 2023",
      icon: "🌏",
      paragraph:
        "Before transitioning fully into software engineering, I worked as a Product and Project Manager at Taiwan Chingu, a multilingual interpretation and translation platform connecting global clients with professional translators. My role bridged both product strategy and technical implementation.",
      details: [
        "I collaborated closely with engineers and designers to rebuild the platform's core translation workflow using modern web technologies.",
        "Through iterative design testing, user feedback sessions, and front-end refactoring in React and JavaScript, we improved platform navigation, UI responsiveness, and overall accessibility—reducing support tickets by about 30%.",
        "In parallel, I led Agile sprint planning and managed multiple client-facing interpretation projects, ensuring feature releases were delivered on schedule and aligned with business goals."
      ],
      techStack: "React, JavaScript (ES6+), Figma, Agile / Scrum",
      highlight:
        "This experience helped shape my product mindset and deepened my understanding of how design and engineering work together to enhance user experience.",
    },
  ];

  return (
    <section id="experience" className="bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-700 rounded-full mb-6 shadow-lg">
            <span className="text-white text-2xl">💼</span>
          </div>
          <h2 className="text-4xl font-semibold text-gray-800 mb-4 tracking-wide">
            Experience
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Professional journey that shaped my transition into technology and development
          </p>
          <div className="w-40 h-0.5 bg-gray-400 mx-auto rounded-full mt-6"></div>
        </div>

        {/* Experience Cards */}
        <div className="experience-grid">
          {experiences.map((exp, index) => (
            <div key={exp.company} className="experience-item">
              {/* Experience Card */}
              <div className="experience-card">
                <div className="experience-header">
                  <div className="experience-icon">
                    <span className="text-2xl">{exp.icon}</span>
                  </div>
                  <div className="experience-info">
                    <h3 className="experience-title">{exp.title}</h3>
                    <div className="experience-meta">
                      <span className="company">{exp.company}</span>
                      <span className="location">{exp.location}</span>
                      <span className="date">{exp.date}</span>
                    </div>
                  </div>
                </div>

                <div className="experience-content">
                  <p className="experience-description">{exp.paragraph}</p>
                  
                  {exp.details && (
                    <div className="experience-details">
                      {exp.details.map((detail, detailIndex) => (
                        <p key={`${exp.company}-detail-${detailIndex}`} className="detail-item">
                          {detail}
                        </p>
                      ))}
                    </div>
                  )}
                  
                  {exp.techStack && (
                    <div className="tech-stack">
                      <div className="tech-stack-label">
                        <span className="text-sm font-medium text-gray-600">Tech Stack:</span>
                      </div>
                      <div className="tech-stack-items">
                        {exp.techStack}
                      </div>
                    </div>
                  )}
                  
                  <div className="experience-highlight">
                    <div className="highlight-icon">
                      <span className="text-lg">💡</span>
                    </div>
                    <blockquote className="highlight-text">
                      "{exp.highlight}"
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
