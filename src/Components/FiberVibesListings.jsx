import React, { useEffect, useState, useContext } from 'react';
import { CartContext } from './CartContext';
import WinterIsHereBlanket from '../images/WinterIsHereBlanket.jpg';
import WestCoasters from '../images/WestCoasters.jpg';
import HoundHoodies from '../images/HoundHoodies.jpg';
import ChunkyKnitBeanie from '../images/ChunkyKnitBeanie.jpg';
import CelticWovenBabyBlanket from '../images/CelticWovenBabyBlanket.jpg';
import KnitPumpkins from '../images/KnitPumpkins.jpg';
import MountainBeanie from '../images/MountainBeanie.jpg';
import NestingBowls from '../images/NestingBowls.jpg';
import StitchMarkers from '../images/StitchMarkers.jpg';

const FiberVibesListings = () => {
  const { cart, addToCart } = useContext(CartContext);

  const [listings, setListings] = useState([]);

  const handleAddToCart = (listing) => {
    addToCart(listing);
    console.log('Item added to cart:', listing.title);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/listings');
        const jsonData = await response.json();
        const listingsWithImages = jsonData.map((listing, index) => ({
          ...listing,
          image: [WinterIsHereBlanket, WestCoasters, HoundHoodies, ChunkyKnitBeanie, CelticWovenBabyBlanket, KnitPumpkins, MountainBeanie, NestingBowls, StitchMarkers][index],
        }));
        setListings(listingsWithImages);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [cart]);

  return (
    <div className="card-container">
      <h1>Listings</h1>
      <div className="cards">
        {listings.map((listing) => (
          <div className="card" key={listing.id}>
            {!listing.isCustomOrder && listing.image && <img src={listing.image} alt={listing.title} className="listing-image" />}
            <div className="card-content">
              <h2>{listing.title}</h2>
              <p><strong>Description:</strong> {listing.description}</p>
              <p><strong>Materials:</strong> {listing.materials}</p>
              <p className='price'><strong>Price:</strong> ${listing.price}</p>
              <button className="cart-button" onClick={() => handleAddToCart(listing)}>
                Add to Cart
              </button>
            </div>
          </div>
        ))} 
      </div>
    </div>
  );
};

export default FiberVibesListings;
