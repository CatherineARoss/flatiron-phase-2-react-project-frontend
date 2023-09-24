import React, { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (email.includes('@')) {
      alert('Thank You');
    } else {
      alert('Please enter a valid email address.');
    }
  };

  return (
    <footer>
      <div className="contact-us">
        <h4>Contact Us</h4>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">
            Email:
            <input
              id="email"
              type="email"
              placeholder="Enter your Email"
              value={email}
              onChange={handleEmailChange}
            />
          </label>
          <br />
          <label htmlFor="message">
            Ask a question:
            <textarea
              id="message"
              placeholder="Your Message"
              value={message}
              onChange={handleMessageChange}
            ></textarea>
          </label>
          <div className="submit-button-wrapper">
            <button id="submit-button" type="submit" value="Submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </footer>
  );
};

export default Footer;