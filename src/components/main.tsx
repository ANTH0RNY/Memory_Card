import "../sass/main.scss"
import FootBar from "./footBar"
import PlayArea from "./playArea"
import TitleBar from "./titleBar"
export default function Main()
{
  return (
    <div className="main">
      <TitleBar/>
      <PlayArea/>
      <FootBar/>
    </div>
  )
}
