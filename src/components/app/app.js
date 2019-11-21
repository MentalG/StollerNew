import React from 'react';

//components
import Sidebar from '../sidebar/sidebar'
//material
import wallpaper from '../../materials/videos/main.mp4'
//css
import './app.scss';

function App() {
  return (
    <>
       <div className="video-container">
          <video muted src={wallpaper} className="video-bg" alt="logo" autoPlay={true} loop={true} />
       </div>
      <Sidebar />
    </>
  );
}

export default App;
