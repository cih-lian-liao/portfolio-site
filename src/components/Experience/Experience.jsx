import React from "react";

export default function Experience() {
  const experiences = [
    {
      title: "Translator & Interpreter (Korean ↔ Chinese)",
      company: "Taiwan",
      date: "2019 – 2023",
      paragraph:
        "I worked as a professional translator and interpreter, specializing in Korean–Chinese interpretation for business meetings, media productions, and international events. These experiences sharpened my ability to communicate clearly across cultures, coordinate with multinational teams, and adapt quickly in high-pressure environments.",
      highlight:
        "Clear communication and adaptability became the foundation of my career shift into technology.",
    },
    {
      title: "Platform Operations & Project Coordinator",
      company: "Taiwan Chingu",
      date: "2021 – 2023",
      paragraph:
        "In addition to language services, I helped manage a translation talent platform. My role went beyond daily operations—I collaborated closely with engineers, providing usability feedback that improved workflows and user experience. This was my first hands-on exposure to the impact of technology on connecting people.",
      highlight:
        "This experience sparked my conviction that technology has the power to connect and empower communities at scale.",
    },
  ];

  return (
    <section
      id="experience"
      className="min-h-screen bg-[#f9f9f9] flex flex-col items-center py-16 px-6"
    >
      <h2 className="text-4xl font-bold text-gray-900 mb-12 tracking-wide">
        Experience
      </h2>

      <div className="max-w-3xl w-full space-y-10">
        {experiences.map((exp, index) => (
          <div key={index} className="relative border-l-4 border-gray-800 pl-6">
            {/* Circle marker */}
            <span className="absolute -left-3 top-2 w-5 h-5 rounded-full bg-gray-800 border-4 border-white"></span>

            <div className="bg-white rounded-2xl shadow-md p-6 transition-transform transform hover:-translate-y-1 hover:shadow-xl">
              <h3 className="text-xl font-semibold text-gray-900">
                {exp.title}
              </h3>
              <p className="text-sm text-gray-500 mb-3">
                {exp.company} · {exp.date}
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                {exp.paragraph}
              </p>
              <blockquote className="italic text-gray-600 border-l-4 border-gray-800 pl-4">
                “{exp.highlight}”
              </blockquote>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
