import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useNavigate, useParams} from "react-router-dom";
import ProductForm from './ProductForm';

const ProductUpdate = (props) => {
    const {id} = useParams();
    const navigate = useNavigate();

    const [product, setProduct] = useState({});
    const [loaded, setLoaded] = useState(false);

    useEffect( () => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => {
                console.log(res.data)
                setProduct(res.data)
                {product && setLoaded(true);}
            })
            .catch(err => console.log(err))
            
        }, []);

    const updateProduct = (productParm) => {
        axios.put('http://localhost:8000/api/products/' + id, productParm)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    };
    console.log(loaded)
    console.log(product.price)

    return(
        <div>
            <h2>Update a Product</h2>
                {
                    loaded && <ProductForm onSubmitProp={updateProduct} initialTitle={product.title} initialPrice={product.price} initialDescription={product.initialDescription} />        
                }
        </div>
    );
}

export default ProductUpdate;