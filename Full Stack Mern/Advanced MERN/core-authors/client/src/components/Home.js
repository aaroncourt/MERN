import React, {useState, useEffect} from 'react';
import axios from 'axios';
import AuthorList from './AuthorList';

const Home = () => {
    const [authors, setAuthors] = useState([]);

    useEffect( () => {
        axios.get('http://localhost:8000/authors')
            .then(res => {
                console.log(res.data)
                setAuthors(res.data);
            })
            .catch(err => {
                console.log(err)
            });
    }, []);

    const removeFromDom = productId => {
        setAuthors(authors.filter(product => product._id !== productId))
    };

    return(
        <div>
            <AuthorList authors={authors} setAuthors={setAuthors} removeFromDom={removeFromDom}/>
        </div>
    );
};

export default Home;