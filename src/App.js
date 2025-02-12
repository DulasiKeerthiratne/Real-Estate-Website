import React from 'react';
import propertiesData from './properties.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Select, MenuItem, FormControl, InputLabel, TextField } from '@mui/material';

const Filter = () => {
  const propertyTypes = ['House', 'Flat', 'Detached', 'Semi-Detached', 'Terraced', 'Land', 'Parkhome'];

  return (
    <div className='p-5 row'>
      <div className='col-md-4'>
        <h2 className='pb-3'>Property Search</h2>

        <form className='d-grid gap-3'>
          <FormControl fullWidth>
            <InputLabel>Property Type:</InputLabel>
            <Select value="" label='Property Type'>
              <MenuItem value=""><em>Any</em></MenuItem>
              {propertyTypes.map((type) => (
                <MenuItem key={type} value={type}>
                  {type}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <TextField id="minRooms" label="Min Rooms" type="number" />
          <TextField id="maxRooms" label="Max Rooms" type="number" />
          <TextField id="minDate" label="Min Date" type="date" InputLabelProps={{ shrink: true }} />
          <TextField id="maxDate" label="Max Date" type="date" InputLabelProps={{ shrink: true }} />
          <TextField id="postcode" label="Postcode" type="text" />
        </form>
      </div>

      <div className='col-md-8'>
        <h2 className='pb-3'>Property Result</h2>

        {propertiesData.properties.length > 0 ? (
          propertiesData.properties.map((property, index) => (
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
              </div>
            </div>
          ))
        ) : (
          <p>No properties available.</p>
        )}
      </div>
    </div>
  );
};

export default Filter;