import React from 'react';

const PropertyItem = ({ property, addToFavorites }) => {
  return (
    <div className="d-flex border rounded p-3 mb-3" draggable onDragEnd={() => addToFavorites(property)}>
      <div className="me-3">
        <img src={property.picture} alt={property.id} className="img-fluid" style={{ width: '300px', height: 'auto' }} />
      </div>
      <div>
        <h3><a href={property.url}>{property.location}</a></h3>
        <p><strong>Type:</strong> {property.type}</p>
        <p><strong>Bedrooms:</strong> {property.bedrooms}</p>
        <p><strong>Price:</strong> ${property.price}</p>
        <button className="btn btn-primary btn-sm" onClick={() => addToFavorites(property)}>Add to Favorites</button>
      </div>
    </div>
  );
};

export default PropertyItem;