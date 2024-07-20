import React,{ useEffect, useState } from 'react'
import { useStateContext } from '../Context'

import cleary from '../assets/images/cleary.jpg'
import fog from '../assets/images/fog.jpg'
import cloudy from '../assets/images/cloudy.jpg'
import rainy from '../assets/images/rainy.jpg'
import stormy from '../assets/images/stormy.jpg'
import sunny from '../assets/images/sunny.jpg'
import snow from '../assets/images/snow.jpg'

const BackgroundLayout = () => {
const{ weather } =useStateContext()
const [image,setImage] =useState(cleary)
useEffect(() =>{
 if(weather.conditions){
    let imageString =weather.conditions
    if(imageString.toLowerCase().includes('clear')){
        setImage(cleary)
    }
    else if(imageString.toLowerCase().includes('cloud')){
        setImage(cloudy)
    }
    else if(imageString.toLowerCase().includes('snow')){
        setImage(snow)
    }
    else if(imageString.toLowerCase().includes('rain')||imageString.toLowerCase().includes('shower')){
        setImage(rainy)
    }
    else if(imageString.toLowerCase().includes('fog')){
        setImage(fog)
    }
    else if(imageString.toLowerCase().includes('thunder')||imageString.toLowerCase().includes('storm')){
        setImage(stormy)
    }
    else if(imageString.toLowerCase().includes('sunny')){
        setImage(sunny)
    }

 }
}
,[weather])
  return (
    <img src={image} alt="weather_image" className='h-screen w-full fixed left-0 top-0 -z-[10]'/>
  )
}

export default BackgroundLayout
