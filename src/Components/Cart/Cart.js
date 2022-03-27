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

        <h1 className='cart-tittle'>Your Selected Item Is Here.</h1>
        
        {cart.map(product => <Selected product={product} chooseAgain={chooseAgain} choseForYou={choseForYou} ></Selected>)}
        
        <div className='cart'>

            <button onClick={() => choseForYou(cart)}>Let Us Choose For You</button> <br /> <br />

            <button onClick={() => chooseAgain(cart)}>Choose Again</button>  <RandomItem randomItem={randomItem}></RandomItem>

        </div>
        </div>



);

};



export default Cart;