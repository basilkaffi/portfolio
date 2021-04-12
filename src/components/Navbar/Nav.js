import { useEffect, useRef } from "react";
import img from "../../asset/ico.jpg";
import medium from "../../asset/medium.svg";
import linkedin from "../../asset/linkedin.svg";
import mail from "../../asset/mail.svg";
function Nav({ clicked }) {
  const top = useRef();
  const about = useRef();
  const project = useRef();
  const contact = useRef();
  const info = useRef();
  const linkedinLink = useRef();
  const mediumLink = useRef();
  const emailLink = useRef();
  useEffect(() => {
    if (clicked) {
      top.current.classList.remove("opacity-0");
      about.current.classList.remove("-translate-y-8");
      project.current.classList.remove("-translate-y-10");
      contact.current.classList.remove("-translate-y-12");
      info.current.classList.remove("-translate-y-14");
      setTimeout(() => {
        about.current.style.transitionDuration = "300ms";
        project.current.style.transitionDuration = "300ms";
        contact.current.style.transitionDuration = "300ms";
      }, 500);
    } else {
      top.current.classList.add("opacity-0");
      about.current.classList.add("-translate-y-8");
      project.current.classList.add("-translate-y-10");
      contact.current.classList.add("-translate-y-12");
      info.current.classList.add("-translate-y-14");
      about.current.style.transitionDuration = "1200ms";
      project.current.style.transitionDuration = "1200ms";
      contact.current.style.transitionDuration = "1200ms";
    }
  }, [clicked]);
  const gotoSection = (section) => {
    const App = document.getElementById("app");
    const Section = document.getElementById(section);
    App.style.transform = `translateY(-${Section.offsetTop}px)`;
  };
  return (
    <div className="flex h-screen w-3/4 bg-gray-900 bg-opacity-95">
      <div className="font-roboto-slab text-center w-52 text-2xl my-14 sm:text-4xl sm:w-72 md:my-auto lg:w-80 mx-auto lg:text-5xl">
        <div
          ref={top}
          onClick={() => gotoSection("home")}
          className="cursor-pointer w-full flex justify-center mb-5 transition-all transform opacity-0"
          style={{ pointerEvents: "all", transitionDuration: "2000ms" }}
        >
          <img
            src={img}
            style={{ width: "20%", borderRadius: "50%" }}
            alt="home icon"
          />
        </div>
        <div
          ref={about}
          onClick={() => gotoSection("about")}
          className="text-gray-300 font-roboto-mono cursor-pointer font-semibold w-full py-5 px-12 transition-all transform -translate-y-8 nav-item-hover"
          style={{ pointerEvents: "all", transitionDuration: "1200ms" }}
        >
          ABOUT
        </div>
        <div
          ref={project}
          onClick={() => gotoSection("project")}
          className="text-gray-300 font-roboto-mono cursor-pointer font-semibold w-full py-5 px-12 transition-all transform -translate-y-10 nav-item-hover"
          style={{ pointerEvents: "all", transitionDuration: "1200ms" }}
        >
          PROJECT
        </div>
        <div
          ref={contact}
          onClick={() => gotoSection("contact")}
          className="text-gray-300 font-roboto-mono cursor-pointer font-semibold w-full py-5 px-12 transition-all transform -translate-y-12 nav-item-hover"
          style={{ pointerEvents: "all", transitionDuration: "1200ms" }}
        >
          CONTACT
        </div>
        <div
          ref={info}
          className="w-full h-16 sm:h-20 transition-all transform -translate-y-14"
          style={{ pointerEvents: "all", transitionDuration: "1200ms" }}
        >
          <div className="w-3/4 h-full pt-4 pb-1 px-1 flex justify-between mx-auto">
            <img
              src={linkedin}
              onClick={() => linkedinLink.current.click()}
              className="bg-gray-200 p-2 sm:p-4 cursor-pointer transform duration-300 hover:scale-110 hover:bg-white pointer-events-auto"
              alt="linkedin icon"
            />
            <img
              src={medium}
              onClick={() => mediumLink.current.click()}
              className="bg-gray-200 p-2 sm:p-4 cursor-pointer transform duration-300 hover:scale-110 hover:bg-white pointer-events-auto"
              alt="medium icon"
            />
            <img
              src={mail}
              onClick={() => emailLink.current.click()}
              className="bg-gray-200 p-2 sm:p-4 cursor-pointer transform duration-300 hover:scale-110 hover:bg-white pointer-events-auto"
              alt="mail icon"
            />
            <div className="absolute">
              <a
                href="https://www.linkedin.com/in/basil-ar-rahman-362325192/"
                target="_blank"
                ref={linkedinLink}
              ></a>
              <a
                href="https://basilarr7.medium.com/"
                target="_blank"
                ref={mediumLink}
              ></a>
              <a href="mailto: basilarr7@gmail.com" ref={emailLink}></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
