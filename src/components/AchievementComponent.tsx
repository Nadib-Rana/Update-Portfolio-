import React, { useEffect, useState } from "react";

interface IAccevment {
  _id: string;
  image: string;
  title: string;
  description: string;
}

const demoAccevments: IAccevment[] = [
  {
    _id: "1",
    image: "https://previews.123rf.com/images/hvostik/hvostik1603/hvostik160300358/54767450-graduate-student-avatar-student-student-icon-flat-design-style-education-graduation-isolated.jpg",
    title: "Graduated with Honors",
    description: "Completed my BSc in Computer Science with distinction from Green University of Bangladesh.",
  },
  {
    _id: "2",
    image: "https://img.freepik.com/free-vector/email-signature-design-professional-facebook-banner-template_314614-1036.jpg?semt=ais_hybrid&w=740&q=80",
    title: "260+ Email Signatures Delivered",
    description: "Successfully designed and delivered over 260 professional HTML email signatures for global clients.",
  },
  {
    _id: "3",
    image: "https://www.springboard.com/blog/wp-content/uploads/2021/10/Full-Stack-Developer-Skills-1.png",
    title: "Full-stack Developer at 9AM SOLUTION",
    description: "Engineered secure authentication flows and modular APIs for real-world applications.",
  },
];

const AchievementComponent: React.FC = () => {
  const [accevments, setAccevments] = useState<IAccevment[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setAccevments(demoAccevments);
      setLoading(false);
    }, 1000); // 1 second delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="achievements" className="py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
            My <span className="text-indigo-400">Achievements</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm sm:text-base">
            Here are some of my milestones and recognitions that I am proud of.
          </p>
        </div>

        {loading ? (
          <p className="text-center text-gray-400">Loading...</p>
        ) : accevments.length === 0 ? (
          <p className="text-center text-gray-400">No achievements found.</p>
        ) : (
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {accevments.map((item, index) => (
              <div
                key={item._id}
                className="group bg-gray-800 rounded-xl overflow-hidden shadow-lg transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 border border-gray-700"
                style={{
                  animation: `fadeIn 0.6s ease ${index * 0.15}s forwards`,
                  opacity: 0,
                }}
              >
                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 sm:h-52 md:h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-indigo-400 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeIn {
          to {
            opacity: 1;
            transform: none;
          }
        }
      `}</style>
    </section>
  );
};

export default AchievementComponent;