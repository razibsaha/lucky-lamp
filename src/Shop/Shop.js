import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';
import './Shop.css'

const Shop = () => {
    const [products,setProduct] = useState([]);

    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProduct(data))
    },[])

    
    return (
        <div>
            <h1>Choose your lamps</h1>
        <div className='shop-container'>
            
            <div className="product-container">
                
                {
                products.map(product => <Products
                product = {product}
                ></Products>
                    )
                }

            </div>
            <div className="cart-container">
                <h2>Order Summary</h2>
            </div>
        </div>
        </div>
    );
};

export default Shop;