import React, { Component } from 'react'
//css
import './site-progress.scss'

export default class SiteProgress extends Component {

    render () {
        const { pages, curentPage, pageHeight } = this.props


        let listClass = curentPage / pageHeight === 1 ? 'progress on-page' : 'progress'


        if (curentPage / pageHeight !== 1) {
            listClass = 'progress'
        }
        if (curentPage / pageHeight === 1) {
            listClass = 'progress on-page'
        }

        return (
            <ul className='site-progress'>
                {pages.map((element, key) => {
                    return (<li className='progress on-page' key={key}>
                        <div className='bar-top'></div>
                        <div className='bar'></div>
                        <div className='bar'></div>
                        <div className='bar'></div>
                    </li>)
                })}
                <li className={listClass}>
                    <div className='bar-top'></div>
                </li>
            </ul>
        )
    }
}