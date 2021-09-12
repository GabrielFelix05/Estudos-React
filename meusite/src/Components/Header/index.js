import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

function Header() {
  return (   
    <div className="containerHeader">
        <strong>Filmaria</strong>
        <Link to="/">Salvos</Link>
    </div>
  )
}

export default Header