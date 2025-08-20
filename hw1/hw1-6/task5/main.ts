let str: string= "Ревуть воли як ясла повні";
let notStr: number = 123;

const stringToArray = (str: string): string | string[] => str === typeof(str)  ? str.split(" ") : `"${str} is not string"`;

console.log(stringToArray(str));
console.log(notStr);
