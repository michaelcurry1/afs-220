import React from 'react';
import video1 from '../../media/videoplayback (1).mp4';

export default function Dashboard() {
  return (
    <div>
      <h2>Drum Solos</h2>
      <video loop autoPlay width="320" height="240" controls>
        <source src={video1} type="video/mp4"/>
          {/* <source src="movie.ogg" type="video/ogg"/> */}
            Your browser does not support the video tag.
          </video>
        </div>
        );
}