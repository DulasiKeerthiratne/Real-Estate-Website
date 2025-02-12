import React, { useState, useEffect } from 'react';
import propertiesData from './properties.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Select, MenuItem, FormControl, InputLabel, TextField } from '@mui/material';

const Filter = () => {
  const [typeFilter, setTypeFilter] = useState('');
  const [minRooms, setMinRooms] = useState('');
  const [maxRooms, setMaxRooms] = useState('');
  const [minDate, setMinDate] = useState('');
  const [maxDate, setMaxDate] = useState('');
  const [postcode, setPostcode] = useState('');
  const [filteredProperties, setFilteredProperties] = useState([]);

  const propertyTypes = ['House', 'Flat', 'Detached', 'Semi-Detached', 'Terraced', 'Land', 'Parkhome'];

  // Effect to filter properties when any filter changes
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

    const result = filterProperties();
    setFilteredProperties(result);
  }, [typeFilter, minRooms, maxRooms, minDate, maxDate, postcode]);

  return (
    <div className='p-5 row'>
      <div className='col-md-4'>
        <h2 className='pb-3'>Property Search</h2>

        <form className='d-grid gap-3'>
          <FormControl fullWidth>
            <InputLabel>Property Type:</InputLabel>
            <Select value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)} label='Property Type'>
              <MenuItem value=""><em>Any</em></MenuItem>
              {propertyTypes.map((type) => (
                <MenuItem key={type} value={type}>
                  {type}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <TextField id="minRooms" label="Min Rooms" type="number" value={minRooms} onChange={(e) => setMinRooms(e.target.value)} />
          <TextField id="maxRooms" label="Max Rooms" type="number" value={maxRooms} onChange={(e) => setMaxRooms(e.target.value)} />
          <TextField id="minDate" label="Min Date" type="date" value={minDate} onChange={(e) => setMinDate(e.target.value)} InputLabelProps={{ shrink: true }} />
          <TextField id="maxDate" label="Max Date" type="date" value={maxDate} onChange={(e) => setMaxDate(e.target.value)} InputLabelProps={{ shrink: true }} />
          <TextField id="postcode" label="Postcode" type="text" value={postcode} onChange={(e) => setPostcode(e.target.value)} />
        </form>

        {/* Favorites Section (UI Only) */}
        <div className="mt-4">
          <h3>Favorites</h3>
          <button className="btn btn-danger mb-2" disabled>Clear Favorites</button>
          <p>No favorite properties yet.</p>
        </div>
      </div>

      <div className='col-md-8'>
        <h2 className='pb-3'>Property Result</h2>

        {filteredProperties.length > 0 ? (
          filteredProperties.map((property, index) => (
            <div key={index} className="d-flex border rounded p-3 mb-3">
              <div className="me-3">
                <img src={property.picture} alt={property.id} className="img-fluid" style={{ width: '150px', height: 'auto' }} />
              </div>

              <div>
                <h3><a href={property.url}>{property.location}</a></h3>
                <p><strong>Type:</strong> {property.type}</p>
                <p><strong>Bedrooms:</strong> {property.bedrooms}</p>
                <p><strong>Price:</strong> ${property.price}</p>
                <p><strong>Description:</strong> {property.description}</p>
                <button className="btn btn-primary btn-sm" disabled>Add to Favorites</button>
              </div>
            </div>
          ))
        ) : (
          <p>No properties match your search criteria.</p>
        )}
      </div>
    </div>
  );
};

export default Filter;