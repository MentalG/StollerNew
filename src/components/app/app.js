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
    currentOffSetTop: null,
    pageHeight: window.innerHeight
  }

  isInViewport = (element) => {
    const cordinate = element.getBoundingClientRect();

    return (
      cordinate.top >= 0 &&
      cordinate.left >= 0 &&
      cordinate.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      cordinate.right <= (window.innerWidth || document.documentElement.clientWidth)
    )
  }

  setSections = () => {
    const sectionElements = document.getElementsByTagName('section')
    const sectionObj = {}

    for (const value of sectionElements) {
      const section = value.classList[0]

      sectionObj[section] = {
        isScroled: false,
        isActive: this.isInViewport(value),
        section: value
      }
    }

    this.setState(() => {
      return {
        pages: sectionObj
      }
    })
  }

  handleScroll = (e) => {
    const { pages, currentOffSetTop, pageHeight } = this.state
    const pagesArr = Object.values(pages)
    const delta = e.nativeEvent.wheelDelta
    const currentSection = pagesArr
      .find(section => section.isActive === true)
    const indexOfCurrentSection = pagesArr.indexOf(currentSection)
    const prevSection = pagesArr[indexOfCurrentSection - 1]
    const nextSection = pagesArr[indexOfCurrentSection + 1]

    if (delta < 0 && nextSection !== undefined) {
      window.scrollTo({
        top: nextSection.section.offsetTop,
        behavior: "auto"
      })
    }

    if (delta > 0 && prevSection !== undefined) {
      window.scrollTo({
        top: prevSection.section.offsetTop,
        behavior: "auto"
      })
    }

    this.setState(({ pages }) => {
      const setPages = Object.assign({}, pages)

      for (const key in setPages) {
        setPages[key].isActive = this.isInViewport(setPages[key].section)
      }

      return {
        pages : setPages
      }
    })

  }

  componentDidMount () {
    this.setSections()

  }

  render () {
    const { pages, currentOffSetTop, pageHeight } = this.state

    return (
      <div className='app-container' onWheel={(e) => this.handleScroll(e)}>
        <section className='firstSection section'>
          <video muted poster={poster} src={wallpaper} className="video-bg" alt="logo" autoPlay={true} loop={true} />
          <Sidebar />
          <Title />
          <SiteProgress pages={pages} currentOffSetTop={currentOffSetTop} pageHeight={pageHeight} />
        </section>
        <section className='secondSection section'>
          <video muted poster={poster} src={wallpaper} className="video-bg" alt="logo" autoPlay={true} loop={true} />
          <h1>SECTION 2</h1>
        </section>
        <section className='thirdSection section'>
          <video muted poster={poster} src={wallpaper} className="video-bg" alt="logo" autoPlay={true} loop={true} />
          <h1>SECTION 3</h1>
        </section>
        <section className='fourthSection section'>
          <video muted poster={poster} src={wallpaper} className="video-bg" alt="logo" autoPlay={true} loop={true} />
          <h1>SECTION 4</h1>
        </section>
      </div>
    )

  }
}