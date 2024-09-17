import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Team = () => {
  return (
    <div className="h-full bg-[#fde68a] text-center p-10">
      <h1 className="text-4xl text-black font-bold leading-[55px] lg:text-[42px]">
        Meet Our Team
      </h1>
      <p className="my-8 text-[#f97316] w-2/3 mx-auto">
        &ldquo;Meet Our Programming Pioneers! Our team is a collective of tech
        trailblazers, shaping UVSafe&prime;s future with innovation and
        dedication.&rdquo;
      </p>
      <div className=" cards flex justify-center gap-10 flex-wrap cursor-pointer">
        <div className=" bg-[#fb923c] shadow-md rounded-md w-[270px] py-8 px-14 text-white text-center">
          {/* Where to store Profile Images  */}
          <div className="w-20 h-20 bg-[#fef08a] rounded-full mx-auto mb-2"></div>
          <h2 className="text-2xl font-semibold mb-[7px]">Giggs Bradly</h2>
          <p className="font-medium uppercase">Project Manager</p>
          <div className="icons flex mt-[10px] justify-center gap-2">
            <FaGithub className="cursor-pointer hover:text-[#44403c]" />
            <FaTwitter className="cursor-pointer hover:text-[#7dd3fc]" />
            <FaLinkedin className="cursor-pointer hover:text-[#60a5fa]" />
          </div>
        </div>

        <div className=" bg-[#fb923c] shadow-md rounded-md w-[270px] py-8 px-14 text-white text-center">
          {/* Where to store Profile Images  */}
          <div className="w-20 h-20 bg-[#fef08a] rounded-full mx-auto mb-2"></div>
          <h2 className="text-2xl font-semibold mb-[7px]">Ken White</h2>
          <p className="font-medium uppercase">Strategic Adviser</p>
          <div className="icons flex mt-[10px] justify-center gap-2">
            <FaGithub className="cursor-pointer hover:text-[#44403c]" />
            <FaTwitter className="cursor-pointer hover:text-[#7dd3fc]" />
            <FaLinkedin className="cursor-pointer hover:text-[#60a5fa]" />
          </div>
        </div>

        <div className=" bg-[#fb923c] shadow-md rounded-md w-[270px] py-8 px-14 text-white text-center">
          {/* Where to store Profile Images  */}
          <div className="w-20 h-20 bg-[#fef08a] rounded-full mx-auto mb-2"></div>
          <h2 className="text-2xl font-semibold mb-[7px]">
            Elizabeth Odhiambo
          </h2>
          <p className="font-medium uppercase">Software Dev</p>
          <div className="icons flex mt-[10px] justify-center gap-2">
            <FaGithub className="cursor-pointer hover:text-[#44403c]" />
            <FaTwitter className="cursor-pointer hover:text-[#7dd3fc]" />
            <FaLinkedin className="cursor-pointer hover:text-[#60a5fa]" />
          </div>
        </div>

        <div className=" bg-[#fb923c] shadow-md rounded-md w-[270px] py-8 px-14 text-white text-center">
          {/* Where to store Profile Images  */}
          <div className="w-20 h-20 bg-[#fef08a] rounded-full mx-auto mb-2"></div>
          <h2 className="text-2xl font-semibold mb-[7px]">Ellon Mordecai</h2>
          <p className="font-medium uppercase">Software Dev</p>
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
