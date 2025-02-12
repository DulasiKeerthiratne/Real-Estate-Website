import React from 'react';
import Card from './Card';

// Property display component
const PropertyList = ({ properties, addToFavorites }) => {
  return (
    <div>
      {/* Check if there are properties to display */}
      {properties.length > 0 ? (
        // Map through the properties and display each PropertyItem
        properties.map((property) => (
          <Card key={property.id} property={property} addToFavorites={addToFavorites} />
        ))
      ) : (
        // Display a message if no properties match the search criteria
        <p>No properties match your search criteria.</p>
      )}
    </div>
  );
};

export default PropertyList;
