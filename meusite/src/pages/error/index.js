import React from 'react'
import { Link } from 'react-router-dom';

function Error() {
  return (   
    <div>
        <h2>OPSS, essa pag não existe!</h2>
        <Link to="/">Voltar para pag principal</Link>
    </div>
  )
}

export default Error;