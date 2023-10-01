import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Form from './Form';


const Footer = ({ addListing }) => {
  const location = useLocation();
  const [email, setEmail] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [materials, setMaterials] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
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
            title,
            description,
            materials,
            price: 10,
            isCustomOrder: true,
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
          addListing(data); 
        })
        .catch((error) => {
          console.error('Error:', error);
          alert('An error occurred. Please try again later.');
        });
    } else {
      alert('Please enter a valid email address.');
    }
  };

  return (
    <div className='contact-us'>
      {location.pathname === '/' &&
        <Form
          email={email}
          title={title}
          description={description}
          materials={materials}
          handleEmailChange={handleEmailChange}
          handleTitleChange={handleTitleChange}
          handleDescriptionChange={handleDescriptionChange}
          handleMaterialsChange={handleMaterialsChange}
          handleSubmit={handleSubmit}
        />
      }
    </div>
  );
};

export default Footer;




