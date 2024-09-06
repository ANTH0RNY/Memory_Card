import "../sass/card-item.scss";
import img1 from "../assets/img/images1.png"
import { MouseEvent as ME, useEffect } from "react";
import { useRef } from "react";
import { gameCard } from "../utils/game";

type cardItemProps = {
  card: gameCard;
  flipTrigger: boolean | null;
  clickHandler?: (event: ME<HTMLDivElement, MouseEvent>, id: number) => void;
};

export default function CardItem({
  card,
  clickHandler = () => { },
  flipTrigger,
}: cardItemProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const isFliping = useRef(false)



  useEffect(() => {
    if (flipTrigger != null) {
      flip()
    }

  }, [flipTrigger])



  function HandleMouse(e: MouseEvent) {
    if (isFliping.current == true) return
  
    const mX = e.clientX;
    const mY = e.clientY;

    const target = e.target as HTMLDivElement;
    const bound = target.getBoundingClientRect();
    const midX = bound.width / 2;
    const midY = bound.height / 2;

    const xD = (mX - bound.x - midX) / (bound.width / 2);
    const yD = (mY - bound.y - midY) / (bound.height / 2);

    target.style.transform = `rotateY(${xD * 0.05}turn) rotateX(${-yD * 0.05
      }turn)`;
  }

  function handleMouseEnter(e: ME<HTMLDivElement, MouseEvent>) {
    const target = e.target as HTMLDivElement;
    target.addEventListener("mousemove", HandleMouse);
  }

  function flip() {
    if (cardRef.current && contentRef.current && !isFliping.current) {
      isFliping.current = true
      cardRef.current.removeEventListener("mousemove", HandleMouse);
      cardRef.current.style.transform = `rotateY(0.5turn)`;


      setTimeout(() => {
        if (cardRef.current && contentRef.current) {
          cardRef.current.style.transform = "";
        }
        isFliping.current = false
      }, 500);
    }
  }
  const name = card.img.split("/").at(-1)?.split(".").at(0)?.replaceAll("_", " ") ?? "";



  return (
    <>
      <div
        className="card1"
        
        onMouseEnter={handleMouseEnter}
        onMouseLeave={(e) => {
          const target = e.target as HTMLDivElement;
          target.removeEventListener("mousemove", HandleMouse);
          target.style.transform = "";
        }}
        ref={cardRef}
        onClick={(e) => clickHandler(e, card.id)}
      >
        <div className="content" ref={contentRef}>
          {/* <img src={imgPath} alt="img" className="front" /> */}
          <div className="front">
            <img src={card.img} alt={name} className="front-img" />
            <p className="front-text">{name}</p>
          </div>
          <div className="back">
            <img src={img1} alt="logo" />
          </div>
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
