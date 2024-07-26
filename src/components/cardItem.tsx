import "../sass/card-item.scss";
import one from "../assets/img/levels/one.webp";
import { useRef } from "react";
const CardRotateClass = "card-rotate";

export default function CardItem() {
  const isFlipping = useRef(false);
  const setIsFlipping = (current: boolean) => {
    isFlipping.current = current;
  };
  const innerCard = useRef<HTMLDivElement>(null);
  const coverCard = useRef<HTMLDivElement>(null);
  const glow = useRef<HTMLDivElement>(null);

  function flipCard() {
    // console.log(isFlipping)
    if (isFlipping.current) return;
    setIsFlipping(true);
    innerCard.current?.classList.add(CardRotateClass);
    return setTimeout(() => {
      innerCard.current?.classList.remove(CardRotateClass);
      setIsFlipping(false);
    }, 2000);
  }
  const bounds = coverCard.current?.getBoundingClientRect();
  function rotateToMouse(e: any) {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const leftX = mouseX - (bounds == undefined ? 0 : bounds.x);
    const topY = mouseY - (bounds == undefined ? 0 : bounds.y);
    const center = {
      x: leftX - (bounds == undefined ? 0 : bounds.width / 2),
      y: topY - (bounds == undefined ? 0 : bounds.height / 2),
    };
    const distance = Math.sqrt(center.x ** 2 + center.y ** 2);
    if (coverCard.current?.style) {
      coverCard.current.style.transform = `
        scale3d(1.07, 1.07, 1.07)
      rotate3d(
        ${center.y / 100},
        ${-center.x / 100},
        0,
        ${Math.log(distance) * 2}deg
  )
  `;
    }

    if (glow.current?.style) {
      glow.current.style.backgroundImage = `
            radial-gradient(
        circle at
        ${center.x * 2 + (bounds !== undefined ? bounds.width / 2 : 0)}px
        ${center.y * 2 + (bounds !== undefined ? bounds.height / 2 : 0)}px,
        #ffffff55,
        #0000000f
      )
  `;
    }
  }
  coverCard.current?.addEventListener("mouseenter", (_) => {
    document.addEventListener("mousemove", rotateToMouse);
  });
  return (
    <div className="cover-card" ref={coverCard}>
      <div className="flip-card">
        <div className="flip-card-inner" ref={innerCard}>
          <div className="flip-card-back" onClick={(_) => flipCard()}>
            <img src={one} alt="Avatar" />
            <p>Name:</p>
          </div>
          <div className="flip-card-front"></div>
        </div>
      </div>
      <div className="glow" ref={glow}></div>
    </div>
  );
}
