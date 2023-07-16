import React, { useState } from 'react';
import './GetinTouch.css';


function GetinTouch() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform email sending logic here
    // You can use a library like Axios to make an API call to your server
    // and handle the email sending on the server side
  };


  return (
    <div className="contact-container" id='get-in-touch'>
      <h1 className="getintouch-header">Get in Touch__</h1>
      <div className="content-container">
        <div className="getintouch-container">
          <h2>Hillman, Michigan, USA</h2>
          <h2>joswhite2001@gmail.com</h2>
          <h2>989-255-7983</h2>
        </div>
        <div className="input-container">
          <div className="name-email-container">
            <div className="name">
              <textarea placeholder='Enter your name' type="text" id="name" name="name" value={name} onChange={handleNameChange} required /><br /><br />
            </div>
            <div className="email">
              <textarea placeholder='Enter your email' type="email" id="email" name="email" value={email} onChange={handleEmailChange} required /><br /><br />
            </div>
          </div>
          <div className="message">
            <textarea placeholder='Enter your message' id="message" name="message" value={message} onChange={handleMessageChange} rows="4" cols="50" required /><br /><br />

            <button className='send-button' type="submit">Send</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetinTouch;
