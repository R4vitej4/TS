interface Book{
    id:number,
    title:string,
    author:string,
    isAvailable:boolean
}

interface Member{
    id:number,
    name:string
}

class Library{
    private books:Book[]=[];
    private members:Member[]=[];

    addBook(book:Book):void{
        this.books.push(book);
    }

    addMember(member:Member):void{
        this.members.push(member);
    }

    borrowBook(bookId:number,memberId:number):string{
        const book = this.books.find(book=>book.id==bookId);
        const member = this.members.find(member=>member.id==memberId);

        if(!book){
            return `Book with Id ${bookId} not found`;
        }

        if(!member){
            return `member with Id ${memberId} not found`;
        }

        if(!book.isAvailable){
            return `Book ${book.title} is already borrowed`;
        }

        book.isAvailable=false;
        return `Member ${member.name} borrowed ${book.title}`;
        
    }


    returnBook(bookId:number):string{
        const book = this.books.find(book=>book.id==bookId);

        if(!book){
            return `Book with Id ${bookId} not found`;
        }

        if(book.isAvailable){
            return `Book is not borrowed`;
        }
        book.isAvailable=true;
        return `Book ${book.title} has been returned`;
    }
}



const library = new Library();

const Book1: Book = { id: 1, title: "TypeScript Handbook", author: "John Doe", isAvailable: true };
const Book2: Book = { id: 2, title: "Learning JavaScript", author: "Jane Smith", isAvailable: true };

const member1: Member = { id: 1, name: "Alice" };
const member2: Member = { id: 2, name: "Bob" };

library.addBook(Book1);
library.addBook(Book2);

library.addMember(member1);
library.addMember(member2);

console.log(library.borrowBook(1, 1)); 
console.log(library.borrowBook(1, 2)); 
console.log(library.returnBook(1));  
console.log(library.returnBook(3));