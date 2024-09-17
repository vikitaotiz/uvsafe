"use client";

import { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";
import { FaMapPin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();

    console.log("Name", name);
    console.log("Email", email);
    console.log("Message", message);
  };

  return (
    <>
      <Navbar />
      <div className="antialiased bg-gray-100">
        <div className="flex w-full min-h-screen justify-center items-center">
          <div className="flex flex-col md:flex-row md:space-y-0 space-y-6 md:space-x-6 bg-[#fb923c] w-full max-w-4xl p-8 sm:p-12 rounded-xl shadow-lg text-white overflow-hidden">
            <div className="flex flex-col space-y-8 justify-between">
              <div>
                <h1 className="font-bold text-4xl tracking-wide">Contact Us</h1>
                <p className="pt-2 text-orange-100">
                  Get in Touch! We&#39;re ready to help you make your UVSafe
                  experience truly extraordinary. Reach out today!
                </p>
              </div>
              <div className="flex flex-col space-y-6">
                <div className="inline-flex space-x-2 items-center">
                  <FaPhoneAlt className="text-[#c2410c] text-xl" />
                  <span className="cursor-pointer hover:text-[#fef08a]">
                    +254 (700) 123-4567
                  </span>
                </div>
                <div className="inline-flex space-x-2 items-center">
                  <FaMailBulk className="text-[#c2410c] text-lg" />
                  <span className="cursor-pointer hover:text-[#fef08a]">
                    contact@uvsafe.com
                  </span>
                </div>
                <div className="inline-flex space-x-2 items-center">
                  <FaMapPin className="text-[#c2410c] text-xl" />
                  <span className="cursor-pointer hover:text-[#fef08a]">
                    123, UVSafe Avenue, Nairobi
                  </span>
                </div>
              </div>
              <div className=" flex space-x-4 text-lg">
                <FaInstagram className="text-2xl cursor-pointer hover:text-[#fde047]" />
                <FaTwitter className=" text-2xl cursor-pointer hover:text-[#60a5fa]" />
                <FaLinkedin className=" text-2xl cursor-pointer hover:text-[#60a5fa]" />
                <FaYoutube className=" text-2xl cursor-pointer hover:text-[#ef4444]" />
              </div>
            </div>
            <div>
              <div className="relative">
                <div className="absolute z-0 w-40 h-40 bg-[#fef08a] rounded-full -top-28 -right-28"></div>
              </div>
              <div className="relative">
                <div className="absolute z-0 w-32 h-32 bg-[#fef08a] rounded-full  -bottom-[488px] -left-16  "></div>
              </div>
              <div className="relative z-10 bg-white rounded-lg shadow-lg p-8 text-gray-600 md:w-80">
                <form
                  onSubmit={handleSubmit}
                  action=""
                  className="flex flex-col space-y-4"
                >
                  <div>
                    <label htmlFor="" className="text-sm">
                      Your Name
                    </label>
                    <input
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                      type="text"
                      placeholder="Your name"
                      className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-orange-300"
                    />
                  </div>
                  <div>
                    <label htmlFor="" className="text-sm">
                      Email Address
                    </label>
                    <input
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      type="email"
                      placeholder="Email Address"
                      className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-orange-300"
                    />
                  </div>
                  <div>
                    <label htmlFor="" className="text-sm">
                      Message
                    </label>
                    <textarea
                      onChange={(e) => setMessage(e.target.value)}
                      value={message}
                      placeholder="Message"
                      rows={4}
                      className="ring-1 ring-gray-300
                    w-full rounded-md px-4 py-2 mt-2 outline-none
                    focus:ring-orange-300"
                    ></textarea>
                  </div>
                  <button className="inline-block self-end bg-orange-400 text-white font-bold rounded-lg px-6 py-2 uppercase text-sm">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
