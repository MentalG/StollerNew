import React, {Component} from 'react';

//components
import Sidebar from '../sidebar/sidebar'
import Title from '../title/title'
import SiteProgress from '../site-progress/site-progress'
//material
import wallpaper from '../../materials/videos/main.mp4'
import poster from '../../materials/image/poster.png'
//css
import './app.scss';

export default class App extends Component {
  
    state = {

    }

    render() {
      return (
        <section className='first-section'>
              <video muted poster={poster} src={wallpaper} className="video-bg" alt="logo" autoPlay={true} loop={true} />
          <Sidebar />
          <Title />
          <SiteProgress /> 
        </section>
      )
    }
}
