import React from 'react';
import './Carousel.css';

interface CarouselProps {
    images: string[];
}

export const Carousel: React.FC<CarouselProps> = ({ images }) => {
    const loopImages = [...images, ...images];

    return (
        <div className="carousel-container">
            <svg width="0" height="0" style={{ position: 'absolute', overflow: 'visible' }}>
                <defs>
                    <clipPath id="carousel-lens-clip" clipPathUnits="objectBoundingBox">
                        <path d="
                            M 0 0
                            C 0.25 0.22, 0.75 0.22, 1 0
                            L 1 1
                            C 0.75 0.78, 0.25 0.78, 0 1
                            Z
                        " />
                    </clipPath>
                </defs>
            </svg>

            <div className="carousel-stage">
                <div className="carousel-track">
                    {loopImages.map((src, index) => (
                        <div className="carousel-item" key={index}>
                            <img src={src} alt={`Proyecto ${index}`} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
