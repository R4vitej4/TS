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
    id:number,
    firstName: string,
    lastName: string,
    name: string,
    email: string, 
    age?:number,
    address?:string
}


function isLegalCheck(user: User){
    if(user.age && user.age>18){
        return true;
    }
    else{
        return false;
    }
}


function updateUser(user: User, updateObj: Partial<User>){
    return {...user, ...updateObj};
}


type CompleteUserPreview = Required<Pick<User, "id" | "name" | "email">> // Combined Pick and Required

const userPreview: CompleteUserPreview = {
    id: 1,
    name: "Alice",
    email: "alice@example.com",
};

console.log(userPreview);

