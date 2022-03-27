import React from 'react';

import './Selected.css'

 

const Selected = ({ product, choseForYou }) => {

 

    return (

 

        <div className='select-item'>

            <img src={product.img} alt="" srcset="" />

            <div className='details'>

                <p> <strong>{product.name} </strong></p>

                <p>$ {product.price}</p></div>

        </div>




    );

};

 

export default Selected;