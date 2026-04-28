import { useEffect, useState, useRef } from 'react';
import './Carousel.css';

export function Carousel({ images = [] }) {
  const [current, setCurrent] = useState(1); // começa em 1 por causa do clone
  const [transition, setTransition] = useState(true);
  const trackRef = useRef(null);

  // cria lista com clone no início e no fim
  const extendedImages = [
    images[images.length - 1],
    ...images,
    images[0],
  ];

  const nextSlide = () => {
    setCurrent((prev) => prev + 1);
  };

  const prevSlide = () => {
    setCurrent((prev) => prev - 1);
  };

  // autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // controle do loop infinito
  useEffect(() => {
    if (current === extendedImages.length - 1) {
      setTimeout(() => {
        setTransition(false);
        setCurrent(1);
      }, 500);
    }

    if (current === 0) {
      setTimeout(() => {
        setTransition(false);
        setCurrent(extendedImages.length - 2);
      }, 500);
    }
  }, [current]);

  // reativa a transição
  useEffect(() => {
    if (!transition) {
      setTimeout(() => setTransition(true), 50);
    }
  }, [transition]);

  if (!images.length) return null;

  return (
    <div className="carousel-container">
      <div
        ref={trackRef}
        className="carousel-track"
        style={{
          transform: `translateX(-${current * 100}%)`,
          transition: transition ? 'transform 0.5s ease-in-out' : 'none',
        }}
      >
        {extendedImages.map((img, index) => (
          <div className="carousel-slide" key={index}>
            <img src={img} alt={`slide-${index}`} />
          </div>
        ))}
      </div>

      <button className="carousel-btn prev" onClick={prevSlide}>
        ‹
      </button>

      <button className="carousel-btn next" onClick={nextSlide}>
        ›
      </button>

      <div className="carousel-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${
              current === index + 1 ? 'active' : ''
            }`}
            onClick={() => setCurrent(index + 1)}
          />
        ))}
      </div>
    </div>
  );
}