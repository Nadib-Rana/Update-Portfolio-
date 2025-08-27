import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ITestimonial {
  _id: string;
  name: string;
  message: string;
  avatar?: string;
  designation?: string;
}

const demoTestimonials: ITestimonial[] = [
  {
    _id: "1",
    name: "Anayeth Hossein",
    message:
      "Working with NADIB was a game-changer. His attention to detail and responsiveness made our email branding seamless.",
    avatar: "https://atechitsolution.com/wp-content/uploads/2024/11/WhatsApp-Image-2024-10-20-at-3.50.58-PM.jpg",
    designation: "Marketing Lead, showupmarth",
  },
  {
    _id: "2",
    name: "Jisan",
    message:
      "The MERN dashboard NADIB built for us is fast, secure, and beautifully designed. Highly recommend his work.",
    avatar: "https://www.upwork.com/profile-portraits/c1N7diyhP8pwnP_8FIYN57eMIekAaTgjxLCdUE3QbCuk9MWE9nxskS8MZpWrUX0fYp",
    designation: "CTO, 32tech",
  },
  {
    _id: "3",
    name: "Wosif Sarkar",
    message:
      "From concept to deployment, NADIB was proactive and professional. Our portfolio site now truly reflects our brand.",
    avatar: "https://scontent.fdac22-1.fna.fbcdn.net/v/t39.30808-6/518275997_1841244043091477_1221521143367439838_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHEdWxWNbmdlOqm7w2oVYN3Kap8e0ZtqOUpqnx7Rm2o5XQucN-UyXXAubVGH3e0uqtcbhq5ol0r4dM-cSVG9ykQ&_nc_ohc=vA7xk_9cNPYQ7kNvwEnVJCV&_nc_oc=Adkh5vYY4DPD1gV5aE9axEG_begIve5-DeC8i25g6oCYXSXeupF89VcVarOpqKe0VF4&_nc_zt=23&_nc_ht=scontent.fdac22-1.fna&_nc_gid=_L4FnKZPL14_eHqreFe5gQ&oh=00_AfWTr6sRXOdyq47IYxCLCU7c6-DinTNjWW9_3EY02OzEFQ&oe=68B46BD4",
    designation: "Technical Supervisor,nansiri",
  },
];

const TestimonialComponent: React.FC = () => {
  const [testimonials, setTestimonials] = useState<ITestimonial[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setTestimonials(demoTestimonials);
  }, []);

  useEffect(() => {
    if (testimonials.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [testimonials]);

  if (testimonials.length === 0) {
    return (
      <p className="text-center text-gray-500 mt-20 text-lg">
        No testimonials available.
      </p>
    );
  }

  const current = testimonials[currentIndex];

  return (
    <div id="testimonials" className="bg-gradient-to-br from-gray-900 to-black py-20 px-4">
      <section className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-indigo-400 mb-10">
          Testimonials
        </h2>

        <div className="relative flex justify-center items-center h-[450px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current._id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.6 }}
              className="bg-gray-800 rounded-2xl shadow-2xl p-8 w-full max-w-lg flex flex-col items-center gap-6 border border-gray-100"
            >
              {/* Avatar */}
              <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-indigo-500 shadow-md">
                {current.avatar ? (
                  <img
                    src={current.avatar}
                    alt={`${current.name} avatar`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-indigo-500 flex items-center justify-center text-3xl font-bold text-white">
                    {current.name.charAt(0).toUpperCase()}
                  </div>
                )}
              </div>

              {/* Name & Designation */}
              <div>
                <h3 className="text-2xl font-semibold text-indigo-400">
                  {current.name}
                </h3>
                {current.designation && (
                  <p className="text-indigo-400 font-medium italic mt-1">
                    {current.designation}
                  </p>
                )}
              </div>

              {/* Message */}
              <p className="text-white opacity-70 leading-relaxed text-lg text-center">
                &ldquo;{current.message}&rdquo;
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
};

export default TestimonialComponent;