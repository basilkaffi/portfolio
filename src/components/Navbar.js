import { useState, useRef } from "react";
import { hover, unHover } from "./CustomCursor";
function Navbar({ cursor }) {
  const line1 = useRef();
  const line2 = useRef();
  const line3 = useRef();
  const about = useRef();
  const project = useRef();
  const contact = useRef();
  const navbar = useRef();
  const [clicked, setClickState] = useState(false);
  const animateBurger = () => {
    if (clicked === false) {
      navbar.current.style.transform = "translateX(0%)";
      line1.current.style.transform =
        "rotate(-45deg) translate(-0.58rem,0.58rem)";
      line3.current.style.transform =
        "rotate(45deg) translate(-0.58rem,-0.58rem)";
      line1.current.style.width = "2.5rem";
      line3.current.style.width = "2.5rem";
      line2.current.style.opacity = "0";
      about.current.style.opacity = "1";
      about.current.style.transform = "translateY(0)";
      project.current.style.opacity = "1";
      project.current.style.transform = "translateY(0)";
      contact.current.style.opacity = "1";
      contact.current.style.transform = "translateY(0)";
      setTimeout(() => {
        about.current.style.transitionDuration = "300ms";
        project.current.style.transitionDuration = "300ms";
        contact.current.style.transitionDuration = "300ms";
      }, 1000);
      setClickState(true);
    } else {
      if (window.innerWidth >= 768) {
        line1.current.style.width = "1.75rem";
        line3.current.style.width = "1.75rem";
      }
      navbar.current.style.transform = "translateX(16rem)";
      line1.current.style.transform = "rotate(0)";
      line3.current.style.transform = "rotate(0)";
      line2.current.style.opacity = "1";
      about.current.style.opacity = "0";
      project.current.style.opacity = "0";
      contact.current.style.opacity = "0";
      about.current.style.transitionDuration = "1200ms";
      project.current.style.transitionDuration = "1200ms";
      contact.current.style.transitionDuration = "1200ms";
      about.current.style.transform = "translateY(-2rem)";
      project.current.style.transform = "translateY(-2.5rem)";
      contact.current.style.transform = "translateY(-3rem)";
      setClickState(false);
    }
  };
  return (
    <nav
      className="min-w-full flex justify-end transition-transform duration-500 transform translate-x-64 fixed z-30 md:min-h-screen"
      style={{ pointerEvents: "none" }}
      ref={navbar}
    >
      <div
        className="flex flex-col my-1 mx-3 h-12 justify-evenly md:my-auto md:items-end"
        style={{ pointerEvents: "all" }}
        onClick={animateBurger}
        onMouseOver={() => {
          hover(cursor);
          if (window.innerWidth >= 768) {
            if (!clicked) {
              line1.current.style.transform = "translate(-0.75rem, -0.2rem)";
              line3.current.style.transform = "translate(-0.75rem, 0.2rem)";
              line2.current.style.transform = "translateX(-1rem)";
            } else if (clicked) {
              line1.current.style.width = "3rem";
              line3.current.style.width = "3rem";
            }
          }
        }}
        onMouseLeave={() => {
          unHover(cursor);
          if (window.innerWidth >= 768) {
            if (!clicked) {
              line1.current.style.transform = "translate(0)";
              line3.current.style.transform = "translate(0)";
              line2.current.style.transform = "translateX(0)";
            } else if (clicked) {
              line1.current.style.width = "2.5rem";
              line3.current.style.width = "2.5rem";
            }
          }
        }}
      >
        <div
          className="h-1 w-10 md:w-7 bg-green-300 bg-opacity-90 transition-all duration-500"
          ref={line1}
        ></div>
        <div
          className="h-1 w-10 bg-blue-300 bg-opacity-90 transition-all duration-500"
          ref={line2}
        ></div>
        <div
          className="h-1 w-10 md:w-7 bg-yellow-300 bg-opacity-90 transition-all duration-500"
          ref={line3}
        ></div>
      </div>
      <div className="h-screen w-64 flex bg-gray-900 bg-opacity-95">
        <ul className="my-8 md:my-auto mx-auto w-full text-3xl sm:text-4xl md:text-5xl">
          <li
            ref={about}
            className="text-green-300 font-semibold w-full py-4 px-12 text-center transition-all transform -translate-y-8 nav-item-hover"
            style={{ pointerEvents: "all", transitionDuration: "1200ms" }}
            onMouseOver={() => hover(cursor)}
            onMouseLeave={() => unHover(cursor)}
          >
            About
          </li>
          <li
            ref={project}
            className="text-blue-300 font-semibold w-full py-4 px-12 text-center transition-all transform -translate-y-10 nav-item-hover"
            style={{ pointerEvents: "all", transitionDuration: "1200ms" }}
            onMouseOver={() => hover(cursor)}
            onMouseLeave={() => unHover(cursor)}
          >
            Project
          </li>
          <li
            ref={contact}
            className="text-yellow-300 font-semibold w-full py-4 px-12 text-center transition-all transform -translate-y-12 nav-item-hover"
            style={{ pointerEvents: "all", transitionDuration: "1200ms" }}
            onMouseOver={() => hover(cursor)}
            onMouseLeave={() => unHover(cursor)}
          >
            Contact
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
