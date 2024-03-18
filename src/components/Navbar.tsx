"use client";
import { Heart, Menu, Search, ShoppingCart, Sofa } from "lucide-react";
import Link from "next/link";
import React from "react";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <>
      <nav className="hidden lg:flex lg:flex-row w-full bg-white text-[#2F302C] h-20 justify-center items-center gap-20">
        <div className="flex gap-16">
          <div className="flex gap-2 justify-center items-center">
            <Sofa size="26" color="#2F302C" />
            <h1 className="font-black text-[24px] tracking-wider">FURNITURE</h1>
          </div>
          <div className="flex w-[264px] border-b-2 border-gray-200 gap-4">
            <Search color="#2F302C" size="18" className="mt-2" />

            <input
              placeholder="Search something"
              className=" text-[16px] font-medium  outline-none  "
            ></input>
          </div>
        </div>

        <ul className="flex gap-11 text-[14px] font-bold">
          <li>
            <Link href="/">HOME</Link>
          </li>
          <li>
            <Link href="/shop">SHOP</Link>
          </li>
          <li>
            <Link href="/blog">BLOG</Link>
          </li>
          <li>
            <a href="#aboutus">ABOUT US</a>
          </li>
        </ul>

        <ul className="ml-20 flex gap-11 text-[14px] font-bold">
          <li>
            <div className="flex gap-1 justify-center items-center">
              <Heart size="16" />
              LOVE
            </div>
          </li>
          <li>
            <div className="flex gap-1 justify-center items-center">
              <ShoppingCart size="16" />
              CART
            </div>
          </li>
        </ul>
      </nav>
      <nav className="lg:hidden w-full flex bg-white text-[#2F302C] h-14 justify-center items-center gap-20">
        <Sofa size="26" color="#2F302C" />
        <div className="flex w-[264px] border-b-2 border-gray-200 gap-4">
          <Search color="#2F302C" size="18" className="mt-1" />

          <input
            placeholder="Search something"
            className=" text-[16px] font-medium  outline-none  "
          ></input>
        </div>
        <button>
          <Menu />
        </button>
      </nav>
    </>
  );
};

export default Navbar;
