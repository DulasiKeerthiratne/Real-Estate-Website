import React from 'react';
import propertiesData from './properties.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Select, MenuItem, FormControl, InputLabel, TextField } from '@mui/material';

const PropertyList = () => {
  return (
    <div className="container py-4">
      {/* Filter Form Section */}
      <div className="row mb-4">
        <div className="col-md-4">
          <h2 className="pb-3">Property Search</h2>
          <form className="d-grid gap-3">
            <FormControl fullWidth>
              <InputLabel>Property Type:</InputLabel>
              <Select value={''} onChange={() => {}} label="Property Type">
                <MenuItem value=""><em>Any</em></MenuItem>
                {/* Replace these with dynamic property types if needed */}
                <MenuItem value="House">House</MenuItem>
                <MenuItem value="Flat">Flat</MenuItem>
                <MenuItem value="Detached">Detached</MenuItem>
                <MenuItem value="Semi-Detached">Semi-Detached</MenuItem>
                <MenuItem value="Terraced">Terraced</MenuItem>
                <MenuItem value="Land">Land</MenuItem>
                <MenuItem value="Parkhome">Parkhome</MenuItem>
              </Select>
            </FormControl>
            <TextField id="minRooms" label="Min Rooms" type="number" inputProps={{ min: 0 }} />
            <TextField id="maxRooms" label="Max Rooms" type="number" inputProps={{ min: 0 }} />
            <TextField id="minDate" label="Min Date" type="date" InputLabelProps={{ shrink: true }} />
            <TextField id="maxDate" label="Max Date" type="date" InputLabelProps={{ shrink: true }} />
            <TextField id="postcode" label="Postcode" type="text" />
          </form>
        </div>
      </div>

      {/* Property List Section */}
      <h2 className="mb-4">Property List</h2>
      <div className="row">
        {propertiesData.properties.map((property, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card shadow-sm">
              <img src={property.picture} className="card-img-top" alt={property.location} style={{ height: '200px', objectFit: 'cover' }} />
              <div className="card-body">
                <h5 className="card-title">{property.location}</h5>
                <p className="card-text"><strong>Type:</strong> {property.type}</p>
                <p className="card-text"><strong>Bedrooms:</strong> {property.bedrooms}</p>
                <p className="card-text"><strong>Price:</strong> ${property.price}</p>
                <p className="card-text">{property.description}</p>
                <a href={property.url} className="btn btn-primary">View Details</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyList;
