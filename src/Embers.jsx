import { useEffect } from "react";

export const FloatingEmbers = () => {
  useEffect(() => {
    let posY1 = 0;
    let posY2 = 0;
    let posY3 = 0;

    const timer = setInterval(() => {
      if (posY1 <= -900) posY1 = 0;
      if (posY2 <= -900) posY2 = 0;
      if (posY3 <= -1200) posY3 = 0;

      posY1 -= 1;
      posY2 -= 2;
      posY3 -= 3;

      const ember1 = document.getElementById("ember_01");
      const ember2 = document.getElementById("ember_02");
      const ember3 = document.getElementById("ember_03");

      ember1.style.backgroundPosition = `0 ${posY1}px`;
      ember2.style.backgroundPosition = `0 ${posY2}px`;
      ember3.style.backgroundPosition = `0 ${posY3}px`;
    }, 50);

    return () => clearInterval(timer);
  }, []);

  return (
    <div id="embers">
      <div id="ember_01"></div>
      <div id="ember_02"></div>
      <div id="ember_03"></div>
    </div>
  );
};
