import { useEffect, useState } from 'react';
import { TfiClose } from 'react-icons/tfi';
import './index.css';

import DEFAULT_IMAGE_1 from '../../Assets/DefaultHomePageMedia/1.jpeg';
import DEFAULT_IMAGE_2 from '../../Assets/DefaultHomePageMedia/3.jpg';
import DEFAULT_IMAGE_3 from '../../Assets/DefaultHomePageMedia/2.jpg';
import DEFAULT_IMAGE_4 from '../../Assets/DefaultHomePageMedia/4.jpg';
import DEFAULT_IMAGE_5 from '../../Assets/DefaultHomePageMedia/5.jpg';

const Menu = ({ menuOpen, updateMenuOpen }) => {
    const [isHome, setIsHome] = useState(null);
    const [width] = useState(window.innerWidth);
    const [girlsDropdownVisible, setGirlsDropdownVisible] = useState(false);
    const [boysDropdownVisible, setBoysDropdownVisible] = useState(false);

    useEffect(() => {
        const homePath = 'http://localhost:3000/';
        const secondaryHomePath = 'https://1st-mgt.vercel.app/';
        setIsHome(window.location.href === homePath || window.location.href === secondaryHomePath);
    }, []);

    const handleDropdownEnter = (e) => {
        if (e.target.id === 'girls-club-menu' || e.target.classList.contains('girls-club-li')) {
            setGirlsDropdownVisible(true);
        }
        
        if (e.target.id === 'boys-squad-menu' || e.target.classList.contains('boys-squad-li')) {
            setBoysDropdownVisible(true);
        }
    }

    const handleDropdownLeave = (e) => {
        if (!e.relatedTarget || (e.relatedTarget.id !== 'girls-club-menu' && !e.relatedTarget.classList.contains('girls-club-li'))) {
            setGirlsDropdownVisible(false);
        }
        
        if (!e.relatedTarget || (e.relatedTarget.id !== 'boys-squad-menu' && !e.relatedTarget.classList.contains('boys-squad-li'))) {
            setBoysDropdownVisible(false);
        }
    }

    const handleBackgroundImageChange = (e) => {
        const homeContainer = document.getElementsByClassName('home-page')[0];
        const backgroundImage = document.getElementsByClassName('background-image');
        
        if (isHome) {
            homeContainer.classList.remove('with-gradient');
            switch (e.target.innerText.toLowerCase()) {
                case '1st mgt':
                    backgroundImage[0].src = DEFAULT_IMAGE_1;
                    break;
                case 'girls club':
                    backgroundImage[0].src = DEFAULT_IMAGE_2;
                    break;
                case 'boys squad':
                    backgroundImage[0].src = DEFAULT_IMAGE_3;
                    break;
                case 'news':
                    backgroundImage[0].src = DEFAULT_IMAGE_4;
                    break;
                case 'contact':
                    backgroundImage[0].src = DEFAULT_IMAGE_5;
                    break;
                default:
                    break;
            }
        }
    }

    const handleDropdownClick = (e) => {
        if (e.target.id === 'girls-club-menu') {
            setBoysDropdownVisible(false);
            setGirlsDropdownVisible(!girlsDropdownVisible);
        } else if (e.target.id === 'boys-squad-menu') {
            setGirlsDropdownVisible(false);
            setBoysDropdownVisible(!boysDropdownVisible);
        }
    }

    return (
        <>
            <nav className={`navigation ${menuOpen ? 'showMenu' : 'hideMenu'} ${isHome ? 'pink-bg' : 'gradient'}`}>
                <div className='left-column'>
                    <ul 
                        className='main-navigation'
                        onMouseEnter={(e) => handleDropdownEnter(e)}
                        onMouseLeave={(e) => handleDropdownLeave(e)}
                    >
                        <li className='main-navigation-item' onMouseEnter={(e) => handleBackgroundImageChange(e)}>
                            <a id='first-mgt-li' href='/1st-mgt'>1st mgt</a>
                        </li>
                        <li className='main-item-with-dropdown' onMouseEnter={(e) => {handleBackgroundImageChange(e)}}>
                            <p 
                                id='girls-club-menu' 
                                className='main-navigation-item' 
                                onMouseEnter={(e) => handleDropdownEnter(e)}
                                onMouseLeave={(e) => handleDropdownLeave(e)}
                                onClick={width <= 768 ? (e) => handleDropdownClick(e) : null}
                            >girls club</p>
                            <ul 
                                id='girls-club-dropdown' 
                                className={`sub-items ${girlsDropdownVisible ? 'show' : ''}`}
                                onMouseEnter={(e) => handleDropdownEnter(e)}
                                onMouseLeave={(e) => handleDropdownLeave(e)}
                            >
                               <li><a className='girls-club-li' href='/girls-club/in-town'> In town </a></li>
                               <li><a className='girls-club-li' href='/girls-club/upcoming'>Upcoming</a></li>
                               <li><a className='girls-club-li' href='/girls-club/out-of-town'>Out of town</a></li>
                            </ul>
                        </li>
                        <li className='main-item-with-dropdown' onMouseEnter={(e) => {handleBackgroundImageChange(e)}}>
                            <p 
                                id='boys-squad-menu' 
                                className='main-navigation-item' 
                                onMouseEnter={(e) => handleDropdownEnter(e)} 
                                onMouseLeave={(e) => handleDropdownLeave(e)}
                                onClick={width <= 768 ? (e) => handleDropdownClick(e) : null}
                            >boys squad</p>
                            <ul 
                                id='boys-squad-dropdown' 
                                className={`sub-items ${boysDropdownVisible ? 'show' : ''}`}
                                onMouseEnter={(e) => handleDropdownEnter(e)} 
                                onMouseLeave={(e) => handleDropdownLeave(e)}
                            >
                               <li><a className='boys-squad-li' href='/boys-squad/in-town'> In town </a></li>
                               <li><a className='boys-squad-li' href='/boys-squad/upcoming'> Upcoming </a></li>
                               <li><a className='boys-squad-li' href='/boys-squad/out-of-town'>Out of town</a></li> 
                            </ul>
                        </li>
                        <li id='news-li' className='main-navigation-item' onMouseEnter={(e) => handleBackgroundImageChange(e)}>
                            <a href='/news'>News</a> 
                        </li>
                        <li className='main-navigation-item' onMouseEnter={(e) => handleBackgroundImageChange(e)}>
                            <a id='contact-li' href='/contact'>Contact</a>
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
