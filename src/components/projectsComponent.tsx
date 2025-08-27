import React, { useEffect, useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

interface IProject {
  _id: string;
  title: string;
  description: string;
  image: string;
  link: string;
  tools: string[];
  tags: string[];
}


const demoProjects: IProject[] = [
  {
    _id: "1",
    title: "Automated Resume maker",
    description:
      "Built a modular authentication system using MERN stack with JWT, role-based access, and environment isolation.",
    image: "https://showupmart.com/wp-content/uploads/2025/08/Resume.png",
    link: "https://github.com/Nadib-Rana/Resume/tree/main/client",
    tools: ["React","Typescript", "tailwind", "Framer motion"],
    tags: ["MERN", "Dashboard"],
  },
  {
    _id: "2",
    title: "HTML Email Signature Hub",
    description:
      "Designed and delivered 260+ responsive email signatures compatible with Gmail, Outlook, and Apple Mail.",
    image: "https://showupmart.com/wp-content/uploads/2025/08/create-an-email-sign.png",
    link: "https://github.com/Nadib-Rana/E-mail-Signature-",
    tools: ["HTML", "CSS", "Table Layout"],
    tags: ["Branding", "Freelance"],
  },
  {
    _id: "3",
    title: "Mentora",
    description:
      "Mentora is a transformative mentorship platform that empowers individuals to grow through guided reflection, leadership development, and human-centered learning.",
    image: "https://showupmart.com/wp-content/uploads/2025/08/create-a-logo-for-Ma.png",
    link: "https://github.com/Nadib-Rana/Mentoraa",
    tools: ["React", "JavaScript","Tailwind","Express.js","Node.js","MongoDB","postman"],
    tags: ["React", "Branding"],
  },
  {
    _id: "4",
    title: "GreenLink",
    description:
      "GreenLink connects your campus with services like Lost & Found, Buy & Sell, Blood Donation, and Rentals—all in one place.",
    image: "https://showupmart.com/wp-content/uploads/2025/08/create-a-logo-for-Gr.png",
    link: "https://github.com/Ahshan-Haquc/ToLetGreenUniversity",
    tools: ["EJS", "Node.js","Express.js", "MongoDB", "Tailwind CSS","postman"],
    tags: ["MERN", "Web App"],
  },
  {
    _id: "5",
    title: "HRMS Dashboard",
    description:
      "Human Resource Management System with employee tracking, leave requests, and secure admin controls.",
    image: "https://showupmart.com/wp-content/uploads/2025/08/make-a-image-based-o.png",
    link: "https://github.com/Nadib-Rana/HR-management-",
    tools: ["React", "Express", "MongoDB", "JWT"],
    tags: ["MERN", "Dashboard"],
  },
{
  _id: "6",
  title: "ShowUp Mart",
  description:
    "ShowUp Mart is a one-stop online store offering trendy fashion, accessories, and lifestyle products with fast delivery and exclusive deals.",
  image: "https://showupmart.com/wp-content/uploads/2025/04/cropped-cropped-ShowUp-Mart-logo.jpg",
  link: "https://showupmart.com/",
  tools: ["WordPress", "Elementor", "WooCommerce"],
  tags: ["E-commerce", "Web App"]
},
  {
    _id: "7",
    title: "Food Corner",
    description:
      "A food ordering and discovery app with category filters, cart functionality, and real-time updates.",
    image: "https://showupmart.com/wp-content/uploads/2025/08/make-a-logo-for-Food.png",
    link: "https://github.com/Nadib-Rana/GUBFood/tree/main/FoodOrderringSof",
    tools: ["React", "Redux", "Node.js", "Socket.io"],
    tags: ["MERN", "Web App"],
  },
];

const categories = ["All", "MERN", "Next.js", "Dashboard", "Branding", "Web App", "Freelance"];

const ProjectsComponent: React.FC = () => {
  const [projects, setProjects] = useState<IProject[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(3); // Initially show 3 projects

  useEffect(() => {
    const timer = setTimeout(() => {
      setProjects(demoProjects);
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.tags.includes(selectedCategory));

  const visibleProjects = filteredProjects.slice(0, visibleCount);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white font-sans">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold mb-4">
            My <span className="text-indigo-400">Projects</span>
          </h2>
          <p className="max-w-3xl mx-auto text-gray-400 text-lg">
            A curated selection of projects that demonstrate my skills and creativity.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setVisibleCount(3); // Reset when category changes
              }}
              className={`px-4 py-2 rounded-full border ${
                selectedCategory === cat
                  ? "bg-indigo-500 text-white border-indigo-500"
                  : "bg-gray-800 text-gray-300 border-gray-600 hover:bg-indigo-600 hover:text-white"
              } transition duration-300`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Loading / Empty States */}
        {loading ? (
          <p className="text-center text-gray-400 text-lg">Loading projects...</p>
        ) : filteredProjects.length === 0 ? (
          <p className="text-center text-gray-400 text-lg">No projects found.</p>
        ) : (
          <>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {visibleProjects.map((project, idx) => (
                <div
                  key={project._id}
                  className="relative rounded-xl bg-gray-900 border border-gray-700 shadow-lg overflow-hidden transform transition duration-500 hover:scale-[1.03] hover:shadow-2xl cursor-pointer opacity-0 translate-y-8"
                  style={{
                    animation: "fadeSlideUp 0.6s forwards",
                    animationDelay: `${idx * 0.15}s`,
                  }}
                >
                  {/* Project Image */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-56 sm:h-64 md:h-72 object-cover transition-transform duration-700 hover:scale-110"
                    loading="lazy"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm opacity-0 hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center p-6 text-center">
                    <h3 className="text-2xl font-bold text-indigo-400 mb-3">{project.title}</h3>
                    <p className="text-gray-300 mb-5 line-clamp-4">{project.description}</p>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-indigo-500 hover:bg-indigo-600 text-white px-5 py-3 rounded-full text-lg font-semibold shadow-md transition-transform duration-300 hover:scale-105 hover:animate-bounce"
                    >
                      View Project <FaExternalLinkAlt className="ml-3" />
                    </a>
                  </div>

                  {/* Tools */}
                  <div className="bg-gray-800 border-t border-gray-700 p-4 flex flex-wrap gap-3">
                    {project.tools.map((tool, i) => (
                      <div key={i} className="relative group" aria-label={tool} tabIndex={0}>
                        <span className="bg-indigo-700 text-indigo-200 text-xs font-semibold px-3 py-1 rounded-full shadow-sm cursor-default select-none">
                          {tool}
                        </span>
                        <span className="absolute bottom-full mb-2 w-max max-w-xs rounded bg-gray-800 text-gray-200 text-xs font-mono px-2 py-1 opacity-0 group-focus:opacity-100 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                          {tool}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* More Projects Button */}
            {visibleCount < filteredProjects.length && (
              <div className="text-center mt-10">
                <button
                  onClick={() => setVisibleCount(filteredProjects.length)}
                  className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-full shadow-lg transition-transform duration-300 hover:scale-105"
                >
                  More Projects
                </button>
              </div>
            )}
          </>
        )}
      </div>

      {/* Animations */}
      <style>{`
        @keyframes fadeSlideUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default ProjectsComponent;
