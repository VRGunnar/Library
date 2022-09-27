import React from "react";
import { useForm } from "react-hook-form";

export const BookForm = ({ book, onSubmit }) => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      title: book ? book.title : "",
      author: book ? book.author : "",
      rating: book ? book.rating : "",
      language: book ? book.language : "",
      genre: book ? book.genre : "",
      description: book ? book.description : "",
      publisher: book ? book.publisher : "",
      publication_date: book ? book.publication_date : "",
      ISBN13: book ? book.ISBN13 : "",
      number_of_pages: book ? book.number_of_pages : "",
      excluded: book ? book.excluded : "",
    },
  });
  const submitHandler = handleSubmit((data) => {
    onSubmit(data);
  });

  return (
    <form onSubmit={submitHandler}>
      <div className="form-group">
        <label htmlFor="title">Title:</label>
        <input
          className="form-control"
          {...register("title", { required: "Required" })}
          type="text"
          name="title"
          id="title"
        />
      </div>
      <div className="form-group mt-2">
        <label htmlFor="author">Author:</label>
        <input
          className="form-control"
          {...register("author", { required: "Required" })}
          type="text"
          name="author"
          id="author"
        />
      </div>
      <div className="form-group mt-2">
        <label htmlFor="rating">Rating:</label>
        <input
          className="form-control"
          {...register("rating", { required: "Required" })}
          type="text"
          name="rating"
          id="rating"
        />
      </div>
      <div className="form-group mt-2">
        <label htmlFor="language">Language:</label>
        <input
          className="form-control"
          {...register("language", { required: "Required" })}
          type="text"
          name="language"
          id="language"
        />
      </div>
      <div className="form-group mt-2">
        <label htmlFor="genre">Genre:</label>
        <input
          className="form-control"
          {...register("genre", { required: "Required" })}
          type="text"
          name="genre"
          id="genre"
        />
      </div>
      <div className="form-group mt-2">
        <label htmlFor="description">Description:</label>
        <input
          className="form-control"
          {...register("description", { required: "Required" })}
          type="text"
          name="description"
          id="description"
        />
      </div>
      <div className="form-group mt-2">
        <label htmlFor="publisher">Publisher:</label>
        <input
          className="form-control"
          {...register("publisher", { required: "Required" })}
          type="text"
          name="publisher"
          id="publisher"
        />
      </div>
      <div className="form-group mt-2">
        <label htmlFor="publication_date">Publication_date:</label>
        <input
          className="form-control"
          {...register("publication_date", { required: "Required" })}
          type="date"
          name="publication_date"
          id="publication_date"
        />
      </div>
      <div className="form-group mt-2">
        <label htmlFor="ISBN13">ISBN13:</label>
        <input
          className="form-control"
          {...register("ISBN13", { required: "Required" })}
          type="text"
          name="ISBN13"
          id="ISBN13"
        />
      </div>
      <div className="form-group mt-2">
        <label htmlFor="number_of_pages">Number of pages:</label>
        <input
          className="form-control"
          {...register("number_of_pages", { required: "Required" })}
          type="text"
          name="number_of_pages"
          id="number_of_pages"
        />
      </div>
      <div className="form-group mt-2 w-2 h-2">
        <label htmlFor="excluded">Exclude this book:</label>
        <div className="input-group-text">
          <input
            type="checkbox"
            {...register("excluded")}
            value="true"
            name="excluded"
            id="excluded"
          />
        </div>
      </div>
      <div className="form-group mt-3">
        <button type="submit" className="btn btn-primary">
          Save Book
        </button>
      </div>
    </form>
  );
};
