import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

export const LibraryList = () => {

  const [libraryList, setLibraryList] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:3001/').then((response) => {
      setLibraryList(response.data);
    });
  }, []);

  const deleteLibrary = (id) => {
    Axios.delete(`http://localhost:3001/delete/${id}`);
  };

  return (
    <div className="container">
      <div className="mt-3">
        <h3>What library are you looking for?</h3>
        <div className="container mt-5">
          <div className="row justify-content-between g-3">
            {libraryList.map((library, key) => (
              <div key={key} className="col-lg-3 col-md-6 border d-flex flex-column justify-content-center p-2 position-relative">
                  <h5>{library.name}</h5>
                  <p className="m-0">{library.street}, {library.city} {library.postal_code}, {library.country}</p>
                  <Link className='btn btn-secondary mt-3' to={`/edit/${library._id}`}>Edit</Link>
                  <button onClick={() => deleteLibrary(library._id)} className='position-absolute top-0 end-0'>&#10005;</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
