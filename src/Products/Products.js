import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import React from 'react';
import './Products.css'


const Products = (props) => {
    const {id,img,name,price} = props.product;
    return (
        <div>
            <div className='product'>
            <div className='img'>
                <img src={img} alt={name} />
            </div>
            <div className='details'>
                <p>ID : {id} </p>
                <p className='name'> {name} </p>
                <p className='price'>$ {price}  </p>
            </div>
            <div>
            <div>
                    <button className='btn'>Add to Cart <FontAwesomeIcon icon={faShoppingCart} />
                    </button> 
                </div>
            </div>
            
        </div>
        </div>
    );
};

export default Products;