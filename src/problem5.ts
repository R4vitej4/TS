/*
Problem 5: Generics and Arrays
Write a TypeScript program that:

Defines a generic function filterArray that:

Accepts an array of any type (T[]).
Accepts a callback function to filter the array. This callback takes an element of type T and returns a boolean.
Returns a filtered array containing elements that satisfy the callback condition.
Tests the function with:

An array of numbers to filter only even numbers.
An array of strings to filter only strings containing more than 3 characters.

const numbers = [1, 2, 3, 4, 5, 6];
const strings = ["one", "two", "three", "four"];

filterArray(numbers, callback); // Expected output: [2, 4, 6]
filterArray(strings, callback); // Expected output: ["three", "four"]

*/

function filterArray<T>(array:T[],callback:(ele: T)=>boolean):T[]{
    let result:T[]=[];
    for(const arr of array){
        if(callback(arr)){
            result.push(arr);
        }
    }
    return result;
}

const numbers = [1,2,3,4,5,6,7];
const evenNumbers = filterArray<number>(numbers,(num)=>num%2===0);
console.log(evenNumbers);