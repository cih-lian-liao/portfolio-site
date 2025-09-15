import "./NavLinks.css";

const sections = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
  { id: "beyond-code", label: "Beyond Code" },
  { id: "resume", label: "Resume" },
  { id: "lily-gpt", label: "LilyGPT" },
  { id: "contact", label: "Contact" },
];

export default function NavLinks({ active }) {
  return (
    <nav className="nav-links">
      <ul>
        {sections.map(({ id, label }) => (
          <li key={id}>
            <a
              href={`#${id}`} // ✅ 所有 section 統一使用 hash，包括 about
              className={`nav-link${active === id ? " active" : ""}`}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}