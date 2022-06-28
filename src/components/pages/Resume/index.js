import React from 'react';
import resume from './assets/Mayur-Patel-Resume.pdf';

export default function Resume() {
  return (
    <div className= 'container-fluid'>
      <div class="section-title mt-2">
      <h2>Resume</h2>
      </div>
      <center>
      <embed src={resume} width="800px" height="2100px" />      
      </center>
    </div>
  );
}
