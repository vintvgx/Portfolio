import React, { useRef, useState } from "react";
import jsonData from "../Projects/Projects.json"; // Import JSON data
import "./ProjectsUpdated.css";

const ProjectsUpdated: React.FC = () => {
  const imageContainerRef = useRef<HTMLDivElement | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility

  const handleImageClick = (index: number) => {
    console.log("CLICK PRESSED");
    if (imageContainerRef.current) {
      console.log("CURRENT");
      const imageWrapper = imageContainerRef.current.children[
        index
      ] as HTMLDivElement;
      if (imageWrapper) {
        // Set the current index
        setCurrentIndex(index);
        console.log(
          "🚀 ~ file: ProjectsUpdated.tsx:20 ~ handleImageClick ~ index:",
          index
        );

        // Open the modal
        setIsModalOpen(true);
        console.log(isModalOpen);
      }
    }
  };

  const closeModal = () => {
    // Close the modal
    setIsModalOpen(false);
  };

  return (
    <div style={{ height: "auto" }}>
      {/* Container for image wrapper divs */}
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
                cursor: "pointer",
              }}
            />
          </div>
        ))}
        {/* Add empty div to create space on the right */}
        <div style={{ flex: "0 0 auto", width: "50%" }}></div>
      </div>
      {/* Modal */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            {currentIndex !== null && (
              <img
                src={jsonData[currentIndex - 1].img_src} // Subtract 1 because the index is 1-based
                alt=""
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  display: "block",
                  margin: "0 auto",
                }}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectsUpdated;

const imageContainerStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "row",
  overflowX: "scroll", // Enable horizontal scrolling
  gap: "20px", // 40px spacing between images
  height: "85vh",
  alignItems: "center", // Center vertically
  scrollSnapType: "x mandatory", // Enable snapping
};

const imageWrapperStyle = (index: number): React.CSSProperties => ({
  flex: "0 0 auto",
  width: "50%",
  textAlign: "center", // Center content horizontally
  scrollSnapAlign: "center", // Center the image when snapping
});
