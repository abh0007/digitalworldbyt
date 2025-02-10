import React from "react";
import "./BrandSlider.css"; // Import the CSS file

const BrandSlider = () => {
  const logosLTR = ["logo7.jpg", "logo8.jpg", "logo9.jpg", "logo10.jpg", "logo11.jpg", "logo12.jpg", "logo25.jpg"];
  const logosRTL = ["logo20.jpg", "logo21.jpg", "logo22.jpg", "logo23.jpg", "logo13.jpg", "logo24.jpg"];

  return (
    <div className="brand-slider-container">
      {/* Left to Right Scrolling */}
      <div className="brand-slider">
        <div className="slider-track animate-loop-scroll-ltr">
          {[...logosLTR, ...logosLTR].map((logo, index) => (
            <img key={index} src={logo} alt={`Brand ${index + 1}`} className="brand-logo" />
          ))}
        </div>
      </div>

      {/* Right to Left Scrolling */}
      <div className="brand-slider">
        <div className="slider-track animate-loop-scroll-rtl">
          {[...logosRTL, ...logosRTL].map((logo, index) => (
            <img key={index} src={logo} alt={`Brand ${index + 1}`} className="brand-logo" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandSlider;
