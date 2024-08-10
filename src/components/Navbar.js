import React, { useState, useEffect } from 'react';
import './Navbar.css';
import menuIcon from '../assets/Icon.svg';
import logomarkIcon from '../assets/logomark.svg';
import searchIcon from '../assets/search.svg';
import appGridIcon from '../assets/app-grid.svg';
import moonIcon from '../assets/ri-moon-clear-line.svg';
import sunIcon from '../assets/Vector.svg';
import appGridIconDark from '../assets/appGridIconDark.svg';

const Navbar = ({ onMenuClick, onGridToggle }) => {
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem('theme') === 'dark';
    });

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div className={`navbar ${darkMode ? 'dark' : ''}`}>
            <div className="navbar__left">
                <img
                    src={menuIcon}
                    alt="Menu icon"
                    className="navbar__icon"
                    onClick={onMenuClick}
                    style={{ cursor: 'pointer' }}
                />
                <div className="navbar__logo">
                    <img src={logomarkIcon} alt="Logomark icon" className="navbar__text" />
                </div>
            </div>
            <div className="navbar__right">
                <img src={searchIcon} alt="Search icon" className="navbar__icon" />
                <img
                    src={appGridIcon}
                    alt="App grid icon"
                    className="navbar__icon"
                    onClick={onGridToggle}
                    style={{ cursor: 'pointer' }}
                />
                <img
                    src={darkMode ? sunIcon : moonIcon}
                    alt="Dark Mode icon"
                    className="navbar__icon"
                    onClick={toggleDarkMode}
                    style={{ cursor: 'pointer' }}
                />
            </div>
        </div>
    );
};

export default Navbar;
