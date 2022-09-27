import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import { useParams} from 'react-router-dom';

export const ExcludedBook = () => {

  const [bookList, setBookList] = useState([]);
  const id = useParams().id;
  useEffect(() => {
    Axios.get(`http://localhost:3001/libraries/${id}/books_excluded`).then((res) => {
        setBookList(res.data);
    });
  }, []);
  
  return (
    <div className="container">
      <div className="mt-3">
        <h3>Books</h3>
        <div className="container my-3">
          <div className="row justify-content-between g-3">
            {bookList.length <= 0 &&
              <h5 className='m-0 p-0'>
                There are currently no excluded books available.
              </h5>
            }
            {bookList.map((book, key) => (
              <div key={key} className="col-lg-3 col-md-6 border d-flex flex-column justify-content-center p-2 position-relative">
                  <h5 className='mb-3'>{book.title}</h5>
                  <p className='blockquote-footer font-weight-light'>{book.author}</p>
                  <p>{book.description}</p>
                  <p>Published on {book.publication_date} by {book.publisher}.</p>
                  <div className='d-flex flex-col font-weight-light justify-content-between'>
                    <p>{book.language}</p>
                    <p>{book.genre}</p>
                    <p>{book.rating}/5</p>
                  </div>
                  <div className='d-flex flex-col font-weight-light justify-content-between'>
                    <p>ISBN13: {book.ISBN13}</p>
                    <p>{book.number_of_pages}</p>
                  </div>
                  <Link className='position-absolute top-0 end-0 p-2 text-black text-decoration-none' to={`/book/${book._id}/edit`}>&#x270E;</Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
