export default function SkillSection({ title, icon, description, skills }) {
  return (
    <div className="skill-section">
      {/* Section Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-gray-700 rounded-full mb-4 shadow-lg">
          <span className="text-white text-xl">{icon}</span>
        </div>
        <h3 className="text-2xl font-semibold text-gray-800 mb-2 tracking-wide">
          {title}
        </h3>
        <p className="text-gray-600 text-sm max-w-md mx-auto leading-relaxed">
          {description}
        </p>
      </div>

      {/* Skills Grid */}
      <div className="skill-grid">
        {skills.map((skill, idx) => (
          <div key={idx} className="skill-card group">
            <span className="skill-text">{skill}</span>
            <div className="skill-hover-effect"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
