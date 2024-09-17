'use client';

import axios from 'axios';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const Weather = () => {
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState<any>({});
  const [isLocation, setIsLocation] = useState(false);

  const weatherApi = '73dfbad63e388670b7c504d9e187e759';
  const weatherImageUrl = `https://openweathermap.org/img/wn/`;

  useEffect(() => {
    setLoading(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${weatherApi}&units=metric`;

        const res = await axios.get(url);
        const data = await res.data;
        setWeatherData(data);
        setIsLocation(true);
      });
    } else {
      console.log('Geolocation is not supported by this browser.');
    }
    setLoading(false);
  }, []);

  const handleLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${weatherApi}&units=metric`;

        const res = await axios.get(url);
        const data = await res.data;
        setWeatherData(data);
        setIsLocation(true);
      });
    } else {
      console.log('Geolocation is not supported by this browser.');
    }
  };

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (!isLocation) {
    return;
  }

  return (
    <div className="my-10">
      <h1 className="text-4xl text-center font-bold leading-[55px] mb-10">
        Weather <span className="text-[#f97316]">Today</span>
      </h1>

      {isLocation ? (
        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          {weatherData.weather && (
            <div className="flex flex-col items-center md:w-auto">
              <div className="relative w-44 h-44">
                <Image
                  src={`${weatherImageUrl}${weatherData?.weather[0]?.icon}@2x.png`}
                  alt={weatherData.name}
                  fill
                />
              </div>

              <h1>{weatherData?.weather[0].main}</h1>
            </div>
          )}

          <div className="flex flex-col justify-center items-center gap-3 w-11/12 md:w-auto border-t pt-10 md:border-t-0 md:pt-0 md:border-l md:pl-10">
            <h1 className="font-semibold text-2xl">{weatherData?.name}</h1>
            <p className="text-8xl font-medium">
              {Math.round(weatherData?.main?.temp)}&deg;
            </p>
            <p className="font-medium">Mostly Cloudy</p>
            <div className="flex items-center justify-between">
              <p>H: {Math.round(weatherData?.main?.temp_max)}&deg;</p>
              <p>L: {Math.round(weatherData?.main?.temp_min)}&deg;</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center">
          <button
            className="bg-[#f97316] text-white text-xl font-bold py-3 px-5"
            onClick={handleLocation}
          >
            Allow Location
          </button>
        </div>
      )}
    </div>
  );
};

export default Weather;
