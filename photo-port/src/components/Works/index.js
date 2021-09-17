import React from 'react';
import butlerBites from '../../assets/images/cake.jpg';
import financeTracker from '../../assets/images/finance.jpeg';
import inspirationalWellness from '../../assets/images/zen.jpeg';

function Works() {
  return ( 
    <div className="flex">

<div className="card space-between" style={{width: '18rem'}}>
  <img src={butlerBites} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Weather Channel</h5>
    <p className="card-text">Don't just talk about the weather...Check it out!</p>
  </div>
  <div className="card-body">
    <a href="https://seanway28.github.io/weather-channel/" className="card-link">Deployed App</a>
    <a href="https://github.com/seanway28/weather-channel" className="card-link">Github</a>
  </div>
</div>

<div className="card space-between" style={{width: '18rem'}}>
  <img src={inspirationalWellness} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Inspirational Wellness</h5>
    <p className="card-text">Need a little me-time in your life? Inspirational Wellness prioritizes mental health and drives to spark inspiration in all aspects.</p>
  </div>
  <div className="card-body">
    <a href="https://seanway28.github.io/InterstellarWellness/" className="card-link">Deployed App</a>
    <a href="https://github.com/seanway28/InterstellarWellness" className="card-link">Github</a>
  </div>
</div>