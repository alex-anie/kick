'use client'

import Link from "next/link";
import Logo from "../logo/Logo";
import ChevronDownIcon from "../svg-icons/ChevronDownIcon";
import Hamburger from "../svg-icons/hamburger";
import HelpIcon from "../svg-icons/HelpIcon";
import KickIcon from "../svg-icons/KickIcon";
import SearchIcon from "../svg-icons/SearchIcon";
import UserIcon from "../svg-icons/UserIcon";
import ChartIcon from "../svg-icons/ChartIcon";
import VerticalDotLines from "../svg-icons/VerticalDotLines";
import { CartItemsContext } from "@/app/RootLayoutClient";

import React, { useContext } from 'react'
export default function Navbar() {
    const {cartItems} = useContext(CartItemsContext);

  return (
    <main>
        <header className="bg-white w-screen fixed left-0 top-0 z-[100]">
            <nav className="flex w-[90%] h-14 mx-auto justify-between items-center">

                {/* Logo Section */}
               <aside className="flex gap-5 lg:basis-1/4">
                 {/* Hamburger */}
                 <div className="lg:hidden">
                    <Hamburger />
                </div>

                {/* Logo */}
                <div>
                   <Link href="/">
                    <Logo 
                        Icon={KickIcon}
                        propsStyle={{width: 30, height: 30}}
                        className="text-2xl font-semibold select-none cursor-pointer"
                        />
                   </Link>
                </div>
               </aside>

                {/* Menu buttons */}
               <aside className="flex justify-between gap-5 h-full items-center lg:basis-9/12">
                     {/* Search bar */}
                <div className="hidden lg:flex gap-4 items-center">
                    <span className="lg:flex border-[1px] border-neutral-950 rounded-md h-8 items-center gap-2 pl-2">
                        <SearchIcon width={18} height={18}/>
                        <input type="search" name="search" id="search" placeholder="Search products, brands and categories" className="w-[90%] h-full outline-none"/>
                    </span>
                    <button type="button" className="bg-orange-600 h-8 px-3 rounded-md text-white uppercase text-[0.8em] font-bold hover:bg-white hover:text-orange-600 transition-colors duration-500">Search</button>
                </div>

                {/* Nav buttons */}
                <div className="flex gap-3">
                    <button className="flex gap-2 h-full items-center select-none hover:text-orange-600 cursor-pointer">
                        <UserIcon width={20} height={20}/>
                        <p className="hidden lg:inline-flex">Account</p>
                        <ChevronDownIcon width={15} height={15} className="hidden lg:inline-flex"/>
                    </button>

                    <button className="hidden lg:flex gap-2 h-full items-center select-none hover:text-orange-600 cursor-pointer">
                        <HelpIcon width={20} height={20}/>
                        <p>Help</p>
                        <ChevronDownIcon width={15} height={15}/>
                    </button>

                    <Link href="/cart">
                    <button className="relative flex gap-2 h-full items-center select-none hover:text-orange-600 cursor-pointer">
                        <ChartIcon width={20} height={20}/>
    
                        <p  className="hidden lg:inline-flex">Cart</p>
                        {cartItems >= 1 ? ( <span className="absolute bottom-3 left-3 flex items-center justify-center rounded-full font-bold text-[0.45em] bg-orange-600 text-white h-4 w-4">{cartItems}</span>): null}
                       
                    </button>
                    </Link>

                    <span>

                    </span>
                </div>

                {/* Option Buttons */}
                <div className="hidden lg:flex hover:bg-orange-300 cursor-pointer p-2 rounded-full">
                    <VerticalDotLines />
                </div>
               </aside>
            </nav>

            <div className="lg:hidden w-[90%] mx-auto">
                    <span className="flex border-[1px] border-neutral-950 rounded-full h-8 my-4 items-center justify-start gap-2 pl-2">
                        <SearchIcon width={18} height={18} className=""/>
                        <input type="search" name="search" id="search" placeholder="Search products, brands and categories" className="w-[90%] h-full outline-none"/>
                        <button type="button" className="hidden">Search</button>
                    </span>
            </div>
        </header>
    </main>
)
}
