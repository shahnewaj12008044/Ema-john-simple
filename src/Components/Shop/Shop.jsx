import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../product/Product';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])
    useEffect(()=>{
        fetch('products.json')
         .then(res => res.json())
          .then(data => setProducts(data))
    },[])
    const handleAddToCart = (product) =>{
         const newCart = [...cart,product]
        setCart(newCart)
    }
    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    products.map(product => <Product
                         key = {product.id}
                         product = {product}
                         handleAddToCart = {handleAddToCart}
                    
                    ></Product>)
                    // products.map(product => console.log(product))
                }
            </div>
            <div className='cart-container'>
                <h2>Order summary</h2>
                <h4>selected Items:{cart.length}</h4>
            </div>
        </div>
    );
};

export default Shop;