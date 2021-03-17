import { useState, useEffect } from "react";
function DynamicText() {
  const [words] = useState(["Basil Kaffi Ar Rahman", "a Fullstack Developer"]);
  const [word, setWord] = useState("");
  useEffect(() => {
    let count = 0;
    let index = 0;
    let word = "";
    let letter = "";
    if (count === words.length) {
      count = 0;
    }
    (function typing() {
      if (count === words.length) {
        count = 0;
      }
      word = words[count];
      letter = word.slice(0, index++);
      setWord(letter);
      if (letter.length === word.length) {
        count++;
        index = 0;
      }
      setTimeout(typing, 400);
    })();
  }, [words]);
  return (
    <div className=" text-opacity-90 w-full my-auto">
      <p
        className="text-center text-green-300 mx-auto text-5xl sm:text-6xl md:text-7xl"
        id="hello"
      >
        Hello,
      </p>
      <p
        className="text-center text-blue-300 mx-auto text-4xl sm:text-5xl md:text-6xl"
        id="word"
      >
        I'm {word}
        <span className="text-5xl text-yellow-300 sm:text-6xl md:text-7xl">
          |
        </span>
      </p>
    </div>
  );
}

export default DynamicText;
