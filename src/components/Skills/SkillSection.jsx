export default function SkillSection({ title, skills }) {
  return (
    <div className="skill-block">
      <h3 className="skill-title">{title}</h3>
      <div className="skill-grid">
        {skills.map((skill, idx) => (
          <div key={idx} className="skill-card">
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}
