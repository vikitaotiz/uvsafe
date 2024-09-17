// pages/page.tsx

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { HiReceiptRefund } from "react-icons/hi";

const Page = () => {
  return (
    <>
      <Navbar />
      <div>
        <Image
          alt="Albinism"
          src="https://images.pexels.com/photos/4452209/pexels-photo-4452209.jpeg"
          className="object-fill "
          width={5000}
          height={200}
        />
      </div>
      <div className="bg-orange-200 text-orange-200"> .</div>

      <div className="flex h-auto bg-orange-200">
        <div className="flex space-x-4">
          {/* Card 1: Sunscreen */}
          <div className="max-w-md bg-white shadow-md rounded-md overflow-hidden">
            <img
              src="/sunscreen-image.jpg" // Replace with your image URL
              alt="Sunscreen"
              className="w-full h-48 object-cover"
            />
            <div className="p-4 ml-auto mr-auto">
              <h2 className="text-xl font-semibold mb-2">Sunscreen</h2>
              <p className="text-gray-600">
                Here&apos;s a list of available sunscreens at the institution;
              </p>
              <div>
                <p>SunShield SPF 30 - 67 </p>
                <p> AquaSafe Sunscreen Lotion - 19 </p>
                <p>SunCare Essentials SPF 45 - 3</p>
                <p>
                  UltraBlock Sunscreen Gel SPF 70 -{" "}
                  <span className="text-red-500">out of stock</span>
                </p>
                <p>Tropical Breeze Sunscreen Spray SPF 50 - 15</p>
                <p>KidsSafe Sunscreen Stick SPF 40 - 120</p>
              </div>
            </div>
          </div>

          {/* Card 2: Eyecare */}
          <div className="max-w-md bg-white shadow-md rounded-md overflow-hidden ml-auto mr-auto">
            <img
              src="/eyecare-image.jpg" // Replace with your image URL
              alt="Eyecare"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">Eyecare</h2>
              <p className="text-gray-600">
                Book an appoitment with our specialized Dr. today.
              </p>
              <button className=" bg-orange-500 h-[50px] lg:h-[65px] hover:bg-orange-300 hover:scale-95 text-sm md:text-xl transition-colors duration-300 text-white font-semibold hover:text-white py-2 px-2 sm:px-12 border-2 border-white hover:border-transparent mt-10">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Page;
