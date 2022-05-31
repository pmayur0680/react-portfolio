import React from 'react';

export default function Contact() {
  return (
    <div className='container-fluid'>
    <h2>Contact</h2>
    <div className='backgroundbase rounded p-3 mt-2'>
      <form>
        <div className="form-group">
          <label for="name" className="text-white">Name:</label>
          <input type="text" className="form-control mt-2" id="name" />
        </div>
        <div className="form-group">
          <label for="email" className="text-white">Email address:</label>
          <input type="email" className="form-control mt-2" id="email" />
        </div>
        <div className="form-group">
          <label for="message" className="text-white">Message</label>
          <textarea class="form-control mt-2" id="message" rows="7"></textarea>
        </div>
        <button type="submit" className="btn btn-info mt-2">Submit</button>
      </form>
    </div>
    </div>
  );
}
