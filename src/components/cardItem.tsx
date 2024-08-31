import "../sass/card-item.scss";

import { useRef } from "react";

export default function CardItem() {
  const cardRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  function HandleMouse(e: MouseEvent) {
    const mX = e.clientX;
    const mY = e.clientY;

    const target = e.target as HTMLDivElement;
    const bound = target.getBoundingClientRect();
    const midX = bound.width / 2;
    const midY = bound.height / 2;

    const xD = (mX - bound.x - midX) / (bound.width / 2);
    const yD = (mY - bound.y - midY) / (bound.height / 2);
    target.style.transform = `rotateY(${-xD * 0.05}turn) rotateX(${
      yD * 0.05
    }turn)`;
  }

  function flip() {
    if (cardRef.current && contentRef.current) {
      console.log("running");
      cardRef.current.removeEventListener("mousemove", HandleMouse);
      cardRef.current.style.transform = `rotateY(180deg)`;
      // contentRef.current.style.transform=`rotateY(180deg)`
      setTimeout(() => {
        if (cardRef.current && contentRef.current) {
          cardRef.current.style.transform = "";
          // contentRef.current.style.transform=''
        }
      }, 500);
    }
  }

  return (
    <>
      <div
        className="card1"
        onMouseEnter={(e) => {
          const target = e.target as HTMLDivElement;
          target.addEventListener("mousemove", HandleMouse);
        }}
        onMouseLeave={(e) => {
          const target = e.target as HTMLDivElement;
          target.removeEventListener("mousemove", HandleMouse);
          target.style.transform = "";
        }}
        ref={cardRef}
      >
        <div className="content" ref={contentRef}>
          <div className="front">Front</div>
          <div className="back">back</div>
        </div>
      </div>

      {/* <button
        onClick={(_) => {
          flip()
        }}
      >
        flip
      </button> */}
    </>
  );
}
