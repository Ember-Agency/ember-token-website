import { useState } from "react";
import { Navigation } from ".";
import "../styles/MobileMenu.scss";

export const MobileMenu = () => {
  const [open, setOpen] = useState(false);

  const handleNavigate = () => {
    setOpen(false);
  };

  return (
    <div className={`mobile-nav ${open ? "is-open" : ""}`}>
      <button aria-label="mobile navigation" onClick={() => setOpen(!open)}>
        <span className="burger"></span>
      </button>
      <Navigation onNavigate={handleNavigate} />
    </div>
  );
};
