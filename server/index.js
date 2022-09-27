const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const LibraryModel = require("./models/Library");
const StudentModel = require("./models/Student");
const BookModel = require("./models/Book");
const ReferenceModel = require("./models/Reference");
const referralCodes = require("referral-codes");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://gunnarvr:MSvTwUZlLaGDJ9W3@library.b43egbt.mongodb.net/libraries?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
  }
);

//Library routes
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

//Student routes
app.get("/libraries/:id/students", (req, res) => {
  const id = req.params.id;
  let library_name = "";
  LibraryModel.findById(id, (err, library) => {
    library_name = library.name;
    StudentModel.find(
      { library: library_name, excluded: false },
      (err, students) => {
        if (err) {
          res.send(err);
        } else {
          res.send(students);
        }
      }
    );
  });
});

app.get("/libraries/:id/excluded_students", (req, res) => {
  const id = req.params.id;
  let library_name = "";
  LibraryModel.findById(id, (err, library) => {
    library_name = library.name;
    StudentModel.find(
      { library: library_name, excluded: true },
      (err, students) => {
        if (err) {
          res.send(err);
        } else {
          res.send(students);
        }
      }
    );
  });
});

app.get("/student/:id", (req, res) => {
  const id = req.params.id;
  StudentModel.findById(id, (err, student) => {
    res.json(student);
  });
});

app.post("/student/create", (req, res) => {
  const student = new StudentModel(req.body);
  student
    .save()
    .then((student) => {
      res.json(student);
    })
    .catch((err) => {
      res.status(500).send(err.message);
    });
});

app.post("/student/:id/edit", (req, res) => {
  const id = req.params.id;
  StudentModel.findById(id, (err, student) => {
    if (!student) {
      res.status(404).send("Student not found.");
    } else {
      console.log(res);
      student.first_name = req.body.first_name;
      student.last_name = req.body.last_name;
      student.birthdate = req.body.birthdate;
      student.study_subject = req.body.study_subject;
      student.country = req.body.country;
      student.city = req.body.city;
      student.postal_code = req.body.postal_code;
      student.street = req.body.street;
      student.phonenumber = req.body.phonenumber;
      student.library = req.body.library;
      student.excluded = req.body.excluded;

      student
        .save()
        .then((student) => {
          res.json(student);
        })
        .catch((err) => res.status(500).send(err.message));
    }
  });
});

//Book routes
app.get("/libraries/:id/books", (req, res) => {
  const id = req.params.id;
  let library_name = "";
  LibraryModel.findById(id, (err, library) => {
    library_name = library.name;
    BookModel.find({ library: library_name, excluded: false }, (err, books) => {
      if (err) {
        res.send(err);
      } else {
        res.send(books);
      }
    });
  });
});

app.get("/libraries/:id/books_excluded", (req, res) => {
  const id = req.params.id;
  let library_name = "";
  LibraryModel.findById(id, (err, library) => {
    library_name = library.name;
    BookModel.find({ library: library_name, excluded: true }, (err, books) => {
      if (err) {
        res.send(err);
      } else {
        res.send(books);
      }
    });
  });
});

app.get("/book/:id", (req, res) => {
  const id = req.params.id;
  BookModel.findById(id, (err, book) => {
    res.json(book);
  });
});

app.post("/book/create", (req, res) => {
  const book = new BookModel(req.body);
  book
    .save()
    .then((book) => {
      res.json(book);
    })
    .catch((err) => {
      res.status(500).send(err.message);
    });
});

app.post("/book/:id/edit", (req, res) => {
  const id = req.params.id;
  BookModel.findById(id, (err, book) => {
    if (!book) {
      res.status(404).send("Book not found.");
    } else {
      book.title = req.body.title;
      book.author = req.body.author;
      book.rating = req.body.rating;
      book.language = req.body.language;
      book.genre = req.body.genre;
      book.description = req.body.description;
      book.publisher = req.body.publisher;
      book.publication_date = req.body.publication_date;
      book.ISBN13 = req.body.ISBN13;
      book.number_of_pages = req.body.number_of_pages;
      book.library = req.body.library;
      book.excluded = req.body.excluded;

      book
        .save()
        .then((book) => {
          res.json(book);
        })
        .catch((err) => res.status(500).send(err.message));
    }
  });
});

//reference
app.post("/create/reference", (req, res) => {
  const code = referralCodes.generate({
    length: 10,
    charset: referralCodes.charset('alphanumeric'),
  });
  let date = new Date(new Date().setDate(new Date().getDate() + 30));
  let date_ob = new Date(date);
  let day = date_ob.getDate();
  let month = date_ob.getMonth() + 1;
  let year = date_ob.getFullYear();
  due_date = (year + "-" + month + "-" + day);
  const reference = new ReferenceModel(req.body);
  reference.reference_code = code[0];
  reference.due_date = due_date;
  reference
    .save()
    .then((reference) => {
      res.json(reference);
    })
    .catch((err) => {
      res.status(500).send(err.message);
    });
});

app.listen(3001, () => {
  console.log("Server running on port 3001...");
});
