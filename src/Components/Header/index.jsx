import { useState, useEffect } from 'react';
import './index.css';

import Menu from '../Menu';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(true);
    const [isHome, setIsHome] = useState();

    const updateMenuOpen = () => {
        setMenuOpen(!menuOpen);
    }

    useEffect(() => {
        const homePath = 'http://localhost:3000/' || 'https://1st-mgt.com' || 'https://1st-mgt.vercel.app/';
        if (window.location.href === homePath) {
            setIsHome(true);
            setMenuOpen(true);
          } else {
            setIsHome(false);
            setMenuOpen(false);
          }
          
    }, []);

    return (
        <>
            <header className='header'>
                <div className='left-column'>
                    <h1><a href='/'>Logo</a></h1>
                    {!isHome ? <h1 onClick={updateMenuOpen}>Menu</h1> : null}
                </div>
                <div className='right-column'>
                    <h1>Search</h1>
                </div>
            </header>
            <Menu data={menuOpen} updateMenuOpen={updateMenuOpen}/>
        </>
    )
}

export default Header;