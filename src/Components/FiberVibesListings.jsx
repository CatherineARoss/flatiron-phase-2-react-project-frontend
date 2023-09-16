import React, { useEffect } from 'react';

const FiberVibesListings = () => {
  let listings = []; 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/listings');
        const jsonData = await response.json();
        
        console.log(jsonData); 
        return jsonData; 
      } catch (error) {
        console.error('Error fetching data:', error);
        return null;
      }
    };

    fetchData();
  }, []); 

  return (
    <div>
      <h2>Listings:</h2>
      <ul>
        {listings.map(listing => (
          <li key={listing.id}>{listing.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default FiberVibesListings;