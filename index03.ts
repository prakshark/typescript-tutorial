// Arrays :-
function sumOfArray(arr: number[]): number {
    let sum: number = 0;
    arr.map(curr => sum += curr);
    return sum;
}

// Heterogeneous arrays: array that can have multiple data types in it.
let myArr: (number | string)[] = [1, "hi", 23, "Hello"];

// Rest Function: If we dont know the number of parameters
function myFun2(...parameterArr: string[]): void {
    parameterArr.map(c => console.log(c));
}
myFun2("Hi", "Hello", "Buffalo");
// If it could have been string or number, then, we would use
// myFun2(...parameterArr: (string | number)[]){}


// Objects in TS :-
type userObj = {
    name: string,
    age?: number // optional (number | undefined)
}

const user1: userObj = {
    name: "Prakhar",
    age: 22
}

console.log(user1.name, user1.age);


// Sets in TS :-
const mySet = new Set<string>(["abc", "def", "abc"]);
console.log(mySet);

// Maps in TS :-
const myMap = new Map<string, number>([
    ["user1", 20],
    ["user2", 22],
    ["user3", 24]
]);

// NOTE: Everything in JS is an object

// Read only property in TS objects :-
type obj2 = {
    readonly name: string,
    readonly age: number
}

const obj2Instance: obj2 = {
    name: "prakhar",
    age: 22
}

// obj2.name = "srivastava" --> X Not Possible

// as const: creating a const for arrays or objects do not work, since you can always change them, or push elements into it. so we use the keyword "as const".

const myArr3: number[] = [1,2,3];
myArr.push(4); // --> Works fine
const myArr4 = [1,2,3] as const;
// myArr4.push(4); // --> Won't work

// Function Overload: same as all languages:
// fun(param1), fun(param1, param2)