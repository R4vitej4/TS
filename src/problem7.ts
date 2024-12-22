/*
Problem 7: Union Types and Conditional Logic
Write a TypeScript program that:

Defines a union type Input that can be either:

A number
A string
Implements a function formatInput that:

Accepts a parameter of type Input.
Returns:
The square of the number if the input is a number.
The input string in reverse if the input is a string.
Tests the function with:

A number.
A string.

*/

type input = number | string;


function formatInput(param: input):input{
    if(typeof param === 'number'){
        return param*param;
    }
    return param.split("").reverse().join("");
}

console.log(formatInput(5));      
console.log(formatInput("hello")); 
