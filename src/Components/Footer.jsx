import React, { useState } from 'react';
import CustomOrder from '../images/CustomOrder.jpg';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [materials, setMaterials] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleMaterialsChange = (event) => {
    setMaterials(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (email.includes('@')) {
        const newListing = {
            email,
            name,
            description,
            materials,
            image: CustomOrder,
            price: 10,
          };
        

      fetch('http://localhost:3000/listings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newListing),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Success:', data);
        })
        .catch((error) => {
          console.error('Error:', error);
          alert('An error occurred. Please try again later.');
        });
        setFormSubmitted(true);
    } else {
      alert('Please enter a valid email address.');
    }
  };

  return (
    <div className='contact-us'>
      <div>
        <h2>Custom Order</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">
            Email:
            <br />
            <input
              id="email"
              type="email"
              placeholder="Enter your Email"
              value={email}
              onChange={handleEmailChange}
            />
          </label>
          <br />
          <label htmlFor="name">
            Your Name:
            <br />
            <textarea
              id="name"
              placeholder="Your Name"
              value={name}
              onChange={handleNameChange}
            ></textarea>
          </label>
          <br />
          <label htmlFor="description">
            Description:
            <br />
            <textarea
              id="description"
              placeholder="Description of what you would like made."
              value={description}
              onChange={handleDescriptionChange}
            ></textarea>
          </label>
          <br />
          <label htmlFor="materials">
            Materials:
            <br />
            <textarea
              id="materials"
              placeholder="Specific materials you want used?"
              value={materials}
              onChange={handleMaterialsChange}
            ></textarea>
          </label>
          <br />
          <button id="submit-button" type="submit" value="Submit">
              Submit
            </button>
          </form>
        </div>
      {formSubmitted && (
        <div className="listing-card">
          <img src={CustomOrder} alt="Custom Order" className="listing-image" />
          <h4>{name}</h4>
          <p>Description: {description}</p>
          <p>Materials: {materials}</p>
          <p>Price: $50</p>
        </div>
      )}
    </div>
  );
};

export default Footer;





