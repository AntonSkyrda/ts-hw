interface ICourse {
    title: string;
    monthDuration: number;
}

interface ICourseWithId {
    id: number;
    title: string;
    monthDuration: number;
}

let coursesAndDurationArray1: ICourse[] = [
    {title: "JavaScript Complex", monthDuration: 5},
    {title: "Java Complex", monthDuration: 6},
    {title: "Python Complex", monthDuration: 6},
    {title: "QA Complex", monthDuration: 4},
    {title: "FullStack", monthDuration: 7},
    {title: "Frontend", monthDuration: 4}
];


const sortedCourses = coursesAndDurationArray1
    .sort(
        (a: ICourse, b: ICourse): number => b.monthDuration - a.monthDuration
    )
    .filter(
        (value: ICourse):boolean => value.monthDuration > 5
    )
    .map(
        (value: ICourse, index: number):ICourseWithId => ({...value, id: index + 1})
    );

console.log(sortedCourses);