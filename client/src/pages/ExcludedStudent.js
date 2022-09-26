import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import { useParams} from 'react-router-dom';

export const ExcludedStudent = () => {

  const [studentList, setStudentList] = useState([]);
  const id = useParams().id;
  useEffect(() => {
    Axios.get(`http://localhost:3001/libraries/${id}/excluded_students`).then((res) => {
        setStudentList(res.data);
    });
  }, []);
  
  return (
    <div className="container">
      <div className="mt-3">
        <h3>Students</h3>
        <div className="container mt-5">
          <div className="row justify-content-evenly g-3">
            {studentList.length <= 0 &&
              <h5 className='m-0 p-0'>
                There are currently no excluded students available.
              </h5>
            }
            {studentList.map((student, key) => (
              <div key={key} className="col-lg-3 col-md-6 border border-danger d-flex flex-column justify-content-center p-2 position-relative">
                  <h5 className='mb-3'>{student.first_name} {student.last_name} </h5>
                  <div className='d-flex flex-col blockquote-footer font-weight-light'>
                    <p className='m-0'>{(student.birthdate).slice(0, -14)}</p>
                    <p className='m-0'>&#x260E; {student.phonenumber}</p>
                  </div>
                  <h6>{student.study_subject}</h6>
                  <p className="m-0">{student.street}, {student.city} {student.postal_code}, {student.country}</p>
                  <Link className='position-absolute top-0 end-0 p-2 text-black text-decoration-none' to={`/student/${student._id}/edit`}>&#x270E;</Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
