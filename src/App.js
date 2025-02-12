import React from 'react';
import propertiesData from './properties.json';

const PropertyList = () => {
  return (
    <div>
      <h2>Property List</h2>
      {propertiesData.properties.map((property, index) => (
        <div key={index}>
          <p>Location: {property.location}</p>
          <p>Type: {property.type}</p>
          <p>Bedrooms: {property.bedrooms}</p>
          <p>Price: ${property.price}</p>
          <p>Description: {property.description}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default PropertyList;
