import React, {Component} from 'react';

//components
import Sidebar from '../sidebar/sidebar'
import Title from '../title/title'
import SiteProgress from '../site-progress/site-progress'
//material
import wallpaper from '../../materials/videos/main.mp4'
//css
import './app.scss';

export default class App extends Component {

    state = {

    }

    render() {
      return (
        <>
           <div className="video-container">
              <video muted src={wallpaper} className="video-bg" alt="logo" autoPlay={true} loop={true} />
           </div>
          <Sidebar />
          <Title />
          <SiteProgress />
        </>
      )
    }
}
