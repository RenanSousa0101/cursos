const booksModel = require("../models/books-model")

module.exports = {
    // GET /api/books
    index: (req, res) => {
        const books = booksModel.getAllBooks()
        return res.json(books)
    },
    // GET /api/books/:id
    show: (req, res) => {
        const { id } = req.params
        const book = booksModel.getBookById(id)
        if (!book) return res.status(404).json({ message: 'Livro não encontrado!' })
        res.json(book)
    },
    // POST /api/books
    save: (req, res) => {
        const { title, author, quantityAVailable } = req.body 

        if (typeof title !== 'string' || typeof author !== 'string' || typeof quantityAVailable !== 'number') {
            return res.status(400).json({ message: 'Campo inválidos.' })
        }

        const newBook = booksModel.createBook(title, author, quantityAVailable)
        res.status(201).json(newBook)
    },
    // PUT /api/books/:id
    update: (req, res) => {
        const { id } = req.params
        const { title, author, quantityAVailable } = req.body
        const fieldsTpUpdate = {}

        if (title) fieldsTpUpdate.title = title
        if (author) fieldsTpUpdate.author = author
        if (quantityAVailable) fieldsTpUpdate.quantityAVailable = quantityAVailable

        const updateBook = booksModel.updateBook(id, fieldsTpUpdate)
        return res.status(200).json(updateBook)
    },
    // DELETE /api/books/:id 
    delete: (req, res) => {
        const { id } = req.params
        const deletedBook = booksModel.deleteBook(id)
        res.status(200).json(deletedBook)
    }
}