import React from 'react'
//css
import './sidebar.scss'

const Sidebar = () => {
    return(
        <div className='sidebar'>
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
        </div>
    )
}

export default Sidebar