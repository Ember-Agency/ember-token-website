import { useEffect, useState } from "react";
import "../styles/Slider.scss";

// TO-DO: Add automatic scrolling to the slider

export const Slider = ({ slides }) => {
  const [dynamicWidth, setDynamicWidth] = useState(window.innerWidth);

  const getDynamicWidth = () => {
    setDynamicWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", getDynamicWidth);
  }, [dynamicWidth]);

  return dynamicWidth > 600 ? (
    <div className="slider">
      <input
        type="radio"
        name="slider"
        title="Tokenomics"
        defaultChecked="checked"
      />
      <input type="radio" name="slider" title="NFT Rewards" />
      <input type="radio" name="slider" title="Consultinomics" />
      <div className="slider__inner">
        {slides.map((slide, index) => (
          <div className="slider__contents" key={index}>
            {slide}
          </div>
        ))}
      </div>
    </div>
  ) : (
    slides.map((slide, index) => (
      <div className="mobile-slides" key={index}>
        {slide}
      </div>
    ))
  );
};
