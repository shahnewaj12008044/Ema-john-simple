import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

// import PropTypes from 'prop-types';
//-----------------
/*what happend is console.log(props.product) was showing an error naming that : product' is missing in props validationeslintreact/prop-types
it can be solved in two ways first importing Proptypes then writing the code in line 20
2nd method is easy and is just write 'react/prop-types': 'off' in eslint cofig in rules 
-----------------------*/


const Product = (props) => {
    // console.log(props.handleAddToCart)
    const {name, seller, id, ratings, quantity, price, img} = props.product;
    const handleAddToCart = props.handleAddToCart;


    return (
        <div className='product'>
            <img src={img} alt="Product Image" />
           <h6 className='product-name'>{name}</h6>
           <div className="product-info">
            <p>Price:${price}</p>
            <p><small>manufacturer:{seller}</small></p>
            <p><small>Rating:{ratings} stars</small></p>
            <button onClick={()=>handleAddToCart(props.product)} className='btn-cart'>
                Add To Cart  
                   <FontAwesomeIcon icon={faShoppingCart} />
            </button>
           </div>
        </div>
    );
};

// Product.propTypes = {
//     product: PropTypes.object.isRequired, // Change object to the expected type of product
//   };
  
export default Product;