import React from "react";
import "./BeyondCode.css";

export default function BeyondCode() {
  const beliefs = [
    {
      icon: "💝",
      title: "Empathy-Driven Design",
      content: "Great products start with empathy. Understanding users' needs, frustrations, and goals is the foundation of meaningful design and development."
    },
    {
      icon: "🎨",
      title: "Purposeful Design",
      content: "Design is not just how it looks, but how it works. Every pixel, interaction, and flow should serve a clear purpose and improve the user's experience."
    },
    {
      icon: "♿",
      title: "Inclusive Technology",
      content: "Technology should empower, not intimidate. I aim to build interfaces that are intuitive, accessible, and inclusive for all users."
    },
    {
      icon: "📚",
      title: "Continuous Learning",
      content: "Learning never stops. Staying curious and adapting to new technologies, AI innovations, and UX best practices keeps my work relevant and impactful."
    },
    {
      icon: "🤝",
      title: "Collaborative Innovation",
      content: "Collaboration fuels innovation. Working closely with cross-functional teams leads to solutions that are stronger than any one person could create alone."
    },
    {
      icon: "⚖️",
      title: "Creative Logic",
      content: "Creativity and logic can coexist. The best front-end experiences come from balancing technical precision with imaginative thinking."
    },
    {
      icon: "✨",
      title: "Attention to Detail",
      content: "Small details make a big difference. From micro-interactions to performance optimizations, thoughtful craftsmanship creates delightful experiences."
    },
    {
      icon: "🌍",
      title: "Cultural Diversity",
      content: "Diversity of language and culture enriches problem-solving. My fluency in Mandarin, Korean, and English allows me to bridge perspectives in global teams."
    }
  ];

  return (
    <section id="beyond-code" className="bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-700 rounded-full mb-6 shadow-lg">
            <span className="text-white text-2xl">💭</span>
          </div>
          <h2 className="text-4xl font-semibold text-gray-800 mb-4 tracking-wide">
            Beyond Code
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            The principles and beliefs that guide my approach to technology and design
          </p>
          <div className="w-40 h-0.5 bg-gray-400 mx-auto rounded-full mt-6"></div>
        </div>

        {/* Beliefs Grid - 使用 belief.title 作為 key 確保唯一性 */}
        <div className="beliefs-grid">
          {beliefs.map((belief, index) => (
            <div key={belief.title} className="belief-card group">
              <div className="belief-header">
                <div className="belief-icon">
                  <span className="text-2xl">{belief.icon}</span>
                </div>
                <div className="belief-number">
                  {String(index + 1).padStart(2, '0')}
                </div>
              </div>
              <div className="belief-content">
                <h3 className="belief-title">{belief.title}</h3>
                <p className="belief-text">{belief.content}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Closing Statement */}
        <div className="text-center mt-8">
          <div className="closing-statement">
            <div className="closing-icon">
              <span className="text-3xl">✨</span>
            </div>
            <p className="closing-text">
              I'm excited to bring these beliefs into my journey as a front-end engineer—turning ideas into intuitive, human-centered interfaces that truly help people.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
