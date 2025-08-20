type DeckBySuiteType = {
    spades: DeckType[];
    diamonds: DeckType[],
    hearts: DeckType[],
    clubs: DeckType[],
}

type DeckType = {
    suite: string;
    value: string;
}


const cardValues1: string[] = [
    "6",
    "7",
    "8",
    "9",
    "10",
    "jack",
    "queen",
    "king",
    "ace"
];

const cardSuites1: string[] = [
    "clubs",
    "hearts",
    "spades",
    "diamonds"
];

function createCardDeck1(cardValues: string[], cardSuites: string[]): DeckType[] {
    let cardDeck: DeckType[] = [];
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


let cardDeck1: DeckType[] = createCardDeck1(cardValues1, cardSuites1);

let groupedDeckBySuites: DeckBySuiteType = cardDeck1.reduce((acc: any, card: DeckType):DeckBySuiteType => {
        if (!acc[card.suite]) {
            acc[card.suite] = [];
        }
        acc[card.suite].push(card);
        return acc;
    }, {
        spades: [],
        diamonds: [],
        hearts: [],
        clubs: [],
    }
);

console.log(groupedDeckBySuites);