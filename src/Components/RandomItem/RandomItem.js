import React from 'react';
import './RandomItem.css'

const RandomItem = ({randomItem}) => {

    

    return (

        <div className='random-item'>

            <div>
            <img src={randomItem.img} alt="" />
            </div>
            
            <div>
            <h1>{randomItem.name}</h1>
            </div>
            
        </div>

    );

};

 

export default RandomItem;