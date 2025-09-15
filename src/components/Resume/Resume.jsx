import React, { useState } from 'react';
import { FaDownload, FaEye, FaFilePdf } from 'react-icons/fa';
import resumePDF from '../../assets/Cihlian-Liao-Resume.pdf';

export default function Resume() {
  const [showPDF, setShowPDF] = useState(false);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumePDF;
    link.download = 'Cihlian-Liao-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleViewPDF = () => {
    window.open(resumePDF, '_blank');
  };

  return (
    <section id="resume" className="bg-gray-50 py-16 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            📄 Resume
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            <button
              onClick={handleDownload}
              className="text-blue-600 hover:text-blue-800 underline"
            >
              Download
            </button>
            {' '}or{' '}
            <button
              onClick={handleViewPDF}
              className="text-blue-600 hover:text-blue-800 underline"
            >
              view in new tab
            </button>
            {' '}my complete resume with detailed information about my education, experience, skills, and projects.
          </p>
        </div>

        {/* Resume Preview Card */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* PDF Embed or Preview */}
          <div className="p-6">
            <div className="bg-gray-100 rounded-lg overflow-hidden">
              {/* PDF Embed */}
              <iframe
                src={`${resumePDF}#toolbar=0&navpanes=0&scrollbar=0`}
                width="100%"
                height="600"
                title="Resume PDF"
                className="border-0"
                style={{ minHeight: '600px' }}
              />
            </div>
          </div>

          {/* Resume Highlights */}
          <div className="bg-gray-50 p-8 border-t">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">📋 Resume Highlights</h3>
              <p className="text-gray-600">
                Key qualifications and experience overview
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-medium text-gray-800 mb-2">🎓 Education</h5>
                <p className="text-gray-600 text-sm">
                  Master of Science in Information Systems<br />
                  Northeastern University, Seattle
                </p>
              </div>
              <div>
                <h5 className="font-medium text-gray-800 mb-2">💼 Experience</h5>
                <p className="text-gray-600 text-sm">
                  Translator, Interpreter & Project Coordinator<br />
                  2019 - 2023
                </p>
              </div>
              <div>
                <h5 className="font-medium text-gray-800 mb-2">🛠️ Skills</h5>
                <p className="text-gray-600 text-sm">
                  React, JavaScript, Python, Java, Node.js, MongoDB
                </p>
              </div>
              <div>
                <h5 className="font-medium text-gray-800 mb-2">🚀 Projects</h5>
                <p className="text-gray-600 text-sm">
                  E-commerce Apps, Analytics Dashboards, AI Integration
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
