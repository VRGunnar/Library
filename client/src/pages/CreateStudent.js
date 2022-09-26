import React, { useState, useEffect} from 'react';
import { StudentForm } from '../components/StudentForm';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useParams} from 'react-router-dom';

export const CreateStudent = () => {

    const navigate = useNavigate();
    const [library, setLibrary] = useState([]);
    const id = useParams().id;

    useEffect(() => {
        Axios.get(`http://localhost:3001/${id}`).then((response) => {
        setLibrary(response.data);
        });
    }, []);

    const onSubmit = async (data) =>  {
        alert(JSON.stringify(data));

        const first_name = data['first_name'];
        const last_name = data['last_name'];
        const birthdate = data['birthdate'];
        const study_subject = data['study_subject'];
        const country = data['country'];
        const city = data['city'];
        const postal_code = data['postal_code'];
        const street = data['street'];
        const phonenumber = data['phonenumber'];
        const library_name = library.name;
        
        await Axios.post('http://localhost:3001/student/create', { first_name: first_name, last_name: last_name, birthdate: birthdate, study_subject: study_subject, country: country, city: city, postal_code: postal_code, street: street, phonenumber: phonenumber, library: library_name });
        
        navigate(`/`);
    };

    return (
        <div className='container'>
            <div className='mt-3'>
                <h3>Create Student</h3>
                <StudentForm onSubmit={onSubmit}/> 
            </div>
        </div>
    )
}