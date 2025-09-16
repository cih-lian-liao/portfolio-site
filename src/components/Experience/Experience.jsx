import React from "react";
import "./Experience.css";

export default function Experience() {
  const experiences = [
    {
      title: "Translator & Interpreter (Korean ↔ Chinese)",
      company: "Taiwan",
      date: "2019 – 2023",
      icon: "🌐",
      paragraph:
        "I worked as a professional translator and interpreter, specializing in Korean–Chinese interpretation for business meetings, media productions, and international events. These experiences sharpened my ability to communicate clearly across cultures, coordinate with multinational teams, and adapt quickly in high-pressure environments.",
      highlight:
        "Clear communication and adaptability became the foundation of my career shift into technology.",
    },
    {
      title: "Platform Operations & Project Coordinator",
      company: "Taiwan Chingu",
      date: "2021 – 2023",
      icon: "⚙️",
      paragraph:
        "In addition to language services, I helped manage a translation talent platform. My role went beyond daily operations—I collaborated closely with engineers, providing usability feedback that improved workflows and user experience. This was my first hands-on exposure to the impact of technology on connecting people.",
      highlight:
        "This experience sparked my conviction that technology has the power to connect and empower communities at scale.",
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
            <div key={index} className="experience-item">
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
                      <span className="date">{exp.date}</span>
                    </div>
                  </div>
                </div>

                <div className="experience-content">
                  <p className="experience-description">{exp.paragraph}</p>
                  
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
