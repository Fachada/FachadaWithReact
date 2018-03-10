import React from 'react';

const JobPostItem=(props)=>(
  <div>
  <span>{props.job.jobName}</span>
  <span>{props.job.jobDescription}</span>
  <img src={`${props.job.jobImage}`} alt="Job image" width="250" height="250">
  
)
