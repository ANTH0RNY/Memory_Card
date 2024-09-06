import "sass/play-area.scss";
import CardItem from "./cardItem";
import { useState } from "react";
import { MouseEvent as ME } from "react";
import Game, { gameCard } from "../utils/game";

type PlayAreaPropsType = {
  game: Game,
  handlePlay: Function
}

export default function PlayArea({ game, handlePlay }: PlayAreaPropsType) {
  const [flip, setFlip] = useState<boolean | null>(false);
  const [cards, setCards] = useState<gameCard[]>( game.gameOver? []: game.shuffle());


  // const [isGameOver, setIsGameOver]=useState(false)

  const handler: (event: ME<HTMLDivElement, MouseEvent>, id: number) => void = (_, id) => {
    const gameOver = game.playGame(id)
    handlePlay()
    // console.log(JSON.stringify(game.nonSelectedCards))
    // setIsGameOver(gameOver)
    if (!gameOver) {
      // console.log(gameOver)
      setFlip(!flip);
      setCards(game.shuffle());
    }
  };
  return (
    <div className="play-area">
      {cards.map((t, idx) => (
        <CardItem
          card={t}
          key={idx}
          clickHandler={handler}
          flipTrigger={flip}
        />
      ))}
    </div>
  );
}
