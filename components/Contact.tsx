"use client";

import { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";
import { FaMapPin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("Name", name);
    console.log("Email", email);
    console.log("Message", message);
  };

  const isSubmitDisabled = !(name && email && message);

  return (
    <>
      <h1 className="text-3xl text-center text-black font-bold leading-[55px] lg:text-[42px] py-4 lg:py-16">
        <span className="text-center">
          Get In{" "}
          <p className="text-orange-500 transform-origin-center hover:-translate-y-1 hover:cursor-default hover:text-orange-300 duration-500 inline-block">
            Touch
          </p>
        </span>
      </h1>

      <div className="w-11/12 mx-auto my-10 bg-[#fb923c] overflow-hidden p-5 rounded-lg space-y-5 flex flex-col xl:flex-row xl:items-center xl:justify-center">
        <div className="space-y-5 xl:mr-3">
          <div className="flex flex-col space-y-5">
            <div className="inline-flex space-x-2 items-center">
              <FaPhoneAlt className="text-[#c2410c] text-xl" />
              <span className="cursor-pointer text-white hover:text-[#fef08a]">
                +254 (700) 123-4567
              </span>
            </div>
            <div className="inline-flex space-x-2 items-center">
              <FaMailBulk className="text-[#c2410c] text-lg" />
              <span className="cursor-pointer text-white hover:text-[#fef08a]">
                contact@uvsafe.com
              </span>
            </div>
            <div className="inline-flex space-x-2 items-center">
              <FaMapPin className="text-[#c2410c] text-xl" />
              <span className="cursor-pointer text-white hover:text-[#fef08a]">
                123, UVSafe Avenue, Nairobi
              </span>
            </div>
          </div>

          <div className=" flex space-x-4 text-lg text-white">
            <FaInstagram className="text-2xl cursor-pointer hover:text-[#fde047]" />
            <FaTwitter className=" text-2xl cursor-pointer hover:text-[#60a5fa]" />
            <FaLinkedin className=" text-2xl cursor-pointer hover:text-[#60a5fa]" />
            <FaYoutube className=" text-2xl cursor-pointer hover:text-[#ef4444]" />
          </div>
        </div>

        <div className="w-full xl:w-1/4">
          <div className="relative">
            <div className="absolute z-0 w-40 h-40 bg-[#fef08a] rounded-full -top-28 -right-10"></div>
          </div>
          <div className="relative">
            <div className="absolute z-0 w-40 h-40 bg-[#fef08a] rounded-full -bottom-[488px] -left-16  "></div>
          </div>

          <div className="relative z-10 bg-white w-full rounded-lg shadow-lg p-5 text-gray-600">
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
              <div>
                <label htmlFor="name" className="text-sm">
                  Your Name
                </label>
                <input
                  onChange={(e) => setName(e.target.value)}
                  id="name"
                  value={name}
                  type="text"
                  placeholder="Your name"
                  className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-orange-300"
                />
              </div>

              <div>
                <label htmlFor="email" className="text-sm">
                  Email Address
                </label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  id="email"
                  value={email}
                  type="email"
                  placeholder="Email Address"
                  className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-orange-300"
                />
              </div>

              <div>
                <label htmlFor="message" className="text-sm">
                  Message
                </label>
                <textarea
                  onChange={(e) => setMessage(e.target.value)}
                  id="message"
                  value={message}
                  placeholder="Message"
                  rows={4}
                  className="ring-1 ring-gray-300
                    w-full rounded-md px-4 py-2 mt-2 outline-none
                    focus:ring-orange-300"
                ></textarea>
              </div>

              <button
                disabled={isSubmitDisabled}
                className="disabled:bg-gray-300 inline-block self-end bg-orange-400 text-white font-bold rounded-lg px-6 py-2 uppercase text-sm"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
