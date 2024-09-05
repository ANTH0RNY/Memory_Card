export interface scoreBoardProps{
  bestScore: number,
  currentScore: number,
}

export default function ScoreBoard({bestScore=0, currentScore = 0}: scoreBoardProps){
  return(
  <div className="score-board">
      <p className="best-score">
        Best Score : <span className="score-value">{bestScore}</span>
      </p>
      <p className="current-score">
      Current Score : <span className="score-value">{currentScore}</span>
      </p>
    </div>
  )
}
