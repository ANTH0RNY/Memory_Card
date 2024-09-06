import { useEffect, useRef, useState } from "react"
import "../sass/foot.scss"
import myAudio from "../assets/audio/anime-beginings-139797.mp3"
type soundProps = {
  sound: boolean
}


function SoundButton({ sound }: soundProps) {
  //  const [sound, setSound] = useState<boolean>(true);
  return (
    <>
      {sound ? (<i className="bi bi-volume-up-fill sound"></i>) : (<i className="bi bi-volume-mute-fill sound"></i>)}
    </>
  )
}
type FootBarPropsType={
  handler?: Function
}
export default function FootBar({handler=()=>{}}: FootBarPropsType) {
  const [sound, setSound] = useState<boolean>(false);
  const audio = useRef( new Audio(myAudio))
  audio.current.loop = true
  // console.log(audio.current)
  useEffect(() => {
    if (sound == true) {
      audio.current.play()
    }else {
      audio.current.pause()
    }

  }, [sound])
audio.current.addEventListener("pause", (_)=>{
  setSound(false)
})
audio.current.addEventListener("play",(_)=>{
  setSound(true)
})
  return (
    <div className="foot-bar">
      <button onClick={(_) => setSound(!sound)} className="round-button">
        <SoundButton sound={sound} />

      </button>
      <button className="round-button" onClick={(_)=> handler()}>
        <i className="bi bi-question-lg question"></i>
      </button>
    </div>
  )
}
