import React from 'react'
import { useState } from 'react';
import RandomItem from '../RandomItem/RandomItem';
import Selected from '../Selected/Selected';
import './Cart.css'


const Cart = ({cart, chooseAgain}) => {
    
    const [randomItem, setRandomItem] = useState([])

    let random = [];
    const choseForYou = (cart) => {
        random = cart[Math.floor(Math.random() * cart.length)];
        setRandomItem(random);
    }

    
return (

    <div>

        <h1 className='cart-tittle'>You Selected</h1>
        <div className='cart'>
            
            {cart.map(product => 
            <Selected 
            product={product}   
            ></Selected>)}

            <button className='lucky' onClick={() => choseForYou(cart)}>Your Lucky Lamp</button> 
            <RandomItem
            randomItem={randomItem}
            setRandomItem={setRandomItem}></RandomItem>

            <button className='clear-cart' 
            onClick={() => {
                chooseAgain(setRandomItem(0))
                }}>Choose Again</button> 
            </div>

        </div>



);

};



export default Cart;