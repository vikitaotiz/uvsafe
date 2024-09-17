import React from "react";
import Products from "@/components/Products";
import { products } from "@/data/dummyData";

const page = () => {
  return (
    <main className="max-w-8xl m-auto">
      <h2 className="text-xl text-orange-600 mt-4 px-4">Sunscreens</h2>
      <Products />
    </main>
  );
};

export default page;
