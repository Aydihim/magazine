import React from 'react';
import checkout from './shopping-cart-solid.svg'

function Checkout(props) {
    return (
        <div className="checkout">
            <img src={checkout} alt=""/>
            <span className="counter">{props.database.filter(item => item.bought).length}</span>
        </div>
    );
}

export default Checkout;