// 'use client';
import { createContext, useState, useEffect } from 'react';

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [search, setSearch] = useState('');
  const [city, setCity] = useState('faridabad');
  const [weather, setWeather] = useState({});
  const [hours, setHours] = useState('');

  useEffect(() => {
    const now = new Date();
    setHours(now.getHours());
  }, []);

  useEffect(() => {
    const API_KEY = '2bf4b5d30a314ce3be4154639252507 '; 
    if (!API_KEY) return;

    fetch(`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=7`)
      .then(res => res.json())
      .then(data => setWeather(data))
      .catch(err => console.error('Weather API error:', err));
  }, [city]);

  const handleChange = (e) => setSearch(e.target.value);
 const searchByText = () => {
  const trimmed = search.trim();

  if (!trimmed) {
    alert("Please enter a city name.");
    return;
  }

  setCity(trimmed);
  setSearch('');
};

  return (
    <WeatherContext.Provider value={{
      search, setSearch, city, setCity,
      weather, setWeather, hours, setHours,
      handleChange, searchByText
    }}>
      {children}
    </WeatherContext.Provider>
  );
};
