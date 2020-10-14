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
                            <Link to='/' className='navbar-logo'>
                                Forecast for city
                            </Link>
                        </li>
                        <li className='navbar__menu-item'>
                            <Link to='/' className='navbar-logo'>
                                Forecast for location
                            </Link>
                        </li>
                        <li className='navbar__menu-item'>
                            <Link to='/' className='navbar-logo'>
                                Forecast for location
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