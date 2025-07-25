"use client"
import React from 'react'
import { WeatherProvider } from '../context/context'

const WeatherWrapper = ({children}) => {
  return (
    <WeatherProvider>
        {children}
    </WeatherProvider>
  )
}

export default WeatherWrapper