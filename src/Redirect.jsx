import { useEffect } from "react";

export const Redirect = () => {
  useEffect(() => {
    console.log("Redirecting to BlockStar Launchpad for presale claim...");
    const pathname = window.location.pathname;

    if (pathname === "/claim") {
      window.location =
        "https://launchpad.blockstar.site/ember-presale/?chainid=56";
    }
  }, []);

  return <h1>Redirecting to BlockStar Launchpad</h1>;
};
