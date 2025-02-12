import React from 'react';
import { Link } from 'react-router-dom';

// Individual property card component
const Card = ({ property, addToFavorites }) => {
  return (
    <div className="d-flex border rounded p-3 mb-3" draggable onDragEnd={() => addToFavorites(property)}>
      {/* Display property image */}
      <div className="me-3">
        <img src={property.picture[0]} alt={property.id} className="img-fluid" style={{ width: '300px', height: 'auto' }} />
      </div>
      <div>
        {/* Property Location with a link to the detailed page */}
        <h3>
          <Link className="text-black text-decoration-none" to={`/properties/${property.id}`}>{property.location}</Link>
        </h3>
        {/* Display property details */}
        <p>Type: {property.type}</p>
        <p>Bedrooms: {property.bedrooms}</p>
        <p>Price: ${property.price}</p>
        {/* Button to add the property to favorites */}
        <button className="btn btn-dark btn-sm" onClick={() => addToFavorites(property)}>Add to Favorites</button>
      </div>
    </div>
  );
};

export default Card;
