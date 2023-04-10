import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'




const Product = (props) => {
    const {img,name,category,price,seller,id,ratings}=props.product;
    console.log(props.product);
    const handleAddToCart=props.handleAddToCart;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h5>{name}</h5>
                <p>${price}</p>
                <h6>Manufacturer: {seller}</h6>
                <p>Rating: {ratings}</p>
            </div>
            <button className='product-btn' onClick= {()=>handleAddToCart(props.product)}>Add to cart <FontAwesomeIcon icon={faShoppingCart} /></button>
            

        </div>
    );
};
//
export default Product;