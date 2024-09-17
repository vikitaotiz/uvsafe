import React from "react";
import Image from "next/image";
import Link from "next/link";
import { categories } from "@/data/shopCategories";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Shop = () => {
  return (
    <>
      <Navbar />
      <main className="max-w-8xl m-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 place-items-center my-8">
          {categories.map((category) => (
            <div
              key={category.id}
              className="mb-8 w-11/12 xs:w-11/12 space-y-2"
            >
              <h2 className="text-xl text-orange-600">{category.name}</h2>
              <div className="relative rounded-lg h-52 lg:h-60 overflow-hidden hover:scale-105 transition-transform duration-300 ease-in-out">
                <Link href={category.href}>
                  <Image
                    src={category.imageUrl}
                    alt={category.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black opacity-0 hover:opacity-60 transition-opacity duration-300 ease-in-out"></div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
      <div className="mb-0 mt-32">
        <Footer />
      </div>
    </>
  );
};

export default Shop;
