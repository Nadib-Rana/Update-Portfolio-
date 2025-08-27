import React from "react";
import { FaMicrochip, FaLaptopCode, FaGraduationCap, FaPalette, FaCheckDouble, FaBrain, FaShieldAlt, FaNetworkWired, FaCogs, FaDatabase, FaProjectDiagram, FaPaintBrush, FaTools, FaTasks, FaCodeBranch } from "react-icons/fa";
import { FaFigma, FaWordpress } from "react-icons/fa";

const Skills: React.FC = () => {
  return (
    <section id="expertise" className="bg-black py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-gray-100">
          My Expertise
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Core Competencies */}
          <div className="bg-gray-900 rounded-2xl p-6 shadow-lg">
            <div className="flex items-center mb-6">
              <div className="bg-gray-800 p-3 rounded-full mr-4">
                <FaMicrochip className="text-2xl text-blue-500" />
              </div>
              <h3 className="text-2xl font-semibold text-white">Core Competencies</h3>
            </div>
            <div className="space-y-4">
              {[
                { name: "Web Development", level: 88 },
                { name: "Data Structures & Algorithms", level: 88 },
                { name: "Object-Oriented Programming", level: 85 },
                { name: "Database Systems", level: 82 },
              ].map((skill, i) => (
                <div key={i}>
                  <div className="flex justify-between text-gray-300 mb-1">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full bg-gray-700 rounded-full">
                    <div
                      className="h-2 bg-blue-500 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Stack */}
          <div className="bg-gray-900 rounded-2xl p-6 shadow-lg">
            <div className="flex items-center mb-6">
              <div className="bg-gray-800 p-3 rounded-full mr-4">
                <FaLaptopCode className="text-2xl text-blue-500" />
              </div>
              <h3 className="text-2xl font-semibold text-white">Technical Stack</h3>
            </div>
            <div className="flex flex-wrap gap-2 text-gray-300">
              {["C++","Python","Java","SQL","HTML","CSS","JavaScript","React","Node.js","Linux","Git","LaTeX"].map((tech, i) => (
                <span key={i} className="px-3 py-1 bg-gray-800 rounded-full text-sm hover:bg-blue-600 transition-colors">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Academic Focus */}
          <div className="bg-gray-900 rounded-2xl p-6 shadow-lg">
            <div className="flex items-center mb-6">
              <div className="bg-gray-800 p-3 rounded-full mr-4">
                <FaGraduationCap className="text-2xl text-blue-500" />
              </div>
              <h3 className="text-2xl font-semibold text-white">Academic Focus</h3>
            </div>
            <ul className="space-y-3 text-gray-300">
              {[
                { icon: <FaBrain />, name: "Machine Learning Fundamentals" },
                { icon: <FaShieldAlt />, name: "Cybersecurity Basics" },
                { icon: <FaNetworkWired />, name: "Computer Networks" },
                { icon: <FaCogs />, name: "OS & Distributed Systems" },
                { icon: <FaDatabase />, name: "Information Systems Development" },
                { icon: <FaProjectDiagram />, name: "Integrated Design Project" },
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2 hover:text-white transition-colors">
                  {item.icon} <span>{item.name}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* UI/UX Design */}
          <div className="bg-gray-900 rounded-2xl p-6 shadow-lg">
            <div className="flex items-center mb-6">
              <div className="bg-gray-800 p-3 rounded-full mr-4">
                <FaPalette className="text-2xl text-blue-500" />
              </div>
              <h3 className="text-2xl font-semibold text-white">UI/UX Design</h3>
            </div>
            <ul className="space-y-3 text-gray-300">
              {[
                { icon: <FaFigma />, name: "Figma" },
                { icon: <FaPaintBrush />, name: "Canva" },
                { icon: <FaWordpress />, name: "WordPress" },
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2 hover:text-white transition-colors">
                  {item.icon} <span>{item.name}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* SQA */}
          <div className="bg-gray-900 rounded-2xl p-6 shadow-lg">
            <div className="flex items-center mb-6">
              <div className="bg-gray-800 p-3 rounded-full mr-4">
                <FaCheckDouble className="text-2xl text-blue-500" />
              </div>
              <h3 className="text-2xl font-semibold text-white">SQA</h3>
            </div>
            <ul className="space-y-3 text-gray-300">
              {[
                { icon: <FaTools />, name: "Selenium" },
                { icon: <FaTasks />, name: "JIRA" },
                { icon: <FaCodeBranch />, name: "Agile Testing" },
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2 hover:text-white transition-colors">
                  {item.icon} <span>{item.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
