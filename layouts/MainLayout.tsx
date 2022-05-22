import React from 'react';
import Header from '../components/Header/Header';
import Location from '../components/Header/Location';
import style from '../styles/MainLayout.module.css'

const MainLayout = ({children}) => {
    return (
        <div className={`${style.a} ${style.main}`}>
            <Header/>
            <Location/>
            {children}
        </div>
    );
};

export default MainLayout;