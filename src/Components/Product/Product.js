import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Product.css'


const Product = ({handleAddToCart,product}) => {
    const {id,img,name,price} = product;
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
            
            <button 
             className='bttn' 
             onClick={() => {handleAddToCart(product)}}> Add to Cart <FontAwesomeIcon icon={faShoppingCart} />
            </button> 
            
            </div>
            
        </div>
        </div>
    );
};

export default Product;