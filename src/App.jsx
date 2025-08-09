// App.jsx
import { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Education from "./components/Education/Education";
import Certifications from "./components/Certifications/Certifications";
import BeyondCode from "./components/BeyondCode/BeyondCode";
import Resume from "./components/Resume/Resume";
import Contact from "./components/Contact/Contact";
import "./App.css";

const SECTIONS = [
  "about",
  "skills",
  "projects",
  "education",
  "certifications",
  "beyond-code",
  "resume",
  "contact",
];

function App() {
  const [activeSection, setActiveSection] = useState("about");

  // ✅ 在第一次載入時重設 scroll 和 hash（避免瀏覽器自動跳到其他區塊）
  useEffect(() => {
    if (window.location.hash) {
      // 清除 hash 並跳到頂部
      window.scrollTo(0, 0);
      window.history.replaceState(null, "", "#about");
    }
  }, []);

  // ✅ 使用 IntersectionObserver 更新 active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries.filter((entry) => entry.isIntersecting);
        if (visibleSections.length > 0) {
          const mostVisible = visibleSections.sort(
            (a, b) => b.intersectionRatio - a.intersectionRatio
          )[0];

          const id = mostVisible.target.id;
          setActiveSection(id);
          window.history.replaceState(null, "", `#${id}`);
        }
      },
      {
        threshold: 0.2, // 可以根據實際需求微調
      }
    );

    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app-layout">
      <Sidebar active={activeSection} />
      <main className="main-content">
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="education">
          <Education />
        </section>
        <section id="certifications">
          <Certifications />
        </section>
        <section id="beyond-code">
          <BeyondCode />
        </section>
        <section id="resume">
          <Resume />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default App;
