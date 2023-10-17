import React, { useRef, useState } from "react";
import jsonData from "../Projects/Projects.json"; // Import JSON data
import "./ProjectsUpdated.css";

const ProjectsUpdated: React.FC = () => {
  const imageContainerRef = useRef<HTMLDivElement | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const handleImageClick = (index: number) => {
    console.log(
      "🚀 ~ file: ProjectsUpdated.tsx:30 ~ handleImageClick ~ e:",
      index
    );

    if (imageContainerRef.current) {
      const imageWrapper = imageContainerRef.current.children[
        index
      ] as HTMLDivElement;
      if (imageWrapper) {
        // Calculate the scrollLeft position based on the clicked index
        const containerWidth = imageContainerRef.current.offsetWidth;
        const imageWidth = imageWrapper.offsetWidth;
        const scrollLeft =
          imageWrapper.offsetLeft - (containerWidth - imageWidth) / 2;

        // Ensure scrollLeft is not negative
        const validScrollLeft = Math.max(scrollLeft, 0);

        // Animate scrolling to the selected image
        imageContainerRef.current.scrollTo({
          left: validScrollLeft,
          behavior: "smooth",
        });

        // Show the text elements for the current index
        const textElements = imageWrapper.querySelectorAll(".image-text");
        textElements.forEach((element) => {
          element.classList.add("show");
        });

        // Update the current index
        setCurrentIndex(index);
      }
    }
  };

  return (
    <div style={imageContainerStyle} ref={imageContainerRef}>
      {/* Add empty div to create space on the left */}
      <div style={{ flex: "0 0 auto", width: "50%" }}></div>
      {jsonData.map((item, index) => (
        <div
          key={index}
          style={imageWrapperStyle(index)}
          onClick={() => handleImageClick(index + 1)}>
          <img
            src={item.img_src}
            alt=""
            style={{
              width: item.cover_update_width,
              display: "block",
              margin: "0 auto",
            }}
          />
        </div>
      ))}
      {/* Add empty div to create space on the right */}
      <div style={{ flex: "0 0 auto", width: "50%" }}></div>
    </div>
  );
};

export default ProjectsUpdated;

const imageContainerStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "row",
  overflowX: "scroll", // Enable horizontal scrolling
  gap: "20px", // 40px spacing between images
  height: "100vh",
  alignItems: "center", // Center vertically
  scrollSnapType: "x mandatory", // Enable snapping
};

const imageWrapperStyle = (index: number): React.CSSProperties => ({
  flex: "0 0 auto",
  width: "50%",
  textAlign: "center", // Center content horizontally
  scrollSnapAlign: "center", // Center the image when snapping
});
