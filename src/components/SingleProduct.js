import React, {useContext} from "react";
import { Cart } from "../Context";
import { StarRating } from "./StarRating";

 export function SingleProduct ({prod}) {

    const {cart, setCart} = useContext(Cart);
    return (
        <div className="main-card">
    <div className="shoe-card">
      <img height="100" src={prod.image} alt="shoe"/>
      </div>
      <h3>{prod.name}</h3>
      
      <StarRating />

      <h5>Rs.{prod.price}</h5>
        
      {cart.includes(prod)?(
           <button onClick={() =>{
            setCart(cart.filter((e) => e.id !== prod.id))
        }} 
        className="cart-btn">Remove from cart</button>
      ): (
            <button onClick={() =>{
                setCart([...cart,prod])
            }} 
            className="cart-btn">Add to cart</button>
      )}
    </div>
    )
}


