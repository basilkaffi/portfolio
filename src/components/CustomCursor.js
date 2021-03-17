export function CustomCursor(props) {
  const { cursor } = props;
  return <div className="cursor" ref={cursor}></div>;
}

export function changePositon(mousePosition, cursorRef) {
  cursorRef.current.style.left = `${mousePosition.x}px`;
  cursorRef.current.style.top = `${mousePosition.y}px`;
}

export function hover(cursorRef) {
  cursorRef.current.classList.remove("cursor-pulse");
  cursorRef.current.classList.add("hover-animation");
}

export function unHover(cursorRef) {
  cursorRef.current.classList.add("cursor-pulse");
  cursorRef.current.classList.remove("hover-animation");
}
