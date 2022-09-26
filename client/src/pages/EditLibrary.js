import React, { useState, useEffect} from 'react';
import { useParams} from 'react-router-dom';
import { LibraryForm } from '../components/LibraryForm';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';

export const EditLibrary = () => {
    const [library, setLibrary] = useState();
    const navigate = useNavigate();
    const id = useParams().id;

    useEffect(() => {
        const fetchLibrary = async () => {
            const result = await Axios.get(`http://localhost:3001/${id}`);
            console.log(result);
            setLibrary(result.data);
        }
        fetchLibrary();
    }, []);

    const onSubmit = async (data) => {
        // alert(JSON.stringify(data));

        const name = data['name'];
        const country = data['country'];
        const city = data['city'];
        const postal_code = data['postal_code'];
        const street = data['street'];
        const phonenumber = data['phonenumber']; 

        await Axios.post(`http://localhost:3001/${id}`, {
            name: name, country: country, city: city, postal_code: postal_code, street: street, phonenumber: phonenumber
        });
        
        navigate("/");
    };
     
    return library ?
     (
        <div className='container'>
            <div className='mt-3'>
                <h3>Edit Library</h3>
                <LibraryForm library={library} onSubmit={onSubmit}/> 
            </div>
        </div> 
    ) : (
        <div>Loading...</div>
    )
}