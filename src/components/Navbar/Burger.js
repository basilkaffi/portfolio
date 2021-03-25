import { useEffect, useState, useRef } from "react";
function Burger({ sendClickState }) {
  const line1 = useRef();
  const line2 = useRef();
  const line3 = useRef();
  const [clicked, setClick] = useState(false);
  const [hovered, setHover] = useState(false);
  useEffect(() => {
    const resizing = () => {
      if (window.innerWidth < 768) {
        line1.current.style.width = "3.2rem";
        line2.current.style.width = "3.2rem";
        line3.current.style.width = "3.2rem";
      } else if (window.innerWidth >= 768) {
        line1.current.style.width = "2rem";
        line3.current.style.width = "2rem";
      }
    };
    window.addEventListener("resize", resizing);
    return () => {
      window.removeEventListener("resize", resizing);
    };
  }, []);
  useEffect(() => {
    setHover(false);
    if (clicked) {
      line1.current.style.transform =
        "rotate(-45deg) translate(-0.67rem,0.67rem)";
      line3.current.style.transform =
        "rotate(45deg) translate(-0.67rem,-0.67rem)";
      line1.current.style.width = "3.2rem";
      line2.current.style.width = "3.2rem";
      line3.current.style.width = "3.2rem";
      line2.current.style.opacity = "0";
    } else {
      if (window.innerWidth >= 768) {
        line1.current.style.width = "2rem";
        line3.current.style.width = "2rem";
      }
      line1.current.style.transform = "rotate(0)";
      line3.current.style.transform = "rotate(0)";
      line2.current.style.opacity = "1";
    }
    sendClickState(clicked);
  }, [clicked]);
  useEffect(() => {
    if (hovered) {
      if (window.innerWidth >= 768) {
        if (!clicked) {
          line1.current.style.transform = "translate(-0.78rem, -0.25rem)";
          line3.current.style.transform = "translate(-0.78rem, 0.25rem)";
          line2.current.style.transform = "translateX(-1.2rem)";
        } else if (clicked) {
          line1.current.style.width = "3.5rem";
          line3.current.style.width = "3.5rem";
        }
      }
    } else if (!hovered) {
      if (window.innerWidth >= 768) {
        if (!clicked) {
          line1.current.style.transform = "translate(0)";
          line2.current.style.transform = "translate(0)";
          line3.current.style.transform = "translate(0)";
        } else if (clicked) {
          line1.current.style.width = "3.2rem";
          line3.current.style.width = "3.2rem";
        }
      }
    }
  }, [hovered, clicked]);
  return (
    <div
      className="flex flex-col mx-4 my-1 h-14 w-max justify-evenly md:mx-16 md:my-auto md:items-end cursor-pointer"
      style={{ pointerEvents: "auto" }}
      onClick={() => setClick(!clicked)}
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        className="h-1.5 w-12 bg-gray-200 shadow-lg transition-all duration-700"
        ref={line1}
      ></div>
      <div
        className="h-1.5 w-12 bg-gray-200 shadow-lg transition-all duration-700"
        ref={line2}
      ></div>
      <div
        className="h-1.5 w-12 bg-gray-200 shadow-lg transition-all duration-700"
        ref={line3}
      ></div>
    </div>
  );
}

export default Burger;
