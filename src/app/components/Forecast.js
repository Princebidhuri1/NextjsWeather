"use client"
import React, { useContext } from 'react';
import { WeatherContext } from '../context/context'

import WeatherForecast from './WeatherForecast';




const Forecast = () => {
      const { search, setSearch, city, setCity,
      weather, setWeather, hours, setHours,
      handleChange, searchByText} = useContext(WeatherContext)
   
    return (
        <>
            
                        <div className="search mx-auto flex justify-center flex-row mobile:flex-col tablet:flex-col xl-max:mt-5 w-fit min-1801:mt-32  ">

                <input type="text" name="search" id="search" value={search} onChange={(e) => handleChange(e)} className='rounded-lg w-80 p-1 px-7 mobile:px-2 placeholder:text-center text-center h-12 bg-[#D9D9D9]' placeholder='Search location...' />
                <div className="flex items-center justify-center">
                    <button onClick={searchByText} className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                        <span className="relative px-5 mobile:px-2 mobile:py py-2.5 flex items-center gap-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                            <img src="search.png" alt="Search Icon" width={20} height={20} />
                            <span>Search</span>
                        </span>
                    </button>
                </div>



            </div>
            <div></div>
            <div className='flex mobile:flex-col tablet:flex-col xl:h-[80vh] xxl:h-[80vh] overflow-y-scroll hide-scrollbar'>
                <div className="Tommoro w-1/2  flex flex-col justify-between   hide-scrollbar mobile:w-full tablet:w-full">
                    <h2 className='font-bold text-center text-white opacity-80 text-xl'>Tommorow Weather</h2>
                    <div className="weatherDetails flex flex-row justify-around items-center mx-auto mobile:h-24 tablet:h-24 xl:h-32 xxl:h-40 text-white p-5 min-1801:mt-10 bg-[rgba(39,19,91,0.16)] border border-opacity-80 border-[#331a76] w-4/5 mobile:text-sm tablet:text-sm h-24">
                        <div className="Location flex flex-col "><span className='font-bold '>{weather && weather.location ? weather.location.name : "Not Found"}</span>
                            <span className='opacity-45'> {weather && weather.forecast ? weather.forecast.forecastday[1].date : "Not Found"}</span>
                        </div>
                        <div className="AvrageTemp flex flex-col"><span className='font-bold '>{weather && weather.forecast ? weather.forecast.forecastday[1].day.avgtemp_c : "Not Found"}°C</span>  <span className='opacity-45 '> {weather && weather.forecast ? weather.forecast.forecastday[1].day.condition.text : "Not Found"}</span></div>
                        <div className="img">

                            {weather?.current?.condition?.icon && (
                                <img src={`https:${weather.forecast.forecastday[1].day.condition.icon}`} alt="Weather Icon" width={100} height={100} className='mobile:w-5 tablet:w-14' />
 
                            )}
                        </div>
                    </div>
                    <div className="Air min-1801:mt-10 ">
                        <h2 className='font-bold text-center text-white opacity-80 text-xl'>Air Conditions</h2>
                        <div className="MoreInfo flex flex-row justify-around items-center mx-auto  mobile:h-24 tablet:h-24 xl:h-32 xxl:h-40  text-white p-5 min-1801:mt-10 bg-[rgba(39,19,91,0.16)] border border-opacity-80 border-[#331a76] w-4/5">
                            <div className="flex flex-col items-center ">
                                <span>HUMIDITY</span>
                                <span>{weather && weather.forecast ? weather.forecast.forecastday[1].day.avghumidity : "Not Found"}%</span> 
                            </div>
                            <div className="flex flex-col items-center">
                                <span>Visibility</span>
                                <span>{weather && weather.forecast ? weather.forecast.forecastday[1].day.avgvis_km : "Not Found"}km</span>
                            </div>

                            <div className="flex flex-col items-center">
                                <span>Wind</span>
                                <span>{weather && weather.forecast ? weather.forecast.forecastday[1].day.maxwind_kph : "Not Found"}km/h</span>
                            </div>
                        </div>

                    </div>

                    <div className="astro min-1801:mt-10">
                        <h2 className='font-bold text-center text-white opacity-80 text-xl'>Tommorow astro</h2>
                        <div className="MoreInfo flex flex-row justify-around items-center mx-auto  mobile:h-24 tablet:h-24 xl:h-32 xxl:h-40  text-white p-5 min-1801:mt-10 bg-[rgba(39,19,91,0.16)] border border-opacity-80 border-[#331a76] w-4/5">
                            <div className="flex flex-col items-center ">
                                <span>Sunrise</span>
                                <span>{weather && weather.forecast ? weather.forecast.forecastday[1].astro.sunrise : "Not Found"}</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <span>Rain Possiblity</span>
                                <span>{weather && weather.forecast ? weather.forecast.forecastday[1].day.daily_chance_of_rain : "Not Found"}%</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <span>Sunset</span>
                                <span>{weather && weather.forecast ? weather.forecast.forecastday[1].astro.sunset : "Not Found"}</span>
                            </div>

                        </div>


                    </div>
                    <div className='hours min-1801:mt-10'>
                        <h2 className='font-bold text-center text-white opacity-80 text-xl'>Hourly</h2>
                        <div className=' flex-wrap flex gap-9  mx-auto w-[80%] items-center justify-center min-1801:mt-10 '>
                            {weather?.forecast?.forecastday?.[0]?.hour?.slice(12, 16).map((item, index) => (
                                <div key={index} className="rounded-[25px] h-[118px] w-[121px] bg-[rgb(24,12,54)] flex items-end relative text-center">
                                    <span className="z-20 absolute top-[10%] right-[38%] text-white font-bold">
                                        {item.time.slice(-5)} {/* shows "14:00", "15:00" etc. */}
                                    </span>

                                    <div className="w-[121px] h-[72px] bg-gradient-to-r from-[#2f2c2d] to-[#ad7fb0] rounded-[25px] relative font-bold text-white ">
                                        <img src={item.condition.icon} className="-top-4 absolute right-[20%]" alt="icon" />

                                    </div>
                                    <div className='text-[12px]  z-30 absolute bottom-1 p-2 text-center  w-full font-bold text-white'>  {item.condition.text}</div>
                                </div>
                            ))}
                        </div>

                    </div>


                </div>
                <div className="Forecasts xl:w-1/2 xxl:w-1/2 flex flex-col justify-between xl:h-[80vh] xxl:h-[80vh] overflow-y-scroll hide-scrollbar ">
                    <WeatherForecast weather={weather} />
                </div>
            </div>
        </>
    )
}

export default Forecast