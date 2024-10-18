import React, { useState } from 'react';
import img from "../Navbar/navbarimg/OIP.jpeg"
const EventsNav = () => {
  const [activeTab, setActiveTab] = useState('tab-1');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const allEvents = [
    { id: 1, title: 'Event 1', image: img },
    { id: 2, title: 'Event 2', image: img},
    { id: 3, title: 'Event 3', image: img}
  ];

  const weddingEvents = [
    { id: 1, title: 'Wedding 1', image: img },
    { id: 2, title: 'Wedding 2', image: img },
  ];

  const corporateEvents = [
    { id: 1, title: 'Corporate Event 1', image: img },
    { id: 2, title: 'Corporate Event 2', image: img },
  ];

  const cocktailEvents = [
    { id: 1, title: 'Cocktail Event 1', image: img },
    { id: 2, title: 'Cocktail Event 2', image: img },
  ];

  const buffetEvents = [
    { id: 1, title: 'Buffet Event 1', image: img},
    { id: 2, title: 'Buffet Event 2', image: img},
  ];

  const getEvents = () => {
    switch (activeTab) {
      case 'tab-1':
        return allEvents;
      case 'tab-2':
        return weddingEvents;
      case 'tab-3':
        return corporateEvents;
      case 'tab-4':
        return cocktailEvents;
      case 'tab-5':
        return buffetEvents;
      default:
        return [];
    }
  };

  return (
    <div className="text-center">
      {/* Navigation Tabs */}
      <ul className="flex justify-center mb-5 space-x-4">
        <li className="nav-item p-2">
          <a
            className={`flex justify-center py-2 px-4 rounded-full border ${
              activeTab === 'tab-1' ? 'bg-blue-500 text-white' : 'bg-white text-black border-blue-500'
            } cursor-pointer`}
            onClick={() => handleTabClick('tab-1')}
          >
            <span className="w-32">All Events</span>
          </a>
        </li>
        <li className="nav-item p-2">
          <a
            className={`flex justify-center py-2 px-4 rounded-full border ${
              activeTab === 'tab-2' ? 'bg-blue-500 text-white' : 'bg-white text-black border-blue-500'
            } cursor-pointer`}
            onClick={() => handleTabClick('tab-2')}
          >
            <span className="w-32">Wedding</span>
          </a>
        </li>
        <li className="nav-item p-2">
          <a
            className={`flex justify-center py-2 px-4 rounded-full border ${
              activeTab === 'tab-3' ? 'bg-blue-500 text-white' : 'bg-white text-black border-blue-500'
            } cursor-pointer`}
            onClick={() => handleTabClick('tab-3')}
          >
            <span className="w-32">Corporate</span>
          </a>
        </li>
        <li className="nav-item p-2">
          <a
            className={`flex justify-center py-2 px-4 rounded-full border ${
              activeTab === 'tab-4' ? 'bg-blue-500 text-white' : 'bg-white text-black border-blue-500'
            } cursor-pointer`}
            onClick={() => handleTabClick('tab-4')}
          >
            <span className="w-32">Cocktail</span>
          </a>
        </li>
        <li className="nav-item p-2">
          <a
            className={`flex justify-center py-2 px-4 rounded-full border ${
              activeTab === 'tab-5' ? 'bg-blue-500 text-white' : 'bg-white text-black border-blue-500'
            } cursor-pointer`}
            onClick={() => handleTabClick('tab-5')}
          >
            <span className="w-32">Buffet</span>
          </a>
        </li>
      </ul>

      {/* Tab Content */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {getEvents().map(event => (
          <div key={event.id} className="event-img position-relative">
            <img className="img-fluid rounded w-full" src={event.image} alt={event.title} />
            <div className="event-overlay d-flex flex-column p-4">
              <h4 className="me-auto">{event.title}</h4>
              <a href={event.image} data-lightbox={event.title} className="my-auto">
                <i className="fas fa-search-plus text-dark fa-2x"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsNav;
