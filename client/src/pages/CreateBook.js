import React, { useState, useEffect} from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useParams} from 'react-router-dom';
import { BookForm } from '../components/BookForm';

export const CreateBook = () => {

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

        const title = data['title'];
        const author = data['author'];
        const rating = data['rating'];
        const language = data['language'];
        const genre = data['genre'];
        const description = data['description'];
        const publisher = data['publisher'];
        const publication_date = data['publication_date'];
        const ISBN13 = data['ISBN13'];
        const number_of_pages = data['number_of_pages'];
        const library_name = library.name;
        
        await Axios.post('http://localhost:3001/book/create', { title: title, author: author, rating: rating, language: language, genre: genre, description: description, publisher: publisher, publication_date: publication_date, ISBN13: ISBN13, number_of_pages: number_of_pages, library: library_name });
        
        navigate(`/`);
    };

    return (
        <div className='container'>
            <div className='my-3'>
                <h3>Create Book</h3>
                <BookForm onSubmit={onSubmit}/> 
            </div>
        </div>
    )
}