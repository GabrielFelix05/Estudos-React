import React, {useState} from "react";
import firebase from '../../Firebase'

export default function Home(){
    const[titulo, setTitulo] = useState('')
    const[autor, setAutor] = useState('')

    async function handleAdd(){
        await firebase.firestore().collection("posts")
        .doc('12345')
        .set({
            titulo: titulo, 
            Autor: autor
        })
        .then(() => {
            console.log("Dados cadastrados com sucesso!")
        })
        .catch((error) => {
            console.log("Gerou algum erro!" + error)
        })
    }

    return(
        <div>
            <h1>Firebase</h1><br/>

            <label>Titulo:</label>
            <textarea type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)}/>

            <label>Autor:</label>
            <input type="text" value={autor} onChange={(e) => setAutor(e.target.value)}/>

            <button onClick={handleAdd}>Cadastrar</button>
        </div>   
    )
}