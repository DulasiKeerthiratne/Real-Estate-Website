import React from 'react';

// Favorite logic/UI component
const Favorite = ({ favorites, clearFavorites, removeFromFavorites }) => {
  
  const handleDrop = (e) => {
    // Prevent default behavior
    e.preventDefault();
    
    // Get the id of the dragged item
    const propertyId = e.dataTransfer.getData('text/plain');
    
    // Remove the property from the favorites list
    removeFromFavorites(propertyId);
  };

  const handleDragOver = (e) => {
    e.preventDefault(); // Required to allow dropping
  };

  return (
    <div className="mt-4" onDrop={handleDrop} onDragOver={handleDragOver}>
      <h2 className='pb-3 pt-4 fw-bold'>Favorites</h2>
      <button className="btn btn-dark mb-2" onClick={clearFavorites}>Clear Favorites</button>
      {favorites.length > 0 ? (
        favorites.map((fav, index) => (
          <div
            key={index}
            className="d-flex border rounded p-2 mb-2"
            draggable
            onDragStart={(e) => e.dataTransfer.setData('text/plain', fav.id)} // Store the id of the property being dragged
          >
            <div className="me-3">
              <img src={fav.picture[0]} alt={fav.id} className="img-fluid" style={{ width: '100px', height: 'auto' }} />
            </div>
            <div>
              <h5>{fav.location}</h5>
              <button className="btn btn-sm btn-dark" onClick={() => removeFromFavorites(fav.id)}>Remove</button>
            </div>
          </div>
        ))
      ) : (
        <p>No favorite properties yet.</p>
      )}
    </div>
  );
};

export default Favorite;
