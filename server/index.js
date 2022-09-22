const express =  require('express');
const mongoose = require('mongoose');
const app = express();

const LibraryModel = require('./models/Library');

app.use(express.json());

mongoose.connect('mongodb+srv://gunnarvr:MSvTwUZlLaGDJ9W3@library.b43egbt.mongodb.net/libraries?retryWrites=true&w=majority', {
    useNewUrlParser: true,
});

app.get('/', async (req, res) => {
    const library = new LibraryModel({name: "Comenius University Academic Library", country: "Slovakia", city: "Bratislava", postal_code: "811 07", street: "Odborárske námestie 14", phonenumber: "02/593 574 37"});

    try {
        await library.save();
        res.send("inserted data");
    } catch(err) {
        console.log(err);
    }
});

app.listen(3001, ()=> {
    console.log('Server running on port 3001...');
});