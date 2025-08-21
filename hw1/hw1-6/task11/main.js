"use strict";
const cardValues1 = [
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
const cardSuites1 = [
    "clubs",
    "hearts",
    "spades",
    "diamonds"
];
function createCardDeck1(cardValues, cardSuites) {
    let cardDeck = [];
    for (const cardSuite of cardSuites) {
        for (const cardValue of cardValues) {
            cardDeck.push({
                suite: cardSuite,
                value: cardValue,
            });
        }
    }
    return cardDeck;
}
let cardDeck1 = createCardDeck1(cardValues1, cardSuites1);
let groupedDeckBySuites = cardDeck1.reduce((acc, card) => {
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
});
console.log(groupedDeckBySuites);
