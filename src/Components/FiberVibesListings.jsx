import React, { useEffect, useState } from 'react';

const FiberVibesListings = () => {
  const [listings, setListings] = useState([]) 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/listings');
        const jsonData = await response.json();
        setListings(jsonData); 
      } catch (error) {
        console.error('Error fetching data:', error);
        return null;
      }
    };

    fetchData();
  }, []); 

  return (
    <div className="card-container">
      <h2>Listings:</h2>
      <div className="cards">
        {listings.map(listing => (
          <div className="card" key={listing.id}>
            <img src={listing.image} alt={listing.title} />
            <div className="card-content">
              <h3>{listing.title}</h3>
              <p>Description: {listing.description}</p>
              <p>Materials: {listing.materials}</p>
              <p>Price: ${listing.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FiberVibesListings;