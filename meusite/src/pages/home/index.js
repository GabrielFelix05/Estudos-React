import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (   
    <div>
       <h1>Pag Home</h1>
       <Link to="/sobre">Pag Sobre</Link> 
    </div>
  )
}

export default Home;