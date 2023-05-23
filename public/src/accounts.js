function findAccountById(accounts, id) {
  return accounts.find ((accountsIndex) => accountsIndex.id === id)
}
function sortAccountsByLastName(accounts) {
  accounts.sort((accountA, accountB) => accountA.name.last.localeCompare(accountB.name.last));
  console.log ("accounts:",accounts)  
  return accounts;
  }

  function getTotalNumberOfBorrows(account, books) {
  const accId = account.id;
  let total = 0;
  books.forEach(book => book.borrows.forEach(borrow => accId === borrow.id && total++));
  return total;
   }

   function getBooksPossessedByAccount(account, books, authors) {
    const inPossession = [];
  
    books.map((book) => {
      book.borrows.map((borrow) => {
        authors.map((author) => {
          if (author.id === book.authorId) {
            book["author"] = author;
          }
        });
        if (borrow.returned === false && borrow.id === account.id) {
          inPossession.push(book);
        }
      });
    });
  console.log(inPossession);
    return inPossession;
  }

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
