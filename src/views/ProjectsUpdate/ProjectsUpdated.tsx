import React, { useState } from "react";
import "./ProjectsUpdated.css";
import projects from "./ProjectsUpdate.json";
import ProjectModalView from "../../components/ProjectModal/ProjectModal";

const ProjectsUpdated: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTransitionState, setModalTransitionState] = useState<
    "inactive" | "entering" | "active" | "exiting"
  >("inactive");

  const handleImageClick = (index: number) => {
    setCurrentIndex(index);
    setModalTransitionState("entering");

    setTimeout(() => {
      setIsModalOpen(true);
      setModalTransitionState("active");
    }, 100);
  };

  const closeModal = () => {
    setModalTransitionState("exiting");

    setTimeout(() => {
      setIsModalOpen(false);
      setModalTransitionState("inactive");
    }, 500);
  };

  return (
    <div style={{ flex: 1, overflowX: "hidden" }}>
      <div
        style={{
          width: "100%",
          height: "20vh",
          padding: "50px",
          position: "relative",
        }}>
        <span
          style={{
            position: "absolute",
            bottom: "50px",
            left: "300px",
            fontSize: "3rem",
            fontWeight: "400",
          }}>
          Projects.
        </span>
      </div>
      {projects.map((project, index) => (
        <div
          className="project-card"
          key={project.title}
          onClick={() => handleImageClick(index)}
          style={{
            width: "90vw",
            height: "50vh",
            backgroundColor: project.styles?.backgroundColor || "white",
            color: project.styles?.color || "black",
            margin: "40px auto",
            borderRadius: "15px",
            boxShadow: "0px 5px 15px rgba(0,0,0,0.3)",
            backgroundImage: `url(${project.images.gif_src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            cursor: "pointer",
            position: "relative", // Added for positioning the overlay
          }}>
          {/* Dark overlay at the bottom */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "50%", // Adjust this if needed
              background:
                "linear-gradient(to top, rgba(0, 0, 0, 1) 50px, transparent)",
              padding: "10px 20px",
              color: "white", // Assuming white text for visibility
              textAlign: "left", // Aligning text to the left
            }}>
            <h1>{project.title}</h1>
            <h2>{project.subtitle}</h2>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
              }}>
              {project.Technologies.map((tech) => (
                <span key={tech} className="technology-item">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}

      <div className={isModalOpen ? "overlay" : ""}></div>
      {isModalOpen && currentIndex !== null && (
        <ProjectModalView
          project={projects[currentIndex]}
          close={closeModal}
          className={`modal-container ${modalTransitionState}`}
        />
      )}
    </div>
  );
};

export default ProjectsUpdated;
