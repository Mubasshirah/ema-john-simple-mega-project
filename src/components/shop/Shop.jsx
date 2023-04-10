import React, { useEffect, useState } from 'react';
import Cart from '../cart/Cart';
import Product from '../product/Product';
import { addToDb, getShoppingCart } from '../utilities/Utilities';
import './Shop.css'

const Shop = () => {
    const [products,setProducts]=useState([]);
    const [cart,setCart]=useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    useEffect(()=>{
        const storedCart=getShoppingCart()
        const savedCart=[];
        for(const id in storedCart){
            const addedProduct=products.find(product=>product.id===id);
            if(addedProduct){
                const quantity=storedCart[id];
                addedProduct.quantity=quantity;
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart);
    },[products])
    const handleAddToCart=(product)=>{
        const newCart=[...cart,product];
        setCart(newCart);
         addToDb(product.id)         
    }
    return (
        <div className='main-container'>
            <div className="product-container">
            {
                products.map(product=><Product product={product} key={product.id} handleAddToCart={handleAddToCart}></Product>)
            }
            </div>
            <div className="order-container"> 
          <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;