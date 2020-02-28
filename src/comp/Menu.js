import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = props => {
  const trigger = () => props.menuOpen(false);

  return (
    <div
      className={props.overlayOn ? 'menu overlay' : 'menu'}
      onKeyDown={trigger}
      tabIndex='0'
    >
      <div className='menu-x' onClick={trigger}>
        &times;
      </div>
      <li>
        <NavLink activeClassName='menu-item' to='about'>
          About Me
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName='menu-item' to='portfolio'>
          Portfolio
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName='menu-item' to='contact'>
          Contact
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName='menu-item' to='gallery'>
          Gallery
        </NavLink>
      </li>
    </div>
  );
};

export default Menu;
