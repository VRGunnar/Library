const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const LibraryModel = require("./models/Library");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://gunnarvr:MSvTwUZlLaGDJ9W3@library.b43egbt.mongodb.net/libraries?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
  }
);

app.get("/", async (req, res) => {
  LibraryModel.find({}, (err, libraries) => {
    if (err) {
      res.send(err);
    } else {
      res.send(libraries);
    }
  });
});

app.post("/create", (req, res) => {
  const library = new LibraryModel(req.body);
  library
    .save()
    .then((library) => {
      res.json(library);
    })
    .catch((err) => {
      res.status(500).send(err.message);
    });
});

app.get("/:id", (req, res) => {
  const id = req.params.id;
  LibraryModel.findById(id, (err, library) => {
    res.json(library);
  });
});

app.post("/:id", (req, res) => {
  const id = req.params.id;
  LibraryModel.findById(id, (err, library) => {
    if (!library) {
      res.status(404).send("Library not found.");
    } else {
      library.name = req.body.name;
      library.country = req.body.country;
      library.city = req.body.city;
      library.postal_code = req.body.postal_code;
      library.street = req.body.street;
      library.phonenumber = req.body.phonenumber;

      library
        .save()
        .then((library) => {
          res.json(library);
        })
        .catch((err) => res.status(500).send(err.message));
    }
  });
});

app.delete("/delete/:id", (req, res) => {
    const id = req.params.id;
    LibraryModel.findByIdAndRemove(id).exec();
});

app.listen(3001, () => {
  console.log("Server running on port 3001...");
});
