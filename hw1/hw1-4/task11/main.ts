function indexSwap(arr: any[], index1: number, index2: number): any[] {
    let a = arr[index1];
    let b = arr[index2];
    arr[index1] = b;
    arr[index2] = a;
    return arr
}

console.log(indexSwap([11, 22, 33, 44], 0, 1));
console.log(indexSwap(["q", "w", "e", "r"], 0, 1));