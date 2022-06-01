import React from 'react'
import './styles.css'
import { Link } from 'react-router-dom'


function Header() {
  return (   
    <header>
        <div>
            <h2>LOGO</h2>
        </div>
        <div className='menu'>
            <Link to='/'>Home</Link>
            <Link to="/sobre">Sobre</Link>
        </div>
    </header>
  )
}

export default Header;