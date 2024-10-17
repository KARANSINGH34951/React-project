import React, { useEffect, useState } from 'react';

const HotelsCards = ({ latitude, longitude }) => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchApiData(lat, lon) {
      if (!lat || !lon) {
        setError('Invalid location coordinates.');
        setLoading(false);
        return;
      }

      setLoading(true);
      setError(''); // Reset error state

      try {
        const response = await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${lon}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const json = await response.json();
        const restaurants = json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
        console.log(restaurants);
        

        if (restaurants.length === 0) {
          setError('No restaurants found for this location.');
        } else {
          setListOfRestaurants(restaurants);
        }
      } catch (error) {
        console.error('Error fetching restaurant data:', error);
        setError('Failed to fetch restaurant data. Please try again later.');
      } finally {
        setLoading(false);
      }
    }

    fetchApiData(latitude, longitude);
  }, [latitude, longitude]);

  return (
    <div className='p-4'>
      <h1 className='text-2xl font-bold mb-4'>Nearby Restaurants</h1>

      {loading ? (
        <p>Loading...</p> // You could replace this with a spinner component
      ) : error ? (
        <div className='text-red-500'>
          <p>{error}</p>
          <button onClick={() => fetchApiData(latitude, longitude)} className='text-blue-500 underline'>
            Retry
          </button>
        </div>
      ) : (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {listOfRestaurants.map((restaurant, index) => (
            <div key={index} className='border rounded-lg shadow p-4'>
              <h3 className='text-xl font-semibold'>{restaurant.info.name}</h3>
              <p className='text-gray-600'>{restaurant.info.cuisines.join(', ')}</p>
              {restaurant.info.avgRating && (
                <p className='mt-2'>Rating: {restaurant.info.avgRating}</p>
              )}
              {restaurant.info.address && (
                <p className='mt-1 text-gray-500'>{restaurant.info.address}</p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HotelsCards;
