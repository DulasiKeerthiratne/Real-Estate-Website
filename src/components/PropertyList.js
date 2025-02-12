import React from 'react';
import { Link } from 'react-router-dom';
import PropertyItem from './PropertyItem';

const PropertyList = ({ properties, addToFavorites }) => {
  return (
    <div>
      {properties.length > 0 ? (
        properties.map((property) => (
          <PropertyItem key={property.id} property={property} addToFavorites={addToFavorites} />
        ))
      ) : (
        <p>No properties match your search criteria.</p>
      )}
    </div>
  );
};

export default PropertyList;
