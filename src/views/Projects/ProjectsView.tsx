import React, { useState, useEffect, useRef } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import project_data from "./Projects.json";
import "./Projects.css";

const ProjectsView: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeTitleIndex, setActiveTitleIndex] = useState(0);
  const [opacity, setOpacity] = useState(1);
  const [contentOpacity, setContentOpacity] = useState(1);
  const isMobile = window.innerWidth < 768;
  const contentWrapperRef = useRef<HTMLDivElement | null>(null);
  const [backgroundColor, setBackgroundColor] = useState("white"); // Initialize with the starting color
  const [isSticky, setIsSticky] = useState(false);

  const indicatorStyles: React.CSSProperties = isSticky
    ? { position: "fixed", top: "800px", opacity: 1 }
    : {
        opacity: contentOpacity,
        position: "relative",
        top: "350px",
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
      };

  const gifContainerStyles: React.CSSProperties = isSticky
    ? {
        position: "fixed",
        top: isMobile ? "400px" : "300px",
        opacity: 1,
      }
    : { opacity: contentOpacity };

  const goLeft = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + project_data.length) % project_data.length
    );
    setActiveTitleIndex(0);
  };

  const goRight = () => {
    setCurrentIndex((prev) => (prev + 1) % project_data.length);
    setActiveTitleIndex(0);
  };

  const handleIndicatorClick = (index: number) => {
    // Set the active title index
    setActiveTitleIndex(index);

    // Get the offsetTop of the element you want to scroll to
    const contentElement = document.getElementById(`content-${index}`);

    if (contentElement) {
      // Define an offset to make content appear in the middle of the screen
      const yOffset = -window.innerHeight / 4; // Move upward half the viewport height
      const elementPosition =
        contentElement.getBoundingClientRect().top + window.scrollY;

      // Scroll to the selected content
      window.scrollTo({
        top: elementPosition + yOffset,
        behavior: "smooth",
      });
    }
  };

  const calculateBackgroundColor = () => {
    const scrollPositionY = window.scrollY;
    if (scrollPositionY <= 350) {
      return "white"; // Keep white background until 1000px
    } else if (scrollPositionY >= 1000) {
      return "hsl(0, 0%, 5%)"; // Fully change to hsl(0, 0%, 5%) after 1500px
    } else {
      const opacity = (scrollPositionY - 600) / 700; // Gradually change between 1000px and 1500px
      return `hsla(0, 0%, 5%, ${opacity})`;
    }
  };

  const handleContentScroll = () => {
    const scrollPositionY = window.scrollY;

    const newBackgroundColor = calculateBackgroundColor();
    setBackgroundColor(newBackgroundColor);

    // Set sticky when scrollY crosses a threshold
    setIsSticky(scrollPositionY >= 500);

    // Determine the opacity of each content piece based on its position
    project_data[currentIndex].content.forEach((_, idx) => {
      // Get the content element
      const contentElement = document.getElementById(`content-${idx}`);

      if (contentElement) {
        // Calculate distance from the top of the viewport to the top of the element
        const distanceFromTop = contentElement.getBoundingClientRect().top;

        // Define the fade-in threshold
        const fadeInThreshold = 500;

        // Compute opacity based on distance to the top of the viewport
        // Here, you might adjust the fade effect to your design by modifying formula and values
        let opacity = 1 - (distanceFromTop - fadeInThreshold) / fadeInThreshold;

        // Ensure opacity is between 0 and 1
        opacity = opacity < 0 ? 0 : opacity > 1 ? 1 : opacity;

        // Apply the opacity
        contentElement.style.opacity = `${opacity}`;
      }
    });

    let newOpacity = 1 - window.scrollY / 400;
    newOpacity = newOpacity < 0 ? 0 : newOpacity;
    setOpacity(newOpacity);

    let newContentOpacity = 1 - window.scrollY / 400;
    newContentOpacity = newContentOpacity < 0 ? 0 : newContentOpacity;
    setContentOpacity(newContentOpacity);
  };

  useEffect(() => {
    let newOpacity = 1 - window.scrollY / 400;
    newOpacity = newOpacity < 0 ? 0 : newOpacity;
    setOpacity(newOpacity);

    //proj-containaer opacity
    const handleScroll = () => {
      handleContentScroll();

      let newContentOpacity = 1 - window.scrollY / 400;
      newContentOpacity = newContentOpacity < 0 ? 0 : newContentOpacity;
      setContentOpacity(newContentOpacity);
    };

    console.log(backgroundColor);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null, // observing intersections with regard to the viewport
      rootMargin: "0px",
      threshold: 0.5, // callback will run when 50% of the observed element is in view
    };

    const observerCallback = (entries: any[], observer: any) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Extract index from the observed element's ID attribute
          const index = parseInt(entry.target.id.split("-")[1], 10);

          setActiveTitleIndex(index);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    // Observe each section
    document.querySelectorAll(".top-content").forEach((section) => {
      observer.observe(section);
    });

    // Cleanup
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="projects-container"
      style={{ backgroundColor: backgroundColor }}>
      <div className="proj-container">
        <img
          src={project_data[currentIndex].img_src}
          alt={project_data[currentIndex].content[activeTitleIndex].title}
          style={{
            width: project_data[currentIndex].cover_width,
            opacity: opacity,
          }}
        />
      </div>
      <div className="content-wrapper" ref={contentWrapperRef}>
        <div className="proj-content">
          {project_data[currentIndex].content.map((content, idx) => (
            <div
              className={`top-content ${
                activeTitleIndex === idx ? "active" : ""
              }`}
              key={idx}
              id={`content-${idx}`}
              style={{ minHeight: "70vh" }}>
              <h1>{content.title}</h1>
              <p>{content.description}</p>
            </div>
          ))}
          <div className="indicators" style={indicatorStyles}>
            {" "}
            {project_data[currentIndex].content.map((_, index) => (
              <div
                key={index}
                className={`indicator ${
                  index === activeTitleIndex ? "active" : ""
                }`}
                onClick={() => handleIndicatorClick(index)}
              />
            ))}
          </div>
        </div>
        <div className="gif-container" style={gifContainerStyles}>
          <img
            src={project_data[currentIndex].gif_src}
            alt={project_data[currentIndex].content[activeTitleIndex].title}
            style={{
              width: isMobile
                ? project_data[currentIndex].phone_gif_width // Use mobile width if isMobile is true
                : project_data[currentIndex].gif_width, // Use original width otherwise
              height: isMobile
                ? "auto" // Use mobile height if isMobile is true
                : project_data[currentIndex].gif_height, // Use original height otherwise
            }}
          />
        </div>
      </div>

      <>
        <AiOutlineLeft
          className="arrow-icon left-icon"
          onClick={goLeft}
          style={{ opacity: opacity }}
        />
        <AiOutlineRight
          className="arrow-icon right-icon"
          onClick={goRight}
          style={{ opacity: opacity }}
        />
      </>
    </div>
  );
};

export default ProjectsView;
