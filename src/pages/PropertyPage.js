import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import propertiesData from '../properties.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Tabs, Tab, Box, Typography, Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import '../App.css';

const PropertyPage = () => {
  // Extracting property id from URL parameters
  const { id } = useParams();
  
  // State to store property data and active tab value
  const [property, setProperty] = useState(null);
  const [value, setValue] = useState(0);

  // Fetch property details when id changes
  useEffect(() => {
    const foundProperty = propertiesData.properties.find((property) => property.id === id);
    setProperty(foundProperty);
  }, [id]);

  // Tab change handler
  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  // Loading state if property is not yet fetched
  if (!property) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mt-5">
      {/* Navigation link to go back */}
      <div className='d-flex justify-content-center'>
        <Link to={`/`}>
          <svg className='page-svg' xmlns="http://www.w3.org/2000/svg" height="40px" width="40px" viewBox="0 -960 960 960" fill="#">
            <path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"/>
          </svg>
        </Link>
        <h1 className="text-center fw-bold pb-4 pt-2">{property.location}</h1>
      </div>

      {/* Carousel for property images */}
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
              />
            ))}
          </div>
          <div className="carousel-inner">
            {property.picture.map((image, index) => (
              <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                <img src={image} className="d-block w-100 rounded" alt={`Property ${index + 1}`} />
              </div>
            ))}
          </div>
          {/* Carousel controls */}
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

      {/* Tabs for Description, Floor Plan, and Map */}
      <Box sx={{ width: '100%', marginTop: 5 }}>
        <Tabs value={value} onChange={handleTabChange} centered>
          <Tab label="Description" className='fs-5'/>
          <Tab label="Floor Plan" className='fs-5'/>
          <Tab label="Map" className='fs-5'/>
        </Tabs>

        {/* Description Tab */}
        <div role="tabpanel" hidden={value !== 0}>
          {value === 0 && (
            <Paper sx={{ paddingTop: 3, paddingLeft: 3, paddingRight: 3, marginTop: 2 }}>
              <Typography variant="body1">
                {/* Property Location */}
                <p className='fs-5'>{property.location}</p>

                {/* Property Price */}
                <div className='fs-3 fw-bold pb-2'>${property.price.toLocaleString()}</div>

                {/* Property Details: Type, Bedrooms, Tenure */}
                <hr />
                <div className='d-flex gap-5'>
                  <div className='d-flex flex-column align-items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black">
                      <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"/>
                    </svg>
                    {property.type}
                  </div>
                  <div className='d-flex flex-column align-items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black">
                      <path d="M80-200v-240q0-27 11-49t29-39v-112q0-50 35-85t85-35h160q23 0 43 8.5t37 23.5q17-15 37-23.5t43-8.5h160q50 0 85 35t35 85v112q18 17 29 39t11 49v240h-80v-80H160v80H80Zm440-360h240v-80q0-17-11.5-28.5T720-680H560q-17 0-28.5 11.5T520-640v80Zm-320 0h240v-80q0-17-11.5-28.5T400-680H240q-17 0-28.5 11.5T200-640v80Zm-40 200h640v-80q0-17-11.5-28.5T760-480H200q-17 0-28.5 11.5T160-440v80Zm640 0H160h640Z"/>
                    </svg>
                    {property.bedrooms} Bedrooms
                  </div>
                  <div className='d-flex flex-column align-items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black">
                      <path d="m438-426 198-198-57-57-141 141-56-56-57 57 113 113Zm42 240q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"/>
                    </svg>
                    {property.tenure} Tenure
                  </div>
                </div>
                <hr />

                {/* Property Description */}
                <br /><p>{property.description}</p><br /><br />

                {/* Date Property Added */}
                <p className='text-end pb-3 text-secondary'>{property.added.day} {property.added.month} {property.added.year}</p>
              </Typography>
            </Paper>
          )}
        </div>

        {/* Floor Plan Tab */}
        <div role="tabpanel" hidden={value !== 1}>
          {value === 1 && (
            <Paper sx={{ padding: 3, marginTop: 2 }}>
              <img src={property.floorplan} alt="Floor Plan" className="img-fluid" />
            </Paper>
          )}
        </div>

        {/* Map Tab */}
        <div role="tabpanel" hidden={value !== 2}>
          {value === 2 && (
            <Paper sx={{ padding: 3, marginTop: 2 }}>
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
