import React, { useEffect, useState, useRef } from "react";
import "./AboutView.css";

interface Project {
  title: string;
  content: string;
}

const AboutView: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([
    { title: "Hello World", content: "THIS IS THE CONTENT" },
    { title: "Bye World", content: "This is content too" },
  ]);

  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setActiveIndex(index);
          }
        });
      },
      { threshold: 0.5 } // Adjust according to when you want to switch the active state
    );

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      projectRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [projects]);

  return (
    <div className="about-view">
      {projects.map((project, index) => (
        <div
          key={index}
          ref={(el) => (projectRefs.current[index] = el)}
          className={`project-container ${
            activeIndex === index ? "active" : ""
          }`}>
          <h1 className="project-title">{project.title}</h1>
          <p className="project-content">{project.content}</p>
        </div>
      ))}
    </div>
  );
};

export default AboutView;
