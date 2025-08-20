interface IDeck {
    suite: string;
    value: string;
}

const cardValues: string[] = [
    "6",
    "7",
    "8",
    "9",
    "10",
    "jack",
    "queen",
    "king",
    "ace"
]

const cardSuites: string[] = [
    "clubs",
    "hearts",
    "spades",
    "diamonds"
]

function createCardDeck(cardValues: string[], cardSuites: string[]): IDeck[] {
    let cardDeck = [];
    for (const cardSuite of cardSuites) {
        for (const cardValue of cardValues) {
            cardDeck.push(
                {
                    suite: cardSuite,
                    value: cardValue,
                }
            );
        }
    }

    return cardDeck;
}


let cardDeck = createCardDeck(cardValues, cardSuites)

console.log(cardDeck.find((card: IDeck): boolean => card.value === "ace" && card.suite === "spades"));
console.log(cardDeck.filter((card: IDeck): boolean => card.value === "6"));
console.log(cardDeck.filter((card: IDeck): boolean => card.suite === "diamonds"));
console.log(cardDeck.filter((card: IDeck): boolean => ["9", "10", "jack", "queen", "king", "ace"].includes(card.value) && card.suite === "diamonds"));
