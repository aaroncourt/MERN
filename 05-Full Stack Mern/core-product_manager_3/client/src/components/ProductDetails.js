import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useNavigate, useParams} from 'react-router-dom';

const ProductDetails = (props) => {
    const [product, setProduct] = useState({});
    const {id} = useParams();
    const navigate = useNavigate();

    const deleteProduct = (personId) => {
        console.log(personId)
        axios.delete('http://localhost:8000/api/products/' + personId)
            .then(res => navigate('/api/products'))
            .catch(err => console.log(err))
    };

    useEffect( () => {
        axios.get('http://localhost:8000/api/products/' + id)
        .then(res => {
            console.log(res.data);
            setProduct(res.data);
        })
        .catch(err => console.log(err));
    }, []);

    return(
        <div style={{justifyContent: 'center'}}>
            <h3>{product.title}</h3>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
            <br/>
            <button onClick={ (e) => {deleteProduct(product._id)}}>Delete Product</button>
        </div>
    );
};

export default ProductDetails;