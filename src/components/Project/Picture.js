import { useEffect, useRef, useState } from "react";
function Picture({ image }) {
  const layer1 = useRef();
  const layer2 = useRef();
  const layer1m = useRef();
  const layer2m = useRef();
  const [picture, setPicture] = useState();
  const animation = () => {
    layer1.current.classList.remove("translate-x-full");
    layer2.current.classList.remove("translate-x-full");
    layer1m.current.classList.remove("translate-x-full");
    layer2m.current.classList.remove("translate-x-full");
    setTimeout(() => {
      setPicture(image);
    }, 710);
    setTimeout(() => {
      layer2.current.classList.add("translate-x-full");
      layer2m.current.classList.add("translate-x-full");
    }, 750);
    setTimeout(() => {
      layer1.current.classList.add("translate-x-full");
      layer1m.current.classList.add("translate-x-full");
    }, 800);
  };
  useEffect(() => {
    animation();
  }, [image]);
  return (
    <>
      <div
        className="absolute overflow-x-hidden hidden md:block bg-gray-800 transform md:scale-x-125 md:-translate-y-48 lg:-translate-y-60 lg:-translate-x-8"
        style={{
          width: "40vw",
          height: "30vw",
          minWidth: "27rem",
          minHeight: "20rem",
          marginLeft: "50vw",
          zIndex: "-10",
        }}
      >
        <div
          ref={layer1}
          className="absolute w-full h-full bg-gray-700 transform duration-700 z-20"
        ></div>
        <div
          ref={layer2}
          className="absolute w-full h-full bg-gray-900 transform duration-500 z-20"
        ></div>
        {picture}
      </div>
      <div
        className="md:hidden w-full flex justify-center"
        style={{ marginTop: "22vh" }}
      >
        <div
          className="absolute overflow-x-hidden bg-gray-800 w-full"
          style={{
            width: "90vw",
            height: "45vw",
            minWidth: "14rem",
            minHeight: "11rem",
          }}
        >
          <div
            ref={layer1m}
            className="absolute w-full h-full bg-gray-700 transform duration-700"
          ></div>
          <div
            ref={layer2m}
            className="absolute w-full h-full bg-gray-900 transform duration-500"
          ></div>
          {picture}
        </div>
      </div>
    </>
  );
}

export default Picture;
