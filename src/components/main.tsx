import "../sass/main.scss"
import FootBar from "./footBar"
import PlayArea from "./playArea"
import TitleBar from "./titleBar"
import { Hard, Medium, Easy } from "../utils/levels"
import { useState } from "react"
import { scoreBoardProps } from "./scoreBoard"
import Modal from "./modal"
import SelectGame from "./selectGame"

export type GameLevelTypes = "Hard" | "Medium" | "Easy"

export default function Main() {
  const [game, setGame] = useState(Medium)
  const [isGameSelected, setIsGameSelected] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [showWinModal, setShowWinModal] = useState(false)
  const [scoreData, setScoreData] = useState<scoreBoardProps>({
    bestScore: game.highScore,
    currentScore: game.getSelectedcards.length
  })

  function clickHandler(levelName: GameLevelTypes) {
    switch (levelName) {
      case "Hard": setGame(Hard); setIsGameSelected(true); break;
      case "Medium": setGame(Medium); setIsGameSelected(true); break;
      case "Easy": setGame(Easy); setIsGameSelected(true); break;
    }
  }

  function handleGame() {
    setScoreData({ bestScore: game.highScore, currentScore: game.getSelectedcards.length })
    if (game.gameOver) {
      if (game.gameWon) {
        console.log("you win")
      } else {
        console.log("you lose")
        setShowModal(true)
      }
    }
  }

  return (
    <div className="main">
      {
        !isGameSelected ? null : <TitleBar scoreProps={scoreData} />
      }

      {
        !isGameSelected ?
          <SelectGame clickHandler={clickHandler} />
          :
          (showModal ?
            <Modal openModal={showModal}>
              <h1 className="modal-text">You Loose</h1>
              <button className="reset-btn" onClick={() => {
                game.reset();
                setScoreData({ ...scoreData, currentScore: 0 })
                setShowModal(!showModal)
              }}>Restart</button>
            </Modal>
            :
            (
              showWinModal ?
                <Modal openModal={showWinModal}>
                  <h1 className="modal-text">
                    You win
                  </h1>
                  <div className="btnz">
                    <button className="reset-btn" onClick={() => {
                      game.reset();
                      setScoreData({ ...scoreData, currentScore: 0 })
                      setShowWinModal(!showWinModal)
                    }}>Restart</button>
                    <button className="change-level" onClick={(_)=>{
                      game.reset();
                      setScoreData({ bestScore:0, currentScore: 0 })
                      setShowWinModal(!showWinModal)
                      setIsGameSelected(false)
                    }}>
                      Try a new level
                    </button>
                  </div>

                </Modal>
                :
                <PlayArea game={game} handlePlay={handleGame} />
            )
          )

      }
      <FootBar />
    </div>
  )
}
