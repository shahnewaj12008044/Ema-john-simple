import React from 'react';
import Cart from '../Cart/Cart';
import './Order.css'
import { useLoaderData } from 'react-router-dom';
import ReveiwItem from '../ReviewItem/ReveiwItem';

const Order = () => {
    const cart = useLoaderData()
    return (
        <div className='shop-container'>
            <div className='review-container'>
                {
                    cart.map(product => <ReveiwItem
                    key={product.id}
                    product = {product}
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