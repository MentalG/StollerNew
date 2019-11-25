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
      pages: [],
      curentPage: 0,
      pageHeight: window.innerHeight
    }

    handleScroll = (e) => {
      const delta = e.nativeEvent.wheelDelta
      const prevElement = e.target.previousElementSibling
      const nextElement = e.target.nextElementSibling
      let curentPage

      if (delta < 0 && nextElement !== null) {
        curentPage = nextElement.offsetTop
        window.scrollTo({
          top: curentPage,
          behavior: "smooth"
        })
      }

      if(delta > 0 && prevElement !== null) {
        curentPage = prevElement.offsetTop
        window.scrollTo({
          top: curentPage,
          behavior: "smooth"
        })
      }

      this.setState(() => {
        return {
          curentPage: curentPage
        }
      })
      
    }

    componentDidMount() {
      const elements = document.getElementsByTagName('section')
      const elementsArray = []

      for (const value of elements) {
        elementsArray.push(value.className)
      }

      this.setState(() => {
        return {
          pages : elementsArray
        }
      })

    }

    render() {
      const { pages, curentPage, pageHeight } = this.state
      
      return (
        <div className='app-container' onWheel={(e) => this.handleScroll(e)}>
        <section className='section first-section'>
          <video muted poster={poster} src={wallpaper} className="video-bg" alt="logo" autoPlay={true} loop={true} />
          <Sidebar />
          <Title />
          <SiteProgress pages={pages} curentPage={curentPage} pageHeight={pageHeight}/> 
        </section>
        <section className='section second-section'>
              <video muted poster={poster} src={wallpaper} className="video-bg" alt="logo" autoPlay={true} loop={true} />
        </section>
        </div>
      )
    }
}
