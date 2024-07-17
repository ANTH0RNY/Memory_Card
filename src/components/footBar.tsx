import { useState } from "react"
import "../sass/foot.scss"
type soundProps = {
  sound: boolean
}


function SoundButton({sound}: soundProps){
//  const [sound, setSound] = useState<boolean>(true);

  return(
    <>
      {sound ? (<i className="bi bi-volume-up-fill sound"></i>): (<i className="bi bi-volume-mute-fill sound"></i>)}
    </>
  )
}

export default function FootBar()
{
  const [sound, setSound] = useState<boolean>(true);
  return (
  <div className="foot-bar">
      <button onClick={(_)=> setSound(!sound)} className="round-button">
        <SoundButton sound={sound}/>
      </button>
      <button className="round-button">
<i className="bi bi-question-lg question"></i>
      </button>
    </div>
  )
}
