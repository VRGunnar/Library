const mongoose = require('mongoose');

const ReferenceSchema = new mongoose.Schema({
    student_id: {
        type: String,
        required: true,
    },
    book_id: {
        type: String,
        required: true,
    },
    reference_code: {
        type: String,
        required: true,
    },
    due_date: {
        type: Date,
        required: true
    }
},
{
    timestamps: true
});

const Reference = mongoose.model("Reference", ReferenceSchema);
module.exports = Reference;