import React, { useState, useEffect } from 'react';
import propertiesData from '../properties.json';
import Form from '../components/Form';
import Favorite from '../components/Favorite';
import CardDisplay from '../components/CardDisplay';

const HomePage = () => {
  // State for various filters
  const [typeFilter, setTypeFilter] = useState('');
  const [minRooms, setMinRooms] = useState('');
  const [maxRooms, setMaxRooms] = useState('');
  const [minDate, setMinDate] = useState('');
  const [maxDate, setMaxDate] = useState('');
  const [postcode, setPostcode] = useState('');
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [favorites, setFavorites] = useState(() => JSON.parse(localStorage.getItem('favorites')) || []);

  // Property types for the filter dropdown
  const propertyTypes = ['House', 'Flat'];

  // Effect to filter properties based on filter criteria
  useEffect(() => {
    const filterProperties = () => {
      return propertiesData.properties.filter((property) => {
        // Filter conditions based on user input
        const matchesType = !typeFilter || property.type === typeFilter;
        const matchesMinRooms = !minRooms || property.bedrooms >= parseInt(minRooms);
        const matchesMaxRooms = !maxRooms || property.bedrooms <= parseInt(maxRooms);
        const propertyDate = new Date(`${property.added.year}-${property.added.month}-${property.added.day}`);
        const matchesMinDate = !minDate || propertyDate >= new Date(minDate);
        const matchesMaxDate = !maxDate || propertyDate <= new Date(maxDate);
        const matchesPostcode = !postcode || property.location.toLowerCase().includes(postcode.toLowerCase());

        // Return properties that match all conditions
        return matchesType && matchesMinRooms && matchesMaxRooms && matchesMinDate && matchesMaxDate && matchesPostcode;
      });
    };

    setFilteredProperties(filterProperties());
  }, [typeFilter, minRooms, maxRooms, minDate, maxDate, postcode]);

  // Effect to save favorites to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  // Add property to favorites if it's not already in the list
  const addToFavorites = (property) => {
    if (!favorites.find((fav) => fav.id === property.id)) {
      setFavorites([...favorites, property]);
    }
  };

  // Remove property from favorites by filtering out the property with the given id
  const removeFromFavorites = (propertyId) => {
    setFavorites(favorites.filter((fav) => fav.id !== propertyId));
  };

  // Clear all favorites
  const clearFavorites = () => {
    setFavorites([]);
  };

  return (
    <div className='container-fluid'>
      <div className="p-5 row gap-5 justify-content-center">
        <div className="col-md-4">
          <h2 className="pb-3 fw-bold">Property Search</h2>
          {/* Filter form for the user to apply filters to the property list */}
          <Form
            typeFilter={typeFilter} setTypeFilter={setTypeFilter}
            minRooms={minRooms} setMinRooms={setMinRooms}
            maxRooms={maxRooms} setMaxRooms={setMaxRooms}
            minDate={minDate} setMinDate={setMinDate}
            maxDate={maxDate} setMaxDate={setMaxDate}
            postcode={postcode} setPostcode={setPostcode}
            propertyTypes={propertyTypes}
          />
          {/* List of favorite properties with an option to clear or remove individual favorites */}
          <Favorite favorites={favorites} clearFavorites={clearFavorites} removeFromFavorites={removeFromFavorites} />
        </div>
        <div className="col-md-7">
          <h2 className="pb-3 fw-bold">Property Results</h2>
          {/* Display filtered properties with an option to add them to favorites */}
          <CardDisplay properties={filteredProperties} addToFavorites={addToFavorites} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
