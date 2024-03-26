import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg'
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="header">
            <img src={logo} alt="" />
            <div>
            <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')} >Shop</NavLink>
            <NavLink to="/Order">Order</NavLink>
            <NavLink to="/Inventory">Inventory</NavLink>
            <NavLink to="/login">login</NavLink>
            </div>
        </nav>
    );
};

export default Header;