import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams
import propertiesData from '../properties.json'; // Import propertiesData

const PropertyDetail = () => {
  const { id } = useParams(); // Get the property id from the URL
  const [property, setProperty] = useState(null);

  useEffect(() => {
    // Fetch the property details by ID
    const foundProperty = propertiesData.properties.find((property) => property.id === id);
    setProperty(foundProperty);
  }, [id]);

  if (!property) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>{property.location}</h2>
      <p><strong>Type:</strong> {property.type}</p>
      <p><strong>Bedrooms:</strong> {property.bedrooms}</p>
      <p><strong>Price:</strong> ${property.price}</p>
      <img src={property.picture} alt={property.id} className="img-fluid" style={{ width: '100%' }} />
      <p><strong>Description:</strong> {property.description}</p>
    </div>
  );
};

export default PropertyDetail;
