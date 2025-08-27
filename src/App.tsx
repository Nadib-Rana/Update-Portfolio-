import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import About from "./components/About";
import AchievementComponent from "./components/AchievementComponent";
import AiChatBot from "./components/AiChatBot";
import Bio from "./components/Biocomponent";
import Contact from "./components/Contact";
import EducationComponent from "./components/EducationComponent";
import ExpertiseComponent from "./components/expertiseComponent";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ProjectsComponent from "./components/projectsComponent";
import TestimonialComponent from "./components/testimonial.component";
import HomePage from "./pages/HomePage";
import Skills from "./components/Skills";

const App = () => {
  return (
    <Router>
      <Navbar />
      <br />
      <Routes>
        <Route path="/Update-Portfolio-" element={<HomePage />} />
        <Route path="/bio" element={<Bio />} />
        <Route path="/about" element={<About />} />
        <Route path="/education" element={<EducationComponent />} />
        <Route path="/expertise" element={<ExpertiseComponent />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<ProjectsComponent />} />
        <Route path="/achievements" element={<AchievementComponent />} />
        <Route path="/testimonials" element={<TestimonialComponent />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      <AiChatBot />
    </Router>
  );
};

export default App;