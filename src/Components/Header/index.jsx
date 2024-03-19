import { useState, useEffect } from 'react';
import './index.css';
import HEADER_LOGO from '../../Assets/Logos/entry_gif.gif';
import Menu from '../Menu';
import { Search } from '../Search';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(true);
    const [isHome, setIsHome] = useState(false);

    const updateMenuOpen = () => {
        setMenuOpen(!menuOpen);
    }

    useEffect(() => {
        const homePath = 'http://localhost:3000/';
        const secondaryHomePath = 'https://1st-mgt.vercel.app/';

        if (window.location.href === homePath || window.location.href === secondaryHomePath) {
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
                    <h1>
                        <a href='/'>
                            <img src={HEADER_LOGO} />
                        </a>
                    </h1>
                    {!isHome && <h1 onClick={updateMenuOpen}>Menu</h1>}
                </div>
                <div className='right-column'>
                    <h1>Search</h1>
                    <Search />
                </div>
            </header>
            <Menu menuOpen={menuOpen} updateMenuOpen={updateMenuOpen}/>
        </>
    )
}

export default Header;