let x : number = 101;
console.log(x);


function greet(firstName: string){
    console.log("hello "+ firstName);
}

// type inference
function sum(a: number, b: number): number{
    return a+b;
}

const value = sum(2,4);

console.log(value);




function runAfter1s(fn : ()=>void){
    setTimeout(fn,1000);
}

runAfter1s(function(){
    console.log("hi there");
})

interface User{
    firstName: string,
    lastName: string,
    email?: string, //optional 
    age:number
}


function isLegalCheck(user: User){
    if(user.age>18){
        return true;
    }
    else{
        return false;
    }
}



