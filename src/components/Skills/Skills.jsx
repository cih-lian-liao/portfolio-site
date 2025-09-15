import SkillSection from "./SkillSection";
import "./skills.css";

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">

        <SkillSection
          title="Core Skills"
          skills={[
            "HTML5",
            "CSS3",
            "JavaScript (ES6+)",
            "React.js",
            "React Router",
            "Redux / Context API",
            "Tailwind CSS",
            "Material UI",
            "Git / GitHub",
            "CI/CD",
            "Testing (Jest, RTL)",
            "Vite / Webpack",
          ]}
        />

        <SkillSection
          title="Programming Languages"
          skills={["Java", "Python", "JavaScript"]}
        />

        <SkillSection
          title="AI-Related Skills"
          skills={[
            "OpenAI API",
            "Prompt Engineering",
            "GitHub Copilot",
          ]}
        />

        <SkillSection
          title="Plus Skills"
          skills={[
            "Node.js + Express.js",
            "MySQL",
            "MongoDB",
            "REST / GraphQL API",
            "Cloud Deployment",
          ]}
        />

        <SkillSection
          title="Languages I Speak"
          skills={["Mandarin Chinese", "Korean", "English"]}
        />
      </div>
      <div className="divider"></div>
    </section>
  );
}
