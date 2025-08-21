interface Array<T> {
    customFilter(callback: (value: T) => boolean): T[];
    customForEach(callback: (value: T[], index?: number | undefined) => void): void;
}

Array.prototype.customForEach = function(callback: any): void {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
};

Array.prototype.customFilter = function(callback: any): any[] {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            result.push(this[i]);
        }
    }
    return result;
};


[1, 2, 3].customForEach((item: number[], index: number | undefined): void => {
    console.log(`Item at index ${index}: ${item}`);
});

const numbers = [1, 2, 3, 4, 5];
const even = numbers.customFilter((num:any):boolean => num % 2 === 0);
console.log(even); // [2, 4]
