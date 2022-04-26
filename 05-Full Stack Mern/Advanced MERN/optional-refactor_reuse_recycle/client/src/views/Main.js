import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';

const Main = () => {

    const [products, setProducts] = useState([]);
    const product = {
        title: '',
        price: '',
        description: '',
    }

    useEffect( () => {
        axios.get('http://localhost:8000/api/products')
            .then(res => {
                console.log(res.data)
                setProducts(res.data);
            })
            .catch(err => {
                console.log(err)
            });
    }, []);

    const removeFromDom = productId => {
        axios.delete('http://localhost:8000/api/products' + productId)
            .then(res => {
                console.log(res);
                console.log(res.data)
                setProducts(products.filter(product => product._id !== productId))
            })
            .catch(err => console.log(err))
        
    }

    const createProduct = productParm => {

        axios.post('http://localhost:8000/api/products', productParm)
            .then(res => {
                console.log(res);
                console.log(res.data);
                setProducts([...products, res.data]);
            })
            .catch(err => console.log(err));
        
    };

    return(
        <div>
            <ProductForm onSubmitProp={createProduct} product={product} />
            <hr/>
            <ProductList products={products} removeFromDom={removeFromDom} />
        </div>
    );
};

export default Main;