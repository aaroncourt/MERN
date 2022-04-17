import React, {useEffect, useState} from "react";
import axios from 'axios';
import {useParams, useNavigate, Link} from 'react-router-dom'
import AuthorForm from "./AuthorForm";

const AuthorUpdate = () => {
    const {id} = useParams();
    const navigate = useNavigate();

    const [author, setAuthor] = useState({});
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState([]);

    useEffect( () => {
        axios.get('http://localhost:8000/authors/' + id)
        .then(res => {
                setAuthor(res.data);
                {author && setLoaded(true)}
        })
        .catch(err => console.log(err))
    }, []);

    const updateAuthor = (formParam) => {
        axios.put('http://localhost:8000/authors/edit/' + id, formParam)
            .then(res => {
                console.log(res);
                navigate('/authors')
            } )
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
            <Link to={'/authors'}>Home</Link>
            <p>Update an author:</p>
            {
                loaded && <AuthorForm onSubmitProp={updateAuthor} initialAuthorName={author.authorName} />
            }
            {errors.map( (err, index) => <p style={{color: 'red'}} key={index}>{err}</p>)}
        </div>
    )
};

export default AuthorUpdate