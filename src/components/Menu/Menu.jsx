import React from 'react'
import logo from '../../assets/logo.jpg'
import './menu.css'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <nav>
      <div className='logo__container'>
        <span><img src={logo} alt="" /></span>
        <span className='marca'>Malitolia</span>
      </div>
      <div className='menu__container'>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/productos">Productos</Link></li>
          <li><Link to="/">Contáctanos</Link></li>
          <li><Link to="/productos/post">Añadir Producto</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Menu