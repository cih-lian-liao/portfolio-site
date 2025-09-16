import React from "react";
import "./Education.css";

export default function Education() {
  return (
    <section id="education" className="bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-700 rounded-full mb-6 shadow-lg">
            <span className="text-white text-2xl">🎓</span>
          </div>
          <h2 className="text-4xl font-semibold text-gray-800 mb-4 tracking-wide">
            Education
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            A comprehensive overview of my academic journey and specialized training
          </p>
          <div className="w-40 h-0.5 bg-gray-400 mx-auto rounded-full mt-6"></div>
        </div>

        {/* Education Timeline */}
        <div className="education-timeline">
          {/* Northeastern University */}
          <div className="education-card">
            <div className="education-header">
              <div className="education-icon">
                <span className="text-2xl">🏫</span>
              </div>
              <div className="education-info">
                <h3 className="education-title">Northeastern University</h3>
                <p className="education-degree">M.S. Information Systems</p>
                <span className="education-duration">2024 – 2026 · Expected Graduation Dec 2026</span>
              </div>
            </div>

            <div className="education-details">
              <details className="course-details">
                <summary className="course-summary">
                  <span>Coursework</span>
                  <svg className="chevron" viewBox="0 0 24 24" width="16" height="16">
                    <path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </summary>
                <div className="course-list">
                  <h4 className="course-category">Core Programming</h4>
                  <ul>
                    <li>Application Modeling & Design (Java)</li>
                    <li>Application Engineering & Development (Java)</li>
                    <li>Program Structure & Algorithms (Java)</li>
                  </ul>
                  
                  <h4 className="course-category">Web Development & UX</h4>
                  <ul>
                    <li>Web Design & UX (HTML, CSS, JavaScript, React, Vite)</li>
                    <li>User Experience in the Era of Gen AI</li>
                  </ul>
                  
                  <h4 className="course-category">Data & Database</h4>
                  <ul>
                    <li>Intro to Python for Information Systems</li>
                    <li>Data Management & Database Design (MySQL)</li>
                  </ul>
                </div>
              </details>
            </div>
          </div>

          {/* UC Santa Cruz */}
          <div className="education-card">
            <div className="education-header">
              <div className="education-icon">
                <span className="text-2xl">📚</span>
              </div>
              <div className="education-info">
                <h3 className="education-title">UC Santa Cruz</h3>
                <p className="education-degree">Full‑time Certificate Programs</p>
                <span className="education-duration">2023 – 2024</span>
              </div>
            </div>

            <div className="education-details">
              <details className="course-details">
                <summary className="course-summary">
                  <span>Computer Programming Certification</span>
                  <svg className="chevron" viewBox="0 0 24 24" width="16" height="16">
                    <path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </summary>
                <div className="course-list">
                  <h4 className="course-category">Java Programming</h4>
                  <ul>
                    <li>Java Programming I</li>
                    <li>Java Programming II</li>
                    <li>Object‑Oriented Analysis and Design</li>
                  </ul>
                  
                  <h4 className="course-category">Python Programming</h4>
                  <ul>
                    <li>Python Programming for Beginners</li>
                    <li>Python for Programmers</li>
                    <li>Python: Object‑Oriented Programming</li>
                    <li>Data Structures and Algorithms Using Python</li>
                  </ul>
                  
                  <h4 className="course-category">Mobile Development</h4>
                  <ul>
                    <li>Mobile Application Development – Android & iOS (Intro)</li>
                  </ul>
                </div>
              </details>

              <details className="course-details">
                <summary className="course-summary">
                  <span>Data Science Certification</span>
                  <svg className="chevron" viewBox="0 0 24 24" width="16" height="16">
                    <path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </summary>
                <div className="course-list">
                  <h4 className="course-category">Database Technologies</h4>
                  <ul>
                    <li>Relational Database Design and SQL Programming</li>
                    <li>NoSQL Databases (Intro)</li>
                  </ul>
                  
                  <h4 className="course-category">Data Analysis & Processing</h4>
                  <ul>
                    <li>Python for Data Analysis</li>
                    <li>Data Analysis (Intro)</li>
                  </ul>
                  
                  <h4 className="course-category">Big Data & Engineering</h4>
                  <ul>
                    <li>Big Data (Intro)</li>
                    <li>Data Engineering with Hadoop</li>
                  </ul>
                </div>
              </details>
            </div>
          </div>

          {/* NCCU */}
          <div className="education-card">
            <div className="education-header">
              <div className="education-icon">
                <span className="text-2xl">🌏</span>
              </div>
              <div className="education-info">
                <h3 className="education-title">National Cheng‑Chi University</h3>
                <p className="education-degree">B.A. Korean Language and Literature</p>
                <span className="education-duration">2013 – 2019</span>
              </div>
            </div>

            <div className="education-details">
              <details className="course-details">
                <summary className="course-summary">
                  <span>Required Courses</span>
                  <svg className="chevron" viewBox="0 0 24 24" width="16" height="16">
                    <path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </summary>
                <div className="course-list">
                  <h4 className="course-category">First Year (Freshman)</h4>
                  <ul>
                    <li>Elementary Korean</li>
                    <li>Korean Speaking Practice I</li>
                    <li>Introduction to Korean Studies</li>
                  </ul>
                  
                  <h4 className="course-category">Second Year (Sophomore)</h4>
                  <ul>
                    <li>Intermediate Korean</li>
                    <li>Korean Speaking Practice II</li>
                    <li>Korean Grammar and Application</li>
                    <li>Korean Writing</li>
                  </ul>
                  
                  <h4 className="course-category">Third Year (Junior)</h4>
                  <ul>
                    <li>Advanced Korean</li>
                    <li>Korean Speaking Practice III</li>
                  </ul>
                </div>
              </details>

              <details className="course-details">
                <summary className="course-summary">
                  <span>Elective Courses</span>
                  <svg className="chevron" viewBox="0 0 24 24" width="16" height="16">
                    <path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </summary>
                <div className="course-list">
                  <h4 className="course-category">Language and Literature</h4>
                  <ul>
                    <li>Introduction to Korean Literature</li>
                    <li>Introduction to Korean Linguistics</li>
                    <li>Readings in Korean Classics</li>
                    <li>Modern and Contemporary Korean Literature</li>
                    <li>Korean Proverbs and Folklore</li>
                    <li>Korean Film and Drama Appreciation</li>
                    <li>Advanced Korean Vocabulary and Application</li>
                  </ul>
                  
                  <h4 className="course-category">Practical Skills</h4>
                  <ul>
                    <li>Korean Translation</li>
                    <li>Korean Interpretation</li>
                    <li>Business Korean</li>
                    <li>Tourism Korean</li>
                    <li>News Korean</li>
                    <li>Everyday Korean</li>
                    <li>Advanced Korean Listening Comprehension</li>
                    <li>Business Korean Correspondence</li>
                    <li>Korean Language Teaching Materials and Methods</li>
                  </ul>
                  
                  <h4 className="course-category">Humanities and Knowledge</h4>
                  <ul>
                    <li>Korean History</li>
                    <li>Korean Geography</li>
                    <li>Introduction to Korean Culture</li>
                    <li>Korean Society and Culture</li>
                    <li>Korean Social Issues</li>
                    <li>Korean Society and Culture in a Global Context</li>
                  </ul>
                  
                  <h4 className="course-category">Politics and Economics</h4>
                  <ul>
                    <li>Current Affairs in Korea</li>
                    <li>Korean Economy and Trade</li>
                    <li>Korean Government and Politics</li>
                    <li>North Korean Studies</li>
                    <li>Special Topics in Northeast Asia</li>
                    <li>Overview of Korean Industries</li>
                    <li>Korean Politics and Democratization</li>
                  </ul>
                </div>
              </details>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
