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