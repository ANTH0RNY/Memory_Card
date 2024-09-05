export type gameCard = {
    id: number,
    img: string
}

export default class Game {
    private selectedCards: gameCard[] = []
    private _gameOver: boolean = false
    public numberOfRepeat: number = 2
    public gameWon = false;
    private _highScore = 0
    constructor(
        public readonly level: string,
        private readonly cards: gameCard[],
    ) { }
    public get getSelectedcards() {
        return this.selectedCards
    }
    get gameOver(): boolean {
        return this._gameOver
    }
    get highScore(): number {
        return this._highScore
    }
    set gameOver(g: boolean) {
        if (g) {
            if (this._highScore < this.selectedCards.length) {
                this._highScore = this.selectedCards.length
            }
        }
        if (this.nonSelectedCards.length == 0) {
            this.gameWon = true
        } else {
            this.gameWon = false
        }
        // console.log(this.gameOver)
        this._gameOver = g
    }
    print() {
        return { selectedCards: this.selectedCards, gameOver: this.gameOver, cards: this.cards }
    }
    selected(card: gameCard) {
        const foundCard = this.selectedCards.find(crd => crd.id === card.id)
        if (foundCard) {
            throw new Error("Adding an already selected card")
        }
        this.selectedCards.push(card)
    }
    ensurePlayableCard(outCards: gameCard[]): gameCard[] {

        if (this.nonSelectedCards.length < 1) throw new Error("No cards to select from")
        for (let i of outCards) {
            const found = this.nonSelectedCards.find(crd => crd.id == i.id)
            if (found) return outCards
        }
        const nonSelectIdx = Math.floor(Math.random() * this.nonSelectedCards.length)
        const outIdx = Math.floor(Math.random() * outCards.length)
        outCards[outIdx] = this.nonSelectedCards[nonSelectIdx]
        return outCards;

    }
    public get nonSelectedCards(): gameCard[] {
        return this.cards.filter((card) => {
            const found = this.selectedCards.find(crd => crd.id == card.id)
            return found ? false : true
        })
    }

    shuffle(num: number = 5): gameCard[] {
        if (num > this.cards.length) {
            throw new Error("number of cards sould not be less that cards for shuffle")
        }
        if (this.gameOver) {
            throw new Error("Game is over")
        }

        let count = 0
        const selectedIdx: number[] = []
        const output: gameCard[] = []
        while (count < num) {
            const idx = Math.floor(Math.random() * this.cards.length)
            if (selectedIdx.includes(idx)) continue
            selectedIdx.push(idx)
            const card = this.cards[idx]
            output.push(card)
            count++
        }
        return this.ensurePlayableCard(output)
    }
    playGame(id: number): boolean {
        if (this.gameOver) return this.gameOver

        const card = this.cards.find((card) => card.id === id)
        if (!card) {
            throw new Error("Not valid move")

        }
        for (let card of this.selectedCards) {
            if (card.id === id) {
                this.gameOver = true
                // console.log(this.gameOver)
                return this.gameOver;
            }
        }

        this.selected(card)
        if (this.nonSelectedCards.length == 0) {
            this.gameOver = true
        }
        // console.log(this.gameOver)
        return this.gameOver;
    }
    reset() {
        this.selectedCards = []
        this.gameOver = false
        this.gameWon = false
    }
}
export function testGame() {
    const cards: gameCard[] = [
        { id: 0, img: "Hello_0" },
        { id: 1, img: "Hello_1" },
        { id: 2, img: "Hello_2" },
        { id: 3, img: "Hello_3" },
        { id: 4, img: "Hello_4" },
        { id: 5, img: "Hello_5" },
        { id: 6, img: "Hello_6" },
        { id: 7, img: "Hello_7" },
        { id: 8, img: "Hello_8" },
        { id: 9, img: "Hello_9" },
        { id: 10, img: "Hello_10" },
        { id: 11, img: "Hello_11" },
        { id: 12, img: "Hello_12" },
        { id: 13, img: "Hello_13" },
        { id: 14, img: "Hello_14" },
    ]
    const g = new Game("basic", cards)
    g.playGame(0)
    console.log(g.print().selectedCards)

    console.log(1)
    console.log(g.shuffle())
    console.log(2)
    console.log(g.shuffle())
    console.log(3)
    console.log(g.shuffle())
    console.log(4)
    console.log(g.shuffle())

    // g.playGame(20)

}
