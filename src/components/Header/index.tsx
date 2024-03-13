import { Link } from "react-router-dom";
import "./index.css";
import { useEffect, useState } from "react";

function Header() {
  const [position, setPosition] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      const moving = window.pageYOffset;

      setVisible(position > moving);
      setPosition(moving);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const cls = visible ? "visible" : "hidden";
  return (
    <header className={`header ${cls}`}>
      <nav className="header-container container">
        <Link className="header-logo" to={"/"}>
          Quran
        </Link>
      </nav>
    </header>
  );
}

export default Header;
