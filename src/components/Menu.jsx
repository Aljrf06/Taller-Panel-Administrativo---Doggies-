import React from 'react'
import { NavLink } from 'react-router-dom'

const Menu = () => {
  return (
    <div className="collapse navbar-collapse">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link" to="/clientes">Clientes</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/proveedor">Proveedor</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/usuarios">Usuarios</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/logout">Logout</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Menu;