import "./skills.css";

export default function SkillSection({ title, skills }) {
  return (
    <div className="skill-block">
      <h3 className="skill-title">{title}</h3>
      <ul className="skill-list">
        {skills.map((skill, idx) => (
          <li key={idx}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}
