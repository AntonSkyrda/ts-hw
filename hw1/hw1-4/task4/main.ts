function printArrayElements(array: any[]) : void {
    for (let i : number = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

printArrayElements([1, 2, 3, 4, 5]);
printArrayElements([1, false, "asd", 4, "qwe"]);
