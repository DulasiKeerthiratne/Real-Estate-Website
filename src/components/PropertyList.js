import React from 'react';
import PropertyItem from './PropertyItem';

const PropertyList = ({ properties, addToFavorites }) => {
  return (
    <div>
      {properties.length > 0 ? (
        properties.map((property, index) => (
          <PropertyItem key={index} property={property} addToFavorites={addToFavorites} />
        ))
      ) : (
        <p>No properties match your search criteria.</p>
      )}
    </div>
  );
};

export default PropertyList;