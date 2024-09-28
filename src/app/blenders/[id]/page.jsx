"use client";

import ChartIcon from "@/components/svg-icons/ChartIcon";
import StarIcon from "@/components/svg-icons/StartIcon";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { createContext, useContext , useEffect, useState } from "react";
import favicon from "@/images/favicon.ico";
import Facebook from "@/components/svg-icons/Facebook";
import XIcon from "@/components/svg-icons/XIcon";
import Package from "@/components/svg-icons/PackageIcon";
import Truck from "@/components/svg-icons/Truck";
import Recycle from "@/components/svg-icons/Recycle";
import ChevronRight from "@/components/svg-icons/ChevronRight";
import KickIcon from "@/components/svg-icons/KickIcon";
import InfoIcon from "@/components/svg-icons/InfoIcon";
import { FileIcon } from "@/components/svg-icons/FileIcon";
import { SlidersIcon } from "@/components/svg-icons/SlidersIcon";
import { MessageSquare } from "@/components/svg-icons/MessageSquare";
import { CartItemsContext } from "@/app/RootLayoutClient";
import OrangeBtn from "@/components/buttons/OrangeBtn";
import SuccessPopUp from "@/components/popmodels/SuccessPopUp";
import CheckMark from "@/components/svg-icons/CheckMark";
import SizeGuide from "@/components/popmodels/SizeGuide";
import Variation from "@/components/popmodels/Variation";

// Create context
export const BlenderDetailsContext = createContext(null)

export default function BlenderDetails() {
  const { id } = useParams();
  const [blender, setBlender] = useState([]);
  const [tableGuideModel, setTableGuideModel] = useState(false)
  const [variationModel, setVariationModel] = useState(false)

  const {
    cartItems,
    addToCart,
    removeFromCart,
    setCartData,
    cartData,
    setSuccessPopUp,
    successPopUp,
    successPopUpModel,
    successPopUpText,
  } = useContext(CartItemsContext);

  useEffect(() => {
    async function getBlenderSingleData() {
      try {
        const response = await fetch(`/api/appliances/blenders?id=${id}`);
        if (!response.ok) {
          throw new Error(`Failed to fetch ${response.status}`);
        }
        const data = await response.json();
        setBlender(data);
      } catch (err) {
        console.log(err);
      }
    }

    getBlenderSingleData();
  }, [id]);

  function newCartData() {
    setCartData(blender);
  }

  function handleButtonClick() {
    addToCart();
    newCartData();
    successPopUpModel();
  }

  function handleToggleTable(){
    setTableGuideModel(prevState => !prevState)
  }

  function handleToggleVariation(){
    setVariationModel(prevState => !prevState)
  }

  return (
    <BlenderDetailsContext.Provider value={{tableGuideModel, handleToggleTable, handleToggleVariation, variationModel}}>
    <main className="w-[90%] mx-auto">
      <section className="pt-[9rem] lg:pt-[5rem] lg:grid lg:grid-cols-6 gap-2 ">
        {/* Main Content */}
        <aside
          className="grid col-span-4"
          id="productDetails"
        >
          {/* main content area */}
          <div className="flex gap-4 bg-white p-4 rounded-md">
            <div>
              {blender?.displayImages?.length > 0 && (
                <div>
                  <div className="relative w-[240px] h-[240px] mb-4">
                    <Image
                      src={blender.displayImages[0].imageOne}
                      alt="test"
                      fill
                      style={{ objectFit: "cover", borderRadius: "5px" }}
                    />
                  </div>
                  <div className="flex gap-4 justify-evenly my-4">
                    <button
                      type="button"
                      className="relative w-[50px] h-[50px]"
                    >
                      <Image
                        src={blender.displayImages[0].imageOne}
                        alt="test"
                        fill
                        style={{ objectFit: "cover", borderRadius: "5px" }}
                      />
                    </button>
                    <button
                      type="button"
                      className="relative w-[50px] h-[50px]"
                    >
                      <Image
                        src={blender.displayImages[0].imageTwo}
                        alt="test"
                        fill
                        style={{ objectFit: "cover", borderRadius: "5px" }}
                      />
                    </button>
                    <button
                      type="button"
                      className="relative w-[50px] h-[50px]"
                    >
                      <Image
                        src={blender.displayImages[0].imageThree}
                        alt="test"
                        fill
                        style={{ objectFit: "cover", borderRadius: "5px" }}
                      />
                    </button>
                    <button
                      type="button"
                      className="relative w-[50px] h-[50px]"
                    >
                      <Image
                        src={blender.displayImages[0].imageFour}
                        alt="test"
                        fill
                        style={{ objectFit: "cover", borderRadius: "5px" }}
                      />
                    </button>
                  </div>
                </div>
              )}

              {/* share this product */}
              <div>
                <p className="uppercase font-bold text-xs text-neutral-800 mb-4">
                  Share This product
                </p>
                <div className="flex gap-2">
                  <button className="h-[30px] w-[30px] flex justify-center items-center border-[1px] border-neutral-900 rounded-full hover:border-orange-500 hover:bg-orange-500">
                    <Facebook
                      width={15}
                      height={15}
                      strokeWidth={1}
                      stroke="#171717"
                    />
                  </button>
                  <button className="h-[30px] w-[30px] flex justify-center items-center border-[1px] border-neutral-900 rounded-full hover:border-orange-500 hover:bg-orange-500">
                    <XIcon
                      width={15}
                      height={15}
                      strokeWidth={1}
                      stroke="#171717"
                    />
                  </button>
                </div>
              </div>
            </div>

            <div className="">
              <p className="text-xl mb-2">{blender.nameOfProducts}</p>
              <p>
                <span className="font-bold text-2xl">
                  ₦
                  {new Intl.NumberFormat("en-NG").format(
                    parseFloat(blender.newPrice)
                  )}
                </span>
                <span className="px-2 text-neutral-500 line-through">
                  ₦
                  {new Intl.NumberFormat("en-NG").format(
                    parseFloat(blender.newPrice / blender.oldPrice).toFixed(0)
                  )}
                </span>
                <span className="text-orange-500 text-[12px]">
                  -{blender.percent}%
                </span>
              </p>
              <p className="text-neutral-600 text-[12px]">in stock</p>
              <p className="text-neutral-900 text-[12px]">
                + shipping from ₦ 500 to {/*Insert Dynamic Value here*/}{" "}
              </p>
              <p className="flex  bg-white">
                <StarIcon
                  width={18}
                  height={18}
                  fill="#F68B1E"
                  strokeWidth={0}
                />
                <StarIcon
                  width={18}
                  height={18}
                  fill="#F68B1E"
                  strokeWidth={0}
                />
                <StarIcon
                  width={18}
                  height={18}
                  fill="#F68B1E"
                  strokeWidth={0}
                />
                <StarIcon
                  width={18}
                  height={18}
                  fill="#F68B1E"
                  strokeWidth={0}
                />
                <StarIcon
                  width={18}
                  height={18}
                  fill="rgb(163 163 163)"
                  strokeWidth={0}
                />
                <span>
                  <Link
                    className="text-blue-700 hover:underline text-[14px]"
                    href={"/verified-rating"}
                  >
                    (551 verified ratings)
                  </Link>
                </span>
              </p>

              <p className="text-neutral-600 text-[12px] hover:underline hover:text-blue-800">
                <Link href={blender.brandsWebsite || '#'} target="_blank">{blender.brands}</Link>
                </p>
              <div>
                <div className="flex justify-between my-2 font-light">
                  <span className="uppercase font-bold text-neutral-800">
                    Variation available
                  </span>
                  <span>
                    <button
                      type="button"
                      className="text-blue-700 hover:underline text-[14px]"
                      onClick={handleToggleTable}
                    >
                      Size Guide
                    </button>
                  </span>
                </div>

                <SizeGuide />
                <Variation />
                <div className="flex gap-2">
                  <button
                    onClick={handleToggleVariation}
                    type="button"
                    className="text-[12px] border-[1px] py-[0.2em] px-[0.3em] border-neutral-300 mb-4"
                  >
                    EU 39
                  </button>
                  <button
                    onClick={handleToggleVariation}
                    type="button"
                    className="text-[12px] border-[1px] py-[0.2em] px-[0.3em] border-neutral-300 mb-4"
                  >
                    EU 40
                  </button>
                  <button
                    onClick={handleToggleVariation}
                    type="button"
                    className="text-[12px] border-[1px] py-[0.2em] px-[0.3em] border-neutral-300 mb-4"
                  >
                    EU 41
                  </button>
                  <button
                    onClick={handleToggleVariation}
                    type="button"
                    className="text-[12px] border-[1px] py-[0.2em] px-[0.3em] border-neutral-300 mb-4"
                  >
                    EU 42
                  </button>
                  <button
                    onClick={handleToggleVariation}
                    type="button"
                    className="text-[12px] border-[1px] py-[0.2em] px-[0.3em] border-neutral-300 mb-4"
                  >
                    EU 43
                  </button>
                  <button
                    onClick={handleToggleVariation}
                    type="button"
                    className="text-[12px] border-[1px] py-[0.2em] px-[0.3em] border-neutral-300 mb-4"
                  >
                    EU 44
                  </button>
                </div>
              </div>

              <span>
                {successPopUp ? (
                  <SuccessPopUp successText={successPopUpText} />
                ) : null}
              </span>

              {/* Button */}
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
                      <span className="text-neutral-700 text-[0.75em]">
                        ({cartItems} item(s) added)
                      </span>
                    </div>
                  </div>
                ) : null}

                {!cartItems >= 1 ? (
                  <button
                    className="flex gap-4 items-center justify-center bg-orange-600 text-white h-[40px] w-full rounded-md hover:bg-orange-700 mb-4"
                    onClick={handleButtonClick}
                  >
                    <ChartIcon />
                    <span className="text-center">Add to cart</span>
                  </button>
                ) : null}
              </div>

              <p className="uppercase text-[0.8em] font-bold mt-4">
                Promotions
              </p>
              <div className="mt-4 flex flex-col gap-2">
                <span className="flex gap-2 items-center">
                  <div className="h-[14px] w-[14px] relative">
                    <Image
                      src={favicon}
                      fill
                      alt="kick logo as list items"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <Link
                    href="/"
                    className="text-[0.8em] text-blue-700 hover:underline"
                  >
                    Call 07006000000 To Place Your Order
                  </Link>
                </span>
                <span className="flex gap-2 items-center">
                  <div className="h-[14px] w-[14px] relative">
                    <Image
                      src={favicon}
                      fill
                      alt="kick logo as list items"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <Link
                    href="https://pay.jumia.com.ng/services/loans?utm_source=jumia&utm_medium=mall&utm_campaign=pdp-promotion"
                    className="text-[0.8em] text-blue-700 hover:underline"
                    target="_blank"
                  >
                    Need extra money? Loan up to N500,000 on the KickPay Android
                    app.
                  </Link>
                </span>
                <span className="flex gap-2 items-center">
                  <div className="h-[14px] w-[14px] relative">
                    <Image
                      src={favicon}
                      fill
                      alt="kick logo as list items"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <Link
                    href="/pickup-station"
                    className="text-[0.8em] text-blue-700 hover:underline"
                  >
                    Enjoy cheaper shipping fees when you select a PickUp Station
                    at checkout.
                  </Link>
                </span>
              </div>
            </div>
          </div>

          {/* Specifications */}
          {blender?.displayImages?.length > 0 && (
            <div id="Specification" className=" bg-white p-4 rounded-md mt-4">
              <h2 className="text-[0.875em] uppercase flex items-center font-bold border-[1px] border-neutral-400 h-[40px] pl-4">
                Specifications
              </h2>
              <div className=" border-[1px] border-neutral-400 p-4">
                <p>
                  <span className="font-bold">SKU:</span>
                  <span className="text-[0.875em]">
                    {blender.specifications[0].sku}
                  </span>
                </p>
                <p>
                  <span className="font-bold">Product Line:</span>
                  <span className="text-[0.875em]">
                    {blender.specifications[0].productLine}
                  </span>
                </p>
                <p>
                  <span className="font-bold">Model:</span>
                  <span className="text-[0.875em]">
                    {blender.specifications[0].model}
                  </span>
                </p>
                <p>
                  <span className="font-bold">Production Country:</span>
                  <span className="text-[0.875em]">
                    {blender.specifications[0].productionCountry}
                  </span>
                </p>
                <p>
                  <span className="font-bold">Sizes:</span>
                  <span className="text-[0.875em]">
                    {blender.specifications[0].sizes}
                  </span>
                </p>
                <p>
                  <span className="font-bold">Color:</span>
                  <span className="text-[0.875em]">
                    {blender.specifications[0].color}
                  </span>
                </p>
                <p>
                  <span className="font-bold">Main Material:</span>
                  <span className="text-[0.875em]">
                    {blender.specifications[0].mainMaterial}
                  </span>
                </p>
              </div>
            </div>
          )}

          {/* VERIFIED CUSTOMER FEEDBACK */}
          <div className="mt-4  bg-white p-4 rounded-md" id="verifiedCustomer">
              <section>
                <div className="flex justify-between py-4">
                  <h1 className="text-xl font-semi-bold">Verified customer Feedback</h1>
                  <Link href="/verified-rating" className="text-orange-500 flex items-center">See All <ChevronRight width={14} height={14} /></Link>
                </div>
                <hr />
              </section>
              <section className="grid grid-cols-6 gap-4 my-4">
                {/* verified rating */}
                <aside className="col-span-2">
                  <h1 className="text-[0.875em] mb-4 uppercase font-bold text-neutral-900">Verified Ratings (2091)</h1>
                  <div className="bg-neutral-200 rounded-md flex flex-col items-center justify-center py-4 mb-4 ">
                    <h1 className="text-2xl text-orange-500"><strong>3.8</strong>/5</h1>
                      <div className="flex">
                        <StarIcon width={18} height={18} fill=" #f97316" strokeWidth={0}/>
                        <StarIcon width={18} height={18} fill=" #f97316" strokeWidth={0}/>
                        <StarIcon width={18} height={18} fill=" #f97316" strokeWidth={0}/>
                        <StarIcon width={18} height={18} fill=" #f97316" strokeWidth={0}/>
                        <StarIcon width={18} height={18} fill=" #171717" strokeWidth={0}/>
                      </div>
                    <p className="text-[0.875em] font-semibold">2091 verified rating</p>
                  </div>
                  <div className="">
                    <span className="flex items-center gap-2 text-[0.75em] text-neutral-700">
                      <p className="">5</p>
                      <StarIcon  width={15} height={15} fill=" #f97316" strokeWidth={0}/>
                      (916)

                      <span className="ml-3 inline-block h-2 w-full rounded-full bg-neutral-300 relative"> 
                        <span className="inline-block h-full w-[70%] rounded-full bg-orange-500 absolute top-0 left-0"></span>
                      </span>
                    </span>

                    <span className="flex items-center gap-2 text-[0.75em] text-neutral-700">
                      <p className="">4</p>
                      <StarIcon  width={15} height={15} fill=" #f97316" strokeWidth={0}/>
                      (474)

                      <span className="ml-3 inline-block h-2 w-full rounded-full bg-neutral-300 relative"> 
                        <span className="inline-block h-full w-[50%] rounded-full bg-orange-500 absolute top-0 left-0"></span>
                      </span>
                    </span>

                    <span className="flex items-center gap-2 text-[0.75em] text-neutral-700">
                      <p className="">3</p>
                      <StarIcon  width={15} height={15} fill=" #f97316" strokeWidth={0}/>
                      (346)

                      <span className="ml-3 inline-block h-2 w-full rounded-full bg-neutral-300 relative"> 
                        <span className="inline-block h-full w-[30%] rounded-full bg-orange-500 absolute top-0 left-0"></span>
                      </span>
                    </span>

                    <span className="flex items-center gap-2 text-[0.75em] text-neutral-700">
                      <p className="">2</p>
                      <StarIcon  width={15} height={15} fill="#f97316" strokeWidth={0}/>
                      (171)

                      <span className="ml-3 inline-block h-2 w-full rounded-full bg-neutral-300 relative"> 
                        <span className="inline-block h-full w-[20%] rounded-full bg-orange-500 absolute top-0 left-0"></span>
                      </span>
                    </span>

                    <span className="flex items-center gap-2 text-[0.75em] text-neutral-700">
                      <p className="">1</p>
                      <StarIcon  width={15} height={15} fill=" #f97316" strokeWidth={0}/>
                      (184)

                      <span className="ml-3 inline-block h-2 w-full rounded-full bg-neutral-300 relative"> 
                        <span className="inline-block h-full w-[10%] rounded-full bg-orange-500 absolute top-0 left-0"></span>
                      </span>
                    </span>
                  </div>
                </aside>

                {/* Comments from verified customer */}
                <aside className="col-span-4">
                  <h2 className="text-[0.875em] mb-4 uppercase font-bold text-neutral-900">Comments from verified purchases (791)</h2> 

                  <div className="flex flex-col gap-2 mb-4">
                      <div className="flex">
                        <StarIcon width={18} height={18} fill=" #f97316" strokeWidth={0}/>
                        <StarIcon width={18} height={18} fill=" #f97316" strokeWidth={0}/>
                        <StarIcon width={18} height={18} fill=" #f97316" strokeWidth={0}/>
                        <StarIcon width={18} height={18} fill=" #f97316" strokeWidth={0}/>
                        <StarIcon width={18} height={18} fill=" #f97316" strokeWidth={0}/>
                      </div>
                      <p className="font-bold">I love it</p>
                      <p className="text-[0.75em]">Awesome</p>
                      <div className="flex justify-between">
                      <p className="text-neutral-500 text-[0.75em]">18-09-2024 by Tochi</p>
                      <div className="text-green-500 flex gap-1">
                        <CheckMark width={15} height={15}/>
                        <p className="text-[0.75em]">Verified Purchase</p>
                      </div>
                      </div>
                      <hr />
                  </div>

                  <div className="flex flex-col gap-2 mb-4">
                      <div className="flex">
                        <StarIcon width={18} height={18} fill=" #f97316" strokeWidth={0}/>
                        <StarIcon width={18} height={18} fill=" #f97316" strokeWidth={0}/>
                        <StarIcon width={18} height={18} fill=" #f97316" strokeWidth={0}/>
                        <StarIcon width={18} height={18} fill=" #f97316" strokeWidth={0}/>
                        <StarIcon width={18} height={18} fill=" #f97316" strokeWidth={0}/>
                      </div>
                      <p className="font-bold">It's fine</p>
                      <p className="text-[0.75em]">Just improve the quality</p>
                      <div className="flex justify-between">
                      <p className="text-neutral-500 text-[0.75em]">24-02-2024 by Asonibare Moses</p>
                      <div className="text-green-500 flex gap-1">
                        <CheckMark width={15} height={15}/>
                        <p className="text-[0.75em]">Verified Purchase</p>
                      </div>
                      </div>
                      <hr />
                  </div>

                  <div className="flex flex-col gap-2 mb-4">
                      <div className="flex">
                        <StarIcon width={18} height={18} fill=" #f97316" strokeWidth={0}/>
                        <StarIcon width={18} height={18} fill=" #f97316" strokeWidth={0}/>
                        <StarIcon width={18} height={18} fill=" #f97316" strokeWidth={0}/>
                        <StarIcon width={18} height={18} fill=" #f97316" strokeWidth={0}/>
                        <StarIcon width={18} height={18} fill=" #f97316" strokeWidth={0}/>
                      </div>
                      <p className="font-bold">This is Satisfactory</p>
                      <p className="text-[0.75em]">Just as I want it</p>
                      <div className="flex justify-between">
                      <p className="text-neutral-500 text-[0.75em]">17-04-2024 by wisdom</p>
                      <div className="text-green-500 flex gap-1">
                        <CheckMark width={15} height={15}/>
                        <p className="text-[0.75em]">Verified Purchase</p>
                      </div>
                      </div>
                      <hr />
                  </div>
                </aside>
              </section>
          </div>
        </aside>

        {/* side Navigation */}
        <aside className="col-span-2 rounded-md mt-8 lg:mt-0">
          {/* Delivery & Returns */}
          <section className="bg-white p-4">
            <div>
              <p className="uppercase text-[0.75em]">Delivery & Returns</p>
              <p className="uppercase text-[0.75em] font-bold mt-4">
                Kick <span className="text-orange-600">✈️ Express</span>
              </p>
              <p className="text-[0.75em] mb-2">
                Free delivery on thousands of products in Lagos, Ibadan & Abuja
                <Link href="#" className="text-blue-800 hover:underline ml-1">
                  Details
                </Link>
              </p>
            </div>

            <di className="mt-2">
              <label for="location-state" className="text-[0.9m] mb-2 block">
                Choose your location
              </label>
              <select
                required=""
                className="block w-full h-12 px-2 border-[1px] outline-none border-neutral-400 active:border-orange-600 focus:border-orange-600 rounded-md"
                id="location-state"
                name="state"
                aria-label="state within the Country"
              >
                <option value="" disabled="">
                  Please select
                </option>
                <option value="1">Abia</option>
                <option value="3">Akwa Ibom</option>
                <option value="4">Anambra</option>
                <option value="5">Bauchi</option>
                <option value="6">Bayelsa</option>
                <option value="7">Benue</option>
                <option value="8">Borno</option>
                <option value="9">Cross River</option>
                <option value="10">Delta</option>
                <option value="11">Ebonyi</option>
                <option value="12">Edo</option>
                <option value="13">Ekiti</option>
                <option value="14">Enugu</option>
                <option value="15">Federal Capital Territory</option>
                <option value="16">Gombe</option>
                <option value="17">Imo</option>
                <option value="19">Kaduna</option>
                <option value="20">Kano</option>
                <option value="23">Kogi</option>
                <option value="24">Kwara</option>
                <option value="25" selected="">
                  Lagos
                </option>
                <option value="26">Nasarawa</option>
                <option value="27">Niger</option>
                <option value="28">Ogun</option>
                <option value="29">Ondo</option>
                <option value="30">Osun</option>
                <option value="31">Oyo</option>
                <option value="32">Plateau</option>
                <option value="33">Rivers</option>
              </select>

              <label for="pickup-station"></label>
              <select
                required=""
                className="block w-full h-12 px-2 border-[1px] outline-none border-neutral-400 active:border-orange-600 focus:border-orange-600 rounded-md mt-3"
                id="pickup-station"
                name="station"
                aria-label="Pickup station of ordered items"
              >
                <option value="" disabled="">
                  Please select
                </option>
                <option value="1">Abia</option>

                <option value="33">Rivers</option>
              </select>
            </di>

            <div>
              <div className="flex gap-2 mt-4 w-full">
                <div className="w-[30%] max-w-[50px] h-[50px]  max-h-[50px] border-[1px] border-neutral-400 flex justify-center items-center">
                  <Package />
                </div>
                <div>
                  <p className="flex justify-between">
                    <span className="text-[0.875em] font-bold">
                      Pickup Station
                    </span>
                    <Link
                      href=""
                      className="text-blue-900 hover:underline text-[0.75em]"
                    >
                      Details
                    </Link>
                  </p>
                  <p className="text-[0.75em] text-neutral-800">
                    Delivery Fees ₦500
                  </p>
                  <p className="text-[0.75em] text-neutral-800">
                    Arriving at pickup station between 06 September & 09
                    September when you order within next 5hrs 14mins
                  </p>
                </div>
              </div>

              <div className="flex gap-2 mt-4 w-full">
                <div className="w-[30%] max-w-[50px] h-[50px]  max-h-[50px] border-[1px] border-neutral-400 flex justify-center items-center">
                  <Truck />
                </div>
                <div>
                  <p className="flex justify-between">
                    <span className="text-[0.875em] font-bold">
                      Door Delivery
                    </span>
                    <Link
                      href=""
                      className="text-blue-900 hover:underline text-[0.75em]"
                    >
                      Details
                    </Link>
                  </p>
                  <p className="text-[0.75em] text-neutral-800">
                    Delivery Fees ₦1,540
                  </p>
                  <p className="text-[0.75em] text-neutral-800">
                    Ready for delivery between 09 September & 10 September when
                    you order within next 11hrs 24mins
                  </p>
                </div>
              </div>

              <div className="flex gap-2 mt-4 w-full">
                <div className="w-[30%] max-w-[50px] h-[50px] max-h-[50px] border-[1px] border-neutral-400 flex justify-center items-center">
                  <Recycle />
                </div>
                <div>
                  <p className="flex justify-between">
                    <span className="text-[0.875em] font-bold">
                      Return Policy
                    </span>
                  </p>
                  <p className="text-[0.75em] text-neutral-800">
                    Delivery Fees ₦500
                  </p>
                  <p className="text-[0.75em] text-neutral-800">
                    Free return within 7 days for ALL eligible items
                    <Link href="" className="text-blue-900 hover:underline">
                      Details
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Seller Information */}
          <section className="bg-white p-4 mt-4 rounded-md shadow-lg">
            <div>
              <h2 className="flex justify-between items-center">
                <span className="uppercase text-[0.75em] font-bold">
                  Seller Information
                </span>{" "}
                <Link href="">
                  <ChevronRight width={15} height={15} />
                </Link>
              </h2>
              <div className="flex justify-between">
                <div className="text-[0.78em]">
                  <p className="font-bold my-2">Liangzai2021-SEA-COD</p>
                  <p>
                    <i className="not-italic font-bold text-neutral-700">94%</i>{" "}
                    Seller Score
                  </p>
                  <p>
                    <i className="not-italic font-bold text-neutral-700">
                      1454
                    </i>{" "}
                    Followers
                  </p>
                </div>
                <OrangeBtn className="h-[35px]" />
              </div>
              <h3 className="flex gap-2 items-center text-neutral-700 text-[0.875em] font-bold text-neutral-700] my-4">
                Seller Performance
                <Link href="" className="hover:text-orange-600">
                  <InfoIcon width={15} height={15} />
                </Link>
              </h3>
              <span className="flex gap-2 items-center">
                <KickIcon width={14} height={14} />
                <p className="text-[0.75em]">
                  Shipping Speed: <strong>Excellent</strong>
                </p>
              </span>

              <span className="flex gap-2 items-center">
                <KickIcon width={14} height={14} />
                <p className="text-[0.75em]">
                  Quality Score: <strong>Excellent</strong>
                </p>
              </span>

              <span className="flex gap-2 items-center">
                <KickIcon width={14} height={14} />
                <p className="text-[0.75em]">
                  Customer Rating: <strong>Good</strong>
                </p>
              </span>
            </div>
          </section>

          {/* Product Details */}
          <section className="bg-white shadow-lg rounded-md my-4 w-full">
            <Link
              href="#productDetails"
              className="flex gap-4 justify-start pl-4 h-10 border-[1px] items-center border-neutral-300 hover:bg-neutral-400"
            >
              <FileIcon />
              <p>Product details</p>
            </Link>
            <Link
              href="#Specification"
              className="flex gap-4 justify-start pl-4 h-10 border-[1px] items-center border-neutral-300 hover:bg-neutral-400"
            >
              <SlidersIcon />
              <p>Specification</p>
            </Link>
            <Link
              href="#verifiedCustomer"
              className="flex gap-4 justify-start pl-4 h-10 border-[1px] items-center border-neutral-300 hover:bg-neutral-400"
            >
              <MessageSquare />
              <p>Verified Customer Feedback</p>
            </Link>
          </section>

          {/* add to cart */}
          <section className="">
            <div className="bg-white p-2 rounded-md">
              <div className="flex gap-4">
                <div className="relative h-24 w-24">
                  <Image
                    fill
                    src={blender.image}
                    alt="test logo"
                    style={{ objectFit: "cover", borderRadius: "5px" }}
                  />
                </div>
                <div>
                  <p>{blender.nameOfProducts}</p>
                  <p className="font-bold">
                    ₦
                    {new Intl.NumberFormat("en-NG").format(
                      parseFloat(blender.newPrice)
                    )}
                  </p>
                  <p>
                    <span className="text-[0.75em] line-through text-neutral-600">
                      ₦{" "}
                      {new Intl.NumberFormat("en-NG").format(
                        parseFloat(blender.newPrice / blender.oldPrice).toFixed(
                          0
                        )
                      )}
                    </span>
                    <span className="text-[0.65em] ml-2 text-orange-500 font-bold">
                      -{blender.percent}%
                    </span>
                  </p>
                </div>
              </div>
              <button className="bg-orange-600 flex gap-4 h-[40px] text-[0.75em] rounded-md text-white uppercase items-center w-full mt-4 justify-center">
                <ChartIcon />
                <span>Add to cart</span>
              </button>
            </div>

            <div className="bg-white p-4 mt-4">
              <p className="text-[0.90em] text-center mb-2">
                Questions about this product?
              </p>
              <button className="flex justify-center w-full hover:text-orange-600">
                <MessageSquare />
                <span className="uppercase text-[0.875em] ml-2">Chat</span>
              </button>
            </div>
          </section>
        </aside>
      </section>
    </main>
    </BlenderDetailsContext.Provider>
  );
}
