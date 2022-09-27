import React from "react";
import { useForm } from "react-hook-form";

export const LoanForm = ({ students, books, onSubmit }) => {
  const { register, handleSubmit } = useForm({
    defaultValues: {},
  });
  const submitHandler = handleSubmit((data) => {
    onSubmit(data);
  });

  return (
    <form onSubmit={submitHandler}>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <label className="input-group-text" htmlFor="book">
            Book
          </label>
        </div>
        <select
          className="custom-select"
          id="book"
          {...register("book", { required: "Required" })}
        >
          {books.map((book, key) => (
            <option key={key} value={book._id}>
              {book.title}
            </option>
          ))}
        </select>
      </div>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <label className="input-group-text" htmlFor="student">
            Student
          </label>
        </div>
        <select
          className="custom-select"
          id="student"
          {...register("student", { required: "Required" })}
        >
          {students.map((student, key) => (
            <option key={key} value={student._id}>
              {student.first_name} {student.last_name}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group mt-3">
        <button type="submit" className="btn btn-primary">
          Save Loan
        </button>
      </div>
    </form>
  );
};
