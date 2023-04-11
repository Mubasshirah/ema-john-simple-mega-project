import { getShoppingCart } from "../components/utilities/Utilities";

const cartLoader=async()=>{
const lodedData=await fetch('products.json');
const products=await lodedData.json();
console.log(products);
const storedCart=getShoppingCart();
const savedCart=[]
for(const id in storedCart){
  const addedProduct=  products.find(pd=>pd.id===id);
  if(addedProduct){
  const quantity=storedCart[id];
  addedProduct.quantity=quantity;
  savedCart.push(addedProduct);
  }
}
return savedCart;
}
export default cartLoader;