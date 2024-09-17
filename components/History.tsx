import Image from "next/image";
import one from "../public/1.jpg";
import two from "../public/2.jpg";
import three from "../public/3.jpg";
import four from "../public/4.jpg";
import five from "../public/5.jpg";
import six from "../public/6.jpg";
import seven from "../public/7.jpg";
import eight from "../public/8.jpg";

const History = () => {
  return (
    <>
      <h1 className="text-3xl text-center text-black font-bold leading-[55px] lg:text-[42px] pt-5">
        <span className="text-center">
          Founding{" "}
          <p className="text-orange-500 transform-origin-center hover:-translate-y-1 hover:cursor-default hover:text-orange-300 duration-500 inline-block">
            History
          </p>
        </span>
      </h1>

      <div className="antialiased mb-10">
        <div className="relative w-11/12  mx-auto flex flex-col space-y-8">
          <div className="absolute z-0 w-2 h-full bg-orange-800 shadow-md inset-0 left-[43px] md:mx-auto md:right-0 md:left-0"></div>

          <div className="relative z-10">
            <Image className="timeline-img" alt="1" src={one} />
            <div className="timeline-container ">
              <div className="timeline-pointer " aria-hidden="true"></div>
              <div className="bg-[#fb923c] text-white p-6 rounded-md shadow-md">
                <span className="font-bold text-black text-sm tracking-wide">
                  2008
                </span>
                <h1 className="text-2xl font-bold pt-1">
                  Founding Commitment to Sun Protection for Albinism Community
                </h1>
                <p className="pt-1">
                  UVSafe embarks on its journey with a vision to transform sun
                  protection for individuals living with Albinism. The
                  foundation of our commitment is laid.
                </p>
              </div>
            </div>
          </div>

          <div className="relative z-10">
            <Image className="timeline-img" alt="2" src={two} />
            <div className="timeline-container timeline-container-left">
              <div
                className="timeline-pointer timeline-pointer-left"
                aria-hidden="true"
              ></div>
              <div className="bg-[#fb923c] text-white p-6 rounded-md shadow-md">
                <span className="font-bold text-black text-sm tracking-wide">
                  2010
                </span>
                <h1 className="text-2xl font-bold pt-1">
                  Stylish UV-Blocking Clothing for Confident Outdoors
                </h1>
                <p className="pt-1">
                  We introduce our first UV-blocking clothing line, providing
                  stylish and protective options for those seeking to enjoy the
                  outdoors with confidence.
                </p>
              </div>
            </div>
          </div>

          <div className="relative z-10">
            <Image className="timeline-img" alt="3" src={three} />
            <div className="timeline-container ">
              <div className="timeline-pointer" aria-hidden="true"></div>
              <div className="bg-[#fb923c] text-white p-6 rounded-md shadow-md">
                <span className="font-bold text-black text-sm tracking-wide">
                  2013
                </span>
                <h1 className="text-2xl font-bold pt-1">
                  Building Global Partnerships for Sun Safety Advocacy
                </h1>
                <p className="pt-1">
                  UVSafe launches its innovative sunscreen formulations, setting
                  new standards for sun protection. Our products become
                  synonymous with quality and trust.
                </p>
              </div>
            </div>
          </div>

          <div className="relative z-10">
            <Image className=" timeline-img " alt="4" src={four} />
            <div className="timeline-container timeline-container-left">
              <div
                className="timeline-pointer timeline-pointer-left"
                aria-hidden="true"
              ></div>
              <div className="bg-[#fb923c] text-white p-6 rounded-md shadow-md">
                <span className="font-bold text-black text-sm tracking-wide">
                  2015
                </span>
                <h1 className="text-2xl font-bold pt-1">
                  Celebrated as &prime;Sun Safety Champion&prime; for Our
                  Dedication
                </h1>
                <p className="pt-1">
                  We expand our reach and influence, forming strategic
                  partnerships with Albinism associations and advocacy groups
                  worldwide.
                </p>
              </div>
            </div>
          </div>

          <div className="relative z-10">
            <Image className="timeline-img" alt="5" src={five} />
            <div className="timeline-container ">
              <div className="timeline-pointer " aria-hidden="true"></div>
              <div className="bg-[#fb923c] text-white p-6 rounded-md shadow-md">
                <span className="font-bold text-black text-sm tracking-wide">
                  2018
                </span>
                <h1 className="text-2xl font-bold pt-1">
                  Introducing Accessible Educational Resources
                </h1>
                <p className="pt-1">
                  UVSafe receives the &ldquo;Sun Safety Champion&rdquo; award
                  for our relentless efforts in promoting sun safety awareness
                  and education.
                </p>
              </div>
            </div>
          </div>

          <div className="relative z-10">
            <Image className="timeline-img" alt="6" src={six} />
            <div className="timeline-container timeline-container-left">
              <div
                className="timeline-pointer timeline-pointer-left"
                aria-hidden="true"
              ></div>
              <div className="bg-[#fb923c] text-white p-6 rounded-md shadow-md">
                <span className="font-bold text-black text-sm tracking-wide">
                  2020
                </span>
                <h1 className="text-2xl font-bold pt-1">
                  Digital Support During Challenging Times
                </h1>
                <p className="pt-1">
                  Amid global challenges, UVSafe continues to thrive,
                  introducing accessible educational resources and digital
                  support for our community.
                </p>
              </div>
            </div>
          </div>

          <div className="relative z-10">
            <Image className="timeline-img" alt="7" src={seven} />
            <div className="timeline-container ">
              <div className="timeline-pointer " aria-hidden="true"></div>
              <div className="bg-[#fb923c] text-white p-6 rounded-md shadow-md">
                <span className="font-bold text-black text-sm tracking-wide">
                  2023
                </span>
                <h1 className="text-2xl font-bold pt-1">
                  15 Years of Empowerment and Sun Protection
                </h1>
                <p className="pt-1">
                  UVSafe celebrates its 15th anniversary as a trusted companion
                  on countless sun-safe journeys. Our commitment to empowerment
                  and protection remains stronger than ever.
                </p>
              </div>
            </div>
          </div>

          <div className="relative z-10">
            <Image className="timeline-img" alt="8" src={eight} />
            <div className="timeline-container timeline-container-left">
              <div
                className="timeline-pointer timeline-pointer-left"
                aria-hidden="true"
              ></div>
              <div className="bg-[#fb923c] text-white p-6 rounded-md shadow-md">
                <span className="font-bold text-black text-sm tracking-wide">
                  Present
                </span>
                <h1 className="text-2xl font-bold pt-1">
                  UVSafe: Illuminating Lives Worldwide with Hope and Support
                </h1>
                <p className="pt-1">
                  UVSafe is a beacon of hope and support, touching the lives of
                  individuals and families worldwide. With a heart full of
                  gratitude, we look forward to many more years of sun safety,
                  empowerment, and growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default History;
