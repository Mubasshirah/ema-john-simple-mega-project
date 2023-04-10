const getShoppingCart=()=>{
    let shoppingCart={};
    const storedCart=localStorage.getItem('shopping-cart');
    if(storedCart){
        shoppingCart=JSON.parse(storedCart);
    }
    return shoppingCart;
}
const addToDb=(id)=>{
    let shoppingCart=getShoppingCart();
    const quantity=shoppingCart[id];
    if(quantity){
        const newQuantity=quantity+1;
        shoppingCart[id]=newQuantity;
    }
    else{
        shoppingCart[id]=1;
    }
    localStorage.setItem('shopping-cart',JSON.stringify(shoppingCart));
}
const deleteDb=()=>{

    localStorage.removeItem('shopping-cart')
}
export {addToDb,getShoppingCart,deleteDb};
