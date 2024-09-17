"use client"

import React, { useEffect, useRef, useState } from "react";
import { gsap } from 'gsap';
import Image from "next/image";

const products = [
    {
      id: 1,
      name: "Crochet Sweaters",
      visit: "Purchase",
      visitLink:
        "https://www.jumia.co.ke/fashion-cropped-blouses-cardigan-female-knitted-ladies-sweaters-crochet-top-sky-blue-101724622.html",
      imageUrl:
        "https://images.pexels.com/photos/5710046/pexels-photo-5710046.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      name: "Makari Sunscren",
      content: "Moisturizing Sunscreen SPF 50 - Makari Shop",
      visit: "Purchase",
      visitLink:
        "https://shopmakari.com/search?q=sunscreen&options%5Bprefix%5D=last",
      imageUrl:
        "https://imgs.search.brave.com/nxa2E7sDp6FSBnJkfvsQwa21_x9C_iNno1Wpd7LAtw0/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9zdW5z/Y3JlZW4tcHJvZHVj/dHMtc3VuZ2xhc3Nl/cy13b29kZW4tdGFi/bGUtZC1zdW5zY3Jl/ZW4tcHJvZHVjdHMt/c3VuZ2xhc3Nlcy13/b29kZW4tdGFibGUt/ZC1yZW5kZS0xMTg2/NDkwNjMuanBn",
    },
    {
      id: 3,
      name: "Sunglasses",
      visit: "Purchase",
      visitLink:
        "https://www.alibaba.com/product-detail/Sunglasses-Fashion-Men-Women-Sport-Polarized_1600847815059.html?spm=a2700.galleryofferlist.topad_classic.d_image.564355c0VrjkYo",
      imageUrl:
        "https://images.unsplash.com/photo-1584036553516-bf83210aa16c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHN1bmdsYXNzZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60",
    },
    {
      id: 4,
      name: "SPF30",
      content: "BeautyClick - Skincare products that work",
      visit: "Purchase",
      visitLink: "https://beautyclick.co.ke/collections/skin-care/sunscreen",
      imageUrl:
        "https://imgs.search.brave.com/09752eIz4ghoZPfbMAvRM9zwNllUaf8e1hmGQ77VvuA/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzc2LzRi/L2FjLzc2NGJhYzA5/NTc5MWQzM2MxMzc5/YWVkNTAzOTU3YTc4/LmpwZw",
    },
    {
      id: 5,
      name: "Blue Fedora Hat",
      visit: "Purchase",
      visitLink:
        "https://www.kilimall.co.ke/new/goods/19704291-Fashion-Hat-Panama-Straw-Fedora-Trilby-Cap-Foldable-Travel-Brim-Wide-Mens-Ladies-Summer",
      imageUrl:
        "https://image.kilimall.com/kenya/shop/store/goods/9656/2023/10/1698203543040cc743de151654d9db7553a98db4ee4fc_720.jpg.webp",
    },
    {
      id: 6,
      name: "Women Summer Driving Gloves",
      visit: "Purchase",
      visitLink:
        "https://www.jumia.co.ke/fashion-2021-new-fashion-flowers-womens-summer-driving-gloves-non-slip-block-uv-touch-screen-gloves-breathable-cotton-gloves-for-women-81-deep-pink-57542887.html",
      imageUrl:
        "https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/78/824575/1.jpg?5780",
    },
  ]; // Add more items if needed

const Offers = () => {

  const sliderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const logos = slider.querySelectorAll('.logo');
    const logoWidth = logos[0]?.clientWidth;
    const animationDuration = 5;

    const totalWidth = logos.length * logoWidth;

    const clonedLogos = Array.from(logos).map((logo) => logo.cloneNode(true));
    clonedLogos.forEach((clonedLogo) => {
      slider.appendChild(clonedLogo);
    });

    gsap.set(slider, { x: 0 });

    gsap.to(slider, {
      x: -totalWidth,
      ease: 'linear',
      duration: (totalWidth / logoWidth) * animationDuration,
      repeat: -1, // Infinite loop
    });
  }, []);

  return (
    <div className="flex flex-col py-20">
     <h3 className="text-3xl text-center text-black font-bold leading-[55px] lg:text-[42px] py-16">Offers. <span className="text-orange-500 transform-origin-center  hover:-translate-y-1 hover:cursor-default hover:text-orange-300 duration-500 inline-block">50%</span>     Sale</h3>
    <div className="flex flex-nowrap overflow-x-hidden w-full">
      <div
        ref={sliderRef}
        className="flex gap-x-4 flex-nowrap whitespace-nowrap"
      >
        {products.map((product) => (
          <div key={product.id} className="logo h-64 w-80">
            <div className="relative h-52">
              <Image
                src={product.imageUrl}
                alt={product.name}
                fill
                className="object-cover rounded-md"
              />
            </div>
            <div className="w-10/12 text-center">
              <h4 className="whitespace-nowrap w-full truncate font-semibold text-xs">
                {product.name}
              </h4>
              <button className="bg-orange-400 text-white py-1 px-3 text-xs font-semibold">
                <a target="_blank" href={product.visitLink}>
                  {product.visit}
                </a>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Offers;