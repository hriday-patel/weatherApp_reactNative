import { useState, useEffect } from "react";
import { WEATHER_API_KEY } from '@env';
import * as Location from 'expo-location';

interface WeatherItem {
  dt: number;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  weather: Array<{
    id: number;
    main: string;
    description: string;
    icon: string;
  }>;
}

interface WeatherData {
  list: WeatherItem[];
  city: {
    id: number;
    name: string;
    coord: {
      lat: number;
      lon: number;
    };
    country: string;
    population: number;
    timezone: number;
    sunrise: number;
    sunset: number;
  };
}

type UseGetWeatherReturn = [boolean, string, WeatherData | null];

const useGetWeather = (): UseGetWeatherReturn => {
  const [loading, setLoading] = useState<boolean>(true);
  const [errorMsg, setError] = useState<string>('');
  const [weather, setWeather] = useState<WeatherData | null>(null);

  const getWeather = async (lat: number, lon: number): Promise<void> => {
    try {
      const data = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
      );
      if (!data.ok) {
        throw new Error("Couldn't fetch the data!");
      }
      const res: WeatherData = await data.json();
      setWeather(res);
    } catch (e) {
      setError("Couldn't fetch the data!");
      console.log(e);
    }
  };

  useEffect(() => {
    const getLocation = async (): Promise<void> => {
      try {
        setLoading(true);
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          setError("Permission denied!");
          setLoading(false);
          return;
        }
        const location = await Location.getCurrentPositionAsync({});
        const { latitude, longitude } = location.coords;
        await getWeather(latitude, longitude);
      } catch (e) {
        setError("Couldn't fetch the data!");
        console.log(e);
      } finally {
        setLoading(false);
      }
    };
    getLocation();
  }, []);

  return [loading, errorMsg, weather];
};

export default useGetWeather;