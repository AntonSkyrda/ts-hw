"use strict";
let coursesAndDurationArray2 = [
    { title: "JavaScript Complex", monthDuration: 5 },
    { title: "Java Complex", monthDuration: 6 },
    { title: "Python Complex", monthDuration: 6 },
    { title: "QA Complex", monthDuration: 4 },
    { title: "FullStack", monthDuration: 7 },
    { title: "Frontend", monthDuration: 4 }
];
let addId = (arr) => arr.map((item, index) => ({ ...item, id: index + 1 }));
console.log(addId(coursesAndDurationArray2));
