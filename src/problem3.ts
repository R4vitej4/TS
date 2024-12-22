/*
Problem 3: Union Types and Type Guards
Write a TypeScript program that:

Defines a type alias Input which can be either:

A number, or
A string
Implements a function processInput that:

Accepts a parameter of type Input.
If the input is a number, returns its square.
If the input is a string, returns the string in uppercase.
Calls the function with different inputs (number and string) and prints the results.
*/


type Input = number | string;

function processInput(arg: Input):Input{
    if(typeof arg === 'number'){
        return arg * arg;
    }
    return arg.toUpperCase();
}


console.log(processInput(3));
console.log(processInput("demo"));