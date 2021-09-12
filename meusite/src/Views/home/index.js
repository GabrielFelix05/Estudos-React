import React, {useState, useEffect} from 'react'
import './styles.css'
import { Link } from 'react-router-dom'

function Home() {
  const[data, setData] = useState([])

  useEffect(() => {
    function api(){
      let url = "https://sujeitoprogramador.com/r-api/?api=filmes/"
      fetch(url)
      .then((r) => r.json())
      .then((json) => {
        setData(json)
      })
    }
    api()
  }, [])
  return (   
    <div className="containerHome">  
        {
          data.map((item) => (
            <div key={item.id} className="containerData">
              <strong>{item.nome}</strong>
              <img src={item.foto} alt={item.nome}/>
              <Link to={`/${item.id}`}>Acessar</Link>
            </div>
          ))
        }
    </div>
  )
}

export default Home;
