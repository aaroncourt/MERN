import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useNavigate, useParams} from "react-router-dom";

const ProductUpdate = (props) => {
    const {id} = useParams();
    console.log(`This is the id: ${id}`)
    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');

    useEffect( () => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => {
                console.log(res)
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
            .catch(err => console.log(err))
    }, []);

    const updateProduct = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/products/' + id, {
            title,
            price,
            description
        })
            .then(res => {
                console.log(res);
                navigate('/api/products');
            } )
            .catch(err => console.log(err))
    };

    return(
        <div>
            <h2>Update a Product</h2>
            <form onSubmit={updateProduct}>
                <div>
                    <label>Title: </label>
                    <input type='text' name='title' value={title} onChange={ (e) => {setTitle(e.target.value) }} />
                </div>

                <div>
                    <label>Price: </label>
                    <input type='text' name='price' value={price} onChange={ (e) => {setPrice(e.target.value) }} />
                </div>

                <div>
                    <label>Description: </label>
                    <input type='text' name='description' value={description} onChange={ (e) => {setDescription(e.target.value) }} />
                </div>

                <input type='submit'/>
            </form>
        </div>
    );
}

export default ProductUpdate;