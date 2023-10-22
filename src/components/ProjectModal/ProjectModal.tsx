import React, { useEffect } from "react";
import {
  AiOutlineLeftCircle,
  AiFillGithub,
  AiFillCaretRight,
} from "react-icons/ai";
import { TiWorld } from "react-icons/ti";

import "./ProjectModal.css";

interface ModalProps {
  project: any;
  close: () => void;
  className: string;
}

const ProjectModalView: React.FC<ModalProps> = ({
  project,
  close,
  className,
}) => {
  useEffect(() => {
    console.log("MODAL");
  });

  return (
    <div className={`modal-container ${className}`}>
      <div className="modal-header">
        <AiOutlineLeftCircle onClick={close} className="modal-back-icon" />
        <span onClick={close} className="modal-back-text">
          Back to Projects
        </span>
      </div>
      <div className="modal-line-separator"></div>
      <div className="project-details">
        <h1>{project.title}</h1>
        <p className="subtitle">{project.subtitle}</p>
        <img
          key={project.images.gif_src}
          src={project.images.gif_src}
          alt={project.images.cover_alt}
          style={{ width: project.styles.width }}
        />
        <p>{project.description}</p>
        <h3>Features</h3>
        <ul className="features-list">
          {project.Features.map((feature: any) => (
            <li key={feature}>
              <AiFillCaretRight className="feature-icon" />
              {feature}
            </li>
          ))}
        </ul>
        <h3>Technologies</h3>
        <div className="technologies-container">
          {project.Technologies.map((tech: any) => (
            <span key={tech} className="technology-item">
              {tech}
            </span>
          ))}
        </div>

        <div className="links-container">
          <div className="link-item">
            <div className="icon-label-container">
              <TiWorld className="link-icon" />
              <span>Website</span>
            </div>
            <a
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
              className="actual-link">
              {project.website}
            </a>
          </div>
          <div className="link-item">
            <div className="icon-label-container">
              <AiFillGithub className="link-icon" />
              <span>Github</span>
            </div>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="actual-link">
              {project.github}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModalView;
