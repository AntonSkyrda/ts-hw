interface IBook {
    title: string;
    pageCount: number;
    genre: string;
    authors: [{
        name: string;
        age: string;
    }];
}

let book1: IBook = {
    title: "Kobzar",
    pageCount: 555,
    genre:"poetry",
    authors: [
        {
            name: "Taras Shevchenko",
            age: "dead",
        }
    ]
};

let book2: IBook = {
    title: "The Witcher",
    pageCount: 365,
    genre:"fantasy",
    authors: [
        {
            name: "Andrzej Sapkowski",
            age: "77",
        }
    ]
};

let book3: IBook = {
    title: "The picture of Dorian Gray",
    pageCount: 236,
    genre:"classic literature",
    authors: [
        {
            name: "Oskar Wild",
            age: "dead",
        }
    ]
};

console.log(book1);
console.log(book2);
console.log(book3);
