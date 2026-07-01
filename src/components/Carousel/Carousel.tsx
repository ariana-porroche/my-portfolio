import React from 'react';
import './Carousel.css';

interface CarouselProps {
    images: string[];
}

export const Carousel: React.FC<CarouselProps> = ({ images }) => {
    const loopImages = [...images, ...images];

    return (
        <div className="carousel-container">
            {/*
             * Hidden SVG that defines the panoramic lens mask applied to the
             * carousel stage. Uses objectBoundingBox so it scales to any width.
             *
             * Shape: a wide lens where the TOP edge bows UPWARD at the center
             * (y ≈ 0) and slopes down toward the sides (y ≈ 0.18), and the
             * BOTTOM edge bows DOWNWARD at the center (y ≈ 1) and rises toward
             * the sides (y ≈ 0.82). This makes the center cards appear tallest
             * and the edge cards more clipped, exactly like the reference image.
             */}
            <svg width="0" height="0" style={{ position: 'absolute', overflow: 'visible' }}>
                <defs>
                    <clipPath id="carousel-lens-clip" clipPathUnits="objectBoundingBox">
                        {/*
                         * Lens shape centered on the stage:
                         *  - Top edge: starts at y=0.22 on the sides, bows UP to y=0 at center
                         *  - Bottom edge: starts at y=0.78 on the sides, bows DOWN to y=1 at center
                         * The stage height should equal the card height + padding so the
                         * center card appears fully visible.
                         */}
                        <path d="
                            M 0 0.22
                            C 0.25 0, 0.75 0, 1 0.22
                            L 1 0.78
                            C 0.75 1, 0.25 1, 0 0.78
                            Z
                        " />
                    </clipPath>
                </defs>
            </svg>

            {/* The clip is applied to the stage (the full-width scrolling window) */}
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
