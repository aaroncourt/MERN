import React, {useState, useEffect} from 'react';
import {useNavigate, Link} from 'react-router-dom';
import axios from 'axios';

const AuthorList = (props) => {
    const navigate = useNavigate();
    const {removeFromDom, authors, setAuthors} = props;

    const deleteAuthor = (authorId) => {
        axios.delete('http://localhost:8000/authors/' + authorId)
            .then(res => {removeFromDom(authorId)})
            .catch(err => console.log(err))
    };

    return(
        <div>
            <h2>Favorite Authors</h2>

            <Link to={'/authors/new'}>Add an author</Link>
            <p>We have quotes by:</p>
            <table>
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Actions Available</th>
                    </tr>
                </thead>
                <tbody>
                {
                    authors.map( (author, index) => {
                        return(
                            <tr key={index}>
                                <td >{author.authorName}</td>
                                <td style={{display: 'flex', justifyContent: 'space-evenly'}}>
                                    <button onClick={ (e) => {navigate(`/authors/edit/${author._id}`)}}>Edit</button>

                                    <button onClick={ (e) => {deleteAuthor(author._id)}}>Delete</button>
                                </td>
                            </tr>
                        );
                    })
                }
                </tbody>
            </table>
        </div>
    );
};

export default AuthorList