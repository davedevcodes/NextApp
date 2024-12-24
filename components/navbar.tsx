"use client";

import React, { useEffect, useState } from "react";
// import React from 'react';
import Link from 'next/link';
import './styles/navBar.css';
import {
     FaCog, FaMoon  ,FaUser, FaSun
 } from 'react-icons/fa';
 import { useTheme } from "../context/ThemeContext";

 interface NavLinksProps {
  linkId: string;  // The id that will be dynamically assigned
}

const NavBar = () => {

    const { darkMode, toggleTheme } = useTheme();

    const [isDropdownVisible, setIsDropdownVisible] = useState(false); // Add this line

  const toggleDropdown = () => {
    setIsDropdownVisible((prev) => !prev); // Toggle visibility of the dropdown
  };

  return (
    <div className="Nav">
        <div className="logo">
            <h1>
                XDASH
            </h1>
        </div>
        <div className="navLinks">
            <Link href="/Home" className="Links" id="home">
            Home
            </Link>
            <Link href="/RequestPage"
            className="Links"
             id="dashboard"
            >
            Quotes
            </Link>
            <Link href="/Bills" className="Links"
             id="bill"
            >Bills</Link>
            <Link href="/Orders" className="Links"
             id="orders"
            >Orders</Link>
        </div>
        <div className="navRight">
            <Link href="" className='setting'>
                <FaCog />
                Setting
            </Link>
            <button onClick={toggleTheme} className="switch">
             {darkMode ? <FaSun /> : <FaMoon />}
            </button>
            <div className="acc-container">
        <button className="acc" onClick={toggleDropdown}>
          <FaUser />
        </button>
        {isDropdownVisible && (
          <div className="dropdown-menu">
            <a href="/profile" className="dropdown-item">Profile</a>
            <a href="/settings" className="dropdown-item">Settings</a>
            <a href="/" className="dropdown-item">Logout</a>
          </div>
        )}
      </div>
        </div>
    </div>
  )
}

export default NavBar