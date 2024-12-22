/*
Problem 1: Basic Types and Interfaces
Write a TypeScript program that:

Defines an interface Person with the following properties:
name (string)
age (number)
isStudent (boolean)
Creates an array of three Person objects.
Loops through the array and prints each person's details.
Bonus: Add a function to print only the names of people who are students.
*/


interface Person{
    name: string,
    age:number,
    isStudent: boolean
}

// obj 1
const obj1:Person = {
    name: "ravi",
    age: 22,
    isStudent: true
}
const obj2:Person = {
    name: "teja",
    age: 27,
    isStudent: false
}
const obj3:Person = {
    name: "abcd",
    age: 25,
    isStudent: true
}
const arr : Person[] = [obj1,obj2,obj3];


for(const person of arr){
    console.log(`${person.name} ${person.age} ${person.isStudent}`);
}


function isStudent(arr: Person[]):void{
    for(const person of arr){
        if(person.isStudent){
            console.log(person.name);
        }
    }
}


isStudent(arr);