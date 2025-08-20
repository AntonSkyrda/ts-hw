// rectangle area

const rectangleArea1 = (a: number, b: number): number => a * b;

console.log(`rectangleArea: ${rectangleArea1(4, 5)}`);

// circle area

const circleArea = (radius: number): number => Math.PI * (radius ** 2);

console.log(`circleArea: ${circleArea(10)}`);

// cylinder area

const cylinderArea1 = (radius: number, height: number): number => 2 * Math.PI * radius * height;

console.log(`cylinderArea: ${cylinderArea1(5, 12)}`);

// output array elements

const printArrayElements1 = (arr: any[]): void => {
    for (const item of arr) {
        console.log(item);
    }
}

printArrayElements1([1, 2, 3, 4, 5]);

// add p to html page
const addParagraph = (text: string): void => document.write(`<p>${text}</p>`);

addParagraph("qwe")

// add ul to html page with 3 same li elements

const addUl2 = (text: string): void => {
    document.write("<ul>")
    for (let i: number = 0; i < 3; i++) {
        document.write(
            `<li>${text}</li>
            `
        )
    }
    document.write("</ul>")
};

addUl2("qwe")

// add ul to html page with same li elements with counter as 2nd argument

const addUlWithCounter = (text: string, counter: number): void => {
    document.write("<ul>")
    for (let i: number = 0; i < counter; i++) {
        document.write(
            `<li>${text}</li>
            `
        )
    }
    document.write("</ul>")
}

addUlWithCounter("asd", 5)

// add ul with array elements

const addUlWithArrayElements = (arr: any[]): void => {
    document.write("<ul>")
    for (const item of arr) {
        document.write(
            `<li>${item}</li>
            `
        )
    }
    document.write("</ul>")
}

addUlWithArrayElements(["asd", 123, false])

// add person information to html page

type Person2Type = {
    id: number;
    name: string;
    age: number;
}

let people2: Person2Type[] = [
    {id: 1, name: 'Anna', age: 25},
    {id: 2, name: 'Bohdan', age: 32},
    {id: 3, name: 'Iryna', age: 28},
    {id: 4, name: 'Dmytro', age: 21},
    {id: 5, name: 'Olena', age: 30}
];

const addPeople2 = (arr: Person2Type []): void => {
    for (const item of arr) {
        document.write(
            `
            <div>
                <p>${item.id}</p>
                <p>${item.name}</p>
                <p>${item.age}</p>
            </div>
            `
        )
    }
}

addPeople2(people2)

//the lowest of array

const theLowest = (arr: number[]): number => {
    let min: number = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

console.log(theLowest([324, -6, 32, 452, 2, 1]));

//sum of array elements

const sumOfArrElements1 = (arr: number[]): number => {
    let sum: number = 0;
    for (let i: number = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

console.log(sumOfArrElements1([1, 2, 10]));

// index swap

const swap = (arr: any[], index1: number, index2: number): any[] => {
    let a = arr[index1];
    let b = arr[index2];
    arr[index1] = b;
    arr[index2] = a;
    return arr
}

console.log(swap([11, 22, 33, 44], 0, 1));

interface ICurrency {
    currency: string;
    value: number;
}

const exchange1 = (
    sumUAH: number,
    currencyValues: ICurrency[],
    exchangeCurrency: string,
): string | number => {
    for (const item of currencyValues) {
        if (item.currency === exchangeCurrency) {
            return sumUAH / item.value;
        }
    }
    return `Incorrect values of ${exchangeCurrency} not in currencyValues`;
}

console.log(exchange1(10000, [{currency: "USD", value: 25}, {currency: "EUR", value: 42}], "USD"));
console.log(exchange1(10000, [{currency: "USD", value: 25}, {currency: "EUR", value: 42}], "EUR"));
console.log(exchange1(10000, [{currency: "EUR", value: 42}], "USD"));
