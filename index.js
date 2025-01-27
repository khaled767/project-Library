const myLibrary = [];


// Book Constructor
function Book(id, title, author, pages, read) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

// Function to display a single book on the page
function displayBook(book) {
    //const row = document.createElement('tr'); Instead of it 'div'
    const bookCard= document.createElement('div')
    bookCard.classList.add('book-card');

    bookCard.innerHTML = `
        <div><span>Title:</span> ${book.title}</div>
        <div><span>Author:</span> ${book.author}</div>
        <div><span>Pages:</span> ${book.pages}</div>
        <div>
            <input type="checkbox" class="read" ${book.read === 'read' ? 'checked' : ''}>
            <span class="status">${book.read === 'read' ? 'Read' : 'Not read'}</span>
        </div>
        <button class="delete">Delete</button>
    `;
    const bookshelf= document.querySelector('.bookshelf')
    // Append the row to the table
    bookshelf.appendChild(bookCard);

    // Event listener for the "Read" checkbox
    const readCheckbox = bookCard.querySelector('.read');
    const statusSpan = bookCard.querySelector('.status');
    readCheckbox.addEventListener('change', () => {
        const isChecked = readCheckbox.checked ;
        statusSpan.textContent = isChecked ? 'Read' : 'Not read';
        book.read = isChecked ? 'read' : 'not read'; // Update book status

    });

    // Event listener for the "Delete" button
    const deleteButton = bookCard.querySelector('.delete');
    deleteButton.addEventListener('click', () => {
        bookshelf.removeChild(bookCard);
        const index = myLibrary.indexOf(book);
        if (index > -1) myLibrary.splice(index, 1);
    });
}

// Function to add a new book to the library and display it
function addBookToLibrary(id, title, author, pages, read) {
    const newBook = new Book(id, title, author, pages, read);
    myLibrary.push(newBook);
    displayBook(newBook);
}

// Predefined Books
const bookOne = new Book(1, 'Odin', 'Jim lout', 442, 'read');
const bookTwo = new Book(2, 'Brave', 'Marry Odes', 914, 'read');
const bookThree = new Book(3, 'JavaScript', 'Omer Light', 287, 'not read');
const bookFour = new Book(4, 'Free Camp', 'Khaled Saley', 442, 'read');

// Add predefined books to the library
myLibrary.push(bookOne, bookTwo, bookThree, bookFour);

// Display predefined books on the page
myLibrary.forEach(displayBook);

// Event listener for adding a new book
const saveButton = document.getElementById('save');
saveButton.addEventListener('click', () => {
    const titleInput = document.getElementById('title');
    const authorInput = document.getElementById('author');
    const pagesInput = document.getElementById('pages');
    const readCheckbox = document.getElementById('check');

    const title = titleInput.value.trim();
    const author = authorInput.value.trim();
    const pages = parseInt(pagesInput.value, 10);
    const read = readCheckbox.checked ? 'read' : 'not read';

    if (title && author && pages >= 10 && pages <= 999) {
        const newId = myLibrary.length + 1;
        addBookToLibrary(newId, title, author, pages, read);

        // Clear form inputs
        titleInput.value = '';
        authorInput.value = '';
        pagesInput.value = '';
        readCheckbox.checked = false;
        form.style.display= 'none';
    } else {
        alert('Please provide valid book details.');
    }
});

// Working on some Css:
const form= document.querySelector('.form');
const addButton= document.getElementById('add')
const cancelButton= document.getElementById('cancel')

form.style.display= 'none';

addButton.addEventListener('click', () =>{
    form.style.display= 'flex'
})

cancelButton.addEventListener('click', ()=>{
    form.style.display= 'none'
})