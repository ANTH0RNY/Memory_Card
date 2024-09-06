import isekai_0 from "../assets/img/isekai/Hiraku_Machio.jpg"
import isekai_1 from "../assets/img/isekai/Ichirou_Suzuki.jpg"
import isekai_2 from "../assets/img/isekai/Katarina_Claes.jpg"
import isekai_3 from "../assets/img/isekai/Kazuma_Satou.jpg"
import isekai_4 from "../assets/img/isekai/Kazuto_Kirigaya.jpg"
import isekai_5 from "../assets/img/isekai/Maple.jpg"
import isekai_6 from "../assets/img/isekai/Ojisan.jpg"
import isekai_7 from "../assets/img/isekai/Reiji_Kirio.jpg"
import isekai_8 from "../assets/img/isekai/Saitou.jpg"
import isekai_9 from "../assets/img/isekai/Seiya_Ryuuguuin.jpg"
import isekai_10 from "../assets/img/isekai/Shin_Wolford.jpeg"
import isekai_11 from "../assets/img/isekai/Shiroe.jpg"
import isekai_12 from "../assets/img/isekai/Subaru_Natsuki.jpg"
import isekai_13 from "../assets/img/isekai/Taichi_Nishimura.jpg"
import isekai_14 from "../assets/img/isekai/Touya_Mochizuki.jpg"
import isekai_15 from "../assets/img/isekai/Yuuji_Sano.jpg"
import isekai_16 from "../assets/img/isekai/Myne.jpg"
import isekai_17 from "../assets/img/isekai/Rimuru_Tempest.jpg"
import isekai_18 from "../assets/img/isekai/sadao_maou.jpeg"
import isekai_19 from "../assets/img/isekai/Sora.jpg"
import isekai_20 from "../assets/img/isekai/Youji_Itami.jpg"
import isekai_21 from "../assets/img/isekai/Rory_Mercury.jpg"

import isekai_sides_0 from "../assets/img/isekai_sides/Akatsuki.jpg"
import isekai_sides_1 from "../assets/img/isekai_sides/Aqua.jpg"
import isekai_sides_2 from "../assets/img/isekai_sides/Asuna_Yuuki.jpg"
import isekai_sides_3 from "../assets/img/isekai_sides/Dryad.jpg"
import isekai_sides_4 from "../assets/img/isekai_sides/Elf.jpg"
import isekai_sides_5 from "../assets/img/isekai_sides/Emilia.jpg"
import isekai_sides_6 from "../assets/img/isekai_sides/Filo.jpg"
import isekai_sides_7 from "../assets/img/isekai_sides/Lafanpan.jpg"
import isekai_sides_8 from "../assets/img/isekai_sides/Lalatina_Dustiness.jpg"
import isekai_sides_9 from "../assets/img/isekai_sides/Megumin.jpg"
import isekai_sides_10 from "../assets/img/isekai_sides/Mina.jpg"
import isekai_sides_11 from "../assets/img/isekai_sides/Noella.jpg"
import isekai_sides_12 from "../assets/img/isekai_sides/Raelza.jpg"
import isekai_sides_13 from "../assets/img/isekai_sides/Raphtalia.jpg"
import isekai_sides_14 from "../assets/img/isekai_sides/Ria.jpg"
import isekai_sides_15 from "../assets/img/isekai_sides/Rin_Azuma.jpg"
import isekai_sides_16 from "../assets/img/isekai_sides/Ristarte.jpg"
import isekai_sides_17 from "../assets/img/isekai_sides/Rurushi_Ru.jpg"
import isekai_sides_18 from "../assets/img/isekai_sides/Tia.jpg"

import shounen_0 from "../assets/img/shounen/Aladdin.jpg"
import shounen_1 from "../assets/img/shounen/Asta.jpg"
import shounen_2 from "../assets/img/shounen/Edward_Elric.jpg"
import shounen_3 from "../assets/img/shounen/Erza_Scarlet.jpg"
import shounen_4 from "../assets/img/shounen/Gon_Freecss.jpg"
import shounen_5 from "../assets/img/shounen/Izuku_Midoriya.jpg"
import shounen_6 from "../assets/img/shounen/Katsuki_Bakugou.jpg"
import shounen_7 from "../assets/img/shounen/Killua_Zoldyck.jpg"
import shounen_8 from "../assets/img/shounen/Kurapika.jpg"
import shounen_9 from "../assets/img/shounen/Morgiana.jpg"
import shounen_10 from "../assets/img/shounen/Noelle_Silva.jpg"
import shounen_11 from "../assets/img/shounen/Nobara_Kugisaki.jpg"
import Game, { gameCard } from "./game"
import IdGenerator from "./idGenerator"

type LevelTypes = {
    name: string,
    cards: gameCard[]
}



export const HardData: LevelTypes = {
    name: "Hard",
    cards: [
        { id: IdGenerator.id, img: isekai_0 },
        { id: IdGenerator.id, img: isekai_1 },
        { id: IdGenerator.id, img: isekai_2 },
        { id: IdGenerator.id, img: isekai_3 },
        { id: IdGenerator.id, img: isekai_4 },
        { id: IdGenerator.id, img: isekai_5 },
        { id: IdGenerator.id, img: isekai_6 },
        { id: IdGenerator.id, img: isekai_7 },
        { id: IdGenerator.id, img: isekai_8 },
        { id: IdGenerator.id, img: isekai_9 },
        { id: IdGenerator.id, img: isekai_10 },
        { id: IdGenerator.id, img: isekai_11 },
        { id: IdGenerator.id, img: isekai_12 },
        { id: IdGenerator.id, img: isekai_13 },
        { id: IdGenerator.id, img: isekai_14 },
        { id: IdGenerator.id, img: isekai_15 },
        { id: IdGenerator.id, img: isekai_16 },
        { id: IdGenerator.id, img: isekai_17 },
        { id: IdGenerator.id, img: isekai_18 },
        { id: IdGenerator.id, img: isekai_19 },
        { id: IdGenerator.id, img: isekai_20 },
        { id: IdGenerator.id, img: isekai_21 },
    ]
}
export const MediumData: LevelTypes = {
    name: "Medium",
    cards: [
        { id: IdGenerator.id, img: isekai_sides_0 },
        { id: IdGenerator.id, img: isekai_sides_1 },
        { id: IdGenerator.id, img: isekai_sides_2 },
        { id: IdGenerator.id, img: isekai_sides_3 },
        { id: IdGenerator.id, img: isekai_sides_4 },
        { id: IdGenerator.id, img: isekai_sides_5 },
        { id: IdGenerator.id, img: isekai_sides_6 },
        { id: IdGenerator.id, img: isekai_sides_7 },
        { id: IdGenerator.id, img: isekai_sides_8 },
        { id: IdGenerator.id, img: isekai_sides_9 },
        { id: IdGenerator.id, img: isekai_sides_10 },
        { id: IdGenerator.id, img: isekai_sides_11 },
        { id: IdGenerator.id, img: isekai_sides_12 },
        { id: IdGenerator.id, img: isekai_sides_13 },
        { id: IdGenerator.id, img: isekai_sides_14 },
        { id: IdGenerator.id, img: isekai_sides_15 },
        { id: IdGenerator.id, img: isekai_sides_16 },
        { id: IdGenerator.id, img: isekai_sides_17 },
        { id: IdGenerator.id, img: isekai_sides_18 },

    ]
}

export const EasyData: LevelTypes = {
    name: "Easy",
    cards: [
        { id: IdGenerator.id, img: shounen_0 },
        { id: IdGenerator.id, img: shounen_1 },
        { id: IdGenerator.id, img: shounen_2 },
        { id: IdGenerator.id, img: shounen_3 },
        { id: IdGenerator.id, img: shounen_4 },
        { id: IdGenerator.id, img: shounen_5 },
        { id: IdGenerator.id, img: shounen_6 },
        { id: IdGenerator.id, img: shounen_7 },
        { id: IdGenerator.id, img: shounen_8 },
        { id: IdGenerator.id, img: shounen_9 },
        { id: IdGenerator.id, img: shounen_10 },
        { id: IdGenerator.id, img: shounen_11 },

    ]
}
export const Easy=new Game(EasyData.name, EasyData.cards)
export const Medium=new Game(MediumData.name, MediumData.cards)
export const Hard=new Game(HardData.name, HardData.cards)