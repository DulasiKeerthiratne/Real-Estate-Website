import React from 'react';
import propertiesData from './properties.json';
import 'bootstrap/dist/css/bootstrap.min.css';

const PropertyList = () => {
  return (
    <div className="container py-4">
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