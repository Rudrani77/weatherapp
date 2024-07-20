import React ,{ useEffect, useState } from 'react'
import {useDate} from '../Utils/useDate'
import sun from'../assets/icons/sun.png'
import cloud from'../assets/icons/cloud.png'
import fogy from'../assets/icons/fogy.jpg'
import rain from'../assets/icons/rain.png'
import snowy from'../assets/icons/snowy.png'
import storm from'../assets/icons/storm.png'
import wind from'../assets/icons/wind.png'
/*const WeatherCard = () => { */

    const WeatherCard=({
      temperature,
      windspeed,
      humidity,
      place,
      heatIndex,
      iconString,
      conditions,

    })=>{
   const [icon,setIcon] = useState(sun)
   const {time} = useDate()

   useEffect(() =>{
    if(iconString){
   if(iconString.toLowerCase().includes('cloud')){
 setIcon(cloud)
   } else if(iconString.toLowerCase().includes('rain')){
    setIcon(rain)
   }
   else if(iconString.toLowerCase().includes('thunder')||iconString.toLowerCase().includes('storm')){
    setIcon(storm)
   }
   else if(iconString.toLowerCase().includes('fog')){
    setIcon(fogy)
   }
   else if(iconString.toLowerCase().includes('snow')){
    setIcon(snowy)
   }
   else if(iconString.toLowerCase().includes('wind')){
    setIcon(wind)
   }
   else if(iconString.toLowerCase().includes('clear')){
    setIcon(sun)
   } 

   }
   
    
},[iconString])
  return (
    <div className='w-[22rem] min-w-[22rem] h-[30rem] glassCard p-4'>
      <div className='flex w-full just-center, items-center gap-4 mt-12 mb-4'>
        <img src={icon} alt="weather_icon"/>
        <p className='font-bold text-5xl flex justify-center items-center'>{temperature} &deg;C</p>
      </div>
      <div className='font-bold text-center text-xl'>
        {place}


      </div>
      <div className='w-full flex justify-between items-center mt-4'>
        <p className='flex-1 text-center p-2'>{new Date().toDateString()}</p>
        <p className='flex-1 text-center p-2'>{time}</p>
      </div>
      <div className='w-full flex justify-between items-center mt-4 gap-4'>
        <p className='flex-1 text-center p-2 font-bold bg-blue-600 shadow rounded-lg'>Wind Speed<p className='font-normal'>{windspeed}km/h</p></p>
        <p className='flex-1 text-center p-2 font-bold bg-green-600 shadow rounded-lg'>Humidity<p className='font-normal'>{humidity}gm/m&#179;</p></p>
      </div>
      <div className='w-full p-3 flex justify-between items-center mt-4'> 
<p className='font-bold text-lg'>Heat Index</p>
<p className='text-lg'>{
  heatIndex ? heatIndex: 'N/A'
  }
</p>
        </div>
<hr className='bg-slate-600'/>
<div className='w-full p-4 flex justify-center items-center text-3xl font-semibold'>
{conditions}

</div>
    </div>
  )
}


export default WeatherCard
