class BookClub {
    constructor(library) {
        this.library = library;
        this.books = [];
        this.members = [];
        this.assignedBooks = {}; // optional: track which member has which book
    }

    addBook(title, author) {
        const existingBook = this.books.find(b => b.title === title);
        if (existingBook) {
            return `The book "${title}" by ${author} is already in the ${this.library} library.`;
        }

        this.books.push({ title, author });
        return `The book "${title}" by ${author} has been added to the ${this.library} library.`;
    }

    addMember(memberName) {
        if (this.members.includes(memberName)) {
            return `Member ${memberName} is already part of the book club.`;
        }

        this.members.push(memberName);
        return `Member ${memberName} has joined the book club.`;
    }

    assignBookToMember(memberName, bookTitle) {
        if (!this.members.includes(memberName)) {
            throw new Error(`Member "${memberName}" not found.`);
        }

        const bookIndex = this.books.findIndex(b => b.title === bookTitle);
        if (bookIndex === -1) {
            throw new Error(`Book "${bookTitle}" not found.`);
        }

        const [book] = this.books.splice(bookIndex, 1);
        this.assignedBooks[memberName] = book;

        return `Member ${memberName} has been assigned the book "${book.title}" by ${book.author}.`;
    }

    generateReadingReport() {
        if (this.members.length === 0) {
            return "No members in the book club.";
        }

        if (this.books.length === 0) {
            return "No available books in the library.";
        }

        const report = [`Available Books in ${this.library} library:`];
        this.books.forEach(book => {
            report.push(`"${book.title}" by ${book.author}`);
        });

        return report.join('\n');
    }
}


const myBookClub = new BookClub('The Bookaholics');

console.log(myBookClub.addBook("The Great Gatsby", "F. Scott Fitzgerald"));

console.log(myBookClub.addBook("To Kill a Mockingbird", "Harper Lee"));

console.log(myBookClub.addBook("1984", "George Orwell"));

console.log(myBookClub.addMember("Alice"));

console.log(myBookClub.addMember("Peter"));