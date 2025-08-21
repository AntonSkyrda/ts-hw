interface ICourse {
    title: string;
    monthDuration: number;
}

interface ICourseWithId extends ICourse{
    id: number;
}

let coursesAndDurationArray2: ICourse[] = [
    {title: "JavaScript Complex", monthDuration: 5},
    {title: "Java Complex", monthDuration: 6},
    {title: "Python Complex", monthDuration: 6},
    {title: "QA Complex", monthDuration: 4},
    {title: "FullStack", monthDuration: 7},
    {title: "Frontend", monthDuration: 4}
];

let addId = (arr: ICourse[]): ICourseWithId[] => arr.map((item: ICourse, index: number): ICourseWithId => ({...item, id: index + 1}));

console.log(addId(coursesAndDurationArray2));