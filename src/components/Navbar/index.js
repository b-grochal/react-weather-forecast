import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header>
            <nav className='navbar'>
                <div className='navbar__container'>
                    <Link to='/' className='navbar-logo'>
                        Weather Forecast
                    </Link>
                    <ul className='navbar__menu'>
                        <li className='navbar__menu-item'>
                            <Link to='/' className='navbar-logo'>
                                Home
                            </Link>
                        </li>
                        <li className='navbar__menu-item'>
                            <Link to='/city-forecast' className='navbar-logo'>
                                City forecast
                            </Link>
                        </li>
                        <li className='navbar__menu-item'>
                            <Link to='/location-forecast' className='navbar-logo'>
                                Location forecast
                            </Link>
                        </li>
                        <li className='navbar__menu-item'>
                            <Link to='/about' className='navbar-logo'>
                                About
                            </Link>
                        </li>
                    </ul>
                </div>
                Henlo
            </nav>
        </header>

    )
};

export default Navbar;