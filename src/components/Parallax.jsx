import "../styles/Parallax.scss";

// codepen.io/andrejsharapov/pen/aPrNxP
export const Parallax = ({ desc, heading, subheading }) => {
  window.scroll(function () {
    const a = this.scrollTop(),
      b = 800;
    document.querySelectorAll(".paralax h1").css({
      backgroundPosition: "center " + a / 2 + "px",
    });
    document.querySelectorAll(".paralax").css({
      top: a / 1.6 + "px",
      opacity: 1 - a / b,
    });
  });

  // parallax scrolling
  document.addEventListener("scroll", () => {
    const top = window.pageYOffset,
      one = document.querySelector(".one"),
      two = document.querySelector(".two"),
      three = document.querySelector(".three"),
      four = document.querySelector(".four"),
      five = document.querySelector(".five");

    one.style.bottom = -(top * 0.1) + "px";
    two.style.bottom = -(top * 0.2) + "px";
    three.style.bottom = -(top * 0.3) + "px";
    four.style.bottom = -(top * 0.4) + "px";
    five.style.bottom = -(top * 0.5) + "px";
  });

  return (
    <div className="overlay">
      <div className="parallax">
        <h5>{subheading}</h5>
        <h1>{heading}</h1>
        <p>{desc}</p>
        <div className="one"></div>
        <div className="two"></div>
        <div className="three"></div>
        <div className="four"></div>
        <div className="five"></div>
      </div>
    </div>
  );
};
