import React from 'react';
import { Link } from 'react-router-dom';

// Card component displays the details of a single property
const Card = ({ property, addToFavorites }) => {
  return (
    <div 
      className="d-flex align-items-center border rounded p-3 mb-3 card-container" 
      draggable 
      onDragEnd={() => addToFavorites(property)} 
      style={{ position: 'relative' }}
    >
      {/* Property image section */}
      <div className="me-5">
        <img 
          src={property.picture[0]} 
          alt={property.id} 
          className="img-fluid" 
          style={{ width: '300px', height: '200px', objectFit: 'cover', borderRadius: '8px' }} 
        />
      </div>

      {/* Property details section */}
      <div>
        {/* Property Location with link to detailed page */}
        <h3>
          <Link 
            className="text-black text-decoration-none" 
            to={`/properties/${property.id}`}
          >
            {property.location}
          </Link>
        </h3>

        {/* Property additional details (Type, Bedrooms, Price) */}
        <div className='card-details d-flex gap-5 mt-4'>
          <div className='d-flex flex-column align-items-center'>
            {/* Property type icon */}
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              height="24px" 
              viewBox="0 -960 960 960" 
              width="24px" 
              fill="black"
            >
              <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"/>
            </svg>
            {property.type}
          </div>

          <div className='d-flex flex-column align-items-center'>
            {/* Property Bedrooms icon */}
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              height="24px" 
              viewBox="0 -960 960 960" 
              width="24px" 
              fill="black"
            >
              <path d="M80-200v-240q0-27 11-49t29-39v-112q0-50 35-85t85-35h160q23 0 43 8.5t37 23.5q17-15 37-23.5t43-8.5h160q50 0 85 35t35 85v112q18 17 29 39t11 49v240h-80v-80H160v80H80Zm440-360h240v-80q0-17-11.5-28.5T720-680H560q-17 0-28.5 11.5T520-640v80Zm-320 0h240v-80q0-17-11.5-28.5T400-680H240q-17 0-28.5 11.5T200-640v80Zm-40 200h640v-80q0-17-11.5-28.5T760-480H200q-17 0-28.5 11.5T160-440v80Zm640 0H160h640Z"/>
            </svg>
            {property.bedrooms} Bedrooms
          </div>

          <div className='d-flex flex-column align-items-center'>
            {/* Property Price icon */}
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              height="24px" 
              viewBox="0 -960 960 960"
              width="24px" 
              fill="#"
              >
                <path d="M441-120v-86q-53-12-91.5-46T293-348l74-30q15 48 44.5 73t77.5 25q41 0 69.5-18.5T587-356q0-35-22-55.5T463-458q-86-27-118-64.5T313-614q0-65 42-101t86-41v-84h80v84q50 8 82.5 36.5T651-650l-74 32q-12-32-34-48t-60-16q-44 0-67 19.5T393-614q0 33 30 52t104 40q69 20 104.5 63.5T667-358q0 71-42 108t-104 46v84h-80Z"/>
            </svg>
            ${property.price}
          </div>
        </div>
      </div>

      {/* Heart icon for adding property to favorites */}
      <svg 
        className="heart-svg" 
        xmlns="http://www.w3.org/2000/svg" 
        height="30px" 
        viewBox="0 -960 960 960" 
        width="30px" 
        fill="black" 
        style={{ position: 'absolute', top: '10px', right: '10px', cursor: 'pointer' }} 
        onClick={() => addToFavorites(property)}
      >
        <path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"/>
      </svg>
    </div>
  );
};

export default Card;
