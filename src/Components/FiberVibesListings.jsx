import React, { useEffect, useState } from 'react';
import WinterIsHereBlanket from '../images/WinterIsHereBlanket.jpg';  
import WestCoasters from '../images/WestCoasters.jpg';
import HoundHoodies from '../images/HoundHoodies.jpg';
import ChunkyKnitBeanie from '../images/ChunkyKnitBeanie.jpg';
import CelticWovenBabyBlanket from '../images/CelticWovenBabyBlanket.jpg';
import KnitPumpkins from '../images/KnitPumpkins.jpg';



const FiberVibesListings = () => {
  const [listings, setListings] = useState([]);

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

 
  const images = [WinterIsHereBlanket, WestCoasters, HoundHoodies, ChunkyKnitBeanie, CelticWovenBabyBlanket, KnitPumpkins];

  return (
    <div className="card-container">
      <h2>Listings</h2>
      <div className="cards">
        {listings.map((listing, index) => (
          <div className="card" key={listing.id}>
            <img src={images[index]} alt={listing.title} className="listing-image"/>  {/* Use the corresponding image */}
            <div className="card-content">
              <h3>{listing.title}</h3>
              <p><strong>Description:</strong> {listing.description}</p>
              <p><strong>Materials:</strong> {listing.materials}</p>
              <p><strong>Price:</strong> ${listing.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FiberVibesListings;