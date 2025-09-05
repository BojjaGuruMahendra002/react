import React, { useState, useEffect } from 'react';

const Carousel = () => {
  const images = [
    "https://images.pexels.com/photos/26797335/pexels-photo-26797335/free-photo-of-phong-c-nh-nui-thien-nhien-danh-lam-th-ng-c-nh.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    "https://images.pexels.com/photos/24861681/pexels-photo-24861681/free-photo-of-coffee-cup-and-books-on-bed.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    "/src/assets/road.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="w-full h-[500px] overflow-hidden relative">
      <img
        src={images[currentIndex]}
        alt="carousel"
        className=" object-cover transition-all duration-700" style={{width:'1600px',height:'400px'}}
      />
    </div>
  );
};

export default Carousel;
