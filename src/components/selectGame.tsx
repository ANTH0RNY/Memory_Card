import "../sass/selectGame.scss"
import { GameLevelTypes } from "./main"

type SelectGamePropsType={
    clickHandler: (levelName: GameLevelTypes)=>void
}

export default function SelectGame({clickHandler}:SelectGamePropsType) {
const easy:GameLevelTypes="Easy"
const medium:GameLevelTypes="Medium"
const hard:GameLevelTypes="Hard"

    return (
        <div className="select-game">
            <div className="items">
                <h1>
                    Memory Game
                </h1>
                <div className="btns">
                    <button className="btn" onClick={(_)=>clickHandler(easy)}>Easy</button>
                    <button className="btn" onClick={(_)=>clickHandler(medium)}>Medium</button>
                    <button className="btn" onClick={(_)=>clickHandler(hard)}>Hard</button>
                </div>
            </div>
        </div>
    )
}