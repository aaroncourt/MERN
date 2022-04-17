import React, { useState } from 'react';
import axios from 'axios';

const ProductForm = (props) => {
    const {onSubmitProp, initialTitle, intialPrice, initialDescription} = props;
    const [title, setTitle] = useState(initialTitle);
    const [price, setPrice] = useState(intialPrice);
    const [description, setDescription] = useState(initialDescription);

    console.log(`This is the price: ${price}`)

    const formHandler = (e) => {
        e.preventDefault();
        onSubmitProp({title, price, description})
        setTitle('');
        setPrice('');
        setDescription('');
    };

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

export default ProductForm;