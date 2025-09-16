import "./Skills.css";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        "HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "React Router",
        "Redux / Context API", "Tailwind CSS", "Material UI", "Vite / Webpack"
      ]
    },
    {
      title: "Backend & Database",
      skills: [
        "Node.js + Express.js", "Java", "Python", "MySQL", "MongoDB",
        "REST / GraphQL API", "Cloud Deployment", "Git / GitHub", "CI/CD"
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        "Testing (Jest, RTL)", "OpenAI API", "Prompt Engineering", 
        "GitHub Copilot"
      ]
    },
    {
      title: "Languages & Soft Skills",
      skills: [
        "Mandarin Chinese", "Korean", "English", "Communication", 
        "Team Collaboration", "Problem Solving", "Adaptability", "Leadership"
      ]
    }
  ];

  return (
    <section id="skills" className="bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-700 rounded-full mb-6 shadow-lg">
            <span className="text-white text-2xl">⚡</span>
          </div>
          <h2 className="text-4xl font-semibold text-gray-800 mb-4 tracking-wide">
            Skills & Expertise
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Technical skills and tools I use to build modern web applications
          </p>
          <div className="w-40 h-0.5 bg-gray-400 mx-auto rounded-full mt-6"></div>
        </div>

        {/* Skills Container */}
        <div className="skills-container">
          {skillCategories.map((category, index) => (
            <div key={category.title} className="skill-category">
              <h3 className="skill-category-title">{category.title}</h3>
              <div className="skill-tags">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
