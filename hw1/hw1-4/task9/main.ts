function minOfArr(arr: number[]): number {
    let min: number = arr[0];
    for (let i: number = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

console.log(minOfArr([324, -6, 32, 452, 2, 1]));
