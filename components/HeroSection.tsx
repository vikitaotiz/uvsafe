import Image from "next/image";
import { getBase64 } from "@/lib/getBase64";
import Link from "next/link";

const HeroSection = async () => {
  const blurredBackground = await getBase64(
    "https://res.cloudinary.com/denphvygd/image/upload/v1695491306/background_hq9kip.jpg"
  );

  return (
    <div className="bg-white">
      <div className="h-screen relative overflow-hidden m-0 p-0 flex flex-col">
        <Image
          alt="Albinism"
          src="https://res.cloudinary.com/denphvygd/image/upload/v1695491306/background_hq9kip.jpg"
          className="object-cover"
          fill
          placeholder="blur"
          blurDataURL={blurredBackground}
          priority
        />

        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="text-white absolute inset-y-0 p-10 my-24 z-1 md:h-4/5 h-4/4 w-4/4 right-0 md:w-3/5 flex flex-col justify-center">
          <p className="2xl:text-5xl lg:text-4xl md:text-2xl text-xl uppercase font-black">
            <span className="text-orange-500 hover:-translate-y-0.5 hover:cursor-default hover:text-orange-300 duration-500 inline-block">
              UVSafe
            </span>{" "}
            is dedicated to empowering individuals with{" "}
            <span className="text-orange-500 hover:-translate-y-0.5 hover:cursor-default hover:text-orange-300 duration-500 inline-block italic">
              Albinism
            </span>{" "}
            by offering innovative{" "}
            <span className="text-orange-500 hover:-translate-y-0.5 hover:cursor-default hover:text-orange-300 duration-500 inline-block">
              solutions
            </span>
            , sun{" "}
            <span className="text-orange-500 transform-origin-center hover:-translate-y-0.5 hover:cursor-default hover:text-orange-300 duration-500 inline-block">
              protection
            </span>{" "}
            and{" "}
            <span className="text-orange-500 hover:-translate-y-0.5 hover:cursor-default hover:text-orange-300 duration-500 inline-block">
              support
            </span>{" "}
            services to enhance their lives and address unique challenges with
            compassion and expertise.
          </p>

          <div className="flex flex-row gap-5 my-10 md:items-end">
            <Link href="/auth">
              <button className=" bg-transparent h-[50px] lg:h-[65px] hover:bg-orange-500 hover:scale-95 text-sm md:text-xl transition-colors duration-300 text-white font-semibold hover:text-white py-2 px-2 sm:px-12 border-2 border-white hover:border-transparent mb-10">
                Sign Up Today
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-white flex flex-col w-full items-center justify-center lg:p-2 p-8 mb-10">
        <h1 className="font-medium xl:text-3xl lg:text-3xl text-2xl text-[#431407] w-full p-0 lg:p-12 m-0 mb-12 text-center leading-12 xl:leading-relaxed">
          <span className="font-extrabold text-orange-500 transform-origin-center hover:-translate-y-1.5 hover:cursor-pointer hover:text-black duration-500 inline-block">
            Join us Today
          </span>{" "}
          at UVSafe and step into a world of sun-kissed possibilities, where
          your well-being shines as bright as your future!
        </h1>
        <div className=" grid justify-items-center">
          {/* <button className=" bg-transparent hover:bg-orange-500 text-orange-700 hover:scale-95 transition-colors duration-300 font-extrabold hover:text-white py-2 px-4 border-2 border-orange-500 hover:border-transparent rounded mb-10 lg:w-48 lg:py-3 xl:w-56 xl:py-4 xl:text-xl text-base">
            Volunteer With Us
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
