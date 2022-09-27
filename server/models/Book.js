const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    },
    language: {
        type: String,
        required: true,
    },
    genre: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    publisher: {
        type: String,
        required: true,
    },
    publication_date: {
        type: String,
        required: true,
    },
    ISBN13: {
        type: String,
        required: false,
    },
    number_of_pages: {
        type: String,
        required: false,
    },
    library :{
        type: String,
        required: true,
    },
    student :{
        type: String,
        required: false,
    },
    excluded: {
        type: Boolean,
        required: true,
        default: false
    }
},
{
    timestamps: true
});

const Book = mongoose.model("Books", BookSchema);
module.exports = Book;