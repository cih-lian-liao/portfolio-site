import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="bg-white text-gray-900 py-16 px-6">
      <div className="max-w-3xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl font-bold mb-4">📩 Get in Touch</h2>
        <p className="text-gray-600 mb-8">
          Seattle · Open for Summer 2026 internships
        </p>

        {/* Social Links */}
        <div className="flex justify-center gap-8 mb-12">
          <a
            href="mailto:athena83922@gmail.com"
            className="flex items-center gap-2 text-gray-700 hover:text-black transition"
          >
            <FaEnvelope className="text-xl" />
            <span>Email</span>
          </a>
          <a
            href="https://www.linkedin.com/in/cihlianliao"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition"
          >
            <FaLinkedin className="text-xl" />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://github.com/cih-lian-liao"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition"
          >
            <FaGithub className="text-xl" />
            <span>GitHub</span>
          </a>
        </div>

        {/* Contact Form */}
        <form
          action="https://formspree.io/f/mayvlrvg" 
          method="POST"
          className="bg-gray-50 shadow-md rounded-xl p-8 text-left"
        >
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              name="name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-black"
              placeholder="Your name"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              name="email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-black"
              placeholder="your@email.com"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Message</label>
            <textarea
              name="message"
              rows="4"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-black"
              placeholder="Your message..."
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
