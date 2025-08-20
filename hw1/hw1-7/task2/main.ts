interface IGadget  {
    name: string;
    details: {
        price: number;
        color: string
    }
    sayHello(): void;
}


function makeDeepCopy(obj: any): any {
    if (obj) {
        let functions: any[] = []
        const copiedObj: any = JSON.parse(JSON.stringify(obj));

        for (const key in obj) {
            if (typeof obj[key] === "function") {
                const funcCopy = obj[key].bind({});
                functions.push({funcCopy, key});
            }
        }
        for (const func of functions) {
            copiedObj[func.key] = func.funcCopy;
        }

        return copiedObj;
    }
    return "Incorrect object in"
}

const gadget: IGadget = {
    name: "Gadget",
    details: {
        price: 100,
        color: "black"
    },
    sayHello(): void {
        console.log(`Hello`);
    }
};

const copy = makeDeepCopy(gadget);

console.log(copy);
copy.sayHello();
console.log(copy === gadget);
console.log(copy.details === gadget.details);
