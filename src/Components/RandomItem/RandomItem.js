import React from 'react';
import './RandomItem.css'

const RandomItem = ({randomItem}) => {

    

    return (

        <div className='random-item'>

            <img src={randomItem.img} alt="" />

            <h1>{randomItem.name}</h1>

        </div>

    );

};

 

export default RandomItem;