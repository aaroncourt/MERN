import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const ProductList = (props) => {
    const {removeFromDom, products, setProducts} = props;

    const deleteProduct = (productId) => {
        console.log(productId)
        axios.delete('http://localhost:8000/api/products/' + productId)
            .then(res => {removeFromDom(productId)})
            .catch(err => console.log(err))
    };

    return(
        <div>
            {
                products.map( (product, index) => {
                    return(
                        <div key={index} style={{margin: '10px'}}>
                            <Link to={`/api/products/${product._id}`}>{product.title} detail page</Link>
                            <br/>
                            <Link to={`/api/products/edit/${product._id}`}>Edit Product</Link>
                            <br/>
                            <button onClick={ (e) => {deleteProduct(product._id)}}>Delete Product</button>
                        </div>
                    );
                })
            }
        </div>
    );
};

export default ProductList