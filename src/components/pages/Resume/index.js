import React from 'react';
import resume from './assets/Mayur-Patel-Resume.pdf';

export default function Resume() {
  return (
    <div className= 'container-fluid'>
      <div className="section-title mt-2">
        <h2 className='mb-0'>Resume</h2>
      </div>
      <center>
      <object data={resume} type="application/pdf" aria-label="Resume" width="90%" height="800px" />   
      {/* <embed src={resume} width="1200px" height="2100px" />       */}
      </center>
    </div>
  );
}
