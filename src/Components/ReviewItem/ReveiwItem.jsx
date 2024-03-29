import React from 'react';
import './RiviewItem.css'

const ReveiwItem = ({product}) => {
    const {id, img, price, home, quantity} = product
    return (
        <div className='review-item'>
           <img src={img} alt="" />
        </div>
    );
};

export default ReveiwItem;