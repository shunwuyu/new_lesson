class Book {
  constructor(){
     this._title = 'book1';
  }
  get title(){
     return this._title;
  }
  set title(value){
     value == 'book2' ?
     this._title = value : '' 
  }
}

var book = new Book();
book.title = 'book3';
console.log(book.title ) // 'book1'
book.title = 'book2';
console.log(book.title)  // 'book2'