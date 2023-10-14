import React from "react";
import "./Carousel.css";

type CarouselProps = {
  className?: string;
};

const Carousel: React.FC<CarouselProps> = ({ className }) => {
  return (
    <div className={`carousel ${className}`}>
      <div className="logos-slide">
        <img src="/icons/adobe.png" alt="Carousel 1" />
        <img src="/icons/atom.png" alt="Carousel 2" />
        <img src="/icons/css-3.png" alt="Carousel 3" />
        <img src="/icons/docker.png" alt="Carousel 4" />
        <img src="/icons/python.png" alt="Carousel 5" />
        <img src="/icons/database.png" alt="Carousel 6" />
        <img src="/icons/git.png" alt="Carousel 7" />
        <img src="/icons/github.png" alt="Carousel 8" />
      </div>
      <div className="logos-slide">
        <img src="/icons/adobe.png" alt="Carousel 1" />
        <img src="/icons/atom.png" alt="Carousel 2" />
        <img src="/icons/css-3.png" alt="Carousel 3" />
        <img src="/icons/docker.png" alt="Carousel 4" />
        <img src="/icons/python.png" alt="Carousel 5" />
        <img src="/icons/database.png" alt="Carousel 6" />
        <img src="/icons/git.png" alt="Carousel 7" />
        <img src="/icons/github.png" alt="Carousel 8" />
      </div>
    </div>
  );
};

export default Carousel;
