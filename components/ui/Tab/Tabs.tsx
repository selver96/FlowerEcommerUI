import React from 'react';
import './style.css'

const Tabs = () => {
    return (
        <div className='tabs'>
            <nav className="tabs__items">
                <a href="" className="tabs__item"></a>
                <a href="" className="tabs__item">B</a>
                <a href="" className="tabs__item">C</a>
            </nav>
            <div className="tabs__body">
                <div className="tabs__block"></div>
            </div>
        </div>
    );
};

export default Tabs;