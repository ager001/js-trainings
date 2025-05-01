class Bookstore {
    constructor(books) { 
        this.books = books;
    }
    listBooks() {
        for (const book of this.books) {
           // console.log(`${book.name} by ${book.author}`);
           book.displayBook();
        }
    }
}

class Book {
    constructor(name, author) {
        this.name = name;
        this.author = author;
    }
    displayBook() {
        console.log(`${this.name} by ${this.author}`);
    }
}

const nineteen84 = new Book("1984", "George Orwell");
const hp = new Book("Harry Potter", "J.K. Rowling");
const bookstore = new Bookstore([nineteen84, hp]); 
bookstore.listBooks();