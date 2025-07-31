// TYPE DECLARATION :-

const myStr: string = "Hello World";
console.log(myStr);

// Types: string, number, boolean, null, undefined, any

// Type inference: We dont explicitly need to specify the data type every time, ts is smart enough to infer it most of the time.
const str = "abcde";
console.log(str);

// All JS code is a valid TS code but all TS code is not valid JS code. You need to compile it to a JS file using the `tsc filename.ts` to a `filename.js` file, then run it using node.


// Functions :-
function add(
    a: number,
    b: number
): number {
    return (a + b);
}

function isValidAge(
    age: number
): "Adult" | "Child" {
    if(age >= 18) return "Adult";
    return "Child";
}

function printName(name: string): void {
    console.log(name);
    // void is used in function that do not return anything
}

// To pass a function as a parameter in another functio :-
function fun1(a: number, b: number): number {
    return a + b;
}

function fun2(
    parFun: (parA: number, parB: number) => number,
    c: number
) : number {
    const sum1 = parFun(3, 4);
    const sum2 = sum1 + c;
    return sum2;
}