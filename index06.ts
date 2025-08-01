// Generics: To define generic data types

export function getFirst<T>(arr: T[]): T | undefined {
    return arr[0];
}

export function add<A, B>(a: A, b: B): any[] {
    return [a, b];
}