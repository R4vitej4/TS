/*
Problem 4: Classes and Inheritance
Write a TypeScript program that:

Defines a class Shape with:

A name property (string).
A constructor to initialize name.
A method getArea() that returns 0 (since the base Shape doesn’t have a defined area).
Creates two subclasses:

Rectangle: Adds width and height properties (number) and overrides getArea() to calculate the area of the rectangle.
Circle: Adds a radius property (number) and overrides getArea() to calculate the area of the circle using the formula π * radius^2.
Creates an array of shapes containing a Rectangle and a Circle.

Loops through the array and prints the name and area of each shape.
*/



class Shape {
    name: string;

    constructor(name:string){
        this.name=name;

    }

    getArea():number{
        return 0;
    }

}

class Rectangle extends Shape{
    width: number;
    height:number;

    constructor(width:number,height:number){
        super("Rectangle");
        this.width=width;
        this.height=height;
    }

    getArea():number{
        return this.width* this.height;
    }
}


class Circle extends Shape{
    radius: number;

    constructor(radius:number){
        super("Circle");
        this.radius=radius;
    }

    getArea():number{
        return (22/7) * this.radius* this.radius;
    }
}

const shapes : Shape[] =[
    new Rectangle(5,4),
    new Circle(7)
]

for (const shape of shapes){
    console.log(`${shape.name} Area: ${shape.getArea()}`);
}

