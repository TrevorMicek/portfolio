import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import NavBarItem from './NavBarItem';
import xImg from '../../Images/X.png'
//X graphic with drop down menu
const NavBarItemMobile = styled(NavBarItem)`
    @media only screen and (min-device-width: 320px) {
        display: inline-block;
        font-size: .9em;
        left: 6vw;
        margin: 0;
        margin-top: 1.75vh;
        min-width: 80%;
        padding: 1.75vh 4vw;
        top: 3vh;

        :active {
        -webkit-box-shadow: inset 0px 0px 5px lightgrey;
        -moz-box-shadow: inset 0px 0px 5px lightgrey;
        box-shadow: inset 0px 0px 5px lightgrey;
        top: 3.25vh;
        }
    }
`;
const XStyles = styled.img`
    cursor: pointer;
    display: block;
    height: 4vh;
    margin-bottom: 10vh;
    position: fixed;
    right: 10vw;
    top: 3vh;
    width: 5vw;
    -webkit-transition-y: transform .6s ease-out;
    -moz-transition: transform .6s ease-out;
    -o-transition: transform .6s ease-out;
    -ms-transition: transform .6s ease-out;
    transition: transform .6s ease-out;
    z-index: 11;
    
    @media only screen and (max-device-width: 560px) {
        display: inline-block;
    };
    @media only screen and (min-device-width: 768px) and (max-device-width: 1060px) {
        display: none;
    };
`;
const DropDownMenu = () => (
    <>
        <XStyles src={xImg} />
        <NavLink to="/">
            <NavBarItemMobile>Home</NavBarItemMobile>
        </NavLink>
        <NavLink to="/projects">
            <NavBarItemMobile>Projects</NavBarItemMobile>
        </NavLink>
        <NavLink to="/about">
            <NavBarItemMobile>About</NavBarItemMobile>
        </NavLink>
        <NavLink to="/contact">
            <NavBarItemMobile>Contact</NavBarItemMobile>
        </NavLink> 
        <NavLink to="/eCommerce">
            <NavBarItemMobile>eCommerce</NavBarItemMobile>
        </NavLink> 
    </>
)
export default DropDownMenu;