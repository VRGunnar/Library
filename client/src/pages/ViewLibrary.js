import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { useParams} from 'react-router-dom';
import { Link } from 'react-router-dom';

export const ViewLibrary = () => {

  const [library, setLibrary] = useState([]);
  const id = useParams().id;

  useEffect(() => {
    Axios.get(`http://localhost:3001/${id}`).then((response) => {
      setLibrary(response.data);
    });
  }, []);

  return (
    <div className="container">
      <div className="mt-3 d-flex flex-column">
        <h3 className='mb-4'>Welcome to { library.name}. </h3>
        <p className='m-0'><strong>You can find us here:</strong> { library.street }, { library.city } { library.postal_code }, { library.country }.</p>
        <p className='m-0'><strong>Don't be afraid to contact us:</strong> { library.phonenumber }.</p>
      </div>
      <div className="row text-center">
        <div className="col-lg-3 col-6">
            <Link className='btn btn-secondary mt-3 px-5' to={`students`}>View Students</Link>
        </div>
        <div className="col-lg-3 col-6">
            <Link className='btn btn-secondary mt-3 px-5' to={`students`}>View Students</Link>
        </div>
        <div className="col-lg-3 col-6">
            <Link className='btn btn-secondary mt-3 px-5' to={`books`}>View Books</Link>
        </div>
        <div className="col-lg-3 col-6">
            <Link className='btn btn-secondary mt-3 px-5' to={`students/create`}>Create a student</Link>
        </div>
        <div className="col-lg-3 col-6">
            <Link className='btn btn-secondary mt-3 px-5' to={`books/create`}>Create a book</Link>
        </div>
      </div>
    </div>
  );
};
