import { useState, useEffect } from 'react';
import './Navbar.css';
import { NavLink } from "react-router-dom";
import HomeIcon from '../../assets/NavbarIcons/home.svg?react';
import AboutIcon from '../../assets/NavbarIcons/about.svg?react';
import UploadXrayIcon from '../../assets/NavbarIcons/upload-xray.svg?react';
import ContactUsIcon from '../../assets/NavbarIcons/contact-us.svg?react';
// import LoginIcon from '../../assets/NavbarIcons/login.svg?react';
// import UserIcon from '../../assets/NavbarIcons/user.svg?react';
import mainLogo from '../../assets/NavbarIcons/logo.png';
import DarkModeIcon from '../../assets/NavbarIcons/dark-mode.svg?react';
export default function Navbar() {
    // const [isOpen, setIsOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(true);
    // const [isLogged, setIsLogged] = useState(false);
    // const toggleMenu = () => {
    //     setIsOpen(!isOpen);
    // };
      useEffect(() => {
            document.body.classList.toggle("dark", darkMode);
        }, [darkMode]);
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };


    return (
        <>
        <nav>

            <NavLink to="/" className={({ isActive }) => (isActive ? "special nav-item" : "special nav-item")} >
                    <img src={mainLogo} alt="logo" id='navbarLogo'/>PneumoXpert
            </NavLink>

            <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "nav-item")}
            >
            <HomeIcon width="24" height="24"/>
            Home
            </NavLink>

            <NavLink
            to="/About"
            className={({ isActive }) => (isActive ? "active" : "nav-item")}
            >
            <AboutIcon width="24" height="24"/>
            About
            </NavLink>

            <NavLink
            to="/UploadXray"
            className={({ isActive }) => (isActive ? "active" : "nav-item")}
            >
            <UploadXrayIcon width="24" height="24"/>
            upload x-ray
            </NavLink>

            <NavLink
            to="/ContactUs"
            className={({ isActive }) => (isActive ? "active" : "nav-item")}
            >
            <ContactUsIcon width="24" height="24"/>
            contact us
            </NavLink>
            {/* <NavLink
            to="/LoginSignup"
            className={({ isActive }) => (isActive ? "active" : "nav-item")}
            >
            <LoginIcon width="24" height="24"/>
            login/signup
            </NavLink> */}

            {/* {isLogged && (
                <NavLink
                    to="/UserProfile"
                    className={({ isActive }) => (isActive ? "active" : "nav-item")}
                >
                    <UserIcon width="24" height="24"/>
                    user profile
            </NavLink>
            )} */}
            <DarkModeIcon width="24" height="24" onClick={toggleDarkMode} style={{ cursor: 'pointer' }} />
            
        </nav>    
      </>

            )}