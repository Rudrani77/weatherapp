import React, { useEffect, useState } from 'react'
import sun from'../assets/icons/sun.png'
import cloud from'../assets/icons/cloud.png'
import fogy from'../assets/icons/fogy.jpg'
import rain from'../assets/icons/rain.png'
import snowy from'../assets/icons/snowy.png'
import storm from'../assets/icons/storm.png'
import wind from'../assets/icons/wind.png'

const MIniCard=({time, temp, iconString})=> {
  const[icon,setIcon]=useState()

  useEffect(() => {
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
    <div className='glassCard w-[10rem] h-[10rem] p-4 flex flex-col'>
      <p className='text-center'>
        {new Date(time).toLocaleTimeString('en',{weekday:'long'}).split(" ")[0]}
      </p>
      <hr/>
      <div className='w-full flex justify-center items-center flex-1'>
  <img src={icon} alt="weather" className='w-[4rem] h-[4rem]'/>
      </div>
      <p className='text-center font-bold'>{temp}&deg;C</p>
    </div>
  )
}

export default MIniCard
