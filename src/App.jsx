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
import LilyGPT from "./components/LilyGPT/LilyGPT";
import "./App.css";

const SECTIONS = [
  "about",
  "skills",
  "projects",
  "education",
  "certifications",
  "beyond-code",
  "contact",
  "resume",
  "lily-gpt",
];

function App() {
  const [activeSection, setActiveSection] = useState("about");

  // ✅ 首次載入時重設 scroll/hash，避免直接跳到中間區塊
  useEffect(() => {
    if (window.location.hash) {
      window.scrollTo(0, 0);
      window.history.replaceState(null, "", "#about");
    }
  }, []);

  // ✅ 使用 IntersectionObserver 更新 active section（提前切換 + 底部留緩衝）
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          const mostVisible = visible.sort(
            (a, b) => b.intersectionRatio - a.intersectionRatio
          )[0];
          const id = mostVisible.target.id;
          setActiveSection(id);
          window.history.replaceState(null, "", `#${id}`);
        }
      },
      {
        rootMargin: "-70% 0px -10% 0px", // 提早切換、底部保留 10% 緩衝
        threshold: 0.01,                  // 需有 1% 進入觀察區，避免短節點閃爍
      }
    );

    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // ✅ 保險：滑到最底直接鎖定最後一節（解決極端情況）
  useEffect(() => {
    function handleBottomLock() {
      const nearBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 1;
      if (nearBottom) {
        const last = SECTIONS[SECTIONS.length - 1]; // 'lily-gpt'
        setActiveSection(last);
        window.history.replaceState(null, "", `#${last}`);
      }
    }

    window.addEventListener("scroll", handleBottomLock, { passive: true });
    return () => window.removeEventListener("scroll", handleBottomLock);
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
        <section id="contact">
          <Contact />
        </section>
        <section id="resume">
          <Resume />
        </section>
        <section id="lily-gpt">
          <LilyGPT />
        </section>
      </main>
    </div>
  );
}

export default App;
