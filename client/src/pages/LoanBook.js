import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { LoanForm } from "../components/LoanForm";

export const LoanBook = () => {
  const navigate = useNavigate();
  const [books, setBooks] = useState();
  const [students, setStudents] = useState();
  const [library, setLibrary] = useState();
  const id = useParams().id;

  useEffect(() => {
    const fetchBooks = async () => {
      const result = await Axios.get(`http://localhost:3001/libraries/${id}/books`);
      setBooks(result.data);
    };
    fetchBooks();
    const fetchStudents = async () => {
        const result = await Axios.get(`http://localhost:3001/libraries/${id}/students`);
        setStudents(result.data);
      };
    fetchStudents();
    const fetchLibrary = async () => {
        const result = await Axios.get(`http://localhost:3001/${id}`);
        setLibrary(result.data);
      };
    fetchLibrary();
  }, []);

  const onSubmit = async (data) => {
    alert(JSON.stringify(data));
    const bookId = data["book"]; //id or name?
    const studentId = data["student"]; //id or name?
    const libraryId = library._id;

    await Axios.post(`http://localhost:3001/create/reference`, {
      book_id: bookId,
      student_id: studentId,
      library_id: libraryId,
      reference_code: "",
      due_date: ""
    });

    const book = await Axios.get(`http://localhost:3001/book/${bookId}`);
    
    await Axios.post(`http://localhost:3001/book/${bookId}/edit`, {
      title: book.data.title,
      author: book.data.author,
      rating: book.data.rating,
      language: book.data.language,
      genre: book.data.genre,
      description: book.data.description,
      publisher: book.data.publisher,
      publication_date: book.data.publication_date,
      ISBN13: book.data.ISBN13,
      number_of_pages: book.data.number_of_pages,
      library: book.data.library,
      excluded: true,
    });

    navigate(`/`);
  };

  return books ? students ? (
    <div className="container">
      <div className="my-3">
        <h3>Lend a book out</h3>
        <LoanForm books={books} students={students} onSubmit={onSubmit} />
      </div>
    </div>
  ) : (
    <div>Loading books...</div>
  ) : (
    <div>Loading students...</div>
  )
};
