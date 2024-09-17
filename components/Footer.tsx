import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="  bg-gray-200 h-1/2 w-full flex flex-col  md:flex-row justify-around items-start ">
        <div className="p-5">
          <ul>
            <p className="text-gray-800 font-bold text-3xl pb-6">
              UV
              <span className="text-orange-500">Safe</span>
            </p>
            <div className=" flex gap-6 pb-5">
              <FaInstagram className="text-2xl cursor-pointer hover:text-yellow-600" />
              <FaTwitter className=" text-2xl cursor-pointer hover:text-blue-600" />
              <FaLinkedin className=" text-2xl cursor-pointer hover:text-blue-600" />
              <FaYoutube className=" text-2xl cursor-pointer hover:text-red-600" />
            </div>
          </ul>
        </div>

        <div className="p-5">
          <ul>
            <p className=" text-gray-800 font-bold text-2xl pb-4">Products</p>
            <li className=" text-gray-500 text-md pb-2 font-semibold hover:text-orange-600 cursor-pointer">
              UVSafe Sunscreen
            </li>
            <li className=" text-gray-500 text-md pb-2 font-semibold hover:text-orange-600 cursor-pointer">
              UV-Protective Clothing
            </li>
            <li className=" text-gray-500 text-md pb-2 font-semibold hover:text-orange-600 cursor-pointer">
              UV-Blocking Accessories
            </li>
          </ul>
        </div>

        <div className="p-5">
          <ul>
            <p className=" text-gray-800 font-bold text-2xl pb-4">Company</p>
            <li className=" text-gray-500 text-md pb-2 font-semibold hover:text-orange-600 cursor-pointer">
              <a href="/team">Team</a>
            </li>
            <li className=" text-gray-500 text-md pb-2 font-semibold hover:text-orange-600 cursor-pointer">
              <a href="/about">About Us</a>
            </li>

            <li className=" text-gray-500 text-md pb-2 font-semibold hover:text-orange-600 cursor-pointer">
              <a href="/history">History</a>
            </li>
          </ul>
        </div>

        <div className="p-5">
          <ul>
            <p className="text-gray-800 font-bold text-2xl pb-4">Support</p>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-orange-600 cursor-pointer">
              <a href="/contact">Contact Us</a>
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-orange-600 cursor-pointer">
              Customer Support
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-orange-600 cursor-pointer">
              Community Forum
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-orange-600 cursor-pointer">
              Newsletter Subscription
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center text-center p-2  bg-gray-100">
        <h1 className="text-gray-800 font-semibold">
          &copy; 2023 All rights reserved | Build with ❤️ by {""}
          <span className="text-[#ef4444] hover:text-orange-600 font-semibold cursor-pointer">
            SeriousDevs
          </span>{" "}
        </h1>
      </div>
    </>
  );
};

export default Footer;
