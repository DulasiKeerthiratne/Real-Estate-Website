import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import propertiesData from '../properties.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Tabs, Tab, Box, Typography, Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import './pages.css';

const PropertyPage = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [value, setValue] = useState(0);

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
      <div className='d-flex justify-content-center'>
        <Link to={`/`}>
          <svg className='page-svg' xmlns="http://www.w3.org/2000/svg" height="40px" width="40px" viewBox="0 -960 960 960" fill="#"><path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"/></svg>
        </Link>
        <h1 className="text-center fw-bold pb-4 pt-2">{property.location}</h1>
      </div>
      <div className="d-flex justify-content-center mt-4">
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" style={{ maxWidth: '800px' }}>
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

      <Box sx={{ width: '100%', marginTop: 5 }}>
        <Tabs value={value} onChange={handleTabChange} centered>
          <Tab label="Description" className='fs-5'/>
          <Tab label="Floor Plan" className='fs-5'/>
          <Tab label="Map" className='fs-5'/>
        </Tabs>

        <div role="tabpanel" hidden={value !== 0}>
          {value === 0 && (
            <Paper sx={{ paddingTop: 3, paddingLeft: 3, paddingRight: 3, marginTop: 2 }}>
              <Typography variant="body1">
                {/* Location */}
                <p className='fs-5'>{property.location}</p>
                
                {/* Price with larger font */}
                <div className='fs-3 fw-bold pb-2'>${property.price.toLocaleString()}</div>

                {/* Type, Bedrooms, Tenure */}
                <hr />
                <div className='d-flex gap-5'>
                  <div>{property.type}</div>
                  <div>{property.bedrooms} Bedrooms</div>
                  <div>{property.tenure} Tenure</div>
                </div><hr />

                {/* Description */}
                <br /><p>{property.description}</p><br /><br />

                {/* Date added */}
                <p className='text-end pb-3 text-secondary'>{property.added.day} {property.added.month} {property.added.year}</p>
              </Typography>
            </Paper>
          )}
        </div>

        <div role="tabpanel" hidden={value !== 1}>
          {value === 1 && (
            <Paper sx={{ padding: 3, marginTop: 2 }}>
              <img src={property.floorplan} alt="Floor Plan" className="img-fluid" />
            </Paper>
          )}
        </div>

        <div role="tabpanel" hidden={value !== 2}>
          {value === 2 && (
            <Paper sx={{ padding: 3, marginTop: 2 }}>
              <iframe width="100%" height="450" frameBorder="0" style={{ border: 0 }} src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyB76IW4OgqcrXbQVeKX4n7sDGCG4z4N_ys&q=${property.coordinates}`} allowFullScreen title="Property Location Map"></iframe>
            </Paper>
          )}
        </div>
      </Box>
    </div>
  );
};

export default PropertyPage;
