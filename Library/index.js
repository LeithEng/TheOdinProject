const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function() {
    return `${title} by ${author}, ${pages} pages, ${read}`;
  }
}

function addBookToLibrary(title, author, pages, read) {
    const book = new Book(title, author, pages, read);
    myLibrary.push(book);  
}
addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', 310, 'Not read');
addBookToLibrary('1984', 'George Orwell', 328, 'Read');
addBookToLibrary('To Kill a Mockingbird', 'Harper Lee', 281, 'Not read');

function deleteBook(index) {
    myLibrary.splice(index, 1); 
    showBooks();
}

function toggleReadStatus(index) {
    const book = myLibrary[index];
    book.read = book.read === 'Read' ? 'Not read' : 'Read';
    showBooks();
}


function showBooks() {
    const container = document.getElementById('book-container');
    container.innerHTML = '';

    if (myLibrary.length === 0) {
        container.innerHTML = '<p>No books in the library yet!</p>';
        return;
    }

    myLibrary.forEach((book, index) => {
        const bookCard = document.createElement('div');
        bookCard.className = 'book-card';

        bookCard.innerHTML = `
            <h3>${book.title}</h3>
            <p><strong>Author:</strong> ${book.author}</p>
            <p><strong>Pages:</strong> ${book.pages}</p>
            <p><strong>Read:</strong> ${book.read}</p>
            <button class="toggle-read-btn" data-index="${index}">${book.read === 'Read' ? 'Mark as Not Read' : 'Mark as Read'}</button>
            <button class="delete-btn" data-index="${index}">Delete</button>
        `;

        container.appendChild(bookCard);
    });

    
    document.querySelectorAll('.delete-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            const index = e.target.getAttribute('data-index');
            deleteBook(index);
        });
    });


    document.querySelectorAll('.toggle-read-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            const index = e.target.getAttribute('data-index');
            toggleReadStatus(index);
        });
    });
}



const newBookBtn = document.getElementById('new-book-btn');
const bookForm = document.getElementById('book-form');

newBookBtn.addEventListener('click', () => {
    bookForm.style.display = bookForm.style.display === 'none' ? 'block' : 'none';
});

bookForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').value;

    addBookToLibrary(title, author, pages, read);
    bookForm.reset();
    bookForm.style.display = 'none';
    showBooks();

});


showBooks();

