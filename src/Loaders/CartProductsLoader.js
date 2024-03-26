const CartProductsLoader =async()=>{
    const loadedProducts = await fetch('products.json')
    const data = await loadedProducts.json();
    console.log(data)

}
export default CartProductsLoader;