import { TfiClose } from 'react-icons/tfi';
import './index.css';

const Menu = ({ data, updateMenuOpen }) => {
    const handleDropdownToggle = (e) => {
        console.log(e.target);

        if (e.target.classList.contains('main-item-with-dropdown') && 
            !e.target.children[0].classList.contains('show')) {
            e.target.children[0].classList.add('show');
        } else if (e.target.classList.contains('main-item-with-dropdown') &&
                e.target.children[0].classList.contains('show')){
            e.target.children[0].classList.remove('show');
        }
    }

    console.log(updateMenuOpen)

    return (
        <>
            <nav className={`navigation ${data ? 'showMenu' : 'hideMenu'}`}>
                <div className='left-column'>
                    <ul className='main-navigation'>
                        <li><a href='/1st-mgt'>1st mgt</a></li>
                        <li className='main-item-with-dropdown' onClick={(e) => handleDropdownToggle(e)}>
                            girls club
                            <ul className='sub-items'>
                               <li>In town</li>
                               <li>Upcoming</li>
                               <li>Out of town</li> 
                            </ul>
                        </li>
                        <li className='main-item-with-dropdown' onClick={(e) => handleDropdownToggle(e)}>
                            boys squad
                            <ul className='sub-items'>
                               <li>In town</li>
                               <li>Upcoming</li>
                               <li>Out of town</li> 
                            </ul>
                        </li>
                        <li><a href='/news'>News</a></li>
                        <li><a href='/contact'>Contact</a></li>
                    </ul>
                    <ul className='socials-navigation'>
                        <li>@1stmgt</li>
                        <li>@_dreamgirlsclub</li>
                        <li>@naughtyboysquad</li>
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