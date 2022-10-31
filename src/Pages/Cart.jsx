import React from "react";
import "../style/Cart.scss"
import ProductToCart from "../components/Buying/ProductToCart";
import { UserContext } from "../UserContext";
import { useContext } from "react";
import { useState } from "react";

const Cart = () => {
        const { value, setValue } = useContext(UserContext)
        const { product, setProduct } = useState(null)
        let result = []
        // console.log(typeof (value))
        // console.log(value)
        result.push(value)
        console.log(result)

        const found = value.find(element => {
                return element.id === 1;
        });

        console.log(found);

        // setProduct(<ProductToCart name={value[0]} img={value[1]} discription={value[2]} />)
        // console.log(product)

        // result.forEach(element => {
        //         console.log(element)
        //         return (
        //                 <ProductToCart name={element} img={element} discription={element} />
        //         )

        // })

        if (value == false) {
                return (
                        <h1>Cart is empty</h1>
                )
        } else {
                // result.forEach(element => {
                //         return (
                //                 <ProductToCart name={value[0]} img={value[1]} discription={value[2]} />
                //         )

                // return product
                return (
                        <ProductToCart name={value[0]} img={value[1]} discription={value[2]} />
                )
        }




}
export default Cart