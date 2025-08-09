// About.jsx
import "./About.css";
import profileAvatar from "./profile.jpg";

export default function About() {
  return (
    <div className="about">
      <div className="about__profile">
        <img
          src={profileAvatar}
          alt="Lily Liao profile"
          className="about__avatar"
        />
        <h1 className="about__name">
          <span className="about__name-tooltip">
            Cihlian
            <span className="tooltip">pronunciation: chi-lian</span>
          </span>{" "}
          Lily Liao
        </h1>
        <h2 className="about__tagline">
          Front-End Developer | UX Enthusiast | AI Explorer
        </h2>
      </div>

      <div className="about__details">
        <h3 className="about__section-title">A little bit more about me</h3>
        <p>
          I’m currently pursuing a Master’s degree in Information Systems at
          Northeastern University, Seattle. With a deep passion for technology
          and design, I aim to build web applications that are not only
          functional but also beautiful and user-centered.
        </p>
        <p>
          I have a unique background in language and translation, which helps me
          communicate clearly and build inclusive digital experiences. I’m
          especially interested in combining front-end development with emerging
          AI technologies to solve meaningful problems.
        </p>
      </div>
    </div>
  );
}
