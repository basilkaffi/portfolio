import { useEffect, useRef } from "react";
function Contact() {
  const title = useRef();
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
        sectionTitle.current.classList.remove("translate-y-full", "opacity-0");
        sectionNumber.current.classList.remove("opacity-0");
        sectionTitleM.current.classList.remove("translate-y-full", "opacity-0");
        sectionNumberM.current.classList.remove("opacity-0");
      }
      //reset
      if (
        Contact.getBoundingClientRect().top > window.innerHeight - 100 ||
        Contact.getBoundingClientRect().bottom < 50
      ) {
        title.current.classList.add("-translate-x-24", "opacity-0");
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
      <div className="flex flex-col mt-auto h-1/3 transform -translate-y-3 md:-translate-y-12 md:mt-0 md:ml-6">
        <div
          ref={title}
          className="font-roboto-slab text-4xl pl-6 sm:text-7xl md:text-8xl mb-8 md:mb-0 transform duration-700 md:-translate-y-3/4 -translate-x-24 opacity-0"
        >
          Get In Touch
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
