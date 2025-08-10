import "./NavLinks.css";

const sections = [
  { id: "about", label: "about" },
  { id: "skills", label: "skills" },
  { id: "projects", label: "projects" },
  { id: "education", label: "education" },
  { id: "certifications", label: "certifications" },
  { id: "beyond-code", label: "beyond code" },
  { id: "contact", label: "contact" },
  { id: "resume", label: "resume" },
  { id: "lily-gpt", label: "lilyGPT" },
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