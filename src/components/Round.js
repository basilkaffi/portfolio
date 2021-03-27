import { useEffect, useState, useRef } from "react";
function Round(props) {
  const [smallest, setSmallest] = useState({});
  const [middle, setMiddle] = useState({});
  const [biggest, setBiggest] = useState({});
  const [children, setChildren] = useState({});
  const container = useRef();
  const smallRef = useRef();
  const middleRef = useRef();
  const bigRef = useRef();
  const childContainer = useRef();
  const childEl = useRef();
  useEffect(() => {
    setTimeout(() => {
      container.current.classList.remove("opacity-0");
    }, 600);
    let side = 50;
    let difference = 10;
    let minSide = 33;
    let minDifference = 6;
    if (window.innerWidth <= 768) {
      side = 60;
      minSide = 18;
      minDifference = 4;
    } else {
      side = 50;
      minSide = 33;
      minDifference = 6;
    }
    const type = "vw";
    const smallest = {
      width: `${side}${type}`,
      height: `${side}${type}`,
      minWidth: `${minSide}rem`,
      minHeight: `${minSide}rem`,
      borderRadius: "50%",
    };
    const middle = {
      width: `${side + difference}${type}`,
      height: `${side + difference}${type}`,
      minWidth: `${minSide + minDifference}rem`,
      minHeight: `${minSide + minDifference}rem`,
      borderRadius: "50%",
    };
    const biggest = {
      width: `${side + difference * 2}${type}`,
      height: `${side + difference * 2}${type}`,
      minWidth: `${minSide + minDifference * 2}rem`,
      minHeight: `${minSide + minDifference * 2}rem`,
      borderRadius: "50%",
      zIndex: "-1",
    };
    const children = {
      width: `${side - difference}${type}`,
      height: `${side - difference}${type}`,
      minWidth: `${minSide - minDifference}rem`,
      minHeight: `${minSide - minDifference}rem`,
      borderRadius: "50%",
    };
    setSmallest(smallest);
    setMiddle(middle);
    setBiggest(biggest);
    setChildren(children);
    if (window.innerWidth < 768) {
      container.current.classList.add("pulsing");
    } else {
      container.current.classList.remove("pulsing");
    }
    const resizing = () => {
      childContainer.current.style.transform = `translate(0px, 0px)`;
      smallRef.current.style.transform = `translate(0px, 0px)`;
      middleRef.current.style.transform = `translate(0px, 0px)`;
      if (window.innerWidth < 768) {
        childContainer.current.style.width = "50vw";
        smallRef.current.style.width = "60vw";
        middleRef.current.style.width = "70vw";
        bigRef.current.style.width = "80vw";
        childContainer.current.style.height = "50vw";
        smallRef.current.style.height = "60vw";
        middleRef.current.style.height = "70vw";
        bigRef.current.style.height = "80vw";
        childContainer.current.style.minWidth = "14rem";
        smallRef.current.style.minWidth = "18rem";
        middleRef.current.style.minWidth = "22rem";
        bigRef.current.style.minWidth = "26rem";
        childContainer.current.style.minHeight = "14rem";
        smallRef.current.style.minHeight = "18rem";
        middleRef.current.style.minHeight = "22rem";
        bigRef.current.style.minHeight = "26rem";
        container.current.classList.add("pulsing");
      } else if (window.innerWidth >= 768) {
        childContainer.current.style.width = "40vw";
        smallRef.current.style.width = "50vw";
        middleRef.current.style.width = "60vw";
        bigRef.current.style.width = "70vw";
        childContainer.current.style.height = "40vw";
        smallRef.current.style.height = "50vw";
        middleRef.current.style.height = "60vw";
        bigRef.current.style.height = "70vw";
        childContainer.current.style.minWidth = `${minSide - minDifference}rem`;
        smallRef.current.style.minWidth = `${minSide}rem`;
        middleRef.current.style.minWidth = `${minSide + minDifference}rem`;
        bigRef.current.style.minWidth = `${minSide + minDifference * 2}rem`;
        childContainer.current.style.minHeight = `${
          minSide - minDifference
        }rem`;
        smallRef.current.style.minHeight = `${minSide}rem`;
        middleRef.current.style.minHeight = `${minSide + minDifference}rem`;
        bigRef.current.style.minHeight = `${minSide + minDifference * 2}rem`;
        container.current.classList.remove("pulsing");
      }
    };
    const moving = (e) => {
      if (window.innerWidth >= 768) {
        const containerX = window.innerWidth / 3;
        const xContainerCenter = containerX + window.innerWidth / 4;
        const yContainerCenter = window.innerHeight / 2;
        let changeX = 0;
        let changeY = 0;
        if (e.clientX > xContainerCenter) {
          changeX = -e.clientX / 30;
        } else if (e.clientX < xContainerCenter) {
          changeX = (xContainerCenter - e.clientX) / 25;
        }
        if (e.clientY > yContainerCenter) {
          changeY = -e.clientY / 25;
        } else if (e.clientY < yContainerCenter) {
          changeY = (yContainerCenter - e.clientY) / 25;
        }
        childContainer.current.style.transform = `translate(${changeX / 4}px, ${
          changeY / 4
        }px)`;
        smallRef.current.style.transform = `translate(${changeX / 5}px, ${
          changeY / 5
        }px)`;
        middleRef.current.style.transform = `translate(${changeX / 6}px, ${
          changeY / 6
        }px)`;
      }
    };
    const hidePicture = () => {
      const About = document.getElementById("about");
      //appear
      if (About.getBoundingClientRect().top < window.innerHeight / 2) {
        childEl.current.classList.remove("scale-50", "opacity-0");
      }
      //reset
      if (About.getBoundingClientRect().top > window.innerHeight / 2) {
        childEl.current.classList.add("scale-50", "opacity-0");
      }
      //hide child container
      if (About.getBoundingClientRect().bottom < window.innerHeight / 2) {
        childContainer.current.style.transitionDuration = "800ms";
        childContainer.current.classList.add("opacity-0");
      }
      //show opacity child container
      if (About.getBoundingClientRect().bottom > 100) {
        childContainer.current.classList.remove("opacity-0");
      }
    };
    window.addEventListener("resize", resizing);
    window.addEventListener("mousemove", moving);
    window.addEventListener("transitionend", hidePicture);
    return () => {
      window.removeEventListener("resize", resizing);
      window.removeEventListener("mousemove", moving);
      window.removeEventListener("transitionend", hidePicture);
    };
  }, []);
  return (
    <div
      ref={container}
      style={{ transitionDuration: "1200ms" }}
      className="w-full h-96 mt-20 fixed flex justify-center items-center md:left-1/3 md:block md:mt-0 md:h-screen transform ease-in-out opacity-0"
    >
      <div
        style={biggest}
        ref={bigRef}
        className="bg-gray-700 absolute flex justify-center items-center transform -translate-y-1/2 top-1/2 ease-out duration-300"
      >
        <div
          style={middle}
          ref={middleRef}
          className="bg-gray-600 absolute flex justify-center items-center transform ease-out duration-300"
        >
          <div
            style={smallest}
            ref={smallRef}
            className="bg-gray-500 absolute flex justify-center items-center transform transitionease-out duration-300"
          >
            <div
              style={children}
              ref={childContainer}
              className="absolute flex justify-center items-center transform ease-out duration-300"
            >
              <div
                ref={childEl}
                className="h-full w-full transform duration-700 scale-50 opacity-0"
              >
                {props.children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Round;
