import React from 'react';
import { LibraryForm } from './components/LibraryForm';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const CreateLibrary = () => {

    const navigate = useNavigate();

    const onSubmit = async (data) =>  {
        // alert(JSON.stringify(data));

        const name = data['name'];
        const country = data['country'];
        const city = data['city'];
        const postal_code = data['postal_code'];
        const street = data['street'];
        const phonenumber = data['phonenumber']; 
        
        await Axios.post('http://localhost:3001/create', { name: name, country: country, city: city, postal_code: postal_code, street: street, phonenumber: phonenumber });
        
        navigate("/");
    };

    return (
        <div className='container'>
            <div className='mt-3'>
                <h3>Create Library</h3>
                <LibraryForm onSubmit={onSubmit}/> 
            </div>
        </div>
    )
}