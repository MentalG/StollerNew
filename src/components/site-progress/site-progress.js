import React, { Component } from 'react'
//css
import './site-progress.scss'

export default class SiteProgress extends Component {

    render () {
        // const { pages, curentPage, pageHeight } = this.props

        return (
            <ul className='site-progress'>
                    <li className='progress on-page'>
                        <div className='bar-top'></div>
                        <div className='bar'></div>
                        <div className='bar'></div>
                        <div className='bar'></div>
                    </li>
            </ul>
        )
    }
}