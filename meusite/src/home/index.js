import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

function Home() {
  return (   
    <div>  
        <h1>Home</h1>
        <Link to="/sobre">Sobre</Link>
        <Link to="/contato"> Contato</Link>
    </div>
  )
}

export default Home;
