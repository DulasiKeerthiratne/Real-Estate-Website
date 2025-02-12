import React from 'react';
import { Button, Select, MenuItem, FormControl, InputLabel, TextField } from '@mui/material';

const Form = ({
  typeFilter, setTypeFilter, 
  minRooms, setMinRooms, maxRooms, setMaxRooms, 
  minDate, setMinDate, maxDate, setMaxDate, 
  postcode, setPostcode, propertyTypes, 
  minPrice, setMinPrice, maxPrice, setMaxPrice, handleSearch
}) => {
  return (
    <form className="d-grid gap-3">
      {/* Property Type Filter */}
      <FormControl fullWidth>
        <InputLabel>Property Type</InputLabel>
        <Select 
          value={typeFilter} 
          onChange={(e) => setTypeFilter(e.target.value)} 
          label="Property Type"
        >
          {/* Default option for 'Any' property type */}
          <MenuItem value=""><em>Any</em></MenuItem>
          {/* Dynamically render property type options */}
          {propertyTypes.map((type) => (
            <MenuItem key={type} value={type}>{type}</MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* Min Price Filter */}
      <TextField
        id="minPrice"
        label="Min Price"
        type="number"
        value={minPrice}
        onChange={(e) => setMinPrice(e.target.value)}
        fullWidth
        inputProps={{ min: 0 }}
      />

      {/* Max Price Filter */}
      <TextField
        id="maxPrice"
        label="Max Price"
        type="number"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
        fullWidth
        inputProps={{ min: 0 }}
      />

      {/* Min Rooms Filter */}
      <TextField 
        id="minRooms" 
        label="Min Rooms" 
        type="number" 
        value={minRooms} 
        onChange={(e) => setMinRooms(e.target.value)} 
        fullWidth 
        inputProps={{ min: 0 }}
      />

      {/* Max Rooms Filter */}
      <TextField 
        id="maxRooms" 
        label="Max Rooms" 
        type="number" 
        value={maxRooms} 
        onChange={(e) => setMaxRooms(e.target.value)} 
        fullWidth 
        inputProps={{ min: 0 }}
      />

      {/* Min Date Filter */}
      <TextField 
        id="minDate" 
        label="From" 
        type="date" 
        value={minDate} 
        onChange={(e) => setMinDate(e.target.value)} 
        InputLabelProps={{ shrink: true }} 
        fullWidth 
      />

      {/* Max Date Filter */}
      <TextField 
        id="maxDate" 
        label="To" 
        type="date" 
        value={maxDate} 
        onChange={(e) => setMaxDate(e.target.value)} 
        InputLabelProps={{ shrink: true }} 
        fullWidth 
      />

      {/* Postcode Filter */}
      <TextField 
        id="postcode" 
        label="Postcode" 
        type="text" 
        value={postcode} 
        onChange={(e) => setPostcode(e.target.value)} 
        fullWidth 
      />

      {/* Search Button */}
      <Button 
        className='p-2 border'
        variant="contained" 
        color="primary" 
        onClick={handleSearch} 
        sx={{ backgroundColor: 'black', '&:hover': { backgroundColor: 'black' } }}
        fullWidth
      >
        Search
      </Button>
    </form>
  );
};

export default Form;
