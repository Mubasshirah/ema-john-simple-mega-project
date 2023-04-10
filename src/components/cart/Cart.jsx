import React from 'react';
import { deleteDb } from '../utilities/Utilities';
import './cart.css'

const Cart = (props) => {
    const cart=props.cart;
    console.log(cart);
    let total=0;
    let shipping=0;
    let quantity=0;
    for(const product of cart){
        product.quantity=product.quantity|| 1;
        total=total+product.price*product.quantity;
        shipping=shipping+product.shipping*product.quantity;
        quantity=quantity+product.quantity;
       
    }
    const  tax=total*7/100;
    const grand=total+shipping+tax;
    return (
        <div className='order-details'>
           
           <h5> order summery</h5>
            <h6>Selected Item: {quantity}</h6>
            <p>Total price:${total}</p>
            <p>Total shipping charge:${shipping}</p>
            <p>Tax:${tax.toFixed(2)}</p>
            <h6>Grand Total:${grand}</h6>
           <button onClick={()=>deleteDb()}>remove</button>
        </div>
    );
};



export default Cart;