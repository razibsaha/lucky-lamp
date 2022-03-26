import React from 'react';
import './Products.css'

const Products = (props) => {
    const {id,img,name,price} = props.product;
    return (
        <div className='product'>
            <div className='img'>
                <img src={img} alt={name} />
            </div>
            <div className='details'>
                <p>ID : {id} </p>
                <p className='name'> {name} </p>
                <p className='price'>$ {price}  </p>
            </div>
            <div className="btn">
                <button>Add to cart</button>
            </div>
            
        </div>
    );
};

export default Products;