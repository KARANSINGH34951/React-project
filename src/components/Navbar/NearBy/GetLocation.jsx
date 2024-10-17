import React, { useEffect, useState } from 'react'

const GetLocation = () => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        (error) => {
          console.log("Error getting location:", error);
        }
      );
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }, []);

  return (
    <div>
      {latitude && longitude ? (
        <p>{latitude},{longitude}</p>
      ) : (
        <p>Fetching location...</p>
      )}
    </div>
  );
};

export default GetLocation;
