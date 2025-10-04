import React from 'react';
import { FaDownload, FaEye, FaFilePdf } from 'react-icons/fa';
import resumePDF from '../../assets/Resume of Cih-Lian Liao.pdf';
import './Resume.css';

export default function Resume() {

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumePDF;
    link.download = 'Resume of Cih-Lian Liao.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleViewPDF = () => {
    window.open(resumePDF, '_blank');
  };

  return (
    <section id="resume" className="bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-700 rounded-full mb-6 shadow-lg">
            <FaFilePdf className="text-white text-2xl" />
          </div>
          <h2 className="text-4xl font-semibold text-gray-800 mb-4 tracking-wide">
            Resume
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Download or view my complete resume with detailed information about my education, experience, skills, and projects
          </p>
          <div className="w-40 h-0.5 bg-gray-400 mx-auto rounded-full mt-6"></div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center gap-6 mb-8">
          <button
            onClick={handleDownload}
            className="group flex items-center gap-3 px-8 py-4 bg-gray-700 text-white rounded-xl font-medium transition-all duration-500 hover:bg-gray-600 hover:scale-102 hover:shadow-lg"
          >
            <FaDownload className="text-lg" />
            <span>Download PDF</span>
          </button>
          <button
            onClick={handleViewPDF}
            className="group flex items-center gap-3 px-8 py-4 bg-white text-gray-700 border-2 border-gray-300 rounded-xl font-medium transition-all duration-500 hover:bg-gray-50 hover:border-gray-400 hover:scale-102 hover:shadow-lg"
          >
            <FaEye className="text-lg" />
            <span>View Online</span>
          </button>
        </div>

        {/* Resume Preview Card */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-200">
          {/* PDF Embed */}
          <div className="relative">
            <div className="bg-white p-6">
              <div className="resume-embed">
                <iframe
                  src={`${resumePDF}#zoom=page-width&view=FitH&toolbar=0&navpanes=0&scrollbar=0&statusbar=0&messages=0`}
                  title="Resume PDF"
                  className="border-0"
                  style={{ 
                    backgroundColor: '#ffffff',
                    border: 'none !important',
                    outline: 'none !important',
                    boxShadow: 'none !important',
                    borderWidth: '0 !important',
                    borderStyle: 'none !important'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
