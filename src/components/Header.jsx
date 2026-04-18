import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../Imagenes/logo.png';
export const Header = () => {
  return (
    <NavLink className='navbar-brand d-flex align-items-center' to="/">
      <img
        src={logo}
        alt="Logo"
        width="100"
        height="50"
        className="d-inline-block align-middle me-2 rounded"
      />
      
    </NavLink>
  )
}