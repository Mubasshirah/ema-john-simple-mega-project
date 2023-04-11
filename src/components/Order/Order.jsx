import React, { useState } from 'react';
import Cart from '../cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import Product from '../product/Product';
import OrderedDetail from '../OrderedDetail/OrderedDetail';
import './Order.css'
import { removeFromDb } from '../../utilities/fakedb';
import { deleteDb } from '../utilities/Utilities';

const Order = () => {
    const products=useLoaderData();
    const [cart,setCart]=useState(products);
    console.log(products);
    const handleDelete=(id)=>{
    const remaining=cart.filter(product=>product.id !==id);
    setCart(remaining);
    removeFromDb(id);
    }
    const clearCart=()=>{
        setCart([]);
        deleteDb();
    }
    return (
        <div className='main-container'>
          <div className='product-detail-container'>
{
    cart.map(product=><OrderedDetail key={product.id} product={product} handleDelete={handleDelete}></OrderedDetail>)
}

          </div>
          <div className='order-container'>
<Cart cart={cart} clearCart={clearCart}>

    <Link to='/checkout'><button>proceed checkout</button></Link>
</Cart>
          </div>
        </div>
    );
};

export default Order;