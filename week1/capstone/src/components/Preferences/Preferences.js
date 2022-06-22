import React from 'react';
import image1Me from './../../media/image1Me.jpg';

export default function Preferences() {
  return(
    <div className='meWrapper'>
    <h2>My Page</h2>
    <img className='me' src={image1Me}></img>
    </div>
  );
}