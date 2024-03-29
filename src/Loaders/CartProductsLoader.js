import { getShoppingCart } from "../utilities/fakedb";

const CartProductsLoader =async()=>{
    const loadedProducts = await fetch('products.json')
    const products = await loadedProducts.json();
    console.log(products);
    //if cart data in database you must use async await
    const storedCart = getShoppingCart()
    const savedCart = [];
    
    for(const id in storedCart){
        const addedProduct = products.find(pd => pd.id === id)
        if(addedProduct){
            const quantity = storedCart[id]
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct)
        }
    }

//if you want to return more than one thing
/* by default js dont allow multiple return 
in order to return multiple variable
you can just 
return[savedCart,products]
or another way to do that
return{savedCart,products} */
    return savedCart;

}
export default CartProductsLoader;