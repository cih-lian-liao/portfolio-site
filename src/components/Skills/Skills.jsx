import SkillSection from "./SkillSection";
import "./skills.css";

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <h2 className="skills-h2">Skills</h2>

        <SkillSection
          title="Core Skills"
          skills={[
            "HTML5 (semantic tags, form validation, basic SEO)",
            "CSS3 (Flexbox, Grid, animations, responsive web design)",
            "JavaScript (ES6+)",
            "React.js (Hooks, Props, Component Lifecycle)",
            "React Router (SPA routing, dynamic routing)",
            "State Management (Redux / Context API)",
            "Tailwind CSS, Material UI",
            "Git / GitHub, CI/CD (GitHub Actions)",
            "Testing (Jest, React Testing Library)",
            "Build Tools (Vite / Webpack)",
          ]}
        />

        <SkillSection
          title="Programming Languages"
          skills={[
            "Java (object-oriented programming, basic backend development)",
            "Python (data processing, web development, AI integration)",
            "JavaScript (ES6+)",
          ]}
        />

        <SkillSection
          title="AI-Related Skills"
          skills={[
            "OpenAI API / ChatGPT API integration",
            "Prompt Engineering",
            "GitHub Copilot / Cursor AI",
            "Hugging Face Models",
            "TensorFlow.js / ONNX.js",
            "LangChain.js",
            "Semantic Search / Vector Databases (Pinecone)",
          ]}
        />

        <SkillSection
          title="Plus Skills"
          skills={[
            "TypeScript (type safety)",
            "Accessibility (a11y) (ARIA labels, keyboard navigation support)",
            "Performance Optimization (Lazy Loading, Code Splitting)",
            "Node.js + Express.js",
            "Database Basics (MySQL / MongoDB — data modeling, CRUD operations, query optimization)",
            "Data Integration (REST API / GraphQL API)",
            "Figma / Adobe XD",
            "Cloud Deployment (Vercel / Netlify / AWS S3)",
            "Internationalization (i18n)",
          ]}
        />

        <SkillSection
          title="Languages I Speak"
          skills={[
            "Mandarin Chinese (Native)",
            "Korean (Fluent)",
            "English (Fluent)",
          ]}
        />

        <div className="beliefs">
          <h3 className="beliefs-title">Things I Believe</h3>
          <ul className="beliefs-list">
            <li>
              Great products start with empathy. Understanding users’ needs,
              frustrations, and goals is the foundation of meaningful design and
              development.
            </li>
            <li>
              Design is not just how it looks, but how it works. Every pixel,
              interaction, and flow should serve a clear purpose and improve the
              user’s experience.
            </li>
            <li>
              Technology should empower, not intimidate. I aim to build
              interfaces that are intuitive, accessible, and inclusive for all
              users.
            </li>
            <li>
              Learning never stops. Staying curious and adapting to new
              technologies, AI innovations, and UX best practices keeps my work
              relevant and impactful.
            </li>
            <li>
              Collaboration fuels innovation. Working closely with
              cross-functional teams leads to solutions that are stronger than
              any one person could create alone.
            </li>
            <li>
              Creativity and logic can coexist. The best front-end experiences
              come from balancing technical precision with imaginative thinking.
            </li>
            <li>
              Small details make a big difference. From micro-interactions to
              performance optimizations, thoughtful craftsmanship creates
              delightful experiences.
            </li>
            <li>
              Diversity of language and culture enriches problem-solving. My
              fluency in Mandarin, Korean, and English allows me to bridge
              perspectives in global teams.
            </li>
          </ul>
        </div>
      </div>
      <div className="divider"></div>
    </section>
  );
}
