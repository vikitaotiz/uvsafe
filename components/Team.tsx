import Image from "next/image";
import one from "../public/1.jpg";
import two from "../public/2.jpg";
import three from "../public/3.jpg";
import five from "../public/5.jpg";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Team = () => {
  return (
    <div className="space-y-5 w-11/12 mx-auto lg:2/3 py-16">
      <div>
        <h1 className="text-3xl text-center text-black font-bold leading-[55px] lg:text-[42px] pt-5">
          <span className="text-center">
            Meet Our{" "}
            <p className="text-orange-500 transform-origin-center hover:-translate-y-1 hover:cursor-default hover:text-orange-300 duration-500 inline-block">
              Team
            </p>
          </span>
        </h1>

        <p className="text-center text-base lg:text-xl 2xl:text-2xl 2xl:py-20 font-semibold py-10">
          &ldquo;Meet Our Programming Pioneers! Our team is a collective of tech
          trailblazers, shaping UVSafe&prime;s future with innovation and
          dedication.&rdquo;
        </p>
      </div>

      <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        <div className="bg-[#fb923c] shadow-md rounded-md w-full py-8 px-4 text-white text-center cursor-pointer">
          <div className="flex flex-col md:flex-row items-center justify-center">
            <Image
              className=" h-24 w-24 object-cover rounded-full shadow-md border-4 border-white"
              alt="2"
              src={five}
            />
          </div>

          <h2 className="text-2xl font-semibold mb-[7px]">Giggs Bradly</h2>
          <p className="font-medium uppercase">Project Manager</p>

          <div className="icons flex mt-[10px] justify-center gap-2">
            <FaGithub className="cursor-pointer hover:text-[#44403c]" />
            <FaTwitter className="cursor-pointer hover:text-[#7dd3fc]" />
            <FaLinkedin className="cursor-pointer hover:text-[#60a5fa]" />
          </div>
        </div>

        <div className="bg-[#fb923c] shadow-md rounded-md w-full py-8 px-4 text-white text-center cursor-pointer">
          <div className="flex flex-col md:flex-row items-center justify-center">
            <Image
              className="h-24 w-24 object-cover rounded-full shadow-md border-4 border-white"
              alt="2"
              src={two}
            />
          </div>

          <h2 className="text-2xl font-semibold mb-[7px]">Ken White</h2>
          <p className="font-medium uppercase">Backend Developer</p>

          <div className="icons flex mt-[10px] justify-center gap-2">
            <FaGithub className="cursor-pointer hover:text-[#44403c]" />
            <FaTwitter className="cursor-pointer hover:text-[#7dd3fc]" />
            <FaLinkedin className="cursor-pointer hover:text-[#60a5fa]" />
          </div>
        </div>

        <div className="bg-[#fb923c] shadow-md rounded-md w-full py-8 px-4 text-white text-center cursor-pointer">
          <div className="flex flex-col md:flex-row items-center justify-center">
            <Image
              className="h-24 w-24 object-cover rounded-full shadow-md border-4 border-white"
              alt="2"
              src={one}
            />
          </div>

          <h2 className="text-2xl font-semibold mb-[7px]">
            Elizabeth Odhiambo
          </h2>
          <p className="font-medium uppercase">Software Developer</p>

          <div className="icons flex mt-[10px] justify-center gap-2">
            <FaGithub className="cursor-pointer hover:text-[#44403c]" />
            <FaTwitter className="cursor-pointer hover:text-[#7dd3fc]" />
            <FaLinkedin className="cursor-pointer hover:text-[#60a5fa]" />
          </div>
        </div>

        <div className="bg-[#fb923c] shadow-md rounded-md w-full py-8 px-4 text-white text-center cursor-pointer">
          <div className="flex flex-col md:flex-row items-center justify-center">
            <Image
              className="h-24 w-24 object-cover rounded-full shadow-md border-4 border-white"
              alt="2"
              src={three}
            />
          </div>

          <h2 className="text-2xl font-semibold mb-[7px]">Ellon Mordecai</h2>
          <p className="font-medium uppercase">Software Developer</p>

          <div className="icons flex mt-[10px] justify-center gap-2">
            <FaGithub className="cursor-pointer hover:text-[#44403c]" />
            <FaTwitter className="cursor-pointer hover:text-[#7dd3fc]" />
            <FaLinkedin className="cursor-pointer hover:text-[#60a5fa]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
