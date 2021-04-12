import { useEffect, useRef } from "react";
import medium from "../../asset/medium.svg";
import linkedin from "../../asset/linkedin.svg";
import mail from "../../asset/mail.svg";
function Contact() {
  const title = useRef();
  const info = useRef();
  const linkedinLink = useRef();
  const mediumLink = useRef();
  const emailLink = useRef();
  const sectionTitle = useRef();
  const sectionNumber = useRef();
  const sectionTitleM = useRef();
  const sectionNumberM = useRef();
  useEffect(() => {
    const scrollingAnimation = () => {
      const Contact = document.getElementById("contact");
      //appear
      if (
        Contact.getBoundingClientRect().top < window.innerHeight / 2 ||
        Contact.getBoundingClientRect().bottom > 150
      ) {
        title.current.classList.remove("-translate-x-24", "opacity-0");
        info.current.classList.remove("opacity-0");
        sectionTitle.current.classList.remove("translate-y-full", "opacity-0");
        sectionNumber.current.classList.remove("opacity-0");
        sectionTitleM.current.classList.remove("translate-y-full", "opacity-0");
        sectionNumberM.current.classList.remove("opacity-0");
        info.current.classList.add("delay-500");
      }
      //reset
      if (
        Contact.getBoundingClientRect().top > window.innerHeight - 100 ||
        Contact.getBoundingClientRect().bottom < 50
      ) {
        info.current.classList.remove("delay-500");
        title.current.classList.add("-translate-x-24", "opacity-0");
        info.current.classList.add("opacity-0");
        sectionTitle.current.classList.add("translate-y-full", "opacity-0");
        sectionNumber.current.classList.add("opacity-0");
        sectionTitleM.current.classList.add("translate-y-full", "opacity-0");
        sectionNumberM.current.classList.add("opacity-0");
      }
    };
    window.addEventListener("transitionend", scrollingAnimation);
    return () => {
      window.removeEventListener("transitionend", scrollingAnimation);
    };
  }, []);
  return (
    <div
      id="contact"
      style={{ minHeight: "625px", textShadow: "0 0 5px #11182777" }}
      className="text-gray-200 h-screen w-full z-0 flex flex-col md:flex-row md:items-center"
    >
      <div className="flex flex-col mt-auto md:h-1/3 transform -translate-y-3 md:-translate-y-12 md:mt-0 md:ml-6">
        <div
          ref={title}
          className="font-roboto-slab text-4xl pl-6 sm:text-7xl md:text-8xl md:mb-0 transform duration-700 md:-translate-y-3/4 -translate-x-24 opacity-0"
        >
          Get In Touch
        </div>
      </div>
      <div
        ref={info}
        className="w-full h-52 md:mt-20 md:absolute transform delay-500 duration-700 opacity-0"
      >
        <div
          className="w-4/5 md:w-3/4 h-full flex justify-evenly mx-auto px-0 p-14 md:p-8"
          style={{ maxWidth: "44rem" }}
        >
          <img
            src={linkedin}
            onClick={() => linkedinLink.current.click()}
            className="bg-gray-100 p-4 cursor-pointer transform duration-200 hover:scale-110 hover:bg-white"
            alt="linkedin icon"
          />
          <img
            src={medium}
            onClick={() => mediumLink.current.click()}
            className="bg-gray-100 p-4 cursor-pointer transform duration-200 hover:scale-110 hover:bg-white"
            alt="medium icon"
          />
          <img
            src={mail}
            onClick={() => emailLink.current.click()}
            className="bg-gray-100 p-4 cursor-pointer transform duration-200 hover:scale-110 hover:bg-white"
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
      <div className="hidden absolute md:block w-full transform translate-y-56 -translate-x-20">
        <div className="flex font-roboto-slab justify-end items-baseline">
          <div
            ref={sectionTitle}
            className="md:text-5xl lg:text-6xl transform duration-1000 translate-y-full opacity-0"
          >
            CONTACT
          </div>
          <div
            ref={sectionNumber}
            className="md:text-8xl lg:text-9xl ml-3 transform -translate-y-4 duration-1000 opacity-0"
          >
            03
          </div>
        </div>
      </div>
      <div className="flex font-roboto-slab justify-end items-baseline p-4 transform -translate-y-6 md:hidden">
        <div
          ref={sectionTitleM}
          className="text-3xl transform duration-1000 translate-y-full opacity-0"
        >
          CONTACT
        </div>
        <div
          ref={sectionNumberM}
          className="text-5xl ml-2 transform -translate-y-2 duration-1000 opacity-0"
        >
          03
        </div>
      </div>
    </div>
  );
}
export default Contact;
