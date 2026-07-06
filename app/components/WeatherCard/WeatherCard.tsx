"use client";

import { useEffect, useState } from "react";
import axios from "axios";

type WeatherProps = {
  city: string;
};

type WeatherData = {
  temp: number;
  humidity: number;
  wind: number;
  condition: string;
  icon: string;
};

export default function WeatherCard({ city }: WeatherProps) {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchWeather() {
      try {
        const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );

        setWeather({
          temp: response.data.main.temp,
          humidity: response.data.main.humidity,
          wind: response.data.wind.speed,
          condition: response.data.weather[0].main,
          icon: response.data.weather[0].icon,
        });
      } catch (error) {
        console.error("Weather Error:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchWeather();
  }, [city]);

  if (loading) {
    return (
      <div className="bg-white rounded-xl shadow-md p-6 mt-8">
        Loading weather...
      </div>
    );
  }

  if (!weather) {
    return (
      <div className="bg-white rounded-xl shadow-md p-6 mt-8">
        Unable to fetch weather.
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-md border border-slate-200 p-6 mt-8">
      <h2 className="text-2xl font-bold mb-5">
        🌤 Current Weather
      </h2>

      <div className="flex items-center gap-5">
        <img
          src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
          alt="Weather Icon"
          className="w-20 h-20"
        />

        <div>
          <p className="text-3xl font-bold">
            {weather.temp}°C
          </p>

          <p className="text-gray-600">
            {weather.condition}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-6">

        <div className="bg-slate-50 p-4 rounded-lg">
          <p className="text-gray-500 text-sm">
            Humidity
          </p>

          <p className="font-bold">
            {weather.humidity}%
          </p>
        </div>

        <div className="bg-slate-50 p-4 rounded-lg">
          <p className="text-gray-500 text-sm">
            Wind Speed
          </p>

          <p className="font-bold">
            {weather.wind} km/h
          </p>
        </div>

      </div>
    </div>
  );
}