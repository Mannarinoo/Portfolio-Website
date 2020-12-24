import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import gitlogo from '../images/git-logo.png'
import linkedinlogo from '../images/linkedin-logo.png'
// import Dropdown from './Dropdown'
function Navbar() {
  const [click, setClick] = useState(false);
  // const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  // const onMouseEnter = () => {
  //   if (window.innerWidth < 960) {
  //     setDropdown(false);
  //   } else {
  //     setDropdown(true);
  //   }
  // };

  // const onMouseLeave = () => {
  //   if (window.innerWidth < 960) {
  //     setDropdown(false);
  //   } else {
  //     setDropdown(false);
  //   }
  // };

  return (
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          <i class="fab fa-artstation"></i>
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li
            className='nav-item'
            // onMouseEnter={onMouseEnter}
            // onMouseLeave={onMouseLeave}
          >
            <Link
              to='/projects'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Projects 
            </Link>
            {/* {dropdown && <Dropdown />} */}
          </li>
          <li className='nav-item'>
            <Link
              to='/resume'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Resume
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/contact'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Contact
            </Link>
          </li>
        </ul>
        <div className='logo-container'>
          <a href='https://github.com/Mannarinoo'>
        <img src={gitlogo} alt=''></img>
        </a>
        <a href='https://www.linkedin.com/in/joseph-mannarino-2b2b01192/'>
        <img src={linkedinlogo} alt=''></img>
        </a>
        </div>
      </nav>
  );
}

export default Navbar;