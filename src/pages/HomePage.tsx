import React from "react";
import About from "../components/About";
import EducationComponent from "../components/EducationComponent";
import ExpertiseComponent from "../components/expertiseComponent";
import ProjectsComponent from "../components/projectsComponent";
import AchievementComponent from "../components/AchievementComponent";
import TestimonialComponent from "../components/testimonial.component";
import Contact from "../components/Contact";
import Bio from "../components/Biocomponent";
import Skills from "../components/Skills";

const HomePage: React.FC = () => {
  return (
    <main className="pt-20">
      {/* Each section can have an ID if you want scroll-based navigation too */}
       <section id="bio">
        <Bio />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="education">
        <EducationComponent />
      </section>

     <section id="skills">
        <Skills />
      </section>

      <section id="expertise">
        <ExpertiseComponent />
      </section>

      

      <section id="projects">
        <ProjectsComponent />
      </section>

      <section id="achievements">
        <AchievementComponent />
      </section>

      <section id="testimonials">
        <TestimonialComponent />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </main>
  );
};

export default HomePage;