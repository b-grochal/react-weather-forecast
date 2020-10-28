import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [hamburgerMenuVisibility, setHamburgerMenuVisibility] = useState(false);

    const handleHamburgerMenuIconClick = () => setHamburgerMenuVisibility(!hamburgerMenuVisibility);
    const closeHamburgerMenu = () => setHamburgerMenuVisibility(false);

    return (
        <header className='header'>
            <nav className='header__navbar'>
                <div className='header__navbar-container'>
                    <Link to='/' className='header__navbar-logo' onClick={closeHamburgerMenu}>
                        Weather Forecast
                    </Link>
                    <div className='header__navbar-hamburger-menu-icon' onClick={handleHamburgerMenuIconClick}>
                        <i className={hamburgerMenuVisibility ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={hamburgerMenuVisibility ? 'header__navbar-menu hamburger-menu' : 'header__navbar-menu'}>
                        <li className='header__navbar-menu-item'>
                            <Link to='/' className='header__navbar-menu-item-link' onClick={closeHamburgerMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='header__navbar-menu-item'>
                            <Link to='/city-forecast' className='header__navbar-menu-item-link' onClick={closeHamburgerMenu}>
                                City forecast
                            </Link>
                        </li>
                        <li className='header__navbar-menu-item'>
                            <Link to='/location-forecast' className='header__navbar-menu-item-link' onClick={closeHamburgerMenu}>
                                Location forecast
                            </Link>
                        </li>
                        <li className='header__navbar-menu-item'>
                            <Link to='/about' className='header__navbar-menu-item-link' onClick={closeHamburgerMenu}>
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