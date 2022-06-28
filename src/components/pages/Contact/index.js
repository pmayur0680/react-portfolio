import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';

// import helper function to validate email address
import { validateEmail } from '../../../utils/helpers';

export default function Contact() {
  // Create state variables for the fields in the form with initial values set to an empty string
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState('');
  const [state, handleSubmit] = useForm("xoqrzrnj");

  // Create state variable to display validation error message
  const [errorMessage, setErrorMessage] = useState('');  
  const handleFormSubmit = (e) => {    
    e.preventDefault();
    setSuccess('');
    // validate form
    if(!name) {
      setErrorMessage('name is required!');
      return;
    }
    if (!validateEmail(email)) {
      setErrorMessage('Your email is Invalid!');
      return;
    }
    if(!subject) {
      setErrorMessage('subject is required!');
      return;
    }
    if(!message) {
      setErrorMessage('message is required!');
      return;
    }
    // successful
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
    setErrorMessage('');
    handleSubmit();
    if (state.succeeded) {
      setSuccess('Thank you for reaching out to me.');
    } else {
      setErrorMessage(state.errors);
    }
   
  }  
  return (
    <div className='container-fluid'>
    <div className="section-title mt-2">
        <h2 className='mb-0'>Contact</h2>
    </div>
    <div className="row mt-1 contact">
      <div className="col-lg-3 ml-3">
        <div className="info">
          <div className="address">
            <i className="bi bi-geo-alt"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
  <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
  <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
</svg></i>
            <h4>Location:</h4>
            <p>Houston, TX 77082</p>
          </div>
          <div className="email">
            <i className="bi bi-envelope"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
</svg></i>
            <h4>Email:</h4>
            <p>pmayur0680@gmail.com</p>
          </div>
          <div className="phone">
            <i className="bi bi-phone"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-phone" viewBox="0 0 16 16">
  <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"/>
  <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
</svg></i>
            <h4>Call:</h4>
            <p>+1 832 748 3840</p>
          </div>
       </div>
      </div>
      <div className="col-lg-9 mt-5 mt-lg-0">
      <form onSubmit={handleSubmit} className="php-email-form"> 
        <div className="row">
          <div className="col-md-6 form-group">
          <input 
            type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)}            
            id="name"
            name="name"
            className="form-control" 
            placeholder="Your Name"
            required
          />
          </div>
          <div className="col-md-6 form-group mt-3 mt-md-0">
          <input 
            id="email" 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}            
            className="form-control" 
            placeholder="Your Email" 
            required
          />            
          </div>
        </div>
        <div className="form-group mt-3">
        <input 
            id="subject"
            type="text" 
            value={subject}
            onChange={(e) => setSubject(e.target.value)}            
            className="form-control" 
            placeholder="Subject"
            required
          />
        </div>
        <div className="form-group mt-3">
        <textarea 
            id="message" 
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows="5"    
            class="form-control" 
            placeholder="Message"
            required        
          />
        </div>
        <div className="my-3">
          {errorMessage && (
          <div>
            <p className="mt-2 alert alert-warning" role="alert">{errorMessage}</p>
          </div>
          )}
          {success && (
          <div>
            <p className="mt-2 alert alert-success" role="alert">{success}</p>
          </div>
          )}
        </div>
        <div className="text-center">
          <button type="button" 
                  onClick={handleFormSubmit}
                  >Send Message</button></div>
      </form>
     
    </div>
  </div>
</div>
  );
}
