const myLibrary = [];
let id = 4


const title= document.getElementById('title');
const author= document.querySelector('#author');
const pages= document.querySelector('#pages');
const save= document.getElementById('save');
const cancel= document.querySelector('#cancel');
const check= document.getElementById('check')


const reads= document.querySelectorAll('.read')
const status= document.querySelectorAll('.status')

//  Make read Function
reads.forEach((read) => read.addEventListener('change', () =>{
    const status= read.nextElementSibling;
    status.textContent= read.checked ? 'Read' : 'Not read'
}) 
)



// --- Save Button:
save.addEventListener('click',  formSubmit)
function formSubmit(){
    let emptyFiled=[];

    if(title.value.trim() ===   '')
        emptyFiled.push('Title');
    if(author.value.trim() === '')
        emptyFiled.push('Author');
    if( pages.value.trim() ==='')
        emptyFiled.push('Pages (can not be empty)') 
    else if (pages.value <= 10      ||
        pages.value >= 999     )
        emptyFiled.push('Pages ()must be between 10 - 999')
        //alert('Pages ()must be between 10 - 999')
    if(emptyFiled.length > 0){
        console.log(`Please fill up the following fields ${emptyFiled. join(', ')}`)
    }
    else{
        id += 1
        bookTitle= title.value.trim();
        bookAuthor= author.value.trim();
        bookPages= pages.value.trim();
        bookRead= check.checked ? 'read' : 'not read'
        myLibrary.push(id, bookTitle, bookAuthor, bookPages, bookRead)
        clear()

    }
    console.log(myLibrary)
    return myLibrary
}
  

// --- Cancel Button:
cancel.addEventListener('click', () =>{
    clear()
})



// --- Clear Function:
function clear(){
    title.value= '';
    author.value= '';
    pages.value= '';
    check.checked= '';
}








function Book(id, title,author, pages, read) {
    this.id= id
    this.title= title;
    this.author= author;
    this.pages= pages;
    this.read= read
}

function addBookToLibrary(id, title, author, pages, read) {
    bookOne= new Book('Odin', 'Project', 855);


}
