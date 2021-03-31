import { useRef, useEffect } from "react";
import DynamicText from "./DynamicText";
import Description from "./Description";
import ScrollEl from "./Scroll";
import Picture from "./Picture";
function Home({ setChild }) {
  const dynamicTextAnimation = useRef();
  const descriptionAnimation = useRef();
  const scrollAnimation = useRef();
  useEffect(() => {
    //transition dynamicText
    dynamicTextAnimation.current.classList.remove("-translate-x-full");
    //transition when scrolling
    const scrollingAnimation = () => {
      const Home = document.getElementById("home");
      dynamicTextAnimation.current.classList.remove("duration-1000");
      scrollAnimation.current.classList.remove("duration-1000");
      dynamicTextAnimation.current.classList.add("duration-700");
      scrollAnimation.current.classList.add("duration-700");
      //appear text and description
      if (Home.getBoundingClientRect().bottom > window.innerHeight / 2) {
        dynamicTextAnimation.current.classList.remove(
          "-translate-x-24",
          "opacity-0"
        );
        descriptionAnimation.current.classList.remove(
          "-translate-x-24",
          "opacity-0"
        );
      }
      //appear scroll element
      if (Home.getBoundingClientRect().bottom > window.innerHeight - 10) {
        setTimeout(() => {
          if (window.innerWidth >= 768) {
            scrollAnimation.current.classList.remove("-translate-y-28");
          } else {
            scrollAnimation.current.classList.remove("-translate-y-12");
          }
          scrollAnimation.current.classList.remove("opacity-0");
        }, 200);
      }
    };
    const hide = () => {
      const Home = document.getElementById("home");
      dynamicTextAnimation.current.classList.remove("duration-1000");
      scrollAnimation.current.classList.remove("duration-1000");
      dynamicTextAnimation.current.classList.add("duration-700");
      scrollAnimation.current.classList.add("duration-700");
      if (Home.getBoundingClientRect().bottom < 100) {
        dynamicTextAnimation.current.classList.add(
          "-translate-x-24",
          "opacity-0"
        );
        descriptionAnimation.current.classList.add(
          "-translate-x-24",
          "opacity-0"
        );
      }
      if (Home.getBoundingClientRect().bottom < window.innerHeight) {
        if (window.innerWidth >= 768) {
          scrollAnimation.current.classList.add("-translate-y-28");
        } else {
          scrollAnimation.current.classList.add("-translate-y-12");
        }
        scrollAnimation.current.classList.add("opacity-0");
      }
    };
    window.addEventListener("transitionstart", scrollingAnimation);
    window.addEventListener("transitionend", hide);
    return () => {
      window.removeEventListener("transitionstart", scrollingAnimation);
      window.removeEventListener("transitionend", hide);
    };
  }, []);
  return (
    <div
      id="home"
      className="w-full h-screen relative flex justify-left"
      style={{ minHeight: "625px", textShadow: "0 0 5px #11182777" }}
    >
      <div className="z-0 flex flex-col justify-evenly pt-11 h-1/2 mt-auto w-full md:w-max md:flex-row-reverse">
        <div className="px-8vw md:px-0 md:transform md:-translate-y-2/3">
          <div
            ref={dynamicTextAnimation}
            className="transform duration-1000 md:-translate-y-1/3 -translate-x-24 opacity-0"
          >
            <DynamicText />
          </div>
          <br />
          <div
            ref={descriptionAnimation}
            className="transform duration-1000 md:translate-y-full -translate-x-24 opacity-0"
          >
            <Description />
          </div>
        </div>
        <div
          ref={scrollAnimation}
          className="transform duration-1000 opacity-0"
        >
          <ScrollEl />
        </div>
      </div>
    </div>
  );
}

export default Home;
