import React, {useEffect, useState } from 'react';
import TopMenu from './TopMenu';
import WebNav from './WebNav';

const Header = () => {
    const [fix, setFix] = useState(false);
    
    const handleScroll = () => {
        const position = window.pageYOffset;
        if(position >= 100){
            setFix(true); 
        }else{
            setFix(false); 
        }
        
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <section className='header'>
            <TopMenu/>
            <WebNav 
                fix={fix}
            />
        </section>
    );
};

export default Header;