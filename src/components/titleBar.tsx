import ScoreBoard, { scoreBoardProps } from "./scoreBoard.tsx";
import "../sass/title.scss"

type TitleBarPropType={
  scoreProps: scoreBoardProps
}

export default function TitleBar({scoreProps}:TitleBarPropType){
  return (
  <div className="title-bar">
      <h1 className="title">
        Memory Game
      </h1>
     <ScoreBoard bestScore={scoreProps.bestScore} currentScore={scoreProps.currentScore}/>
    </div>
  )
}
