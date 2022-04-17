import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

const AuthorForm = (props) => {
    const {onSubmitProp, initialAuthorName} = props;
    const [authorName, setAuthorName] = useState(initialAuthorName);
    const navigate = useNavigate();

    const formHandler = (e) => {
        e.preventDefault();
        onSubmitProp({authorName});
    };

    return(
        <form onSubmit={formHandler}>
            <p>
            <label>Name:</label><br/>
            <input type='text' onChange = {(e) => setAuthorName(e.target.value)} value={authorName}/>
            <button onClick={ (e) => {navigate('/authors')}}>Cancel</button>
            <input type='submit'/>
            </p>
        </form>
    );
};

export default AuthorForm;