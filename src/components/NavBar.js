import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      <nav id='navbar'>
        <div className='my-container'>
          <h1 className='logo'>
            <NavLink to='/'>PIRATES!</NavLink>
          </h1>
          <ul>
            <li>
            <NavLink exact to='/' activeClassName='selected'>Home</NavLink>
            </li>
            <li>
            <NavLink exact to='/view-pirates' activeClassName='selected'>View Pirates</NavLink>
            </li>
            <li>
            <NavLink exact to='/add' activeClassName='selected'>Add Pirate</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
