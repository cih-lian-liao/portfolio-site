import "./NavLinks.css";

const sections = [
  { id: "about", label: "About", icon: "👋" },
  { id: "skills", label: "Skills", icon: "⚡" },
  { id: "projects", label: "Projects", icon: "🚀" },
  { id: "education", label: "Education", icon: "🎓" },
  { id: "experience", label: "Experience", icon: "💼" },
  { id: "beyond-code", label: "Beyond Code", icon: "💭" },
  { id: "resume", label: "Resume", icon: "📄" },
  { id: "lily-gpt", label: "LilyGPT", icon: "🤖" },
  { id: "contact", label: "Contact", icon: "📩" },
];

export default function NavLinks({ active }) {
  return (
    <nav className="nav-links">
      <ul className="nav-list">
        {sections.map(({ id, label, icon }) => (
          <li key={id} className="nav-item">
            <a
              href={`#${id}`}
              className={`nav-link${active === id ? " active" : ""}`}
            >
              <span className="nav-icon">{icon}</span>
              <span className="nav-label">{label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}