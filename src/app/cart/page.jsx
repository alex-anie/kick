"use client";

import Image from "next/image";

import { useContext } from "react";
import { CartItemsContext } from "../RootLayoutClient";
import OrangeBtn from "@/components/buttons/OrangeBtn";
import Trash from "@/components/svg-icons/Trash";
import TransLineIcon from "@/components/svg-icons/TransLineIcon";
import SuccessPopUp from "@/components/popmodels/SuccessPopUp";

export default function Cart() {
  const {
    cartData,
    cartItems,
    setCartData,
    removeFromCart,
    addToCart,
    setCartItems,
    successPopUpModel,
    successPopUp,
    successPopUpText
  } = useContext(CartItemsContext);
  // console.log('cart page cartItem', cartItems)
  // console.log('cart page cartData', cartData)

  function removeCartData() {
    setCartItems(0);
  }

  function addToCartBtn(){
    addToCart()
    successPopUpModel();
  }

  return (
    <main className="w-[90%] mx-auto">
      <div className="pt-40 lg:pt-20">
        {cartItems > 0 ? (
          <section className="lg:grid lg:grid-cols-6 gap-4">
            {/* Cart Items */}
            <aside className="bg-white p-4 rounded-md shadow-lg col-span-4 mb-8 lg:mg-0">
              {/* Heading */}
              <h2 className="uppercase text-[0.75em] text-neutral-800 mb-4">
                Number of items ordered{" "}
                <span className="bg-orange-600 text-white p-1 rounded-full">
                  {" "}
                  {cartItems}
                </span>
              </h2>
              <hr />

              {/* Details */}
              <div className="lg:flex lg:justify-between my-4">
                <div className="flex gap-4 items-center">
                  <div className="relative h-20 w-20">
                    <Image
                      fill
                      src={cartData.image}
                      alt="test logo"
                      style={{ objectFit: "cover", borderRadius: "5px" }}
                    />
                  </div>
                  <div>
                    <p className="text-[0.875em]">{cartData.nameOfProducts}</p>
                    <p className="text-neutral-600 text-[12px]">in stock</p>
                    <p className="uppercase text-[0.75em] font-bold">
                      Kick <span className="text-orange-600">✈️ Express</span>
                    </p>
                  </div>
                </div>
                <div>
                  <p className="flex flex-col">
                    <span className="font-bold text-xl">
                      ₦{" "}
                      {new Intl.NumberFormat("en-NG").format(
                        parseFloat(cartData.newPrice * cartItems)
                      )}
                    </span>
                    <span className="px-2 text-neutral-500 text-[0.75em] line-through">
                      ₦{" "}
                      {new Intl.NumberFormat("en-NG").format(
                        parseFloat(
                          cartData.newPrice / cartData.oldPrice
                        ).toFixed(0)
                      )}{" "}
                      <span className="text-orange-700 text-[12px] bg-orange-100 p-1 rounded-md">
                        -{cartData.percent}%
                      </span>
                    </span>
                  </p>
                </div>
              </div>

              {/* Remove */}
              <div className="flex justify-between">
                {/* Remove data from cart */}
                <button
                  onClick={removeCartData}
                  className="flex gap-2 text-orange-500 hover:bg-orange-200 p-2 rounded-md h-[max-content]"
                >
                  <Trash width={15} height={15} className="" strokeWidth={3} />
                  <span className="uppercase text-[0.75em] font-bold">
                    Remove
                  </span>
                </button>

                {/* add plus / remove items */}
                <div>
                  {cartItems >= 1 ? (
                    <div className="flex mb-4 gap-4">
                      <div className="flex gap-4 items-center">
                        <button
                          onClick={removeFromCart}
                          className="flex items-center justify-center h-8 w-8  bg-orange-600 rounded-md text-white font-bold shadow-xl hover:bg-orange-700"
                        >
                          -
                        </button>
                        <span className="text-neutral-700 text-[0.75em]">
                          {cartItems}
                        </span>
                      </div>
                      <div className="flex gap-4 items-center">
                        <button

                          onClick={addToCartBtn}
                          disabled={`${cartItems >= 10 ? "disabled" : ""}`}
                          className={`${
                            cartItems >= 10
                              ? "flex items-center justify-center h-8 w-8 bg-orange-300 rounded-md text-white font-bold cursor-not-allowed shadow-xl"
                              : "flex items-center justify-center h-8 w-8 bg-orange-600 rounded-md text-white font-bold shadow-xl hover:bg-orange-700"
                          }`}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
            </aside>

            {/* Cart Summary */}
            <aside className="bg-white p-4 col-span-2 h-[max-content]">
              <div>
                <h2 className="uppercase text-[0.875em] font-bold text-neutral-900 py-2">
                  cart summary
                </h2>
                <hr />
                <div className="flex justify-between py-2">
                  <span className="text-[0.75em] font-bold">Subtotal</span>
                  <span className="font-bold text-xl">
                    ₦{" "}
                    {new Intl.NumberFormat("en-NG").format(
                      parseFloat(cartData.newPrice * cartItems)
                    )}
                  </span>
                </div>
                <hr />
                <OrangeBtn
                  className="py-2 shadow-lg"
                  text={`Checkout (₦ ${new Intl.NumberFormat("en-NG").format(
                    parseFloat(cartData.newPrice * cartItems)
                  )})`}
                  href="#"
                />
                {/* Button should navigate to singup for kick (authentication page) */}
              </div>
            </aside>
          </section>
        ) : (
          <section className="w-screen h-screen flex justify-center items-center">
            <aside className="flex justify-center flex-col items-center gap-3">
              <TransLineIcon width={100} height={100} />
              <h1 className=" text-neutral-900">Your cart is empty!</h1>
              <p className="text-[0.875em] text-neutral-700">
                Browse our categories and discover our best deals
              </p>
              <OrangeBtn text="start shopping" href="/" className="h-[50px]" />
            </aside>
          </section>
        )}
      </div>

    {/* Popup Models */}
      <span>
          {successPopUp ? (
            <SuccessPopUp successText={successPopUpText} />
          ) : null}
      </span>
    </main>
  );
}
