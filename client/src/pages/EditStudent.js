import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { StudentForm } from "../components/StudentForm";
import { useNavigate } from "react-router-dom";
import Axios from "axios";

export const EditStudent = () => {
  const [student, setStudent] = useState();
  const navigate = useNavigate();
  const id = useParams().id;

  useEffect(() => {
    const fetchStudent = async () => {
      const result = await Axios.get(`http://localhost:3001/student/${id}`);
      setStudent(result.data);
    };
    fetchStudent();
  }, []);

  const onSubmit = async (data) => {
    alert(JSON.stringify(data));
    const first_name = data["first_name"];
    const last_name = data["last_name"];
    const birthdate = data["birthdate"];
    const study_subject = data["study_subject"];
    const country = data["country"];
    const city = data["city"];
    const postal_code = data["postal_code"];
    const street = data["street"];
    const phonenumber = data["phonenumber"];
    const excluded = data["excluded"];

    await Axios.post(`http://localhost:3001/student/${id}/edit`, {
      first_name: first_name,
      last_name: last_name,
      birthdate: birthdate,
      study_subject: study_subject,
      country: country,
      city: city,
      postal_code: postal_code,
      street: street,
      phonenumber: phonenumber,
      library: student.library,
      excluded: excluded,
    });

    navigate("/");
  };

  return student ? (
    <div className="container">
      <div className="mt-3">
        <h3>Edit Student</h3>
        <StudentForm student={student} onSubmit={onSubmit} />
      </div>
    </div>
  ) : (
    <div>Loading student...</div>
  );
};
