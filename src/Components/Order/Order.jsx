import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import './Order.css'
import { useLoaderData } from 'react-router-dom';
import ReveiwItem from '../ReviewItem/ReveiwItem'; 
import { removeFromDb } from '../../utilities/fakedb';

const Order = () => {
    const savedCart = useLoaderData()
    const [cart, setCart] =useState(savedCart);

    const handleRemoveFromCart = (id) =>{
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
        removeFromDb(id)
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
                <Cart cart = {cart}></Cart>
            </div>
        </div>
    );
};

export default Order;