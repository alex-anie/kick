import CancelX from "../svg-icons/CancelX";
import { useContext } from "react";
import { BlenderDetailsContext } from "@/app/blenders/[id]/page";
import { AlertCircle } from "../svg-icons/AlertCircle";
import { CartItemsContext } from "@/app/RootLayoutClient";
import Link from "next/link";

export default function Variation() {
    const {handleToggleVariation, variationModel} = useContext(BlenderDetailsContext);
    const {cartItems, addToCart, removeFromCart} = useContext(CartItemsContext);

  return (
    <>
    {variationModel && 
        <main className="w-screen">
            <div id="overlay" className="w-screen h-screen bg-slate-900/50 absolute inset-0 z-[104]"></div>
            <section id="table-size-guide" className="w-[50%] absolute bg-white p-4 rounded-lg z-[106] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] h-[30em] overflow-x-scroll">
                <aside className="relative">
                    <div className="flex justify-between mb-8">
                        <h1 className="font-bold">Please select a variation</h1>
                        <button onClick={handleToggleVariation}>
                            <CancelX />
                        </button>
                    </div>
                    <div>
                            <p>EU</p>
                            <div className="lg:flex lg:justify-between">
                                <div>
                                    <span className="font-bold text-[0.75em]">₦ 42,994</span>
                                    <span className="px-2 text-[0.75em] text-neutral-500 line-through">₦ 85,987</span>
                                    <p className="text-[0.65em] text-red-500 flex items-center gap-1"><AlertCircle width={12} height={12}/> 3 Units  left</p>
                                </div>

                                <div>
                                <div className="mt-4 lg:mt-0 flex mb-4 gap-4">
                                <div className="flex gap-4 items-center ">
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
                                        onClick={addToCart}
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
                                </div>
                            </div>
                        </div>

                        <div>
                        <p>XL</p>
                        <div className="lg:flex lg:justify-between">
                            <div>
                                <span className="font-bold text-[0.75em]">₦ 42,994</span>
                                <span className="px-2 text-[0.75em] text-neutral-500 line-through">₦ 85,987</span>
                                <p className="text-[0.65em] text-red-500 flex items-center gap-1"><AlertCircle width={12} height={12}/> 3 Units  left</p>
                            </div>

                            <div>
                            <div className="mt-4 lg:mt-0 flex mb-4 gap-4">
                            <div className="flex gap-4 items-center ">
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
                                    onClick={addToCart}
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
                                    </div>
                                </div>
                            </div>

                            <div>
                        <p>XXL</p>
                        <div className="lg:flex lg:justify-between">
                            <div>
                                <span className="font-bold text-[0.75em]">₦ 42,994</span>
                                <span className="px-2 text-[0.75em] text-neutral-500 line-through">₦ 85,987</span>
                                <p className="text-[0.65em] text-red-500 flex items-center gap-1"><AlertCircle width={12} height={12}/> 3 Units  left</p>
                            </div>

                            <div>
                            <div className="mt-4 lg:mt-0 flex mb-4 gap-4">
                            <div className="flex gap-4 items-center ">
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
                                    onClick={addToCart}
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
                                    </div>
                                </div>
                            </div>


                            <div>
                        <p>M</p>
                        <div className="lg:flex lg:justify-between">
                            <div>
                                <span className="font-bold text-[0.75em]">₦ 42,994</span>
                                <span className="px-2 text-[0.75em] text-neutral-500 line-through">₦ 85,987</span>
                                <p className="text-[0.65em] text-red-500 flex items-center gap-1"><AlertCircle width={12} height={12}/> 3 Units  left</p>
                            </div>

                            <div>
                            <div className="mt-4 lg:mt-0 flex mb-4 gap-4">
                            <div className="flex gap-4 items-center ">
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
                                    onClick={addToCart}
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
                                    </div>
                                </div>
                            </div>

                            <div>
                        <p>L</p>
                        <div className="lg:flex lg:justify-between">
                            <div>
                                <span className="font-bold text-[0.75em]">₦ 42,994</span>
                                <span className="px-2 text-[0.75em] text-neutral-500 line-through">₦ 85,987</span>
                                <p className="text-[0.65em] text-red-500 flex items-center gap-1"><AlertCircle width={12} height={12}/> 3 Units  left</p>
                            </div>

                            <div>
                            <div className="mt-4 lg:mt-0 flex mb-4 gap-4">
                            <div className="flex gap-4 items-center ">
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
                                    onClick={addToCart}
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
                                    </div>
                                </div>
                            </div>



                            <div>
                        <p>S</p>
                        <div className="lg:flex lg:justify-between">
                            <div>
                                <span className="font-bold text-[0.75em]">₦ 42,994</span>
                                <span className="px-2 text-[0.75em] text-neutral-500 line-through">₦ 85,987</span>
                                <p className="text-[0.65em] text-red-500 flex items-center gap-1"><AlertCircle width={12} height={12}/> 3 Units  left</p>
                            </div>

                            <div>
                            <div className="mt-4 lg:mt-0 flex mb-4 gap-4">
                            <div className="flex gap-4 items-center ">
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
                                    onClick={addToCart}
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
                                    </div>
                                </div>
                            </div>


                            <div>
                        <p>XXML</p>
                        <div className="lg:flex lg:justify-between">
                            <div>
                                <span className="font-bold text-[0.75em]">₦ 42,994</span>
                                <span className="px-2 text-[0.75em] text-neutral-500 line-through">₦ 85,987</span>
                                <p className="text-[0.65em] text-red-500 flex items-center gap-1"><AlertCircle width={12} height={12}/> 3 Units  left</p>
                            </div>

                            <div>
                            <div className="mt-4 lg:mt-0 flex mb-4 gap-4">
                            <div className="flex gap-4 items-center ">
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
                                    onClick={addToCart}
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
                                    </div>
                                </div>
                            </div>

                    <div className="sticky w-full py-4 bottom-[-20px] left-0 bg-white z-[111] flex justify-between">
                        <button onClick={handleToggleVariation} className="border-[1px] border-orange-500 rounded-md uppercase text-[0.75em] font-bold text-orange-500 py-3 px-12 hover:bg-orange-100">
                            continue shopping
                        </button>
                        <Link href="/cart" className="rounded-md uppercase text-[0.75em] font-bold bg-orange-500 text-white py-3 px-12 hover:bg-orange-700">
                            View Cart and Checkout
                        </Link>

                    </div>
                 </aside>
            </section>
        </main>
        }
    </>
    )
}
