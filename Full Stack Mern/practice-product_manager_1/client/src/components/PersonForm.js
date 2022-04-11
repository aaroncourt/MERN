import React, { useState } from 'react';
import axios from 'axios';

const PersonForm = () => {
    
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');

    const formHandler = (e) => {

        e.preventDefault();

        axios.post('http://localhost:8000/api/products',{
            title,
            price,
            description
        })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
            .catch(err => console.log(err));
        
        setTitle('');
        setPrice('');
        setDescription('');
    }

    return(
        <form onSubmit={formHandler}>
            <p>
                <label>Title</label><br/>
                <input type='text' onChange = {(e) => setTitle(e.target.value)} value={title}/>
            </p>
            
            <p>
                <label>Price</label><br/>
                <input type='text' onChange = {(e) => setPrice(e.target.value)} value={price}/>
            </p>

            <p>
                <label>Description</label><br/>
                <input type='text' onChange = {(e) => setDescription(e.target.value)} value={description}/>
            </p>

            <input type='submit'/>
        </form>
    );
};

export default PersonForm;