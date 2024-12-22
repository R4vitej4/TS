/*
Problem 2: Functions and Optional Properties
Write a TypeScript program that:

Defines an interface Product with the following properties:

id (number)
name (string)
price (number)
category (string, optional)
Creates an array of Product objects with at least one object missing the category property.

Implements a function getProductDetails that:

Accepts a Product object as input.
Returns a string with all the product details. If the category is missing, it should display "No category assigned."
Calls the getProductDetails function for each product in the array and prints the results.
*/

interface Product{
    id: number,
    name:string,
    price: number,
    category?:string
}


const o1: Product= {
    id:1,
    name: "abcd",
    price: 200,
    category:"mobile"
}

const o2:Product={
    id:2,
    name:"dkdkf",
    price: 400
}

const new_arr: Product[] = [o1, o2];

function getProductDetails (prod: Product): string{
    if(!prod.category){
        return `${prod.id} ${prod.name} ${prod.price}`+ " No category assigned"
    }
    return `${prod.id} ${prod.name} ${prod.price} ${prod.category}`
}

for(const p of new_arr){
    console.log(getProductDetails(p));
}
