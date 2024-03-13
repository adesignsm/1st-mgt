import { useEffect, useState } from 'react';
import { TfiClose } from 'react-icons/tfi';
import './index.css';

import DEFAULT_IMAGE_1 from '../../Assets/DefaultHomePageMedia/1.jpeg';
import DEFAULT_IMAGE_2 from '../../Assets/DefaultHomePageMedia/2.jpg';
import DEFAULT_IMAGE_3 from '../../Assets/DefaultHomePageMedia/3.jpg';
import DEFAULT_IMAGE_4 from '../../Assets/DefaultHomePageMedia/4.jpg';
import DEFAULT_IMAGE_5 from '../../Assets/DefaultHomePageMedia/5.jpg';

const Menu = ({ menuOpen, updateMenuOpen }) => {
    const [isHome, setIsHome] = useState(null);
    const [width] = useState(window.innerWidth);

    useEffect(() => {
        const homePath = 'http://localhost:3000/';
        const secondaryHomePath = 'https://1st-mgt.vercel.app/';
        (window.location.href === homePath || window.location.href === secondaryHomePath)
         ? setIsHome(true) 
         : setIsHome(false);
    }, [isHome]);

    const handleDropdownEnter = (e) => {
        if (e.target.id === 'girls-club-menu' || e.target.classList.contains('girls-club-li')) {
            document.getElementById('girls-club-dropdown').classList.add('show');
        }
        
        if (e.target.id === 'boys-squad-menu' || e.target.classList.contains('boys-squad-li')) {
            document.getElementById('boys-squad-dropdown').classList.add('show');
        }
    }

    const handleDropdownLeave = (e) => {
        if (e.target.id !== 'girls-club-menu') {
            document.getElementById('girls-club-dropdown').classList.remove('show');
        }
        
        if (e.target.id !== 'boys-squad-menu') {
            document.getElementById('boys-squad-dropdown').classList.remove('show');
        }
    }

    const handleBackgroundImageChange = (e) => {
        const homeContainer = document.getElementsByClassName('home-page')[0];
        const backgroundImage = document.getElementsByClassName('background-image');
        
        if (isHome) {
            homeContainer.classList.remove('with-gradient')
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
    }

    const handleDropdownClick = (e) => {
        const girlsClubDropDown = document.getElementById('girls-club-dropdown');
        const boysSquadDropDown = document.getElementById('boys-squad-dropdown');

        if (e.target.id === 'girls-club-menu') {
            boysSquadDropDown.classList.remove('mobile-dropdown-show');

            if (girlsClubDropDown.classList.contains('mobile-dropdown-show')) {
                girlsClubDropDown.classList.remove('mobile-dropdown-show');
            } else {
                girlsClubDropDown.classList.add('mobile-dropdown-show');
            }
        } else if (e.target.id === 'boys-squad-menu') {
            girlsClubDropDown.classList.remove('mobile-dropdown-show');

            if (boysSquadDropDown.classList.contains('mobile-dropdown-show')) {
                boysSquadDropDown.classList.remove('mobile-dropdown-show');
            } else {
                boysSquadDropDown.classList.add('mobile-dropdown-show');
            }
        }
    }

    return (
        <>
            <nav className={`navigation 
                ${menuOpen ? 'showMenu' : 'hideMenu'}
                ${isHome ? 'pink-bg' : 'gradient'}
            `}>
                <div className='left-column'>
                    <ul className='main-navigation' onMouseEnter={(e) => handleDropdownEnter(e)} onMouseLeave={(e) => handleDropdownLeave(e)}>
                        <li className='main-navigation-item' onMouseEnter={(e) => handleBackgroundImageChange(e)}>
                            <a href='/1st-mgt'>1st mgt</a>
                        </li>
                        <li className='main-item-with-dropdown' 
                            onMouseEnter={(e) => {handleBackgroundImageChange(e)}}
                        >
                            <p 
                                id='girls-club-menu' 
                                className='main-navigation-item' 
                                onMouseEnter={(e) => handleDropdownEnter(e)}
                                onMouseLeave={(e) => handleDropdownLeave(e)}
                                onClick={width <= 768 ? (e) => handleDropdownClick(e) : null}
                                >girls club</p>
                            <ul 
                                id='girls-club-dropdown' className='sub-items'
                                onMouseEnter={(e) => handleDropdownEnter(e)}
                                onMouseLeave={(e) => handleDropdownLeave(e)}>
                               <li><a className='girls-club-li' href='/girls-club/in-town'> In town </a></li>
                               <li><a className='girls-club-li' href='/girls-club/upcoming'>Upcoming</a></li>
                               <li><a className='girls-club-li' href='/girls-club/out-of-town'>Out of town</a></li>
                            </ul>
                        </li>
                        <li className='main-item-with-dropdown'
                            onMouseEnter={(e) => {handleBackgroundImageChange(e)}}
                        >
                            <p 
                                id='boys-squad-menu' 
                                className='main-navigation-item' 
                                onMouseEnter={(e) => handleDropdownEnter(e)} 
                                onMouseLeave={(e) => handleDropdownLeave(e)}
                                onClick={width <= 768 ? (e) => handleDropdownClick(e) : null}
                            >boys squad</p>
                            <ul 
                                id='boys-squad-dropdown' 
                                className='sub-items'
                                onMouseEnter={(e) => handleDropdownEnter(e)} 
                                onMouseLeave={(e) => handleDropdownLeave(e)}
                            >
                               <li><a className='boys-squad-li' href='/boys-squad/in-town'> In town </a></li>
                               <li><a className='boys-squad-li' href='/boys-squad/upcoming'> Upcoming </a></li>
                               <li><a className='boys-squad-li' href='/boys-squad/out-of-town'>Out of town</a></li> 
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