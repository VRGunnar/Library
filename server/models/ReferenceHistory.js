const mongoose = require('mongoose');

const ReferenceHistorySchema = new mongoose.Schema({
    student_id: {
        type: String,
        required: true,
    },
    book_id: {
        type: String,
        required: true,
    },
    library_id: {
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

const ReferenceHistory = mongoose.model("ReferenceHistory", ReferenceHistorySchema);
module.exports = ReferenceHistory;