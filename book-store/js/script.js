const books = [
    { id: 1, title: 'To Kill a Mockingbird', author: 'Harper Lee', category: 'Fiction' },
    { id: 2, title: 'Sapiens', author: 'Yuval Noah Harari', category: 'Non-Fiction' },
    { id: 3, title: 'Dune', author: 'Frank Herbert', category: 'Science Fiction' },
    { id: 4, title: 'Harry Potter and the Philosopher\'s Stone', author: 'J.K. Rowling', category: 'Fantasy' },
    { id: 5, title: 'The Da Vinci Code', author: 'Dan Brown', category: 'Mystery' },
    { id: 6, title: 'Pride and Prejudice', author: 'Jane Austen', category: 'Romance' },
    { id: 7, title: 'The Diary of a Young Girl', author: 'Anne Frank', category: 'Biography' },
    { id: 8, title: 'Atomic Habits', author: 'James Clear', category: 'Self-help' },
    { id: 9, title: 'Charlotte\'s Web', author: 'E.B. White', category: 'Children' },
];

window.onload = function() {
    displayBooks(books);
};

function displayBooks(bookList) {
    const booksDiv = document.getElementById('books');
    booksDiv.innerHTML = '';
    bookList.forEach(book => {
        const bookItem = document.createElement('div');
        bookItem.className = 'book-item';
        bookItem.innerHTML = `
            <h3>${book.title}</h3>
            <p>${book.author}</p>
            <p><strong>Category:</strong> ${book.category}</p>
        `;
        booksDiv.appendChild(bookItem);
    });
}

function searchBooks() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const filteredBooks = books.filter(book => 
        book.title.toLowerCase().includes(query) || 
        book.author.toLowerCase().includes(query) || 
        book.category.toLowerCase().includes(query)
    );
    displayBooks(filteredBooks);
}

function filterBooks(category) {
    const filteredBooks = books.filter(book => book.category === category);
    displayBooks(filteredBooks);
}
