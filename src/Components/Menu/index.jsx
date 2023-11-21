import { useEffect, useState } from 'react';
import { TfiClose } from 'react-icons/tfi';
import './index.css';

import DEFAULT_IMAGE_1 from '../../Assets/DefaultHomePageMedia/1.jpeg';
import DEFAULT_IMAGE_2 from '../../Assets/DefaultHomePageMedia/2.jpg';
import DEFAULT_IMAGE_3 from '../../Assets/DefaultHomePageMedia/3.jpg';
import DEFAULT_IMAGE_4 from '../../Assets/DefaultHomePageMedia/4.jpg';
import DEFAULT_IMAGE_5 from '../../Assets/DefaultHomePageMedia/5.jpg';

const Menu = ({ data, updateMenuOpen }) => {
    const [isHome, setIsHome] = useState(null);

    const backgrounImageUrls = [
        DEFAULT_IMAGE_1,
        DEFAULT_IMAGE_2,
        DEFAULT_IMAGE_3,
        DEFAULT_IMAGE_4,
        DEFAULT_IMAGE_5
    ];

    useEffect(() => {
        const homePath = 'http://localhost:3000/' || 'https://1st-mgt.com' || 'https://1st-mgt.vercel.app/';
        window.location.href === homePath ? setIsHome(true) : setIsHome(false);
    }, []);

    const handleDropdownToggle = (e) => {
        console.log(e.target);

        if (e.target.classList.contains('main-navigation-item') && !e.target.nextSibling.classList.contains('show')) {
            e.target.nextSibling.classList.add('show');
        } else if (e.target.classList.contains('main-navigation-item') && e.target.nextSibling.classList.contains('show')) {
            e.target.nextSibling.classList.remove('show');
        }
    }

    const handleBackgroundImageChange = (e) => {
        const backgroundImage = document.getElementsByClassName('background-image');
        console.log(e.target.innerText.toLowerCase())

        if (e.target.innerText.toLowerCase() === '1st mgt') {
            backgroundImage[0].src = DEFAULT_IMAGE_1;
        } else if (e.target.innerText.toLowerCase() === 'girls club') {
            backgroundImage[0].src = DEFAULT_IMAGE_2;
        } else if (e.target.innerText.toLowerCase() === 'boys squad') {
            backgroundImage[0].src = DEFAULT_IMAGE_3;
        } else if (e.target.innerText.toLowerCase() === 'news') {
            backgroundImage[0].src = DEFAULT_IMAGE_4;
        } else if (e.target.innerText.toLowerCase() === 'contact') {
            backgroundImage[0].src = DEFAULT_IMAGE_5;
        }
    }

    return (
        <>
            <nav className={`navigation ${data ? 'showMenu' : 'hideMenu'}`}>
                <div className='left-column'>
                    <ul className='main-navigation'>
                        <li className='main-navigation-item' onMouseEnter={(e) => handleBackgroundImageChange(e)}>
                            <a href='/1st-mgt'>1st mgt</a>
                        </li>
                        <li className='main-item-with-dropdown'
                            onMouseEnter={(e) => {
                                handleDropdownToggle(e);
                                handleBackgroundImageChange(e);
                            }}
                            onMouseLeave={(e) => handleDropdownToggle(e)}
                        >
                            <p className='main-navigation-item'>
                                girls club
                            </p>
                            <ul className='sub-items'>
                               <li>In town</li>
                               <li>Upcoming</li>
                               <li>Out of town</li>
                            </ul>
                        </li>
                        <li className='main-item-with-dropdown'
                            onMouseEnter={(e) => {
                                handleDropdownToggle(e);
                                handleBackgroundImageChange(e);
                            }}
                            onMouseLeave={(e) => handleDropdownToggle(e)}
                        >
                            <p className='main-navigation-item'>boys squad</p>
                            <ul className='sub-items'>
                               <li>In town</li>
                               <li>Upcoming</li>
                               <li>Out of town</li> 
                            </ul>
                        </li>
                        <li className='main-navigation-item' onMouseEnter={(e) => handleBackgroundImageChange(e)}>
                            <a href='/news'>News</a>
                        </li>
                        <li className='main-navigation-item' onMouseEnter={(e) => handleBackgroundImageChange(e)}>
                            <a href='/contact'>Contact</a>
                        </li>
                    </ul>
                    <ul className='socials-navigation'>
                        <li><a href='https://www.instagram.com/1stmgt'>@1stmgt</a></li>
                        <li><a href='https://www.instagram.com/_dreamgirlsclub/'>@_dreamgirlsclub</a></li>
                        <li><a href='@_dreamgirlsclub'>@naughtyboysquad</a></li>
                    </ul>
                </div>
                <div className='right-column'>
                    <TfiClose size={40} onClick={updateMenuOpen} className={`close-menu ${isHome ? 'hideClose' : 'showClose'}`}/>
                    <h2>#shop</h2>
                </div>
            </nav>
        </>
    )
}

export default Menu;