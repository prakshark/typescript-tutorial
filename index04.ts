// Tuple: like array: where each index has a fixed data type

const myTuple: [string, number] = ["Hi", 123];
// Problem with tuples: We can still push to the tuple, coz it is fundamentally an array. So we use "readony" whenever using tuple.
const myTuple2: readonly[string, number] = ["hi", 123];


// Intersections: Combining multiple data types using "&"
type typeA = {
    name: string,
    age: number
}
type typeB = {
    state: string,
    country: string
}
type combinedType = typeA & typeB; 
const objOfTypeAandB: typeA & typeB = { // can use "combinedType" too
    name: "Prakhar",
    age: 21,
    state: "UP",
    country: "India"
}

// Intersections: Same as "type", but there are a few differences. You cant define multiple types with the same name, but you can define multiple interfaces with the same name and typescript merges them all into one. The second difference is that "type" uses "&" and interface uses "extends" keyword. TS documentation recommend using :extends over "&" due to safety and performance, but 99% of the times, you are going to use "type"


// Enums: To define a variable that can only take fixed values. But we have unions to do that in TS, using "|"


// Type Narrowing: if we define a variable as ("string | number"), and then declare it as a string, TS is smart enough to now assign the variable on ly the type of string, and the number type is completely removed from the type decalration beyond that line.