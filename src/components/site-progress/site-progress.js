import React from 'react'
//css
import './site-progress.scss'

const SiteProgress = () => {
    return (
        <ul className='site-progress'>
            <li className='progress progress-active'>
                <div className='bar-top on-page'></div>
                <div className='bar on-page'></div>
                <div className='bar on-page'></div>
                <div className='bar on-page'></div>
            </li>
            <li className='progress'>
                <div className='bar-top'></div>
                <div className='bar'></div>
                <div className='bar'></div>
                <div className='bar'></div>
            </li>
            <li className='progress'>
                <div className='bar-top'></div>
                <div className='bar'></div>
                <div className='bar'></div>
                <div className='bar'></div>
            </li>
            <li className='progress'>
                <div className='bar-top'></div>
            </li>
        </ul>
    )
}

export default SiteProgress