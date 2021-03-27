import { useState, useEffect } from "react";
function DynamicText() {
  const [words] = useState([
    "Basil Kaffi Ar Rahman  ",
    "Fullstack Developer  ",
  ]);
  const [word, setWord] = useState("");
  const [showCursor, setShowCursor] = useState(true);
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
      if (letter.length === word.length - 2) {
        setShowCursor(false);
      } else if (letter.length === 0) {
        setShowCursor(true);
      }
      setWord(letter);
      if (letter.length === word.length) {
        count++;
        index = 0;
      }
      setTimeout(typing, 400);
    })();
  }, [words]);
  return (
    <div
      style={{ lineHeight: "1.2" }}
      className="my-auto font-roboto-slab text-gray-200 max-w-max text-3xl md:text-5xl"
    >
      <p>Hello..</p>
      <p>I am</p>
      <p>
        {word}
        {showCursor && <span>|</span>}
      </p>
    </div>
  );
}

export default DynamicText;
