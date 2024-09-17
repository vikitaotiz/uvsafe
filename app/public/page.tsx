"use client";

// pages/page.tsx
import Link from "next/link";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

const hospitals = [
  { name: "Mbagathi", slug: "mbagathi" },
  { name: "Mama Lucy", slug: "mama-lucy" },
  { name: "Thika Level 5", slug: "thika" },
  { name: "Machakos Level 5", slug: "machakos" },
  { name: "Kajiado Level 5", slug: "kajiado" },
];

const HomePage = () => {
  return (
    <>
      {" "}
      <Navbar />
      <div>
        <Image
          alt="Albinism"
          src="https://images.pexels.com/photos/4452209/pexels-photo-4452209.jpeg"
          className="object-fill"
          width={1500}
          height={200}
        />
      </div>
      <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 p-4 md:p-8 lg:p-16">
        <Head>
          <title>HOSPITALS</title>
        </Head>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-2 md:gap-4 lg:gap-8">
          {hospitals.map((hospital) => (
            <Link key={hospital.slug} href={`/hospitals`}>
              <div className="p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300 border-4 border-orange-300 bg-orange-50 cursor-pointer">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-36 lg:h-36 relative overflow-hidden rounded-full border-2 border-orange-300">
                    <img
                      src={`/images/${hospital.slug}.jpg`}
                      alt={`${hospital.name} Hospital`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-2">
                  {hospital.name}
                </h2>
                <p className="text-gray-600">Click for details</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
