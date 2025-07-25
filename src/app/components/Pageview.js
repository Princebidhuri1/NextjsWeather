import React,{useContext} from 'react'
import { useEffect, useState } from 'react';
import  {WeatherContext} from '../context/context';
const pageview = () => {
    const DateDisplay = () => {
        const today = new Date();
        const formatted = new Intl.DateTimeFormat('en-US', {
            month: 'short',
            day: 'numeric',
            weekday: 'short',
        }).format(today);

        const [weekday, date] = formatted.split(', ');
        const displayDate = `${date}, ${weekday}`; // "Aug 23, Tue"

        return <>
            <div className='font-bold text-white p-5 xs:p-1 absolute top-[50%]  mobile:text-xs left-0'>
                <div >{displayDate}</div>
                <div className="vLine h[1px] bg-white w-full border opacity-80"></div>
            </div>
        </>;
    };
    const [search, setSearch] = useState('')
    const [city, setCity] = useState('faridabad')
    const [weather, setWeather] = useState({});
    const [hours, setHours] = useState('')
    useEffect(() => {
        const now = new Date();
        const hours = now.getHours();
        setHours(hours)
    }, [])

    const handleChange = (event) => {
        setSearch(event.target.value);
        // console.log('Current input value:', event.target.value);
    }
    useEffect(() => {
        const API_KEY = 'ec5c4e93831749d1a22124238252505';
        const weatherCity = city;

        fetch(`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${weatherCity}&days=7`)
            .then(res => res.json())
            .then(data => setWeather(data))
            .catch(err => console.error('Weather API error:', err));
        console.log(weather)

    }, [city]);

    const searchByText = () => {
        setCity(search)
        setSearch('')
    }


    return (
        <>
            <WeatherContext.Provider value={{search,setSearch,city,setCity,weather,setWeather,searchByText,handleChange}}>
                {console.log(weather)}
                <main className="w-full px-4 mobile:h-[80vh] tablet:h-[89vh] h-[89vh] overflow-y-scroll hide-scrollbar ">

                    {/* Search Section */}
                    <div className="search mx-auto flex justify-center items-center xxl:mt-32 xl-max:mt-10 mobile:flex-col tablet:flex-col w-fit gap-4">
                        <input
                            type="text"
                            name="search"
                            id="search"
                            value={search}
                            onChange={(e) => handleChange(e)}
                            className="rounded-lg max-w-80 p-1 px-7 placeholder:text-center text-center h-12 bg-[#D9D9D9]"
                            placeholder="Search location..."
                        />
                        <button
                            onClick={searchByText}
                            className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
                        >
                            <span className="relative px-5 py-2.5 flex items-center gap-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                                <img src="search.png" alt="Search Icon" width={20} height={20} />
                                <span>Search</span>
                            </span>
                        </button>
                    </div>

                    {/* Weather Card */}
                    <div className="bg-[linear-gradient(145deg,_#000000_27%,_#331a76_69%)] border border-opacity-80 box-border border-[#331a76] rounded-2xl mx-auto relative mobile:h-[200px] mobile:w-5/6 tablet:h-[300px] tablet:w-[360px] xl-max:w-[600px] xl-max:h-[500px] xl-max:mt-10 xxl:h-[600px] xxl:w-[700px] xxl:mt-32">

                        {/* Location and Icon */}
                        <div className="flex justify-between items-start p-5 mobile:p-2">
                            <div className="flex items-end font-bold text-white text-2xl mobile:text-xs">
                                {weather?.location?.name || "Not Found"}
                                <img src="/LocationIcon.png" alt="" className="ml-2" />
                            </div>
                            {weather?.current?.condition?.icon && (
                                <img src={`https:${weather.current.condition.icon}`} alt="Weather Icon" width={100} height={100} />
                            )}
                        </div>

                        {/* Center Temperature Display */}
                        <div className="absolute top-[40%] left-[40%] flex justify-center items-center gap-6 text-white text-6xl mobile:text-xs z-10">
                            <img src="TEMPERATURE.png" alt="" className="mobile:w-2" />
                            <div className="flex flex-col">
                                <span>{weather?.current?.temp_c ?? "Not Found"}°C</span>
                                <span className="text-xs">{weather?.current?.condition?.text ?? "Not Found"}</span>
                            </div>
                        </div>

                        {/* Date Display */}
                        <DateDisplay />

                        {/* Extra Weather Info */}
                        <div className="absolute z-10 text-white w-full font-bold xxl:text-2xl xxl:top-[80%] mobile:text-[9px] tablet:text-[12px] xl-max:bottom-1">
                            <div className="MoreInfo flex justify-around items-end text-white p-5 w-full">
                                <div className="flex flex-col items-center">
                                    <span>HUMIDITY</span>
                                    <span>{weather?.current?.humidity ?? "Not Found"}%</span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <span>Visibility</span>
                                    <span>{weather?.current?.vis_km ?? "Not Found"}km</span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <span>Air Pressure</span>
                                    <span>{weather?.current?.pressure_mb ?? "Not Found"}hPa</span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <span>Wind</span>
                                    <span>{weather?.current?.wind_kph ?? "Not Found"}km/h</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Hourly Forecast */}
                    <div className="hoursDisplay mx-auto flex flex-wrap justify-center gap-2 mobile:w-[300px] max-w-full mobile:mt-0 tablet:mt-6 xl-max:mt-16 xxl:mt-20">
                        {weather?.forecast?.forecastday?.[0]?.hour?.slice(hours, hours + 6).map((item, index) => (
                            <div
                                key={index}
                                className="rounded-[25px] h-[118px] w-[121px] bg-[rgb(24,12,54)] flex items-end relative text-center"
                            >
                                <span className="z-20 absolute top-[10%] right-[38%] text-white font-bold">
                                    {item.time.slice(-5)}
                                </span>
                                <div className="w-[121px] h-[72px] bg-gradient-to-r from-[#2f2c2d] to-[#ad7fb0] rounded-[25px] relative font-bold text-white">
                                    <img src={item.condition.icon} className="-top-4 absolute right-[20%]" alt="icon" />
                                </div>
                                <div className="text-[12px] z-30 absolute bottom-1 p-2 text-center w-full font-bold text-white">
                                    {item.condition.text}
                                </div>
                            </div>
                        ))}
                    </div>

                </main>
            </WeatherContext.Provider>
        </>
    )
}

export default pageview;