function Scroll() {
  return (
    <div className="h-full flex flex-col justify-evenly items-center pt-10 md:py-0 font-roboto-slab">
      <div className="text-gray-200 text-xs m-1 animate-bounce md:hidden">
        scroll down
      </div>
      <div
        className="text-gray-200 m-1 text-lg px-10 hidden md:block"
        style={{ writingMode: "vertical-rl" }}
      >
        scroll down
      </div>
      <div className="h-8 w-0.5 bg-gray-200 sm:h-5 md:w-1 md:h-20 md:animate-bounce"></div>
    </div>
  );
}

export default Scroll;
