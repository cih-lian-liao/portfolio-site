import "./About.css";
import profileAvatar from "./profile.jpg";

export default function About() {
  return (
    <section id="about" className="bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-6 min-h-screen flex items-center">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="about-header">
          <div className="about-avatar-wrapper">
            <img 
              alt="Lily Liao profile" 
              className="about-avatar" 
              src={profileAvatar}
            />
          </div>
          <h2 className="about-title">
            <span className="about-name-tooltip">
              Cih-Lian
              <span className="about-tooltip-text">pronunciation: Chi-Lian</span>
            </span>
            {" "}
            Liao (Lily)
          </h2>
          <div className="about-tagline-container">
            <span className="about-tagline-item">Front-End Developer</span>
            <span className="about-tagline-item">UX Enthusiast</span>
            <span className="about-tagline-item">AI Explorer</span>
          </div>
          <div className="about-divider"></div>
        </div>

        {/* Main Content Card */}
        <div className="about-main-card">
          {/* About Content Section */}
          <div className="about-content">
            <div className="about-content-header">
              <div className="about-content-icon">
                <span className="text-2xl">👋</span>
              </div>
              <h3 className="about-content-title">A little bit about me</h3>
            </div>
            
            <div className="about-content-text">
              <p>
                I'm a Software Engineer currently pursuing a Master's degree in Information Systems at
                Northeastern University, Seattle. With hands-on experience in frontend development
                at companies like WeWave and Racing Pigeon Alliance, I specialize in building
                high-performance React applications and optimizing user experiences.
              </p>
              <p>
                My unique background spans from product management in Taiwan's interpretation industry
                to full-stack development, giving me a holistic understanding of both technical
                implementation and user needs. I'm passionate about integrating AI technologies
                into web applications and have successfully built custom AI chatbots and
                data-driven analytics platforms.
              </p>
              <p>
                I'm authorized to work in the U.S. without sponsorship and am always excited
                to collaborate on projects that combine technical excellence with meaningful
                user impact.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action Card */}
        <div className="about-cta-card">
          <div className="about-cta-header">
            <div className="about-cta-icon">
              <span className="text-2xl">👋</span>
            </div>
            <p className="about-cta-text">
              You can ask anything more about me at
            </p>
          </div>
          <a href="#lily-gpt" className="about-cta-button">
            <span className="about-button-icon">🤖</span>
            <span>LilyGPT</span>
          </a>
        </div>
      </div>
    </section>
  );
}
