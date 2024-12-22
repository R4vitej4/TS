/*
Problem 6: Interfaces with Functions and Objects
Write a TypeScript program that:

Defines an interface Book with the following properties:

title (string)
author (string)
price (number)
Defines a function type DiscountCalculator using an interface. This function:

Takes a Book as input.
Returns the price after applying a discount.
Implements the applyDiscount function that:

Accepts a Book and a DiscountCalculator as arguments.
Returns the discounted price.
Tests the function with different books and discount logic:

A flat 10% discount.
A discount that applies only if the price is greater than 500.

*/

interface Book{
    title: string,
    author: string,
    price: number
}


type DiscountCalculator =(book: Book)=>number

function applyDiscount(book:Book, discountFn: DiscountCalculator):number{
    return discountFn(book);
}

const tenPercentDiscount: DiscountCalculator = (book) => {
    return book.price - book.price * 0.1;
};

const discountOver500: DiscountCalculator = (book) => {
    return book.price > 500 ? book.price - 100 : book.price;
};

const book1: Book = { title: "TypeScript Basics", author: "John Doe", price: 600 };
const book2: Book = { title: "Learn JavaScript", author: "Jane Smith", price: 300 };

console.log(
    `Book: ${book1.title}, Discounted Price: ${applyDiscount(book1, tenPercentDiscount)}`
);
console.log(
    `Book: ${book2.title}, Discounted Price: ${applyDiscount(book2, tenPercentDiscount)}`
);

console.log(
    `Book: ${book1.title}, Discounted Price: ${applyDiscount(book1, discountOver500)}`
);
console.log(
    `Book: ${book2.title}, Discounted Price: ${applyDiscount(book2, discountOver500)}`
);