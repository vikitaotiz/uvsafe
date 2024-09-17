import Image from "next/image";
import { getBase64 } from "@/lib/getBase64";
const AboutUs = async () => {
  const blurredBackground = await getBase64(
    "https://images.pexels.com/photos/4452209/pexels-photo-4452209.jpeg"
  );

  return (
    <>
      <div className="h-screen relative overflow-hidden m-0 p-0 flex flex-col w-full">
        <Image
          alt="Albinism"
          src="https://images.pexels.com/photos/4452209/pexels-photo-4452209.jpeg"
          className="object-cover"
          fill
          placeholder="blur"
          blurDataURL={blurredBackground}
          priority
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="text-white absolute inset-y-0 p-10 my-18 z-1 md:h-4/5 h-4/4 w-4/4 right-0 md:w-2/4 flex flex-col justify-center">
          <p className="2xl:text-5xl lg:text-4xl md:text-2xl text-xl uppercase font-black">
            At UVSafe we{" "}
            <span className="text-orange-500 hover:-translate-y-0.5 hover:cursor-default hover:text-orange-300 duration-500 inline-block">
              empower
            </span>{" "}
            those with{" "}
            <span className="text-orange-500 hover:-translate-y-0.5 hover:cursor-default hover:text-orange-300 duration-500 inline-block italic">
              Albinism
            </span>{" "}
            and all in need of sun{" "}
            <span className="text-orange-500 hover:-translate-y-0.5 hover:cursor-default hover:text-orange-300 duration-500 inline-block">
              protection
            </span>
            .{" "}
          </p>
        </div>
      </div>
      <div className="w-11/12 lg:w-2/3 mb-10 mx-auto py-16">
        <h1 className="text-3xl text-center text-black font-bold leading-[55px] lg:text-[42px] pt-5">
          <span className="text-center">
            Our{" "}
            <p className="text-orange-500 transform-origin-center hover:-translate-y-1 hover:cursor-default hover:text-orange-300 duration-500 inline-block">
              Mission
            </p>{" "}
            and{" "}
            <p className="text-orange-500 transform-origin-center hover:-translate-y-1 hover:cursor-default hover:text-orange-300 duration-500 inline-block">
              Vision
            </p>
          </span>
        </h1>
      </div>

      <div className="grid grid-cols-1 gap-20 lg:gap-0 lg:grid-cols-2 justify-items-center w-11/12 mx-auto">
        <div className=" bg-[#fb923c] shadow-md rounded-md p-10 md:w-[500px] 2xl:w-[600px] text-white text-center">
          <h2 className="text-2xl font-black mb-[22px]">Mission</h2>
          <p className="font-semibold text-sm lg:text-base 2xl:text-lg">
            {" "}
            UVSafe&prime;s mission: Be the unwavering beacon of sun protection,
            empowerment, and support for Albinism. We provide innovative
            solutions, inspire confidence, and aim for boundless sun safety.
          </p>
        </div>

        <div className=" bg-[#fb923c] shadow-md rounded-md p-10 md:w-[500px] 2xl:w-[600px] text-white text-center">
          <h2 className="text-2xl font-black mb-[22px]">Vision</h2>
          <p className="font-semibold text-sm lg:text-base 2xl:text-lg">
            {" "}
            UVSafe envisions a world where sun protection bridges endless
            possibilities, leading in Albinism care and sun safety, promoting
            joyful outdoor experiences, and ensuring everyone shines under the
            sun. Founded with this vision.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
