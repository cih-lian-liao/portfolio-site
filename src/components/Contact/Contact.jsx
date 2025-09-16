import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
import "./Contact.css";

export default function Contact() {
  const contactInfo = [
    {
      icon: <FaEnvelope className="text-2xl" />,
      title: "Email",
      content: "cihlianliao@gmail.com",
      link: "mailto:cihlianliao@gmail.com",
      color: "email"
    },
    {
      icon: <FaLinkedin className="text-2xl" />,
      title: "LinkedIn",
      content: "linkedin.com/in/cihlianliao",
      link: "https://www.linkedin.com/in/cihlianliao",
      color: "linkedin"
    },
    {
      icon: <FaGithub className="text-2xl" />,
      title: "GitHub",
      content: "github.com/cih-lian-liao",
      link: "https://github.com/cih-lian-liao",
      color: "github"
    }
  ];

  return (
    <section id="contact" className="bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-700 rounded-full mb-6 shadow-lg">
            <span className="text-white text-2xl">📩</span>
          </div>
          <h2 className="text-4xl font-semibold text-gray-800 mb-4 tracking-wide">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            I'm currently based in Seattle and open for Summer 2026 internships. <br />Let's connect and discuss opportunities!
          </p>
          <div className="w-40 h-0.5 bg-gray-400 mx-auto rounded-full mt-6"></div>
        </div>

        {/* Contact Cards */}
        <div className="contact-grid">
          {contactInfo.map((item, index) => (
            <a
              key={item.title}
              href={item.link}
              target={item.link.startsWith('mailto:') ? '_self' : '_blank'}
              rel={item.link.startsWith('mailto:') ? '' : 'noopener noreferrer'}
              className={`contact-card contact-card-${item.color}`}
            >
              <div className="contact-icon">
                {item.icon}
              </div>
              <div className="contact-content">
                <h3 className="contact-title">{item.title}</h3>
                <p className="contact-text">{item.content}</p>
              </div>
              <div className="contact-hover-effect"></div>
            </a>
          ))}
        </div>

        {/* Location & Availability */}
        <div className="contact-footer">
          <div className="contact-info-item">
            <div className="contact-info-icon">
              <FaMapMarkerAlt className="text-lg" />
            </div>
            <span className="contact-info-text">Seattle, WA</span>
          </div>
          <div className="contact-info-item">
            <div className="contact-info-icon">
              <FaCalendarAlt className="text-lg" />
            </div>
            <span className="contact-info-text">Open for Summer 2026 Internships</span>
          </div>
        </div>
      </div>
    </section>
  );
}
