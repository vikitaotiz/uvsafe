"use client";

import { useEffect, useMemo, useState } from "react";

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

const ComingSoon = ({ deadline = "November, 20, 2023" }) => {
  const parsedDeadline = useMemo(() => Date.parse(deadline), [deadline]);
  const [time, setTime] = useState(parsedDeadline - Date.now());

  useEffect(() => {
    const interval = setInterval(
      () => setTime(parsedDeadline - Date.now()),
      1000
    );

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-[500px] p-10 z-10 relative overflow-y-hidden">
      <h1 className="xl:text-5xl text-2xl font-extrabold flex flex-col items-center justify-center w-full z-3">
        <span className="text-center">
          Coming{" "}
          <span className="text-orange-500 transform-origin-center hover:-translate-y-1 hover:cursor-default hover:text-orange-300 duration-500 inline-block">
            Soon
          </span>
        </span>
      </h1>
      <div className="flex flex-row timer bg-opacity-10 bg-white justify-center items-center text-center w-800 gap-36 p-24">
        {Object.entries({
          Days: time / DAY,
          Hours: (time / HOUR) % 24,
          Minutes: (time / MINUTE) % 60,
          Seconds: (time / SECOND) % 60,
        }).map(([label, value]) => (
          <div key={label} className="grid">
            <div className="xl:text-5xl text-2xl font-extrabold leading-10">
              <p>{`${Math.floor(value)}`.padStart(2, "0")}</p>
              <span className="text-lg">{label}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComingSoon;
