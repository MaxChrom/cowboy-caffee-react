import React from "react";
import "../style/Cart.scss"
import ProductToCart from "../components/Buying/ProductToCart";
import { UserContext } from "../UserContext";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";

const Cart = () => {
        const { value, setValue } = useContext(UserContext)
       

        if (value == false) {
                return (
                        <h1>Cart is empty</h1>
                )
        } else {
                  
                return (
                        <ProductToCart name={value[0]} img={value[1]} discription={value[2]} />
                        
                )
        }




}
export default Cart