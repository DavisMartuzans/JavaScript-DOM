const search = document.getElementById('search-books');
const bookList = document.getElementById('book-list');
const titles = document.getElementsByClassName('title');

console.log(search, bookList);
console.log(Array.isArray(titles));
console.log(Array.isArray(Array.from(titles)));

Array.from(titles).forEach(function(title){
  console.log(title);
books = document.querySelectorAll('#book-list li .name');
console.log(books);
  
});