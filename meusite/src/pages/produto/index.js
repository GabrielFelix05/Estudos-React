import React from 'react'
import { useParams } from 'react-router-dom';

function Produto() {

    const { id } = useParams()
  
    return (   
        <div>
            <h2>Meu produto!</h2>
            <p>ID: {id}</p>
        </div>
  )
}

export default Produto;