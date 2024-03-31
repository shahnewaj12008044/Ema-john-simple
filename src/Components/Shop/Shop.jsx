import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../product/Product';
import Cart from '../Cart/Cart';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])
    useEffect(()=>{
        fetch('products.json')
         .then(res => res.json())
          .then(data => setProducts(data))
    },[])

    useEffect(()=>{
        // console.log('Products',products)
        const storedCart = getShoppingCart();
        const savedCart = [];
        //step:1 get the id 
        for(const id in storedCart){
            //step 2 : get the product by using id
            const addedProduct = products.find(product => product.id === id)
            //step 3: get quantity of the product
           if(addedProduct){
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
           //step:4 add the added product to the saved cart
           savedCart.push(addedProduct)
           }
           //step:5 set the cart
           setCart(savedCart)
        }

    },[products])
    //=========solve given by chatgpt(i love her)
    // useEffect(() => {
    //     const storedCart = getShoppingCart();

    //     for (const id in storedCart) {
    //         const addedProduct = products.find(product => product.id === id);

    //         // Check if addedProduct is defined before accessing its properties
    //         if (addedProduct) {
    //             const quantity = storedCart[id];
    //             addedProduct.quantity = quantity;
    //             console.log(addedProduct);

    //             // Now you can safely access properties of addedProduct
    //             // console.log('Product Name:', addedProduct.name);
    //             // console.log('Product Price:', addedProduct.price);
    //             // ... access other properties as needed
    //         }
    //     }
    // }, [products]); 

    const handleAddToCart = (product) =>{
         const newCart = [...cart,product]
        setCart(newCart);
        addToDb(product.id);
    }
    const handleClearCart = () =>{
        setCart([]);
        deleteShoppingCart()

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
             
                <Cart 
                cart = {cart}
                handleClearCart = {handleClearCart}
                >
                    <Link className='link-proceed' to='/order'><button className='btn-order'><span>Review Order</span>
                    <FontAwesomeIcon icon={faArrowRight} /></button></Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;