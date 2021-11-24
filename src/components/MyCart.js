import React, { useEffect, useState, useContext } from "react";
import { Cart } from "../Context";
import { SingleProduct } from "./SingleProduct";

export function MyCart() {

  const {cart} = useContext(Cart);  /// importing context
  const [total,setTotal] = useState()

  useEffect(() => {
    setTotal(cart.reduce((acc,curr) => acc + Number(curr.price), 0))
  }, [cart])

  return(
    <div>
      <span style={{fontSize:30,fontWeight:500}}>Total cart value : Rs.{total}</span>
    <div className="product-container">{
      cart.map((prod)=>{
        return(
          <SingleProduct key={prod.id} prod={prod}/>
        )
      })
    }</div>
    </div>
  )
}
