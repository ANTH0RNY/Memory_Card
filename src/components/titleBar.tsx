import ScoreBoard, { scoreBoardProps } from "./scoreBoard.tsx";
import img1 from "../assets/img/images1.png"
import "../sass/title.scss"

type TitleBarPropType={
  scoreProps: scoreBoardProps
}

export default function TitleBar({scoreProps}:TitleBarPropType){
  return (
  <div className="title-bar">
      {/* <h1 className="title"> */}
        {/* Isekai Memory Game */}
<img src={img1} alt="logo" />
      {/* </h1> */}
     <ScoreBoard bestScore={scoreProps.bestScore} currentScore={scoreProps.currentScore}/>
    </div>
  )
}
