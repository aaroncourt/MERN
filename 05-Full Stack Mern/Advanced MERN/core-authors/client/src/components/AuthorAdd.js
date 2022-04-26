import React, { useState } from 'react';
import axios from 'axios';
import AuthorForm from './AuthorForm'
import {Link, useNavigate} from 'react-router-dom'


const AuthorAdd = (props) => {
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();

    const createAuthor = (formParam) => {
        axios.post('http://localhost:8000/authors/new', formParam)
            .then(res => {
                console.log(res.data);
                navigate('/authors')
            })
            .catch(err => {
                const errorResponse = err.response.data.errors;
                const errArray = [];
                for (const key of Object.keys(errorResponse)) {
                    errArray.push(errorResponse[key].message)
                };
                setErrors(errArray);
            })
        
        
    };
    

    return(
        <div>
            <h2>Favorite Authors</h2>
            <Link to={'/authors'}>Home</Link>
            <p>Add a new author:</p>
            <AuthorForm onSubmitProp={createAuthor} initialAuthorName='' />
            {errors.map( (err, index) => <p style={{color: 'red'}} key={index}>{err}</p>)}
        </div>
    )
}

export default AuthorAdd;