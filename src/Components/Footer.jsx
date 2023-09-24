import React from 'react';

const Footer = () => {

    const emailElement = document.querySelector('#email');
const messageElement = document.querySelector('#message');
const submitButton = document.querySelector('#submit-button');
submitButton.addEventListener('click', function (e) {
  e.preventDefault();

  const emailValue = emailElement.value;
  const messageValue = messageElement.value;

  console.log('Email: ', emailValue);
  console.log('Message: ', messageValue);

  if (emailValue.includes('@')) {
    alert('Thank You');
  } else {
    alert('Please enter a valid email address.');
  }
});

    return (
        <footer>
            <div className="contact-us">
                <h4>Contact Us</h4>
                <form>
                    <label htmlFor="email">
                        Email:
                        <input id="email" type="email" placeholder="Enter your Email" />
                    </label>
                    <br></br>
                    <label htmlFor="message">
                        Ask a question:
                        <textarea id="message" placeholder="Your Message"></textarea>
                    </label>
                    <div className="submit-button-wrapper">
                        <button id="submit-button" type="submit" value="Submit">Submit</button>
                    </div>
                </form>
            </div>
        </footer>
    )
}

export default Footer;