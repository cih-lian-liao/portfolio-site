import React from 'react';
import { FaDownload, FaEye, FaFilePdf } from 'react-icons/fa';
import resumePDF from '../../assets/Cihlian-Liao-Resume.pdf';

export default function Resume() {

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
        <div className="flex justify-center gap-6 mb-16">
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
            <div className="bg-gray-800 p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              </div>
              <div className="bg-gray-100 rounded-xl overflow-hidden shadow-inner">
                <iframe
                  src={`${resumePDF}#toolbar=0&navpanes=0&scrollbar=0`}
                  width="100%"
                  height="800"
                  title="Resume PDF"
                  className="border-0"
                  style={{ minHeight: '800px' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
