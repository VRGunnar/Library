const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true,
    },
    birthdate: {
        type: Date,
        required: true,
    },
    study_subject: {
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
    library :{
        type: mongoose.Schema.Types.ObjectId, ref:'Library'
    }
},
{
    timestamps: true
});

const Student = mongoose.model("Books", StudentSchema);
module.exports = Student;