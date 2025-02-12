import React from 'react';
import { Select, MenuItem, FormControl, InputLabel, TextField } from '@mui/material';

const FilterForm = ({ typeFilter, setTypeFilter, minRooms, setMinRooms, maxRooms, setMaxRooms, minDate, setMinDate, maxDate, setMaxDate, postcode, setPostcode, propertyTypes }) => {
  return (
    <form className="d-grid gap-3">
      <FormControl fullWidth>
        <InputLabel>Property Type</InputLabel>
        <Select value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)} label="Property Type">
          <MenuItem value=""><em>Any</em></MenuItem>
          {propertyTypes.map((type) => (
            <MenuItem key={type} value={type}>{type}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField id="minRooms" label="Min Rooms" type="number" value={minRooms} onChange={(e) => setMinRooms(e.target.value)} />
      <TextField id="maxRooms" label="Max Rooms" type="number" value={maxRooms} onChange={(e) => setMaxRooms(e.target.value)} />
      <TextField id="minDate" label="Min Date" type="date" value={minDate} onChange={(e) => setMinDate(e.target.value)} InputLabelProps={{ shrink: true }} />
      <TextField id="maxDate" label="Max Date" type="date" value={maxDate} onChange={(e) => setMaxDate(e.target.value)} InputLabelProps={{ shrink: true }} />
      <TextField id="postcode" label="Postcode" type="text" value={postcode} onChange={(e) => setPostcode(e.target.value)} />
    </form>
  );
};

export default FilterForm;