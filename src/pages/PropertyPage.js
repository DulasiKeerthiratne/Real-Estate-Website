import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import propertiesData from '../properties.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Tabs, Tab, Box, Typography, Paper } from '@mui/material';

const PropertyPage = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [value, setValue] = useState(0); // Track selected tab

  useEffect(() => {
    const foundProperty = propertiesData.properties.find((property) => property.id === id);
    setProperty(foundProperty);
  }, [id]);

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  if (!property) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mt-5">
      <h1 className="text-center">{property.location}</h1>
      <div className="d-flex justify-content-center mt-4">
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" style={{ maxWidth: '800px' }}>
          <div className="carousel-indicators">
            {property.picture.map((_, index) => (
              <button
                key={index}
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={index}
                className={index === 0 ? 'active' : ''}
                aria-current={index === 0 ? 'true' : undefined}
                aria-label={`Slide ${index + 1}`}
              ></button>
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

      <Box sx={{ width: '100%', marginTop: 4 }}>
        <Tabs value={value} onChange={handleTabChange} aria-label="Property Details">
          <Tab label="Description" />
          <Tab label="Floor Plan" />
          <Tab label="Map" />
        </Tabs>

        <div role="tabpanel" hidden={value !== 0}>
          {value === 0 && (
            <Paper sx={{ padding: 3, marginTop: 2 }}>
              <Typography variant="h6" component="div">Property Description</Typography>
              <Typography variant="body1">{property.description}</Typography>
            </Paper>
          )}
        </div>

        <div role="tabpanel" hidden={value !== 1}>
          {value === 1 && (
            <Paper sx={{ padding: 3, marginTop: 2 }}>
              <Typography variant="h6" component="div">Floor Plan</Typography>
              <img src={property.floorplan} alt="Floor Plan" className="img-fluid" />
            </Paper>
          )}
        </div>

        <div role="tabpanel" hidden={value !== 2}>
          {value === 2 && (
            <Paper sx={{ padding: 3, marginTop: 2 }}>
              <Typography variant="h6" component="div">Location Map</Typography>
              <iframe
                width="100%"
                height="450"
                frameBorder="0"
                style={{ border: 0 }}
                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyB76IW4OgqcrXbQVeKX4n7sDGCG4z4N_ys&q=${property.coordinates}`}
                allowFullScreen
                title="Property Location Map"
              ></iframe>
            </Paper>
          )}
        </div>
      </Box>
    </div>
  );
};

export default PropertyPage;