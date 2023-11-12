import { useState } from 'react';
import './index.css';

import Menu from '../Menu';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const updateMenuOpen = () => {
        setMenuOpen(!menuOpen);
    }
    return (
        <>
            <header className='header'>
                <div className='left-column'>
                    <h1><a href='/'>Logo</a></h1>
                    <h1 onClick={updateMenuOpen}>Menu</h1>
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