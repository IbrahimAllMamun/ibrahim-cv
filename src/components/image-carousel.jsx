import React, { useState, useEffect } from "react";

const ImageCarousel = ({ images, interval = 3000 }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      // Calculate the index of the next image
      const nextIndex = (currentImageIndex + 1) % images.length;
      setCurrentImageIndex(nextIndex);
    }, interval);

    return () => {
      clearInterval(timer);
    };
  }, [currentImageIndex, interval, images.length]);

  return (
    <div className="image-carousel image-container">
      <div className="image-wrapper">
        <div className="aspect-ratio-wrapper">
          <img
            src={images[currentImageIndex]}
            alt={`cover ${currentImageIndex + 1}`}
          />
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;
