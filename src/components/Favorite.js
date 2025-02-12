import React from 'react';

// Favorite component to display and manage the user's favorite properties
const Favorite = ({ favorites, clearFavorites, removeFromFavorites }) => {

  // Handle the drop event to remove an item from the favorites list
  const handleDrop = (e) => {
    e.preventDefault(); // Prevent the default behavior to allow the drop
    
    // Get the ID of the dragged item from the data transfer
    const propertyId = e.dataTransfer.getData('text/plain');
    
    // Remove the property from the favorites list
    removeFromFavorites(propertyId);
  };

  // Allow drag over by preventing the default behavior
  const handleDragOver = (e) => {
    e.preventDefault(); // This is necessary to allow an item to be dropped
  };

  return (
    <div className="mt-4" onDrop={handleDrop} onDragOver={handleDragOver}>
      {/* Title for the Favorites section */}
      <h2 className='pb-3 pt-4 fw-bold'>Favorites</h2>

      {/* Button to clear all favorites */}
      <button className="btn btn-dark mb-2" style={{ backgroundColor: 'black', color: 'white' }} onClick={clearFavorites}>
        Clear Favorites
      </button>

      {/* Display the list of favorite properties */}
      {favorites.length > 0 ? (
        favorites.map((fav, index) => (
          <div 
            key={index} 
            className="d-flex align-items-center gap-3 border rounded p-2 mb-2" 
            draggable 
            onDragStart={(e) => e.dataTransfer.setData('text/plain', fav.id)}
          >
            {/* Property image */}
            <div className="mb-3 mb-md-0 text-center">
              <img 
                src={fav.picture[0]} 
                alt={fav.id} 
                className="img-fluid" 
                style={{ width: '140px', height: '100px', objectFit: 'cover', borderRadius: '8px'}} 
              />
            </div>

            {/* Property details and remove button */}
            <div>
              <h5>{fav.location}</h5>
              <button 
                className="btn btn-sm btn-dark" 
                style={{ backgroundColor: 'black', color: 'white' }}
                onClick={() => removeFromFavorites(fav.id)}
              >
                Remove
              </button>
            </div>
          </div>
        ))
      ) : (
        // Display a message if there are no favorite properties
        <p>No favorite properties yet.</p>
      )}
    </div>
  );
};

export default Favorite;
