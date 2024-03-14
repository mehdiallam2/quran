import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./index.css";

function Header() {
  const [visible, setVisible] = useState(true);
  const [lastPosition, setLastPosition] = useState(window.scrollY);

  useEffect(() => {
    function handleScroll() {
      const currentPosition = window.scrollY;
      // Hide Header if we are scrolling back
      setVisible(lastPosition > currentPosition || lastPosition < 1);
      setLastPosition(currentPosition);
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <header className={`header ${visible ? "visible" : "hidden"}`}>
      <nav className="header-container">
        <Link className="header-logo" to={"/"}>
          Quran
        </Link>
      </nav>
    </header>
  );
}

export default Header;
