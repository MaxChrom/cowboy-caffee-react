import React from "react";
import "../style/Cart.scss"
import ProductToCart from "../components/Buying/ProductToCart";
import { UserContext } from "../UserContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
const Cart = () => {
        const { value, setValue } = useContext(UserContext)

        let productInCartPrice = []
        value.forEach(productsPrice => {
            productInCartPrice.push(Number(productsPrice[4]))
        });

        console.log(productInCartPrice)
        const sum = productInCartPrice.reduce((partialSum, a) => partialSum + a, 0);


   if (value == false) {
      return (
      <h1>Cart is empty</h1>
      )
   } else {

      return (

         <div>
            {
               value.map(product => {


                  return <>
                     <ProductToCart name={product[0]} img={product[1]} discription={product[2]} price={product[3]} totalPrice = {product[4]} />
                    
                  </>

               })

            }
            <div className="product-cart__summ">
                <p>Total price : {sum}$</p>
                <Link to="/checkout"><button className="checkout-button">Checkout</button></Link>
                
            </div>
           

         </div> 

      )
   }




}
export default Cart