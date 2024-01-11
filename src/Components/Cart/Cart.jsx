import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props;
    return (
        <div>
            <h4>selected Items:{cart.length}</h4>
        </div>
    );
};

export default Cart;