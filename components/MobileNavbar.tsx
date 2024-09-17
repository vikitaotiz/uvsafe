"use client";

import Link from "next/link";
import React, { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

export default function MobileNav() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="md:hidden">
      {/* Mobile view Hamburger & Close Icons */}
      <button onClick={toggleNav} className="text-orange-600">
        {isNavOpen ? <AiOutlineClose size={30} /> : <HiMenu size={30} />}
      </button>

      {/* Mobile view Hyper links */}
      <div
        className={`${
          isNavOpen ? "block" : "hidden"
        } md:hidden z-10 fixed top-16 right-0 bottom-0 h-full w-3/4 border-l-2 px-4 bg-white ease-in duration-300`}
      >
        <div className="text-lg flex flex-col items-center gap-4 ">
          <ul className="">
            <li className="bg-transparent hover:text-orange-600 p-2 lg:px-4 rounded-full m-2">
              <Link href="/" onClick={toggleNav}>
                Home
              </Link>
            </li>

            <li className="bg-transparent hover:text-orange-600 p-2 lg:px-4 rounded-full m-2">
              <Link href="/about" onClick={toggleNav}>
                About Us
              </Link>
            </li>

            <li className="bg-transparent hover:text-orange-600 p-2 lg:px-4 rounded-full m-2">
              <Link href="/public" onClick={toggleNav}>
                Hospitals
              </Link>
            </li>

            {/* <li className="bg-transparent hover:text-orange-600 p-2 lg:px-4 rounded-full m-2">
              <Link href="/eyecare" onClick={toggleNav}>
                Eye Care
              </Link>
            </li>

            <li className="bg-transparent hover:text-orange-600 p-2 lg:px-4 rounded-full m-2">
              <Link href="/blog" onClick={toggleNav}>
                Blog
              </Link>
            </li>

            <li className="bg-transparent hover:text-orange-600 p-2 lg:px-4 rounded-full m-2">
              <Link href="/resource" onClick={toggleNav}>
                Resource Hub
              </Link>
            </li> */}

            <li className="bg-transparent hover:text-orange-600 p-2 lg:px-4 rounded-full m-2">
              <Link href="/shop" onClick={toggleNav}>
                Shop
              </Link>
            </li>
          </ul>

          <button
            type="button"
            className="text-lg border-2 bg-orange-600 px-8 py-2 rounded-xl text-white text-base"
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}
