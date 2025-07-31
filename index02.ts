// Unions :-
let userId: string | number | boolean;
userId = "abc";
userId = 123;
userId = true;

// Type narrowing: TS knows when an instance of a variable is a particular type of data type. Ex:-
userId = "abc";
if(typeof userId === "string") {
    userId.toUpperCase();
    // Notice here I can use string functions, coz currently userId is a string.
}

// Optional Parameters: When you want to not necessarily pass a certain parameter to a function, but have it in case you do pass that parameter.
function sum(a?: number, b?: number): number | undefined {
    if(a === undefined && b === undefined) {
        return 0;
    }
    else if(a === undefined) return b;
    else if(b === undefined) return a;
    return a + b;
}

// NOTE: (a?: string) --means--> (a: string | undefined)
// Can not have requried parameter after optional parameter.
// (a: string | b?: string) --> CORRECT
// (a?: string | b: string) --> INCORRECT

// Default Parameter :-
function mul(a: number, b: number = 3) : number {
    return a * b;
}

// Literal Types: Instead of generic data types like string or number, we can give explicit type values to variables.
function myFun(s: "Hello"): void {
    console.log(s);
}
// Used when you need to create a function that only takes one of three string values, like "window", "mid", "aisle"


// Super set unions: Usually useless
let a: 1 | 2 | 3 | number;
// Does nothing extra, but when you type in an editor, it will give autocomplete for 1, 2, 3



// Template Literal types :-
type Class = "abc" | "def" | "ghi";
type Hero = `pre ${Class}`;
// Hero --> "pre abc" | "pre def" | "pre ghi"