import React from 'react';
import './RiviewItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'


const ReveiwItem = ({product, handleRemoveFromCart}) => {
    const {id, img, price, name, quantity} = product
    return (
        <div className='review-item'>
           <img src={img} alt="" />
           <div className='review-details'>
            <p className='product-title'>{name}</p>
            <p>price: <span className='orange-text'>${price}</span></p>
            <p>Order Quantity: {quantity}</p>
           </div>
           <button onClick={()=>handleRemoveFromCart(id)} className='btn-delete'>
           <FontAwesomeIcon className='delete-icon' icon={faTrashAlt} />
           </button>
        </div>
    );
};

export default ReveiwItem;