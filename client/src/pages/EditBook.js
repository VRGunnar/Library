import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { BookForm } from "../components/BookForm";

export const EditBook = () => {
  const navigate = useNavigate();
  const [book, setBook] = useState();
  const id = useParams().id;

  useEffect(() => {
    const fetchBook = async () => {
      const result = await Axios.get(`http://localhost:3001/book/${id}`);
      setBook(result.data);
    };
    fetchBook();
  }, []);

  const onSubmit = async (data) => {
    alert(JSON.stringify(data));
    const title = data["title"];
    const author = data["author"];
    const rating = data["rating"];
    const language = data["language"];
    const genre = data["genre"];
    const description = data["description"];
    const publisher = data["publisher"];
    const publication_date = data["publication_date"];
    const ISBN13 = data["ISBN13"];
    const number_of_pages = data["number_of_pages"];
    const excluded = data["excluded"];

    await Axios.post(`http://localhost:3001/book/${id}/edit`, {
      title: title,
      author: author,
      rating: rating,
      language: language,
      genre: genre,
      description: description,
      publisher: publisher,
      publication_date: publication_date,
      ISBN13: ISBN13,
      number_of_pages: number_of_pages,
      library: book.library,
      excluded: excluded,
    });

    navigate(`/`);
  };

  return book ? (
    <div className="container">
      <div className="my-3">
        <h3>Edit Book</h3>
        <BookForm book={book} onSubmit={onSubmit} />
      </div>
    </div>
  ) : (
    <div>Loading book...</div>
  );
};
