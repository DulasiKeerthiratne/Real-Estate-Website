import React, { useState, useEffect } from 'react';
import propertiesData from './properties.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import FilterForm from './components/FilterForm';
import FavoritesList from './components/FavoriteList';
import PropertyList from './components/PropertyList';

const App = () => {
  const [typeFilter, setTypeFilter] = useState('');
  const [minRooms, setMinRooms] = useState('');
  const [maxRooms, setMaxRooms] = useState('');
  const [minDate, setMinDate] = useState('');
  const [maxDate, setMaxDate] = useState('');
  const [postcode, setPostcode] = useState('');
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [favorites, setFavorites] = useState(() => JSON.parse(localStorage.getItem('favorites')) || []);
  const propertyTypes = ['House', 'Flat'];

  useEffect(() => {
    const filterProperties = () => {
      return propertiesData.properties.filter((property) => {
        const matchesType = !typeFilter || property.type === typeFilter;
        const matchesMinRooms = !minRooms || property.bedrooms >= parseInt(minRooms);
        const matchesMaxRooms = !maxRooms || property.bedrooms <= parseInt(maxRooms);
        const propertyDate = new Date(`${property.added.year}-${property.added.month}-${property.added.day}`);
        const matchesMinDate = !minDate || propertyDate >= new Date(minDate);
        const matchesMaxDate = !maxDate || propertyDate <= new Date(maxDate);
        const matchesPostcode = !postcode || property.location.toLowerCase().includes(postcode.toLowerCase());
        return matchesType && matchesMinRooms && matchesMaxRooms && matchesMinDate && matchesMaxDate && matchesPostcode;
      });
    };

    setFilteredProperties(filterProperties());
  }, [typeFilter, minRooms, maxRooms, minDate, maxDate, postcode]);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = (property) => {
    if (!favorites.find((fav) => fav.id === property.id)) {
      setFavorites([...favorites, property]);
    }
  };

  const removeFromFavorites = (propertyId) => {
    setFavorites(favorites.filter((fav) => fav.id !== propertyId));
  };

  const clearFavorites = () => {
    setFavorites([]);
  };

  return (
    <div className="p-5 row">
      <div className="col-md-4">
        <h2 className="pb-3">Property Search</h2>
        <FilterForm
          typeFilter={typeFilter} setTypeFilter={setTypeFilter}
          minRooms={minRooms} setMinRooms={setMinRooms}
          maxRooms={maxRooms} setMaxRooms={setMaxRooms}
          minDate={minDate} setMinDate={setMinDate}
          maxDate={maxDate} setMaxDate={setMaxDate}
          postcode={postcode} setPostcode={setPostcode}
          propertyTypes={propertyTypes}
        />
        <FavoritesList favorites={favorites} clearFavorites={clearFavorites} removeFromFavorites={removeFromFavorites} />
      </div>
      <div className="col-md-8">
        <h2 className="pb-3">Property Result</h2>
        <PropertyList properties={filteredProperties} addToFavorites={addToFavorites} />
      </div>
    </div>
  );
};

export default App;