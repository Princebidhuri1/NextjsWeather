import React from 'react'

const WeatherForecast = ({ weather }) => {

  return (
    <>

      <h2 className='font-bold text-center text-white opacity-80 text-xl'>Weekly Forecast</h2>
      {weather?.forecast?.forecastday?.slice(1).map((day, index) => {
        const date = new Date(day.date);
        const weekday = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(date);

        return (
          <div
            key={index}
            className="weatherDetails flex justify-around mt-4 xl:p-8 xxl:p-8 hide-scrollbar xl:text-2xl bg-[rgba(39,19,91,0.16)] rounded-lg items-center mx-auto w-4/5  border border-opacity-80 border-[#331a76] "
          >
            <div className="Location flex flex-col w-1/4 h-24">
              <span className="font-bold ">{weekday} </span>
              <span className="opacity-45 flex items-center">
                {day.day.condition.icon && (
                  <img
                    src={`https:${day.day.condition.icon}`}
                    alt="Weather Icon"
                    width={20}
                    height={20}
                  />
                )}
                <span className="ml-2">{day.day.condition.text}</span>
              </span>
            </div>

            <div className="AvrageTemp flex flex-col mobile:text-sm tablet:text-sm ">
              <span className="font-bold"><span className='opacity-45 font-thin'>max - </span>{day.day.avgtemp_c}°C</span>
              <span className="font-bold"><span className='opacity-45 font-thin'>min - </span> {day.day.mintemp_c}°C</span>
            </div>

            <div className="otherDetails flex flex-col items-center justify-end w-1/12 mobile:text-sm tablet:text-sm">
              <div className="flex items-center">
                <img
                  src={'/humidity.svg'}
                  alt="Weather Icon"
                  width={20}
                  height={20}
                />
                <span className='font-bold'>{day.day.avghumidity}</span>
              </div>
              <div className="flex items-center">
                <img
                  src={'/50d.png'}
                  alt="Weather Icon"
                  width={20}
                  height={20}
                />
                <span className='font-bold'>{day.day.maxwind_kph}</span>
              </div>
            </div>
          </div>
        );
      })}
    </>
  )
}

export default WeatherForecast