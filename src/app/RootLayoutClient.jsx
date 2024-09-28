"use client";

// import { useState } from 'react';
import Navbar from "@/components/navbar/Navbar";
import { createContext, useState } from "react";
export const CartItemsContext = createContext(null);

export default function RootLayoutClient({ children }) {
  const [cartItems, setCartItems] = useState(0);
  const [isActiveCartButton, setIsActiveCartButton] = useState(false);
  const [cartData, setCartData] = useState([]);
  const [successPopUp, setSuccessPopUp] = useState(false)
  const [successPopUpText, setSuccessPopUpText] = useState('')

  function addToCart() {
    successPopUpModel()
    setSuccessPopUpText('Product added Successfully')
    if (cartItems >= 10) {
      setIsActiveCartButton(true);
      
      return;
    }
    setCartItems((prevItem) => prevItem + 1);
  }

  function removeFromCart() {
    successPopUpModel()
    setSuccessPopUpText('Item quantity has been updated')

    if (cartItems <= 0) {
      setIsActiveCartButton(false);
      return;
    }
    setCartItems((prevItem) => prevItem - 1);
  }

  function successPopUpModel(){
    setSuccessPopUp(true)
    setTimeout(()=>{
      setSuccessPopUp(false)
    }, 2000)
  }

  return (
    <>
      <CartItemsContext.Provider
        value={{
          cartItems,
          addToCart,
          removeFromCart,
          isActiveCartButton,
          setIsActiveCartButton,
          setCartData,
          cartData,
          setCartItems,
          setSuccessPopUp,
          successPopUp,
          successPopUpModel,
          successPopUpText
        }}
      >
        <main>
          <Navbar />
          <main className="bg-neutral-200">{children}</main>
        </main>
      </CartItemsContext.Provider>
    </>
  );
}
