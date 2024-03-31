import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import './Order.css'
import { Link, useLoaderData } from 'react-router-dom';
import ReveiwItem from '../ReviewItem/ReveiwItem'; 
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCreditCard } from '@fortawesome/free-solid-svg-icons'

const Order = () => {
    const savedCart = useLoaderData()
    const [cart, setCart] =useState(savedCart);

    const handleRemoveFromCart = (id) =>{
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
        removeFromDb(id)
    }
    const handleClearCart = () =>{
        setCart([]);
        deleteShoppingCart()

    }
     
    return (
        <div className='shop-container'>
            <div className='review-container'>
                {
                    cart.map(product => <ReveiwItem
                    key={product.id}
                    product = {product}
                    handleRemoveFromCart = {handleRemoveFromCart}
                    ></ReveiwItem>)
                }
            </div>
            <div className='cart-container'>
                <Cart
                handleClearCart={handleClearCart}
                cart = {cart}>
                    <Link className='link-proceed' to='/checkout'><button className='btn-order'>
                        <span>Proceed Checkout</span>
                        <FontAwesomeIcon icon={faCreditCard} />
                        </button></Link>
                </Cart>
            </div>
        </div>
    );
};

export default Order;