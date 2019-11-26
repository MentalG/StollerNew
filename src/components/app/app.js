import React, { Component } from 'react';

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
    pages: {},
    currentPage: 0,
    pageHeight: window.innerHeight
  }

  handleScroll = (e) => {
    const { currentPage, pageHeight } = this.state
    const delta = e.nativeEvent.wheelDelta
    let setCurentPage

    
    if (delta < 0) {
      setCurentPage = pageHeight + currentPage
      window.scrollTo({
        top: setCurentPage,
        behavior: "smooth"
      })
    }
    
    if (delta > 0) {
      setCurentPage = currentPage - pageHeight
      window.scrollTo({
        top: setCurentPage,
        behavior: "smooth"
      })
    }



    // let currentPage = e.target
    // let setCurentPage
    // const prevElement = e.target.previousElementSibling
    // const nextElement = e.target.nextElementSibling

    // console.dir(Object.values(pages))

    // for (const key in pages) {
    //   console.dir(pages[key].attributes[0].value);
    // }


    // if (delta < 0 && nextElement !== null) {
    //   setCurentPage = nextElement.offsetTop
    //   window.scrollTo({
    //     top: setCurentPage,
    //     behavior: "smooth"
    //   })
    // }

    // if (delta > 0 && prevElement !== null) {
    //   setCurentPage = prevElement.offsetTop
    //   window.scrollTo({
    //     top: setCurentPage,
    //     behavior: "smooth"
    //   })
    // }

    this.setState(() => {
      return {
        currentPage: setCurentPage
      }
    })

  }

  componentDidMount () {
    const elements = document.getElementsByTagName('section')
    const elementsObj = {}

    for (const value of elements) {
      elementsObj[value.classList[0]] = value
    }

    this.setState(() => {
      return {
        pages: elementsObj
      }
    })

  }

  render () {
    const { pages, currentPage, pageHeight } = this.state

    return (
      <div className='app-container' onWheel={(e) => this.handleScroll(e)}>
        <section className='firstSection section'>
          <video muted poster={poster} src={wallpaper} className="video-bg" alt="logo" autoPlay={true} loop={true} />
          <Sidebar />
          <Title />
          <SiteProgress pages={pages} currentPage={currentPage} pageHeight={pageHeight} />
        </section>
        <section className='secondSection section'>
          <video muted poster={poster} src={wallpaper} className="video-bg" alt="logo" autoPlay={true} loop={true} />
        </section>
        <section className='secondSection section'>
          <video muted poster={poster} src={wallpaper} className="video-bg" alt="logo" autoPlay={true} loop={true} />
        </section>
        <section className='secondSection section'>
          <video muted poster={poster} src={wallpaper} className="video-bg" alt="logo" autoPlay={true} loop={true} />
        </section>
      </div>
    )
  }
}
