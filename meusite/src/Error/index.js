import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';

function Erro() {
  return (   
    <div>
      <h1>Essa Página não existe!</h1>
      <Link to="/">Voltar para Home</Link>
    </div>
  )
}

export default Erro;
