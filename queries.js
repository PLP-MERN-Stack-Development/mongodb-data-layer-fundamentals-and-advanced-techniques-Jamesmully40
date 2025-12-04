// Example MongoDB queries
 //1. Find all books:
 db.books.find()
 // Find books by a specific author:
 db.books.find({ author: "George Orwell" })
 //Find books published after 1950:
 db.books.find({ published_year: { $gt: 1950 } })
 //Find books in a specific genre:
 db.books.find({ genre: "Sci Fi" })
 //Find in-stock books:
 db.books.find({ in_stock: true })