import Burger from "./Burger";
import Nav from "./Nav";
import { useState, useRef, useEffect } from "react";
function Navbar() {
  const navbar = useRef();
  const [clicked, setClick] = useState(false);
  const clickFromBurger = (clickedState) => {
    setClick(clickedState);
  };
  useEffect(() => {
    navbar.current.classList.remove("translate-x-full");
    navbar.current.classList.add(
      "translate-x-52",
      "sm:translate-x-1/2",
      "md:translate-x-3/4"
    );
    setTimeout(() => {
      navbar.current.classList.remove("opacity-0", "duration-1000");
      navbar.current.classList.add("duration-700");
    }, 500);
  }, []);
  useEffect(() => {
    if (clicked) {
      navbar.current.classList.remove(
        "translate-x-52",
        "sm:translate-x-1/2",
        "md:translate-x-3/4"
      );
    } else {
      navbar.current.classList.add(
        "translate-x-52",
        "sm:translate-x-1/2",
        "md:translate-x-3/4"
      );
    }
  }, [clicked]);
  return (
    <div
      className="z-10 w-full flex justify-end fixed md:h-screen transition-all transform duration-1000 translate-x-full ease-in-out opacity-0"
      ref={navbar}
      style={{ pointerEvents: "none" }}
    >
      <Burger sendClickState={clickFromBurger} />
      <Nav clicked={clicked} />
    </div>
  );
}

export default Navbar;
