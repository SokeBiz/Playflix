import React, { useState, useEffect, useRef } from 'react';
import cstyle from "@/styles/carousel.module.css";
// const Carousel = ({ images }) => {
//   const [currentImage, setCurrentImage] = useState(0);

//   const handlePrevClick = () => {
//     setCurrentImage(currentImage === 0 ? images.length - 1 : currentImage - 1);
//   };

//   const handleNextClick = () => {
//     setCurrentImage(currentImage === images.length - 1 ? 0 : currentImage + 1);
//   };

//   return (
//     <div className="carousel">
//       <img src={images[currentImage]} alt="Image" />
//       <button onClick={handlePrevClick}>Prev</button>
//       <button onClick={handleNextClick}>Next</button>
//     </div>
//   );
// };


const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  useEffect(() => {
    const handleSwipe = (event) => {
      const { clientX: endX } = event.touches[0];
      const { clientX: startX } = event.touches[0].target.offsetParent;

      if (endX < startX) {
        setCurrentIndex((prevIndex) => {
          return prevIndex === images.length - 1 ? prevIndex : prevIndex + 1;
        });
      } else {
        setCurrentIndex((prevIndex) => {
          return prevIndex === 0 ? prevIndex : prevIndex - 1;
        });
      }
    };

    carouselRef.current.addEventListener('touchstart', handleSwipe);
    return () => carouselRef.current.removeEventListener('touchstart', handleSwipe);
  }, [images]);

  return (
    <div className={cstyle.carousel} ref={carouselRef}>
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          className={`cstyle.carousel-item ${currentIndex === index ? 'active' : ''}`}
        />
      ))}
    </div>
  );
};

export default Carousel;
