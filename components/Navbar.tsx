"use client";

import Link from "next/link";
import MobileNav from "@/components/MobileNavbar";
import { signOut, useSession } from "next-auth/react";
import { Button } from "./ui/button";

const Navbar = () => {
  const session = useSession();
  return (
    <header className="sticky bg-white flex items-center h-16 top-0 left-0 right-0 z-30 shadow-sm">
      <nav className="container max-w-8xl mx-auto px-4 w-full flex justify-between items-center">
        <Link href={"/"} className="font-bold text-4xl">
          <span>UV</span>
          <span className="text-orange-600">Safe</span>
        </Link>

        {/* Desktop Screen */}
        <div className="hidden text-lg md:flex space-x-2 lg:space-x-4">
          <Link
            href={"/"}
            className="bg-transparent hover:text-orange-600 p-2 lg:px-4 rounded-full"
          >
            Home
          </Link>

          <Link
            href={"/about"}
            className="bg-transparent hover:text-orange-600 p-2 lg:px-4 rounded-full"
          >
            About Us
          </Link>

          <Link
            href={"/public"}
            className="bg-transparent hover:text-orange-600 p-2 lg:px-4 rounded-full"
          >
            Hospitals
          </Link>

          {/* <Link
            href={'/eyecare'}
            className="bg-transparent hover:text-orange-600 p-2 lg:px-4 rounded-full"
          >
            Eye Care
          </Link>

          <Link
            href={'/blog'}
            className="bg-transparent hover:text-orange-600 p-2 lg:px-4 rounded-full"
          >
            Blog
          </Link>

          <Link
            href={'/resource'}
            className="bg-transparent hover:text-orange-600 p-2 lg:px-4 rounded-full"
          >
            Resource Hub
          </Link> */}

          <Link
            href={"/shop"}
            className="bg-transparent hover:text-orange-600 p-2 lg:px-4 rounded-full"
          >
            Shop
          </Link>
          {session.status === "authenticated" ? (
            <Button onClick={() => signOut({ callbackUrl: "/auth" })} className="bg-orange-500 rounded-lg text-white text-md">
              Sign Out
            </Button>
          ) : (
            <></>
          )}
        </div>

        {/* Mobile Screen */}
        <MobileNav />
      </nav>
    </header>
  );
};
export default Navbar;
