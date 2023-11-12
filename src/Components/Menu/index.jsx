import { TfiClose } from 'react-icons/tfi';
import './index.css';

const Menu = ({ data, updateMenuOpen }) => {
    const handleDropdownToggle = (e) => {
        console.log(e.target);

        if (e.target.classList.contains('main-navigation-item') && 
            !e.target.nextSibling.classList.contains('show')) {
            e.target.nextSibling.classList.add('show');
        } else if (e.target.classList.contains('main-navigation-item') &&
                e.target.nextSibling.classList.contains('show')) {
            e.target.nextSibling.classList.remove('show');
        }
    }

    console.log(updateMenuOpen)

    return (
        <>
            <nav className={`navigation ${data ? 'showMenu' : 'hideMenu'}`}>
                <div className='left-column'>
                    <ul className='main-navigation'>
                        <li className='main-navigation-item'><a href='/1st-mgt'>1st mgt</a></li>
                        <li className='main-item-with-dropdown'>
                            <p className='main-navigation-item' onClick={(e) => handleDropdownToggle(e)}>girls club</p>
                            <ul className='sub-items'>
                               <li>In town</li>
                               <li>Upcoming</li>
                               <li>Out of town</li> 
                            </ul>
                        </li>
                        <li className='main-item-with-dropdown'>
                            <p className='main-navigation-item' onClick={(e) => handleDropdownToggle(e)}>boys squad</p>
                            <ul className='sub-items'>
                               <li>In town</li>
                               <li>Upcoming</li>
                               <li>Out of town</li> 
                            </ul>
                        </li>
                        <li className='main-navigation-item'><a href='/news'>News</a></li>
                        <li className='main-navigation-item'><a href='/contact'>Contact</a></li>
                    </ul>
                    <ul className='socials-navigation'>
                        <li><a href='https://www.instagram.com/1stmgt'>@1stmgt</a></li>
                        <li><a href='https://www.instagram.com/_dreamgirlsclub/'>@_dreamgirlsclub</a></li>
                        <li><a href='@_dreamgirlsclub'>@naughtyboysquad</a></li>
                    </ul>
                </div>
                <div className='right-column'>
                    <TfiClose size={40} onClick={updateMenuOpen} className='close-menu'/>
                    <h2>#shop</h2>
                </div>
            </nav>
        </>
    )
}

export default Menu;