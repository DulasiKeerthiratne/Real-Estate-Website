import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import propertiesData from '../properties.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const PropertyPage = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);

  useEffect(() => {
    const foundProperty = propertiesData.properties.find((property) => property.id === id);
    setProperty(foundProperty);
  }, [id]);

  if (!property) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mt-5">
      <h1 className="text-center">{property.location}</h1>
      <div className="d-flex justify-content-center mt-4">
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" style={{ maxWidth: '800px'}}>
          <div className="carousel-indicators">
            {property.picture.map((_, index) => (
              <button key={index} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={index} className={index === 0 ? 'active' : ''} aria-current={index === 0 ? 'true' : undefined} aria-label={`Slide ${index + 1}`}></button>
            ))}
          </div>
          <div className="carousel-inner">
            {property.picture.map((image, index) => (
              <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                <img src={image} className="d-block w-100 rounded" alt={`Property Image ${index + 1}`} />
              </div>
            ))}
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyPage;
