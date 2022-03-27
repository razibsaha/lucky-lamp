import React from 'react'
import { useState } from 'react';
import RandomItem from '../RandomItem/RandomItem';
import Selected from '../Selected/Selected';
import './Cart.css'


const Cart = ({cart, chooseAgain}) => {
    const [randomItem, setRandomItem] = useState([])

    const choseForYou = (cart) => {
        let random = cart[Math.floor(Math.random() * cart.length)];
        setRandomItem(random);
    }
    
return (

    <div>

        <h1 className='cart-tittle'>You Selected</h1>
        
        {cart.map(product => 
        <Selected 
        product={product} 
        chooseAgain={chooseAgain} 
        choseForYou={choseForYou} 
        ></Selected>)}
        
        <div className='cart'>
            <button className='lucky' onClick={() => choseForYou(cart)}>Your Lucky Lamp</button> <br /> <br />
            <RandomItem randomItem={randomItem}></RandomItem>
            <button className='clear-cart' onClick={() => chooseAgain(cart)}>Choose Again</button> 
            </div>
        </div>



);

};



export default Cart;