import React, { useEffect, useState } from 'react';

const HotelsCards = ({ latitude, longitude }) => {
  const [listofres, setListofres] = useState([]);
  
  useEffect(() => {
    async function fetchApiData(lat, lon) {
      try {
        const response = await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${lon}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`);
        const json = await response.json();      
        
        setListofres(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []);
        
      } catch (error) {
        console.error('Error fetching restaurant data:', error);
      }
    }

    if (latitude && longitude) {
      fetchApiData(latitude, longitude);
    }
  }, [latitude, longitude]); 

  return (
    <div>
      <h1>Hotel Names</h1>
      <div>
        {listofres.length > 0 ? (
          listofres.map((hotel, index) => (
            <div key={index}>
              <h3>{hotel.info.name}</h3>
              <p>{hotel.info.cuisines.join(', ')}</p> 
            </div>
          ))
        ) : (
          <p>No hotels available for this location.</p>
        )}
      </div>
    </div>
  );
};

export default HotelsCards;
