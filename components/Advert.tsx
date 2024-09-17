/* eslint-disable @next/next/no-img-element */
'use client';

import { gsap } from 'gsap';
import { useRef, useEffect } from 'react';
import adverts from '../data/partners.json';

const Advert = () => {
  const sliderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const logos = slider.querySelectorAll('.logo');
    const logoWidth = parseFloat(getComputedStyle(logos[0]).width);
    const animationDuration = 3;

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
    <>
      <div className="">
        <h1 className="xl:text-5xl text-2xl font-extrabold flex flex-col items-center justify-center w-full">
          <span className="text-center">
            Our{' '}
            <p className="text-orange-500 transform-origin-center hover:-translate-y-1 hover:cursor-default hover:text-orange-300 duration-500 inline-block">
              Partners
            </p>
          </span>
        </h1>

        <div className="flex flex-nowrap overflow-x-hidden w-full">
          <div
            ref={sliderRef}
            className="flex flex-nowrap whitespace-nowrap h-44 items-center filter grayscale px-0 mx-0"
          >
            <div className=" logo opacity-40 p-8 w-[300px] flex items-center justify-center">
              <img
                src={adverts.notion}
                alt="advert 1"
                className="w-27.75 h-16"
              />
            </div>
            <div className="logo opacity-40 p-10 w-[300px]">
              <img
                src={adverts.jagex}
                alt="advert 2"
                className="w-27.75 h-16 object-contain"
              />
            </div>
            <div className="logo opacity-40 p-10 w-[300px]">
              <img
                src={adverts.solana}
                alt="advert 3"
                className="w-27.75 h-16 object-contain"
              />
            </div>
            <div className="logo opacity-40 p-10 w-[300px]">
              <img
                src={adverts.nintendo}
                alt="advert 4"
                className="w-27.75 h-auto object-contain"
              />
            </div>
            <div className="logo opacity-40 p-10 w-[300px]">
              <img
                src={adverts.supabase}
                alt="advert 5"
                className="w-27.75 h-16 object-contain"
              />
            </div>
            <div className="logo opacity-40 p-10 w-[300px]">
              <img
                src={adverts.elastic}
                alt="advert 6"
                className="w-27.75 h-16 object-contain"
              />
            </div>
            <div className="logo opacity-40 p-10 w-[300px]">
              <img
                src={adverts.framer}
                alt="advert 7"
                className="w-27.75 h-16 object-contain"
              />
            </div>
            <div className="logo opacity-40 p-10 w-[200px]">
              <img
                src={adverts.underarmour}
                alt="advert 8"
                className="w-27.75 h-16 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Advert;
