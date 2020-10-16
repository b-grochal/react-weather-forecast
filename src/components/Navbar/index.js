import React, { useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [hamburgerMenuVisibility, setHamburgerMenuVisibility] = useState(false);

    const handleHamburgerMenuIconClick = () => setHamburgerMenuVisibility(!hamburgerMenuVisibility);
    const closeHamburgerMenu = () => setHamburgerMenuVisibility(false);

    return (
        <header>
            <nav className='navbar'>
                <div className='navbar__container'>
                    <Link to='/' className='navbar__logo' onClick={closeHamburgerMenu}>
                        Weather Forecast
                    </Link>
                    <div className='navbar__hamburger-menu-icon' onClick={handleHamburgerMenuIconClick}>
                        <i className={hamburgerMenuVisibility ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={hamburgerMenuVisibility ? 'navbar__menu hamburger-menu' : 'navbar__menu'}>
                        <li className='navbar__menu-item'>
                            <Link to='/' className='navbar__menu-item-link' onClick={closeHamburgerMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='navbar__menu-item'>
                            <Link to='/city-forecast' className='navbar__menu-item-link' onClick={closeHamburgerMenu}>
                                City forecast
                            </Link>
                        </li>
                        <li className='navbar__menu-item'>
                            <Link to='/location-forecast' className='navbar__menu-item-link' onClick={closeHamburgerMenu}>
                                Location forecast
                            </Link>
                        </li>
                        <li className='navbar__menu-item'>
                            <Link to='/about' className='navbar__menu-item-link' onClick={closeHamburgerMenu}>
                                About
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>

    )
};

export default Navbar;