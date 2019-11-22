import React, { Component } from 'react'
//css
import './sidebar.scss'
//materials
import closeBtn from '../../materials/image/close.svg'
import openBtn from '../../materials/image/open.svg'


export default class Sidebar extends Component {

    state = {
        isOpen: false
    }

    onMouseEnterHandle = () => {
        this.setState({
            isOpen: true
        })
    }

    onMouseLeaveHandle = () => {
        this.setState({
            isOpen: false
        })
    }

    render () {
        const { isOpen } = this.state
        const button = isOpen ? closeBtn : openBtn
        const buttonClassName = isOpen ? 'sidebar-button-container-opened' : 'sidebar-button-container' 
        const sidebarListClassName = isOpen ? 'sidebar-open' : 'sidebar' 

        return (
            <div className={sidebarListClassName}
                onMouseEnter={() => this.onMouseEnterHandle()}
                onMouseLeave={() => this.onMouseLeaveHandle()}
            >
                <div className='sidebar-container'>
                    <ul className="sidebar-list">
                        <li className="sidebar-item">Главная</li>
                        <li className="sidebar-item">Продукция</li>
                        <li className="sidebar-item">Продукция</li>
                        <li className="sidebar-item">Гормоны</li>
                        <li className="sidebar-item">Культуры</li>
                        <li className="sidebar-item">Новости</li>
                        <li className="sidebar-item">Карьера</li>
                        <li className="sidebar-item">Контакты</li>
                        <li className="sidebar-item">Каталоги</li>
                        <li className="sidebar-item">Rootela</li>
                    </ul>
                </div>
                <div className={buttonClassName}>
                    <img className='sidebar-button' src={button} alt='btn' />
                </div>
            </div>
        )
    }
}