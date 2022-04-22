import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';


const ProductForm = (props) => {
    const {onSubmitProp, product} = props;
    const [title, setTitle] = useState(product.title);
    const [price, setPrice] = useState(product.price);
    const [description, setDescription] = useState(product.description);

    const navigate = useNavigate();

    const formHandler = (e) => {
        e.preventDefault();
        onSubmitProp({title, price, description})
        setTitle('');
        setPrice('');
        setDescription('');
        navigate('/api/products')
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