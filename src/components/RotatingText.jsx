import { useEffect } from "react";

// https://mbrandau.github.io/text-rotate/
export const RotatingText = ({ period, speed, text }) => {
  const TextRotate = function (el, texts) {
    this.texts = texts;
    this.el = el;
    this.el.innerHTML = `<span class="wrap">${this.text}</span><span class="cursor"></span>`;
    this.wrap = this.el.querySelector(".wrap");
    this.cursor = this.el.querySelector(".cursor");
    this.index = 0;
    this.period = period || 2000;
    this.speed = speed || 2;
    this.text = "";
    this.tick();
    this.deleting = false;
  };

  TextRotate.prototype.tick = function () {
    if (this.index >= this.texts.length) {
      this.index = 0;
    }

    let fullTxt = this.texts[this.index];

    if (this.deleting) {
      this.text = fullTxt.substring(0, this.text.length - 1);
    } else {
      this.text = fullTxt.substring(0, this.text.length + 1);
    }

    this.wrap.innerHTML = this.text;

    let that = this;
    let delta = 200 - Math.random() * 70;

    if (this.deleting) {
      delta /= 2;
    }

    delta /= this.speed;

    if (!this.deleting && this.text === fullTxt) {
      delta = this.period;
      this.deleting = true;
    } else if (this.deleting && this.text === "") {
      this.deleting = false;
      this.index++;
      delta = 500;
    }

    setTimeout(function () {
      that.tick();
    }, delta);
  };

  useEffect(() => {
    let element = document.getElementById("text-rotate");

    new TextRotate(element, text);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <h1 className="rotating-text">
      <span
        id="text-rotate"
        data-rotate={text}
        data-speed="2"
        data-period="2000"
      ></span>
    </h1>
  );
};
