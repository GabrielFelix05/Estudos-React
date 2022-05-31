import React, { useEffect, useState } from 'react'
import './styles.css'

function App() {
  const [nutri, setNutri] = useState([])

  useEffect(() => {

    function loadAPI() {
      let url = "https://sujeitoprogramador.com/rn-api/?api=posts"
      fetch(url)
      .then((r) => r.json())
      .then((json) => {
        setNutri(json)
      })
    }

    loadAPI()
  },[])

  return (   
    <div className='container'>
        <header>
          <strong>React Nutri</strong>
        </header>

          {nutri.map((item) => (
      
            <article key={item.id} className="post">
              <strong className='titulo'>{item.titulo}</strong>
              <img src={item.capa} alt={item.titulo} className="capa"/>
              <p className='subtitulo'>
                {item.subtitulo}
              </p>
              <a className='botao'>Acessar</a>
            </article>
          
          ))}
    </div>
  )
}

export default App;