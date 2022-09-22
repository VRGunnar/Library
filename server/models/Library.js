const mongoose = require('mongoose');

const LibrarySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    postal_code: {
        type: String,
        required: true,
    },
    street: {
        type: String,
        required: true,
    },
    phonenumber: {
        type: String,
        required: true,
    },
    students: [
        {type: mongoose.Schema.Types.ObjectId, ref:'Student'}
    ],
    books: [
        {type: mongoose.Schema.Types.ObjectId, ref:'Book'}
    ]
},
{
    timestamps: true
});

const Library = mongoose.model("Libraries", LibrarySchema);
module.exports = Library;