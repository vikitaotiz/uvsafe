"use client";

import { useEffect, useState } from "react";

const ComingSoonBg = () => {
  const [targetDate, setTargetDate] = useState<Date | null>(null);

  // Set the target date 1 week, 5 days, and 13 hours from now
  useEffect(() => {
    const currentDate = new Date();
    const oneWeekFromNow = new Date(
      currentDate.getTime() + 7 * 24 * 60 * 60 * 1000
    );
    const fiveDaysFromNow = new Date(
      oneWeekFromNow.getTime() + 5 * 24 * 60 * 60 * 1000
    );
    const thirteenHoursFromNow = new Date(
      fiveDaysFromNow.getTime() + 13 * 60 * 60 * 1000
    );

    setTargetDate(thirteenHoursFromNow);
  }, []);

  // Function to calculate the remaining time
  const calculateTimeRemaining = () => {
    if (targetDate) {
      const now = new Date();
      const timeDifference = targetDate.getTime() - now.getTime();

      if (timeDifference <= 0) {
        return "0 seconds";
      }

      const seconds = Math.floor((timeDifference / 1000) % 60);
      const minutes = Math.floor((timeDifference / 1000 / 60) % 60);
      const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const weeks = Math.floor(days / 7);

      return `${weeks} week${weeks > 1 ? "s" : ""} ${days % 7} day${
        days % 7 > 1 ? "s" : ""
      } ${hours} hour${hours > 1 ? "s" : ""}`;
    }

    return "";
  };

  return (
    <div className="relative">
      {/* Video background */}
      <video
        autoPlay
        loop
        muted
        className="fixed inset-0 w-full h-full object-cover"
      >
        <source src="/ComingSoon.mp4" type="video/mp4" />
      </video>

      {/* Countdown timer */}
      <div className="absolute inset-0 flex items-center justify-center text-white text-4xl pt-60">
        <div>
          <h1 className="text-3xl text-center text-black font-bold leading-[55px] lg:text-[42px]">
            <span className="text-center">
              Coming{" "}
              <p className="text-orange-500 transform-origin-center hover:-translate-y-1 hover:cursor-default hover:text-orange-300 duration-500 inline-block">
                Soon
              </p>
            </span>
          </h1>
          <p className="text-2xl">Time remaining: {calculateTimeRemaining()}</p>
        </div>
      </div>
    </div>
  );
};

export default ComingSoonBg;