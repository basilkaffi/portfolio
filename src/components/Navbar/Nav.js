import { useEffect, useRef } from "react";
import img from "../../asset/ico.jpg";
import { Link } from "react-scroll";
function Nav({ clicked }) {
  const top = useRef();
  const about = useRef();
  const project = useRef();
  const skill = useRef();
  const contact = useRef();
  useEffect(() => {
    if (clicked) {
      top.current.classList.remove("opacity-0");
      about.current.classList.remove("-translate-y-8");
      project.current.classList.remove("-translate-y-10");
      skill.current.classList.remove("-translate-y-12");
      contact.current.classList.remove("-translate-y-14");
      setTimeout(() => {
        about.current.style.transitionDuration = "300ms";
        project.current.style.transitionDuration = "300ms";
        skill.current.style.transitionDuration = "300ms";
        contact.current.style.transitionDuration = "300ms";
      }, 500);
    } else {
      top.current.classList.add("opacity-0");
      about.current.classList.add("-translate-y-8");
      project.current.classList.add("-translate-y-10");
      skill.current.classList.add("-translate-y-12");
      contact.current.classList.add("-translate-y-14");
      about.current.style.transitionDuration = "1200ms";
      project.current.style.transitionDuration = "1200ms";
      skill.current.style.transitionDuration = "1200ms";
      contact.current.style.transitionDuration = "1200ms";
    }
  }, [clicked]);
  return (
    <div className="flex h-screen sm:w-1/2 md:w-3/4 bg-gray-900 bg-opacity-95">
      <div className="font-roboto-slab text-center w-52 text-2xl my-14 sm:text-4xl sm:w-72 md:my-auto lg:w-80 mx-auto lg:text-5xl">
        <Link to="home" spy={true} smooth={true} duration={600}>
          <div
            ref={top}
            className="cursor-pointer w-full flex justify-center mb-5 transition-all transform opacity-0"
            style={{ pointerEvents: "all", transitionDuration: "2000ms" }}
          >
            <img
              src={img}
              style={{ width: "20%", borderRadius: "50%" }}
              alt="home icon"
            />
          </div>
        </Link>
        <Link to="about" spy={true} smooth={true} duration={600}>
          <div
            ref={about}
            className="text-gray-300 font-roboto-mono cursor-pointer font-semibold w-full py-5 px-12 transition-all transform -translate-y-8 nav-item-hover"
            style={{ pointerEvents: "all", transitionDuration: "1200ms" }}
          >
            ABOUT
          </div>
        </Link>
        <Link to="project" spy={true} smooth={true} duration={600}>
          <div
            ref={project}
            className="text-gray-300 font-roboto-mono cursor-pointer font-semibold w-full py-5 px-12 transition-all transform -translate-y-10 nav-item-hover"
            style={{ pointerEvents: "all", transitionDuration: "1200ms" }}
          >
            PROJECT
          </div>
        </Link>
        <div
          ref={skill}
          className="text-gray-300 font-roboto-mono cursor-pointer font-semibold w-full py-5 px-12 transition-all transform -translate-y-12 nav-item-hover"
          style={{ pointerEvents: "all", transitionDuration: "1200ms" }}
        >
          SKILLS
        </div>
        <div
          ref={contact}
          className="text-gray-300 font-roboto-mono cursor-pointer font-semibold w-full py-5 px-12 transition-all transform -translate-y-14 nav-item-hover"
          style={{ pointerEvents: "all", transitionDuration: "1200ms" }}
        >
          CONTACT
        </div>
      </div>
    </div>
  );
}

export default Nav;
