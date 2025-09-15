import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-gray-50 text-gray-900 min-h-screen flex items-center justify-center px-6"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-5xl font-bold mb-6 tracking-tight">📩 Get in Touch</h2>
        <p className="text-xl text-gray-600 mb-16">
          Seattle · Open for Summer 2026 internships
        </p>

        {/* Social Links */}
        <div className="flex justify-center gap-16 flex-wrap">
          <a
            href="mailto:athena83922@gmail.com"
            className="flex items-center gap-3 text-gray-700 hover:text-black transition text-2xl font-medium"
          >
            <FaEnvelope className="text-3xl" />
            <span>Email</span>
          </a>
          <a
            href="https://www.linkedin.com/in/cihlianliao"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition text-2xl font-medium"
          >
            <FaLinkedin className="text-3xl" />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://github.com/cih-lian-liao"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-gray-700 hover:text-gray-900 transition text-2xl font-medium"
          >
            <FaGithub className="text-3xl" />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
}
