import React, { useState } from 'react';
// import helper function to validate email address
import { validateEmail } from '../../../utils/helpers';

export default function Contact() {
  // Create state variables for the fields in the form with initial values set to an empty string
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  // Create state variable to display validation error message
  const [errorMessage, setErrorMessage] = useState('');
  const validateIsName = () => {
    if(!name) {
      setErrorMessage('name is required!');
    }
  }
  const validateIsEmail = () => {
    if (!validateEmail(email)) {
      setErrorMessage('Your email is Invalid!');
    }
  }
  const validateIsMessage = () => {
    if(!message) {
      setErrorMessage('message is required!');
    }
  }
  const handleFormSubmit = (e) => {    
    e.preventDefault();
    
    // validate form
    if(!name) {
      setErrorMessage('name is required!');
      return;
    }
    if (!validateEmail(email)) {
      setErrorMessage('Your email is Invalid!');
      return;
    }
    if(!message) {
      setErrorMessage('message is required!');
      return;
    }
    // successful
    setName('');
    setEmail('');
    setMessage('');
    setErrorMessage('Thank you for reaching out to me.');
  }  
  return (
    <div className='container-fluid'>
    <h2>Contact</h2>
    <div className='backgroundbase rounded p-3 mt-2'>
      <form>
        <div className="form-group">
          <label for="name" className="text-white">Name:</label>
          <input 
            type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)}            
            onMouseOut={(e) => validateIsName()}
            className="form-control mt-2" 
            id="name" 
          />
        </div>
        <div className="form-group">
          <label for="email" className="text-white">Email address:</label>
          <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onMouseOut={(e) => validateIsEmail()}
            className="form-control mt-2" 
            id="email" 
          />
        </div>
        <div className="form-group">
          <label for="message" className="text-white">Message</label>
          <textarea 
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onMouseOut={(e) => validateIsMessage()}
            class="form-control mt-2" 
            id="message" 
            rows="7"            
          />
        </div>
        <button type="button" className="btn btn-info mt-2" onClick={handleFormSubmit}>Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="mt-2 alert alert-warning" role="alert">{errorMessage}</p>
        </div>
      )}
    </div>
    </div>
  );
}
