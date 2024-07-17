import ScoreBoard from "./scoreBoard.tsx";
import "../sass/title.scss"

export default function TitleBar(){
  return (
  <div className="title-bar">
      <h1 className="title">
        Memory Game
      </h1>
     <ScoreBoard bestScore={10} currentScore={0}/>
    </div>
  )
}
