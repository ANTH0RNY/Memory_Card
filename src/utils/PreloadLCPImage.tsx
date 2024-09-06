import { Helmet } from "react-helmet-async"
import { EasyData, HardData, MediumData } from "./levels"

type PropsType = {
    src: string
}

export function PreloadLCPImage({ src }: PropsType) {
    return (
        <Helmet>
            <link rel="preload" as="image" href={src} />
        </Helmet>
    )
}

export function PreloadLCPImages() {
    return (
        <>
            {
                EasyData.cards.map(c => <PreloadLCPImage src={c.img} key={c.id} />)
            }
            {
                MediumData.cards.map(c => <PreloadLCPImage src={c.img} key={c.id} />)
            }
            {
                HardData.cards.map(c => <PreloadLCPImage src={c.img} key={c.id} />)
            }
        </>
    )
}