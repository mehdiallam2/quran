import { useEffect, useState } from "react";

function useHideHeader() {
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(window.scrollY);

  function handleScroll() {
    const currentScrollY = window.scrollY;
    setIsHidden(currentScrollY > lastScrollY && currentScrollY > 10);
    setLastScrollY(currentScrollY);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return { isHidden };
}

export default useHideHeader;
