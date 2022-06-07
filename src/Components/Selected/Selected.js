import React from 'react';
import './Selected.css'

const Selected = ({ product }) => {
    
    return (
    <div className='selected-item'>

            <div className="img">
            <img src={product.img} alt={product.name} />
            </div>
            <div className='details'>
                <p> <strong>{product.name} </strong></p>
                <p>$ {product.price}</p></div>
            </div>
    );

};

export default Selected;