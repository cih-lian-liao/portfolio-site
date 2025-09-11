import React from "react";
import "./BeyondCode.css"; // 引入樣式

export default function BeyondCode() {
  return (
    <section className="beliefs">
      <h3 className="beliefs-title">Things I Believe</h3>
      <ol className="beliefs-list">
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
          Technology should empower, not intimidate. I aim to build interfaces
          that are intuitive, accessible, and inclusive for all users.
        </li>
        <li>
          Learning never stops. Staying curious and adapting to new
          technologies, AI innovations, and UX best practices keeps my work
          relevant and impactful.
        </li>
        <li>
          Collaboration fuels innovation. Working closely with cross-functional
          teams leads to solutions that are stronger than any one person could
          create alone.
        </li>
        <li>
          Creativity and logic can coexist. The best front-end experiences come
          from balancing technical precision with imaginative thinking.
        </li>
        <li>
          Small details make a big difference. From micro-interactions to
          performance optimizations, thoughtful craftsmanship creates delightful
          experiences.
        </li>
        <li>
          Diversity of language and culture enriches problem-solving. My fluency
          in Mandarin, Korean, and English allows me to bridge perspectives in
          global teams.
        </li>
      </ol>
      <p className="beliefs-closing">
        ✨ I’m excited to bring these beliefs into my journey
        as a front-end engineer—turning ideas into intuitive, human-centered
        interfaces that truly help people.
      </p>
    </section>
  );
}
