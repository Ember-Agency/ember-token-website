import "../styles/Slider.scss";

// TO-DO: Add automatic scrolling to the slider

export const Slider = ({ slides }) => {
  return (
    <div class="slider">
      <input
        type="radio"
        name="slider"
        title="Tokenomics"
        defaultChecked="checked"
      />
      <input type="radio" name="slider" title="NFT Rewards" />
      <input type="radio" name="slider" title="Consultinomics" />
      <div class="slider__inner">
        {slides.map((slide, index) => (
          <div class="slider__contents" key={index}>
            {slide}
          </div>
        ))}
      </div>
    </div>
  );
};
