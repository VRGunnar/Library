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
    },
    number_of_pages: {
        type: String
    },
    library :{
        type: mongoose.Schema.Types.ObjectId, ref:'Library'
    }
},
{
    timestamps: true
});

const Book = mongoose.model("Books", BookSchema);
module.exports = Book;