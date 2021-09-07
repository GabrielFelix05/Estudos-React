import React, {useState, useEffect} from 'react'

function App() {
  const [tarefas, setTarefas] = useState([])

  const[input, setInput] = useState()

  function handleAdd(){
    setTarefas([...tarefas, input])
  }

  useEffect(() => {
    const tarefaStorange = localStorage.getItem('tarefas')
    if(tarefaStorange){
      setTarefas(JSON.parse(tarefaStorange))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('tarefas', JSON.stringify(tarefas))
  }, [tarefas])

  return (   
    <div>
      <ul>
        {tarefas.map(tarefa => (
          <li key={tarefa}>{tarefa}</li>
        ))}
      </ul>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
      <button type="button" onClick={handleAdd}>Adicionar</button>
    </div>
  )
}

export default App;
