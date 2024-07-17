import "../sass/card-item.scss"
import one from "../assets/img/levels/one.webp"
import { useRef } from "react"
const CardRotateClass = "card-rotate"

export default function CardItem(){
  const isFlipping = useRef(false);
  const setIsFlipping = (current: boolean)=>{
    isFlipping.current=current;
  }
  const innerCard = useRef<HTMLDivElement>(null);
function flipCard(){
  // console.log(isFlipping)
  if (isFlipping.current) return;
  setIsFlipping(true);
  innerCard.current?.classList.add(CardRotateClass)
  return setTimeout(()=>{
    innerCard.current?.classList.remove(CardRotateClass);
    setIsFlipping(false);
  }, 2000)
}
  return(
    <div className="cover-card">
  <div className="flip-card">
    <div className="flip-card-inner" ref={innerCard}>
      <div className="flip-card-back" onClick={(_)=>flipCard()}>
          <img src={one} alt="Avatar" />
            <p>Name:</p>
        </div>
        <div className="flip-card-front">
        </div>
    </div>
  </div>
  </div>
  )
}
