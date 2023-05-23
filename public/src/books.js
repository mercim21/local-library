function findAuthorById(authors, id) {
  return authors.find((authorsIndex) =>authorsIndex.id === id)
}

function findBookById(books, id) {
  return books.find((booksIndex) =>booksIndex.id === id)
}

function partitionBooksByBorrowedStatus(books) {
  let borrowedBooks= books.filter((book)=>
   book.borrows.every((borrow)=>borrow.returned === true) 
   );
  let returnedBooks = books.filter((book)=>
   book.borrows.some((borrow)=>borrow.returned === false)   
   );
  return [[...returnedBooks], [...borrowedBooks]];
}

function getBorrowersForBook(book, accounts) {
  const borrowers = [];
  
  for (const borrow of book.borrows) {
  const account = accounts.find(acc => acc.id === borrow.id);
  if (account) {
  const { id, picture, age, name, company, email, registered } = account;
  borrowers.push({
  id,
  picture,
  age,
  name: { ...name },
  company,
  email,
  registered,
  returned: borrow.returned,
  });
  
  if (borrowers.length === 10) {
  break;
  }
  }
  }
  
  return borrowers;
  }
  


module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
