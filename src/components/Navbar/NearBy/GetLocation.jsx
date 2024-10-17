import React, { useEffect, useState } from 'react'

const GetLocation = () => {
  const [latitude,setlatitude]=useState(null);
  const [longitude,setlongitude]=useState(null);

  useEffect(()=>{
    try {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setlatitude(position.coords.latitude);
            setlongitude(position.coords.longitude);  
          } 
      )}
      console.log(latitude);
    } catch (error) {
      console.log(error);  
    }
  },[])
  return (
    <div>


    </div>
  )
}

export default GetLocation