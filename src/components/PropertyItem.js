import React from 'react';
import { Link } from 'react-router-dom';

const PropertyItem = ({ property, addToFavorites }) => {
  return (
    <div className="d-flex border rounded p-3 mb-3" draggable onDragEnd={() => addToFavorites(property)}>
      <div className="me-3">
        <img src={property.picture[0]} alt={property.id} className="img-fluid" style={{ width: '300px', height: 'auto' }} />
      </div>
      <div>
        <h3>
          <Link to={`/properties/${property.id}`}>{property.location}</Link>
        </h3>
        <p><strong>Type:</strong> {property.type}</p>
        <p><strong>Bedrooms:</strong> {property.bedrooms}</p>
        <p><strong>Price:</strong> ${property.price}</p>
        <button className="btn btn-primary btn-sm" onClick={() => addToFavorites(property)}>Add to Favorites</button>
      </div>
    </div>
  );
};

export default PropertyItem;
