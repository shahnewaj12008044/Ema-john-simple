import React from 'react';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const Cart = ({cart, handleClearCart, children}) => {
//     const {cart} = props;
//    const handleClearCart = props.handleClearCart;
    // console.log(cart)
    // const total = cart.reduce((previous, current)=> previous+ current.price ,0);
    let total = 0;
    let totalShipping = 0;
    for(const product of cart){
        total = total + product.price;
        totalShipping = totalShipping + product.shipping;
    }
    const tax = total * 7/100;
    const grandTotal = total + totalShipping + tax;

    // console.log(total)
    return (
        <div className='cart'>
            <h2>Order summary</h2>
            <h4>selected Items:{cart.length}</h4>
            <p>Total Price:${total}</p>
            <p>Total Shipping Charge:${totalShipping}</p>
            <p>Tax:${tax.toFixed(2)}</p>
            <h6>Grand Total:${grandTotal.toFixed(2)}</h6>
            <button onClick={handleClearCart} className='btn-clear-cart'>
                <span>Clear Cart</span>
            <FontAwesomeIcon icon={faTrashAlt} />
            </button>
            {children}
        </div>
    );
};

export default Cart;