function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
 return accounts.length;
}

function getBooksBorrowedCount(books) {
  return books.reduce((acc, book) => {
    const borrows = book.borrows;
    return acc + borrows.filter(borrow => !borrow.returned).length;
  }, 0);
}

function getMostCommonGenres(books) {
  const genreCount = {};

  for (const book of books) {
    const genre = book.genre;
    genreCount[genre] = (genreCount[genre] || 0) + 1;
  }

  const sortedGenres = Object.entries(genreCount).sort(
    (a, b) => b[1] - a[1]
  );

  const topGenres = sortedGenres.slice(0, 5).map(([genre, count]) => ({ name: genre, count }));
console.log (topGenres);
  return topGenres;
}

//helper function

function topFive(resultArray) {
  return resultArray.slice(0, 5).map(([name, count]) => ({
    name: name,
    count: count
  })); 
}

function getMostPopularBooks(books) {
  const borrowedCount = {};

  for (const book of books) {
    borrowedCount[book.title] = (borrowedCount[book.title] || 0) + book.borrows.length;
  }

  const sortedPopularBooksArray = Object.entries(borrowedCount).sort(
    (a, b) => b[1] - a[1]
  );
console.log("sortedPopularBooks",sortedPopularBooksArray);
 const topBooks = topFive(sortedPopularBooksArray);
 
 //const topBooks = sortedPopularBooks.slice(0, 5).map(([name, count]) => ({
 //  name: name,
 //   count: count
 //})); 
console.log("topBooks",topBooks);
  return topBooks;
}

function getMostPopularAuthors(books, authors) {
  const authorBorrowCounts = {};
  
  for (const book of books) {
  const author = authors.find((author) => author.id === book.authorId);
  if (author) {
  const authorName = `${author.name.first} ${author.name.last}`;
  authorBorrowCounts[authorName] = (authorBorrowCounts[authorName] || 0) + book.borrows.length;
  }
  }
  const sortedPopularAuthors = Object.entries(authorBorrowCounts).sort(
  (a, b) => b[1] - a[1]
  );
  
  const topAuthors = sortedPopularAuthors.slice(0, 5).map(([name, count]) => ({
  name: name,
  count: count
  }));
  console.log(topAuthors);
  return topAuthors;
  }


module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
